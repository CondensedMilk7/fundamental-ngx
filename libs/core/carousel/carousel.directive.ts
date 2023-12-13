import {
    AfterContentInit,
    ContentChildren,
    Directive,
    ElementRef,
    EventEmitter,
    Input,
    Output,
    QueryList
} from '@angular/core';

import { CarouselItemDirective } from './carousel-item.directive';
import { CarouselConfig, CarouselService, PanEndOutput } from './carousel.service';

@Directive({
    selector: '[fdCarousel]',
    host: {
        class: 'fd-carousel_'
    },
    providers: [CarouselService],
    standalone: true
})
export class CarouselDirective implements AfterContentInit {
    /** Configuration for carousel */
    @Input()
    config: CarouselConfig;

    /** Initial active item of carousel, position first + offset */
    @Input()
    active: CarouselItemDirective;

    /** @ignore */
    get carouselService(): CarouselService {
        return this._carouselService;
    }

    /** Event thrown, when active element is changed */
    @Output()
    readonly activeChange: EventEmitter<PanEndOutput> = new EventEmitter<PanEndOutput>();

    /** Event thrown when element is dragged. Emits "true" when drag starts and "false" when drag ends. */
    @Output()
    readonly dragStateChange: EventEmitter<boolean> = new EventEmitter<boolean>();

    /** @ignore */
    @ContentChildren(CarouselItemDirective, { descendants: true })
    items: QueryList<CarouselItemDirective>;

    /** @ignore */
    constructor(
        private readonly _elementRef: ElementRef,
        private readonly _carouselService: CarouselService
    ) {}

    /** @ignore */
    ngAfterContentInit(): void {
        this._carouselService.initialise(this.config, this.items, this._elementRef);

        this._carouselService.activeChange$.subscribe((event) => this.activeChange.emit(event));
        this._carouselService.dragStateChange$.subscribe((event) => this.dragStateChange.emit(event));
    }

    /** Change active element */
    goToItem(item: CarouselItemDirective, smooth?: boolean): void {
        this._carouselService.goToItem(item, smooth);
    }

    /** Pick previous carousel item */
    pickPrevious(): void {
        this._carouselService.pickPrevious();
    }

    /** Pick next carousel item */
    pickNext(): void {
        this._carouselService.pickNext();
    }
}
