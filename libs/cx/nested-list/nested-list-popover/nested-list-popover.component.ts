import {
    ChangeDetectionStrategy,
    Component,
    ContentChild,
    HostBinding,
    OnInit,
    Optional,
    ViewChild,
    ViewEncapsulation
} from '@angular/core';
import { Observable, of } from 'rxjs';

import { Overlay, ScrollStrategy } from '@angular/cdk/overlay';
import { PopoverComponent } from '@fundamental-ngx/core/popover';
import { Placement } from '@fundamental-ngx/core/shared';
import { RtlService } from '@fundamental-ngx/core/utils';
import { map } from 'rxjs/operators';
import { NestedItemInterface } from '../nested-item/nested-item.interface';
import { NestedItemService } from '../nested-item/nested-item.service';
import { NestedLinkComponent } from '../nested-link/nested-link.component';
import { NestedListKeyboardService } from '../nested-list-keyboard.service';
import { NestedListPopoverInterface } from './nested-list-popover.interface';

@Component({
    selector: 'fdx-nested-list-popover',
    templateUrl: './nested-list-popover.component.html',
    styleUrl: './nested-list-popover.component.scss',
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class NestedListPopoverComponent implements NestedListPopoverInterface, OnInit {
    /** @ignore */
    @ViewChild(PopoverComponent)
    popoverComponent: PopoverComponent;

    /** @ignore */
    @HostBinding('class.fdx-nested-list__popover')
    popoverClass = true;

    /** @ignore */
    @ContentChild(NestedLinkComponent)
    linkDirective: NestedLinkComponent;

    /**
     * @ignore
     * Reference to parent item, to propagate open and close change from popover.
     */
    parentItemElement: NestedItemInterface;

    /** @ignore */
    placement$: Observable<Placement>;

    /** @ignore */
    open = false;

    /** @ignore */
    _closeScrollStrategy: ScrollStrategy;

    /** @ignore */
    constructor(
        private _keyboardNestService: NestedListKeyboardService,
        @Optional() private _itemService: NestedItemService,
        @Optional() private _rtlService: RtlService,
        private _overlay: Overlay
    ) {
        this._listenOnKeyboardRefresh();
        this._createRtlObservable();
        if (this._itemService) {
            this._itemService.popover = this;
        }
    }

    /** @ignore */
    ngOnInit(): void {
        this._closeScrollStrategy = this._overlay.scrollStrategies.close();
    }

    /**
     * Method called, when open state is changed, from popover component (escape key, outside click).
     */
    handleOpenChange(open: boolean): void {
        this.open = open;
        if (this.parentItemElement) {
            if (open) {
                this.parentItemElement.triggerOpen();
            } else {
                this.parentItemElement.triggerClose();
            }
        }
    }

    /** @ignore */
    private _listenOnKeyboardRefresh(): void {
        this._keyboardNestService.refresh$.subscribe(() => {
            /** Update popover position, on list of hidden items change */
            if (this.popoverComponent) {
                this.popoverComponent.refreshPosition();
            }
        });
    }

    /** @ignore */
    private _createRtlObservable(): void {
        this.placement$ = this._rtlService
            ? this._rtlService.rtl.pipe(map((isRtl) => (isRtl ? 'left-start' : 'right-start')))
            : of('right-start');
    }
}
