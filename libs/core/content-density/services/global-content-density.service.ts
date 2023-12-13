import { Inject, Injectable, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { ContentDensityStorage } from '../classes/abstract-content-density-storage';
import { DEFAULT_CONTENT_DENSITY } from '../tokens/default-content-density.token';
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

    /** @ignore */
    private _subscription = new Subscription();

    /** @ignore */
    constructor(
        @Inject(ContentDensityStorage) private _storage: ContentDensityStorage,
        @Inject(DEFAULT_CONTENT_DENSITY) private _defaultContentDensity: ContentDensityMode
    ) {
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

    /** @ignore */
    ngOnDestroy(): void {
        this._subscription.unsubscribe();
    }
}
