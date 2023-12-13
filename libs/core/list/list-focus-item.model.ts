import { coerceNumberProperty } from '@angular/cdk/coercion';
import { Directive, ElementRef, EventEmitter, HostBinding, HostListener, Input } from '@angular/core';
import { KeyboardSupportItemInterface } from '@fundamental-ngx/cdk/utils';
import { Subject } from 'rxjs';

@Directive()
export abstract class ListFocusItem<T = any> implements KeyboardSupportItemInterface {
    /** tab index attribute */
    @Input()
    @HostBinding('attr.tabindex')
    set tabindex(value: number) {
        this._tabIndex = coerceNumberProperty(value, -1);
    }
    get tabindex(): number {
        if (this._isFirstItem && isNaN(this._tabIndex as number)) {
            return 0;
        }
        return this._tabIndex ?? -1;
    }

    /**
     * Value of the list item.
     * Used for dropdown-based controls such as combobox, select, etc.
     */
    @Input()
    value: T;

    /** @ignore */
    readonly _focused$ = new Subject<{ focusedWithin: boolean }>();

    /** @ignore */
    readonly _clicked$ = new Subject<MouseEvent>();

    /** @ignore */
    protected _isFirstItem = false;

    /** @ignore */
    protected _tabIndex: number | undefined;

    /** @ignore Implementation of KeyboardSupportItemInterface */
    keyDown: EventEmitter<KeyboardEvent> = new EventEmitter<KeyboardEvent>();

    /** @ignore */
    @HostListener('focusin', ['$event'])
    protected onFocus(event: FocusEvent): void {
        this._focused$.next({
            focusedWithin: event.target !== this.elementRef?.nativeElement
        });
    }

    /** @ignore */
    constructor(readonly elementRef: ElementRef) {}

    /** @ignore */
    click(): void {
        this.elementRef?.nativeElement?.click();
    }

    /** @ignore */
    focus(): void {
        this.elementRef?.nativeElement?.focus();
    }

    /** @ignore */
    setIsFirst(value: boolean): void {
        this._isFirstItem = value;
    }
}
