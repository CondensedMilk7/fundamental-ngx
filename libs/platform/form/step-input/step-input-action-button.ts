import { Directive, HostListener, OnDestroy } from '@angular/core';
import { Subject, fromEvent, interval, timer } from 'rxjs';
import { switchMap, takeUntil } from 'rxjs/operators';

/**
 * This is a base step input directive to be used for increase/decrease buttons.
 */
@Directive()
export abstract class StepInputActionButton implements OnDestroy {
    /** @ignore */
    protected _destroyed = new Subject<void>();

    /**
     * @ignore
     * Indicates if action can be handled
     */
    abstract canHandleAction(): boolean;

    /**
     * @ignore
     * Step input button action handler
     */
    abstract runAction(): void;

    /** @ignore  */
    ngOnDestroy(): void {
        this._destroyed.next();
        this._destroyed.complete();
    }

    /** @ignore */
    @HostListener('mousedown')
    click(): void {
        if (!this.canHandleAction()) {
            return;
        }

        // Run action while button is pressed
        timer(500)
            .pipe(
                switchMap(() => interval(40)),
                takeUntil(fromEvent(window, 'mouseup', { capture: true, once: true }))
            )
            .pipe(takeUntil(this._destroyed))
            .subscribe(() => this.runAction());

        this.runAction();
    }
}
