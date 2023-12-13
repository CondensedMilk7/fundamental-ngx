import {
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    ElementRef,
    EventEmitter,
    Input,
    OnChanges,
    OnDestroy,
    OnInit,
    Output,
    SimpleChanges,
    ViewChild,
    ViewEncapsulation
} from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { DatetimeAdapter } from '@fundamental-ngx/core/datetime';

import { ButtonComponent } from '@fundamental-ngx/core/button';
import { FdTranslatePipe } from '@fundamental-ngx/i18n';
import { CalendarService } from '../calendar.service';
import { CalendarCurrent } from '../models/calendar-current';
import { CalendarYearGrid } from '../models/calendar-year-grid';
import { FdCalendarView } from '../types';

/**
 * Internal use only.
 * Header of the calendar component.
 */
@Component({
    selector: 'fd-calendar-header',
    templateUrl: './calendar-header.component.html',
    styleUrl: './calendar-header.component.scss',
    encapsulation: ViewEncapsulation.None,
    host: {
        '[attr.id]': 'viewId'
    },
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true,
    imports: [ButtonComponent, FdTranslatePipe]
})
export class CalendarHeaderComponent<D> implements OnDestroy, OnInit, OnChanges {
    /** Currently active view. Needed for a11y labels. */
    @Input()
    activeView: FdCalendarView;

    /** Currently displayed date on the calendar. */
    @Input()
    currentlyDisplayed: CalendarCurrent;

    /** whether previous navigation button should be disabled in the header. */
    @Input()
    previousButtonDisabled: boolean;

    /** whether next navigation button should be disabled in the header. */
    @Input()
    nextButtonDisabled: boolean;

    /**
     * Object to customize year grid
     */
    @Input()
    set calendarYearGrid(yearGrid: CalendarYearGrid) {
        this._amountOfYearsPerPeriod = yearGrid.cols * yearGrid.rows - 1;
        this._calculateSelectAggregatedYearLabel();
    }

    /** Calendar ID */
    @Input()
    id: string;

    /** Whether calendar should be rendered in mobile landscape mode. */
    @Input()
    mobileLandscape = false;

    /** Event emitted when the active view should change. */
    @Output()
    readonly activeViewChange: EventEmitter<FdCalendarView> = new EventEmitter<FdCalendarView>();

    /** Event emitted when the previous button is clicked. */
    @Output()
    readonly previousClicked: EventEmitter<void> = new EventEmitter<void>();

    /** Event emitted when the next button is clicked. */
    @Output()
    readonly nextClicked: EventEmitter<void> = new EventEmitter<void>();

    /** Aria label for the previous button. Depends on the active view. */
    get previousAriaLabel(): 'coreCalendar.previousMonthLabel' | 'coreCalendar.previousYearLabel' {
        return this.isOnDayView ? 'coreCalendar.previousMonthLabel' : 'coreCalendar.previousYearLabel';
    }

    /** Aria label for the next button. Depends on the active view. */
    get nextAriaLabel(): 'coreCalendar.nextMonthLabel' | 'coreCalendar.nextYearLabel' {
        return this.isOnDayView ? 'coreCalendar.nextMonthLabel' : 'coreCalendar.nextYearLabel';
    }

    /** Button aria label to open month selection view. */
    get selectMonthAriaLabel(): 'coreCalendar.monthSelectionLabel' | 'coreCalendar.dateSelectionLabel' {
        return this.isOnMonthView ? 'coreCalendar.dateSelectionLabel' : 'coreCalendar.monthSelectionLabel';
    }

    /** Button aria label to open aggregated years selection view. */
    get selectAggregatedYearAriaLabel(): 'coreCalendar.yearsRangeSelectionLabel' | 'coreCalendar.dateSelectionLabel' {
        return this.isOnAggregatedYearsView
            ? 'coreCalendar.dateSelectionLabel'
            : 'coreCalendar.yearsRangeSelectionLabel';
    }

    /** Button label to open month selection view. */
    selectMonthLabel: string;

    /** Button label to open year selection view. */
    selectYearLabel: string;

    /** Button label to open aggregated years selection view. */
    selectAggregatedYearLabel: string;

    /** Get information is calendar is on aggregated years view */
    get isOnAggregatedYearsView(): boolean {
        return this.activeView === 'aggregatedYear';
    }

    /** Get information is calendar is on year view */
    get isOnYearView(): boolean {
        return this.activeView === 'year';
    }

    /** Get information is calendar is on month view */
    get isOnMonthView(): boolean {
        return this.activeView === 'month';
    }

    /** Get information is calendar is on day view */
    get isOnDayView(): boolean {
        return this.activeView === 'day';
    }

    /**
     * Component id
     */
    get viewId(): string {
        return this.id + '-header';
    }

    /**
     * @ignore
     * Previous button id
     */
    get _prevButtonId(): string {
        return this.viewId + '-left-arrow';
    }

    /**
     * @ignore
     * Next button id
     */
    get _nextButtonId(): string {
        return this.viewId + '-right-arrow';
    }

    /**
     * @ignore
     * Month label id
     */
    get _monthButtonLabelId(): string {
        return this.viewId + '-month-label';
    }

    /**
     * @ignore
     * Select month aria label id
     */
    get _selectMonthButtonAriaLabelId(): string {
        return this.viewId + '-select-month-aria-label';
    }

    /**
     * @ignore
     * Year label id
     */
    get _yearButtonLabelId(): string {
        return this.viewId + '-year-label';
    }

    /**
     * @ignore
     * Select year aria label id
     */
    get _selectYearButtonAriaLabelId(): string {
        return this.viewId + '-select-year-aria-label';
    }

    /**
     * @ignore
     * Years range label id
     */
    get _yearsRangeButtonLabelId(): string {
        return this.viewId + '-years-range-label';
    }

    /**
     * @ignore
     * Select years range aria label id
     */
    get _selectYearsRangeButtonAriaLabelId(): string {
        return this.viewId + '-select-years-range-aria-label';
    }

    /** @ignore */
    @ViewChild('prevButton', { read: ElementRef })
    _prevButtonComponent: ElementRef;

    /** An RxJS Subject that will kill the data stream upon component’s destruction (for unsubscribing)  */
    private readonly _onDestroy$: Subject<void> = new Subject<void>();

    /** Month names */
    private _monthNames: string[] = [];

    /** Get information about amount of years displayed at once on year view  */
    private _amountOfYearsPerPeriod = 1;

    /** @ignore */
    constructor(
        private _changeDetRef: ChangeDetectorRef,
        private _calendarService: CalendarService,
        private _dateTimeAdapter: DatetimeAdapter<D>
    ) {}

    /** @ignore */
    ngOnDestroy(): void {
        this._onDestroy$.next();
        this._onDestroy$.complete();
    }

    /** @ignore */
    ngOnChanges(changes: SimpleChanges): void {
        if (
            (changes.currentlyDisplayed && !changes.currentlyDisplayed.firstChange) ||
            (changes.activeView && !changes.activeView.firstChange)
        ) {
            this._calculateLabels();
        }
    }

    /** @ignore */
    ngOnInit(): void {
        this._calendarService.leftArrowId = this._prevButtonId;

        this._calculateMonthNames();

        this._calculateLabels();

        this._listenToLocaleChanges();
    }

    /**
     * Focus on focusable control within the header
     */
    focus(): void {
        this._prevButtonComponent.nativeElement?.focus();
    }

    /** @ignore */
    _processViewChange(type: FdCalendarView, event?: MouseEvent): void {
        if (event) {
            event.stopPropagation();
        }

        this.activeView = type === this.activeView ? 'day' : type;

        this.activeViewChange.emit(this.activeView);
    }

    /** @ignore */
    private _listenToLocaleChanges(): void {
        this._dateTimeAdapter.localeChanges.pipe(takeUntil(this._onDestroy$)).subscribe(() => {
            this._calculateMonthNames();
            this._calculateLabels();
            this._changeDetRef.markForCheck();
        });
    }

    /** @ignore */
    private _calculateLabels(): void {
        this._calculateSelectMonthLabel();
        this._calculateSelectYearLabel();
        this._calculateSelectAggregatedYearLabel();
    }

    /** @ignore */
    private _calculateSelectMonthLabel(): void {
        this.selectMonthLabel = this._monthNames[this.currentlyDisplayed.month - 1];
    }

    /** @ignore */
    private _calculateSelectYearLabel(): void {
        this.selectYearLabel = this._getYearName(this.currentlyDisplayed.year);
    }

    /** @ignore */
    private _calculateSelectAggregatedYearLabel(): void {
        this.selectAggregatedYearLabel = `${this._getYearName(this.currentlyDisplayed.year)}-${this._getYearName(
            this.currentlyDisplayed.year + this._amountOfYearsPerPeriod
        )}`;
    }

    /** @ignore */
    private _calculateMonthNames(): void {
        this._monthNames = this._dateTimeAdapter.getMonthNames('long');
    }

    /** @ignore */
    private _getYearName(year: number): string {
        return this._dateTimeAdapter.getYearName(this._dateTimeAdapter.createDate(year, 1, 1));
    }
}
