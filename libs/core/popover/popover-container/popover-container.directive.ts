import { Directive, ElementRef, OnDestroy, OnInit } from '@angular/core';
import { resizeObservable } from '@fundamental-ngx/cdk/utils';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Directive({
    selector: '[fdPopoverContainer]',
    standalone: true
})
export class PopoverContainerDirective implements OnInit, OnDestroy {
    /** Subject which emits when popover position refresh is required. */
    refreshPosition$ = new Subject<void>();

    /** @ignore */
    private _destroy$ = new Subject<void>();

    /** @ignore */
    constructor(private _elmRef: ElementRef<HTMLElement>) {}

    /** @ignore */
    ngOnInit(): void {
        resizeObservable(this._elmRef.nativeElement)
            .pipe(takeUntil(this._destroy$))
            .subscribe(() => {
                this.refreshPosition$.next();
            });
    }

    /** @ignore */
    ngOnDestroy(): void {
        this._destroy$.next();
        this._destroy$.complete();
    }
}
