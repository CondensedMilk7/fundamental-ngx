import { FN_SELECTABLE_ITEM_PROVIDER, SelectableItemToken } from '@fundamental-ngx/fn/cdk';
import { Directive, ElementRef, forwardRef } from '@angular/core';

@Directive({
    selector: '[fdCustomItem]',
    providers: [
        {
            provide: FN_SELECTABLE_ITEM_PROVIDER,
            useExisting: forwardRef(() => CustomSelectableItemDirective)
        }
    ]
})
export class CustomSelectableItemDirective implements Partial<SelectableItemToken<string>> {
    private _isSelected = false;

    constructor(private _elementRef: ElementRef<HTMLElement>) {}

    setSelected(isSelected: boolean): void {
        if (this._isSelected !== isSelected) {
            this._isSelected = isSelected;
            if (isSelected) {
                this._elementRef.nativeElement.classList.add('item-is-selected');
            } else {
                this._elementRef.nativeElement.classList.remove('item-is-selected');
            }
        }
    }

    getSelected(): boolean {
        return this._isSelected;
    }
}
