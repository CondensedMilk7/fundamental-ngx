import { Injectable, OnDestroy } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import { warnOnce } from '../helpers';

/**
 * @deprecated Use Angular's built-in `DestroyRef` and `takeUntilDestroyed` instead.
 * Will be removed in next release
 */
@Injectable()
export class DestroyedService extends ReplaySubject<void> implements OnDestroy {
    /** @ignore */
    constructor() {
        super(1);
        warnOnce(
            `DestroyedService is deprecated. Use Angular's built-in 'DestroyRef' and 'takeUntilDestroyed' instead.`
        );
    }

    /** @ignore */
    ngOnDestroy(): void {
        this.next();
        this.complete();
    }
}
