import { ChangeDetectionStrategy, Component, ElementRef, OnInit, Renderer2, ViewEncapsulation } from '@angular/core';
import { FACET_CLASS_NAME } from '../constants';
import { addClassNameToFacetElement } from '../utils';

@Component({
    selector: 'fd-facet-content',
    template: `<ng-content></ng-content>`,
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation: ViewEncapsulation.None,
    standalone: true
})
export class FacetContentComponent implements OnInit {
    /** @ignore */
    constructor(
        public readonly elementRef: ElementRef<HTMLElement>,
        private _renderer: Renderer2
    ) {}

    /** @ignore */
    ngOnInit(): void {
        this._addClassNameToHostElement(FACET_CLASS_NAME.facetContainer);
    }

    /** @ignore */
    private _addClassNameToHostElement(className: string): void {
        addClassNameToFacetElement(this._renderer, this.elementRef.nativeElement, className);
    }
}
