import { DomPortal } from '@angular/cdk/portal';
import {
    AfterViewInit,
    ChangeDetectionStrategy,
    Component,
    ContentChild,
    ElementRef,
    ViewEncapsulation
} from '@angular/core';
import { FD_LINK_COMPONENT, LinkComponent } from '@fundamental-ngx/core/link';
import { FD_BREADCRUMB_ITEM_COMPONENT } from './tokens';

/**
 * Breadcrumb item directive. Must have child breadcrumb link directives.
 *
 * ```html
 * <fd-breadcrumb-item>
 *     <a fd-link [routerLink]="'#'">Breadcrumb Link</a>
 * </fd-breadcrumb-item>
 * ```
 */
@Component({
    selector: 'fd-breadcrumb-item',
    template: '<ng-content></ng-content>',
    host: {
        class: 'fd-breadcrumb__item'
    },
    providers: [
        {
            provide: FD_BREADCRUMB_ITEM_COMPONENT,
            useExisting: BreadcrumbItemComponent
        }
    ],
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true
})
export class BreadcrumbItemComponent implements AfterViewInit {
    /** @ignore */
    @ContentChild(FD_LINK_COMPONENT)
    breadcrumbLink: LinkComponent;

    /** In case there is no link in Item and breadcrumb item is non-interactive, we move whole item content to menu item title */
    breadcrumbItemPortal: DomPortal<Element>;

    /** When breadcrumb item has link in it, we are moving link content to menu item title */
    linkContentPortal: DomPortal;

    /**
     * Breadcrumb item dom portal.
     */
    portal: DomPortal;

    /** @ignore */
    private _attached = false;

    /** @ignore */
    constructor(public readonly elementRef: ElementRef<HTMLElement>) {}

    /** @ignore */
    get _needsClickProxy(): boolean {
        return !!this.breadcrumbLink?.elementRef.nativeElement.getAttribute('href') || !!this.breadcrumbLink.routerLink;
    }

    /** @ignore */
    ngAfterViewInit(): void {
        this._attach();
    }

    /**
     * Sets breadcrumb item dom portal.
     */
    setPortal(): void {
        if (!this.portal) {
            this.portal = new DomPortal(this.elementRef);
        }
    }

    /** @ignore */
    _detach(): void {
        if (!this._attached) {
            return;
        }

        if (this.linkContentPortal?.isAttached) {
            this.linkContentPortal?.detach();
        }

        if (this.breadcrumbItemPortal?.isAttached) {
            this.breadcrumbItemPortal?.detach();
        }

        this._attached = false;
    }

    /** @ignore */
    _attach(): void {
        if (this._attached) {
            return;
        }

        if (this.breadcrumbLink && this.breadcrumbLink.contentSpan) {
            this.linkContentPortal = new DomPortal<HTMLElement>(this.breadcrumbLink.contentSpan.nativeElement);
        }

        this.breadcrumbItemPortal = new DomPortal(this.elementRef.nativeElement.firstElementChild as Element);
        this._attached = true;
    }
}
