import { FocusableOption } from '@angular/cdk/a11y';
import { ENTER, LEFT_ARROW, RIGHT_ARROW, SPACE } from '@angular/cdk/keycodes';
import { NgTemplateOutlet } from '@angular/common';
import {
    AfterContentInit,
    AfterViewInit,
    Component,
    ContentChild,
    ContentChildren,
    ElementRef,
    HostBinding,
    HostListener,
    Input,
    Optional,
    QueryList,
    Renderer2,
    effect,
    forwardRef,
    inject,
    signal
} from '@angular/core';
import { KeyUtil, RtlService } from '@fundamental-ngx/cdk/utils';
import { FD_ICON_COMPONENT, IconComponent } from '@fundamental-ngx/core/icon';
import { Subject } from 'rxjs';
import { ListNavigationItemArrowDirective } from '../directives/list-navigation-item-arrow.directive';
import { ListNavigationItemTextDirective } from '../directives/list-navigation-item-text.directive';
import { ListComponentInterface } from '../list-component.interface';
import { FD_LIST_COMPONENT } from '../tokens';

@Component({
    // eslint-disable-next-line @angular-eslint/component-selector
    selector: '[fd-list-navigation-item], [fdListNavigaitonItem]',
    templateUrl: './list-navigation-item.component.html',
    styleUrl: './list-navigation-item.component.scss',
    host: {
        role: 'treeitem'
    },
    standalone: true,
    imports: [NgTemplateOutlet, IconComponent]
})
export class ListNavigationItemComponent implements AfterContentInit, AfterViewInit, FocusableOption {
    /** Whether or not the list item is expanded. */
    @Input()
    @HostBinding('class.is-expanded')
    expanded = false;

    /** Whether or not this list item is indicated for navigation. */
    @Input()
    @HostBinding('class.fd-list__navigation-item--indicated')
    indicated = false;

    /** @ignore */
    @HostBinding('class.fd-list__navigation-item')
    _navigationItemClass = true;

    /** @ignore */
    @HostBinding('class.fd-list__navigation-item--expandable')
    _isExpandable = false;

    /** @ignore */
    @HostBinding('attr.tabindex')
    _tabIndex;

    /** @ignore */
    @HostBinding('attr.aria-level')
    _ariaLevel: number;

    /** @ignore */
    @ContentChild(FD_LIST_COMPONENT)
    _listComponent: ListComponentInterface;

    /** @ignore */
    @ContentChild(ListNavigationItemArrowDirective)
    _listNavigationItemArrow: ListNavigationItemArrowDirective;

    /** @ignore */
    @ContentChild(FD_ICON_COMPONENT)
    _iconComponent: IconComponent;

    /** @ignore */
    @ContentChild(ListNavigationItemTextDirective)
    _text: ListNavigationItemTextDirective;

    /** @ignore */
    @ContentChildren(forwardRef(() => ListNavigationItemComponent), { descendants: true })
    _childItems: QueryList<ListNavigationItemComponent>;

    /** @ignore */
    @HostBinding('attr.aria-expanded')
    private get _ariaExpanded(): boolean | null {
        return this._isExpandable ? this._expanded : null;
    }

    /** @ignore */
    _condensed = signal(false);

    /** @ignore */
    _expanded = false;

    /** @ignore */
    _innerText: string;

    /** @ignore */
    readonly _focused$ = new Subject<boolean>();

    /** @ignore */
    readonly _clicked$ = new Subject<MouseEvent>();

    /**
     * @ignore
     * false if list-item is within unexpanded list (not visible to user until list expanded). default is true
     */
    _isItemVisible = true;

    /** @ignore handles rtl service */
    private _dir: 'ltr' | 'rtl' | null = 'ltr';

    /** @ignore */
    private readonly _renderer2 = inject(Renderer2);

    /** @ignore */
    constructor(
        private _elementRef: ElementRef,
        @Optional() private _rtlService: RtlService
    ) {
        effect(() => {
            if (this._condensed()) {
                this._renderer2.addClass(this._elementRef.nativeElement, 'fd-list__navigation-item--condensed');
            } else {
                this._renderer2.removeClass(this._elementRef.nativeElement, 'fd-list__navigation-item--condensed');
            }
        });
    }

    /** @ignore */
    @HostListener('click', ['$event'])
    onItemClick(event: MouseEvent): void {
        event.stopPropagation();
        this._handleExpandedChanges(!this.expanded);
    }

    /** @ignore */
    @HostListener('keydown', ['$event'])
    keyDownHandler(event: KeyboardEvent): void {
        if (KeyUtil.isKeyCode(event, [RIGHT_ARROW])) {
            event.preventDefault();
            this._handleExpandedChanges(this._dir === 'ltr');
        }
        if (KeyUtil.isKeyCode(event, [LEFT_ARROW])) {
            event.preventDefault();
            this._handleExpandedChanges(this._dir !== 'ltr');
        }
        if (KeyUtil.isKeyCode(event, [SPACE, ENTER])) {
            event.preventDefault();
            event.stopPropagation();
            this._handleExpandedChanges(!this.expanded);
        }
    }

    /** @ignore */
    @HostListener('focus', ['$event'])
    protected onFocus(event: FocusEvent): void {
        this._focused$.next(event.target !== this._elementRef?.nativeElement);
    }

    /** @ignore */
    ngAfterContentInit(): void {
        if (this._listComponent) {
            this._isExpandable = true;
            this._listComponent.role = 'group';
        } else {
            this._tabIndex = 0;
        }
        if (this._iconComponent) {
            this._iconComponent._navigationItemIcon = true;
            this._iconComponent.ariaHidden = true;
        }
        this._innerText = this._text.elementRef.nativeElement.textContent ?? '';
        this._ariaLevel = 1;
        this._childItems?.forEach((item) => {
            item._ariaLevel = 2;
        });
    }

    /** @ignore */
    ngAfterViewInit(): void {
        this._subscribeToRtl();
        if (this._isExpandable) {
            this._expanded = false;
        }
        this._setIsItemVisible(this.expanded);
    }

    /** @ignore
     * set the _isItemVisible of sublist items to true if this(containing) list is expanded.
     */
    _setIsItemVisible(value: boolean): void {
        if (this._isExpandable) {
            this._listComponent?._navItems?.forEach((item) => {
                item._isItemVisible = value;
            });
        }
    }

    /** @ignore */
    _childIndicatedAndCollapsed(): boolean {
        let retVal = false;
        this._listComponent?._navItems?.forEach((navItem) => {
            if (navItem.indicated && !navItem.expanded) {
                retVal = true;
            }
        });

        return retVal;
    }

    /** support for FocusKeyManager for arrow key navigation */
    focus(): void {
        this._elementRef.nativeElement.focus();
    }

    /** support for FocusKeyManager for arrow key navigation */
    click(): void {
        this._elementRef?.nativeElement?.click();
    }

    /** @ignore */
    private _handleExpandedChanges(expanded: boolean): void {
        if (this._isExpandable) {
            if (this.expanded === expanded) {
                return;
            }

            this.expanded = expanded;
            this._expanded = expanded;
            this._setIsItemVisible(expanded);
            this._listNavigationItemArrow._setExpanded(this.expanded);

            if (expanded) {
                setTimeout(() => {
                    this._listComponent._navItems.first.focus();
                });
            } else {
                setTimeout(() => {
                    this.focus();
                });
            }
        }
    }

    /** @ignore Rtl change subscription */
    private _subscribeToRtl(): void {
        if (!this._rtlService) {
            return;
        }

        this._rtlService.rtl.subscribe((isRtl) => {
            this._dir = isRtl ? 'rtl' : 'ltr';
        });
    }
}
