import { Inject, Injectable, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { ContentDensityStorage } from '../classes/abstract-content-density-storage';
import { ContentDensityMode } from '../types/content-density.mode';

/**
 * Service for managing global content density state.
 */
@Injectable()
export class GlobalContentDensityService implements OnDestroy {
    /**
     * Current content density.
     */
    currentContentDensity: ContentDensityMode;

    /** @hidden */
    private _subscription = new Subscription();

    /** @hidden */
    constructor(@Inject(ContentDensityStorage) private _storage: ContentDensityStorage) {
        this._subscription.add(
            this.contentDensityListener().subscribe((density) => {
                this.currentContentDensity = density;
            })
        );
    }

    /** Listen to current content density changes */
    contentDensityListener(): Observable<ContentDensityMode> {
        return this._storage.getContentDensity();
    }

    /** Update content density */
    updateContentDensity(density: ContentDensityMode): Observable<void> {
        return this._storage.setContentDensity(density);
    }

    /** @hidden */
    ngOnDestroy(): void {
        this._subscription.unsubscribe();
    }
}
