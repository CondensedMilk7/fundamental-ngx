import { Directive, ElementRef } from '@angular/core';

@Directive({
    selector: '[fdkResizeHandle]',
    standalone: true
})
export class ResizeHandleDirective {
    /** @ignore */
    constructor(public elementRef: ElementRef) {}
}
