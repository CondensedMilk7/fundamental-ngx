import {
    AfterViewInit,
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    ContentChild,
    ElementRef,
    Input,
    OnChanges,
    OnDestroy,
    OnInit,
    Optional,
    ViewChild,
    ViewEncapsulation
} from '@angular/core';
import { Router } from '@angular/router';
import { contentDensityObserverProviders } from '@fundamental-ngx/core/content-density';
import { Subscription } from 'rxjs';

import { applyCssClass, CssClassBuilder, FocusTrapService, RtlService } from '@fundamental-ngx/cdk/utils';

import { A11yModule } from '@angular/cdk/a11y';
import { CdkDrag, CdkDragHandle } from '@angular/cdk/drag-drop';
import { CdkScrollable } from '@angular/cdk/overlay';

import { ResizeDirective, ResizeHandleDirective } from '@fundamental-ngx/cdk/utils';
import { ScrollbarDirective } from '@fundamental-ngx/core/scrollbar';
import { DialogBase } from './base/dialog-base.class';
import { DialogBodyComponent } from './dialog-body/dialog-body.component';
import { DialogFooterComponent } from './dialog-footer/dialog-footer.component';
import { DialogHeaderComponent } from './dialog-header/dialog-header.component';
import { DialogTitleDirective } from './directives/dialog-title.directive';
import { DialogConfig } from './utils/dialog-config.class';
import { DialogRef } from './utils/dialog-ref.class';

/**
 * Dialog component.
 *
 * ```html
 * <fd-dialog>
 *      <fd-dialog-header></fd-dialog-header>
 *      <fd-dialog-body></fd-dialog-body>
 *      <fd-dialog-footer></fd-dialog-footer>
 * </fd-dialog>
 * ```
 */
@Component({
    selector: 'fd-dialog',
    styleUrl: 'dialog.component.scss',
    templateUrl: './dialog.component.html',
    host: {
        tabindex: '-1'
    },
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation: ViewEncapsulation.None,
    providers: [contentDensityObserverProviders({ alwaysAddModifiers: true })],
    standalone: true,
    imports: [
        ResizeDirective,
        A11yModule,
        CdkDrag,
        CdkScrollable,
        ScrollbarDirective,
        ResizeHandleDirective,
        CdkDragHandle
    ]
})
export class DialogComponent
    extends DialogBase<DialogRef>
    implements OnInit, OnChanges, AfterViewInit, OnDestroy, CssClassBuilder
{
    /** Custom classes */
    @Input()
    set class(userClass: string) {
        this._class = userClass;
    }

    /** DialogRef - should be used for Template based Dialog implementation */
    // eslint-disable-next-line @angular-eslint/no-input-rename
    @Input('dialogRef')
    set embeddedDialogRef(value: DialogRef) {
        this._dialogRef = value;
    }

    /** DialogConfig - should be used for Template based Dialog implementation */
    // eslint-disable-next-line @angular-eslint/no-input-rename
    @Input('dialogConfig')
    set embeddedDialogConfig(value: DialogConfig) {
        this.dialogConfig = value;
    }

    /** @ignore */
    @ViewChild('dialogWindow')
    dialogWindow: ElementRef;

    /** @ignore If dialog sub-components didn't receive DialogConfig from Injector, DialogConfig is passed from parent.
     * This is necessary when dialog has been passed as TemplateRef and created as EmbeddedView.
     * In such case parent injector of DialogComponent is the component that DECLARED the TemplateRef.
     **/
    @ContentChild(DialogHeaderComponent)
    set dialogHeaderConfig(component: DialogHeaderComponent) {
        if (component) {
            component.dialogConfig = this.dialogConfig;
        }
    }

    /** @ignore */
    @ContentChild(DialogBodyComponent)
    set dialogBodyConfig(component: DialogBodyComponent) {
        if (component) {
            component.dialogRef = this._dialogRef;
            component.dialogConfig = this.dialogConfig;
        }
    }

    /** @ignore */
    @ContentChild(DialogFooterComponent)
    set dialogFooterConfig(component: DialogFooterComponent) {
        if (component) {
            component.dialogConfig = this.dialogConfig;
        }
    }

    /** @ignore */
    @ContentChild(DialogTitleDirective)
    set dialogTitle(component: DialogTitleDirective) {
        if (component) {
            component.dialogConfig = this.dialogConfig;
        }
    }

    /** @ignore Whenever dialog should be visible */
    showDialogWindow: boolean;

    /** @ignore Whenever dialog is dragged */
    isDragged: boolean;

    /**
     * @ignore
     * Whether the Dialog in full-screen mode.
     */
    _fullScreen = false;

    /** @ignore */
    private _class = '';

    /** @ignore */
    private _onHidden: Subscription;

    /** @ignore */
    constructor(
        @Optional() public dialogConfig: DialogConfig,
        @Optional() private _dialogRef: DialogRef,
        @Optional() router: Router,
        @Optional() rtlService: RtlService,
        focusTrapService: FocusTrapService,
        changeDetectorRef: ChangeDetectorRef,
        elementRef: ElementRef
    ) {
        super(router, elementRef, changeDetectorRef, rtlService, focusTrapService);
    }

    /** @ignore */
    get _config(): DialogConfig {
        return this.dialogConfig;
    }

    /** @ignore */
    get _ref(): DialogRef {
        return this._dialogRef;
    }

    /** @ignore */
    ngOnInit(): void {
        super.ngOnInit();
        this._listenOnHidden();
        this.buildComponentCssClass();
    }

    /** @ignore */
    ngOnChanges(): void {
        this.buildComponentCssClass();
    }

    /** @ignore */
    ngAfterViewInit(): void {
        super.ngAfterViewInit();
        this._listenOnHidden();
        this._listenOnFullScreen();
    }

    /** @ignore */
    ngOnDestroy(): void {
        super.ngOnDestroy();
        this._onHidden.unsubscribe();
    }

    /** @ignore */
    @applyCssClass
    buildComponentCssClass(): string[] {
        return [
            this.dialogConfig.hasBackdrop ? 'fd-dialog' : 'fd-dialog--no-backdrop',
            this.dialogConfig.container !== 'body' || this.dialogConfig.position ? 'fd-dialog--targeted' : '',
            this.showDialogWindow ? 'fd-dialog--active' : '',
            this._class,
            this.dialogConfig.backdropClass ? this.dialogConfig.backdropClass : ''
        ];
    }

    /** @ignore */
    private _listenOnFullScreen(): void {
        this._subscriptions.add(
            this._ref.fullScreen.subscribe((isFullScreen) => {
                this._fullScreen = isFullScreen;
                this._changeDetectorRef.detectChanges();
                this.adjustResponsivePadding();
            })
        );
    }

    /** @ignore Listen on Dialog visibility */
    private _listenOnHidden(): void {
        if (this._onHidden) {
            this._onHidden.unsubscribe();
        }
        this._onHidden = this._dialogRef.onHide.subscribe((isHidden) => {
            this.showDialogWindow = !isHidden;
            this.buildComponentCssClass();

            if (!this._focusTrapId) {
                return;
            }
            const focusTrapInstance = this._focusTrapService.getFocusTrapInstance(this._focusTrapId);
            if (isHidden) {
                focusTrapInstance?.pause();
            } else {
                focusTrapInstance?.unpause();
            }
        });
    }
}
