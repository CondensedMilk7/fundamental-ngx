import { Inject, Injectable, OnDestroy } from '@angular/core';
import { BehaviorSubject, Observable, skip, tap } from 'rxjs';
import { map } from 'rxjs/operators';
import { isCompact } from '../helpers/density-type-checkers';
import { DEFAULT_CONTENT_DENSITY } from '../tokens/default-content-density.token';
import { ContentDensityMode } from '../types/content-density.mode';
import { GlobalContentDensityService } from './global-content-density.service';

/**
 * Temporary replacement for ContentDensityService
 */
@Injectable()
export class DeprecatedContentDensityService implements OnDestroy {
    /** Content Density BehaviourSubject */
    readonly contentDensity = new BehaviorSubject<ContentDensityMode>(this._defaultContentDensity);

    /** @ignore */
    constructor(
        private _contentDensityController: GlobalContentDensityService,
        @Inject(DEFAULT_CONTENT_DENSITY) private _defaultContentDensity: ContentDensityMode
    ) {
        this.contentDensity
            .pipe(
                skip(1),
                tap((d) => this._contentDensityController.updateContentDensity(d))
            )
            .subscribe();
    }

    /** @ignore */
    get _contentDensityListener(): Observable<ContentDensityMode> {
        return this._contentDensityController.contentDensityListener();
    }

    /** @ignore */
    get _isCompactDensity(): Observable<boolean> {
        return this._contentDensityController.contentDensityListener().pipe(map(isCompact));
    }

    /** @ignore */
    ngOnDestroy(): void {
        this.contentDensity.complete();
    }
}
