import { CdkScrollable } from '@angular/cdk/overlay';
import { NgTemplateOutlet } from '@angular/common';
import {
    ChangeDetectionStrategy,
    Component,
    ElementRef,
    Inject,
    OnDestroy,
    OnInit,
    Optional,
    TemplateRef,
    ViewChild,
    ViewEncapsulation
} from '@angular/core';
import { TemplateDirective } from '@fundamental-ngx/cdk/utils';
import { BarElementDirective, BarMiddleDirective, ButtonBarComponent } from '@fundamental-ngx/core/bar';
import {
    DialogBodyComponent,
    DialogCloseButtonComponent,
    DialogComponent,
    DialogFooterComponent,
    DialogHeaderComponent,
    DialogService
} from '@fundamental-ngx/core/dialog';
import {
    MOBILE_MODE_CONFIG,
    MobileModeBase,
    MobileModeConfigToken,
    MobileModeControl
} from '@fundamental-ngx/core/mobile-mode';
import { ScrollbarDirective } from '@fundamental-ngx/core/scrollbar';
import { takeUntil } from 'rxjs/operators';
import {
    SEARCH_FIELD_COMPONENT,
    SearchFieldChildContent,
    SearchFieldMobileInterface
} from '../search-field-mobile.interface';

@Component({
    selector: 'fdp-search-field-mobile',
    templateUrl: 'search-field-mobile.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation: ViewEncapsulation.None,
    standalone: true,
    imports: [
        DialogComponent,
        DialogHeaderComponent,
        TemplateDirective,
        BarMiddleDirective,
        BarElementDirective,
        NgTemplateOutlet,
        DialogCloseButtonComponent,
        CdkScrollable,
        ScrollbarDirective,
        DialogBodyComponent,
        DialogFooterComponent,
        ButtonBarComponent
    ]
})
export class SearchFieldMobileComponent
    extends MobileModeBase<SearchFieldMobileInterface>
    implements OnInit, OnDestroy
{
    /** @ignore */
    childContent: SearchFieldChildContent | null = null;

    /** @ignore */
    @ViewChild('dialogTemplate') dialogTemplate: TemplateRef<any>;

    /** @ignore */
    constructor(
        elementRef: ElementRef,
        dialogService: DialogService,
        @Inject(SEARCH_FIELD_COMPONENT) searchFieldComponent: SearchFieldMobileInterface,
        @Optional() @Inject(MOBILE_MODE_CONFIG) mobileModes: MobileModeConfigToken[]
    ) {
        super(elementRef, dialogService, searchFieldComponent, MobileModeControl.SEARCH_FIELD, mobileModes);
    }

    /** @ignore */
    ngOnInit(): void {
        this.listenChanges();
    }

    /** @ignore */
    ngOnDestroy(): void {
        super.onDestroy();
    }

    /** @ignore */
    listenChanges(): void {
        this._component.isOpenChange.pipe(takeUntil(this._onDestroy$)).subscribe((isOpen) => {
            if (!isOpen) {
                this._handleDismiss();

                return;
            }

            if (!this._dialogService.hasOpenDialogs()) {
                this._open();
            }
        });
    }

    /** @ignore */
    _handleDismiss(): void {
        this.dialogRef.close();
        this._component.dialogDismiss();
    }

    /** @ignore */
    _handleApprove(): void {
        this.dialogRef.close();
        this._component.dialogApprove();
    }

    /** @ignore */
    private _open(): void {
        this.dialogRef = this._dialogService.open(this.dialogTemplate, {
            mobile: true,
            disablePaddings: true,
            ...this.dialogConfig,
            backdropClickCloseable: false,
            escKeyCloseable: true,
            container: this._elementRef.nativeElement
        });
    }
}
