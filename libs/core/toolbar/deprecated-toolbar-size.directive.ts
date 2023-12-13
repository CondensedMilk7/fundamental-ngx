import { Directive, forwardRef, Input, isDevMode, OnDestroy } from '@angular/core';
import { ModuleDeprecation } from '@fundamental-ngx/cdk/utils';
import {
    CONTENT_DENSITY_DIRECTIVE,
    ContentDensityMode,
    LocalContentDensityMode
} from '@fundamental-ngx/core/content-density';
import { BehaviorSubject } from 'rxjs';

type ToolbarSize = 'cozy' | 'compact' | 'condensed' | null;

@Directive({
    // eslint-disable-next-line @angular-eslint/directive-selector
    selector: 'fd-toolbar[size]',
    providers: [
        {
            provide: CONTENT_DENSITY_DIRECTIVE,
            useExisting: forwardRef(() => DeprecatedToolbarSizeDirective)
        }
    ],
    standalone: true
})
export class DeprecatedToolbarSizeDirective
    extends BehaviorSubject<LocalContentDensityMode>
    implements OnDestroy, ModuleDeprecation
{
    /** Size of the toolbar. */
    @Input()
    set size(value: ToolbarSize) {
        switch (value) {
            case 'cozy':
                this.next(ContentDensityMode.COZY);
                break;
            case 'compact':
                this.next(ContentDensityMode.COMPACT);
                break;
            case 'condensed':
                this.next(ContentDensityMode.CONDENSED);
                break;
            default:
                this.next(ContentDensityMode.COMPACT);
        }
    }

    /** @ignore */
    readonly message: string;

    /** @ignore */
    readonly alternative = {
        name: 'Use [fdContentDensity] directive instead',
        link: ['/core', 'content-density']
    };

    /** @ignore */
    constructor() {
        super(ContentDensityMode.COMPACT);
        this.message = `Usage of fd-toolbar[size] is deprecated`;
        if (isDevMode()) {
            console.warn(`${this.message}. Use [fdContentDensity] directive instead.`);
        }
    }

    /** @ignore */
    ngOnDestroy(): void {
        this.complete();
    }
}
