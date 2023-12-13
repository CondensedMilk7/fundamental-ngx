import { ViewportRuler } from '@angular/cdk/overlay';
import {
    AfterViewInit,
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    ContentChildren,
    ElementRef,
    Input,
    IterableChangeRecord,
    IterableDiffer,
    IterableDiffers,
    NgZone,
    OnChanges,
    OnDestroy,
    OnInit,
    QueryList,
    SimpleChanges,
    TemplateRef,
    TrackByFunction,
    ViewChild,
    ViewContainerRef,
    ViewEncapsulation
} from '@angular/core';
import { resizeObservable } from '@fundamental-ngx/cdk/utils';
import { Subject, debounceTime } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { RepeatDirective } from '@fundamental-ngx/cdk/utils';
import { SkeletonComponent } from '@fundamental-ngx/core/skeleton';
import { TimelineNodeHeaderDirective } from './components/timeline-node-header/timeline-node-header.directive';
import { TimelineNodeComponent } from './components/timeline-node/timeline-node.component';
import { TimelineFirstListOutletDirective } from './directives/timeline-first-list-outlet.directive';
import { TimelineNodeDefDirective, TimelineNodeOutletContext } from './directives/timeline-node-def.directive';
import { TimelineSecondListOutletDirective } from './directives/timeline-second-list-outlet.directive';
import { TimelinePositionControlService } from './services/timeline-position-control.service';
import { TimeLinePositionStrategy, TimelineAxis, TimelineSidePosition } from './types';

@Component({
    selector: 'fd-timeline',
    templateUrl: './timeline.component.html',
    styleUrl: './timeline.component.scss',
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [TimelinePositionControlService],
    host: {
        role: 'timeline',
        'arial-label': 'timeline',
        class: 'fd-timeline',
        '[class.fd-timeline--horizontal]': 'axis === "horizontal"',
        '[class.fd-timeline--vertical]': 'axis === "vertical"'
    },
    standalone: true,
    imports: [
        TimelineFirstListOutletDirective,
        TimelineSecondListOutletDirective,
        RepeatDirective,
        TimelineNodeComponent,
        TimelineNodeHeaderDirective,
        SkeletonComponent
    ]
})
export class TimelineComponent<T> implements OnInit, OnDestroy, OnChanges, AfterViewInit {
    /**
     * Data array to render
     */
    @Input()
    dataSource: T[];

    /**
     * Tracking function that will be used to check the differences in data changes.
     */
    @Input()
    trackBy: TrackByFunction<T>;

    /**
     * Axis for timeline
     */
    @Input()
    axis: TimelineAxis = 'vertical';

    /**
     * Layout for timeline
     */
    @Input()
    layout: TimelineSidePosition = 'right';

    /* First outlet within the timeline template where the dataNodes will be inserted. */
    /** @ignore */
    @ViewChild(TimelineFirstListOutletDirective, { static: true })
    private _firstListOutlet: TimelineFirstListOutletDirective;

    /* Second outlet within the timeline template where the dataNodes will be inserted. */
    /** @ignore */
    @ViewChild(TimelineSecondListOutletDirective, { static: true })
    private _secondListOutlet: TimelineSecondListOutletDirective;

    /** The timeline node template for the timeline */
    /** @ignore */
    @ContentChildren(TimelineNodeDefDirective, { descendants: true })
    private _nodeDefs: QueryList<TimelineNodeDefDirective<T>>;

    /** @ignore */
    _canShowFirstList = true;

    /** @ignore */
    _canShowSecondList = true;

    /** @ignore */
    _loading = true;

    /** @ignore */
    @ViewChild('loadingTemplate')
    _loadingTemplate: TemplateRef<any>;

    /** @ignore
     * Differ used to find the changes in the data provided by the data source.
     */
    private _dataDifferForFirstList: IterableDiffer<T>;

    /** @ignore */
    private _dataDifferForSecondList: IterableDiffer<T>;

    /** @ignore */
    private readonly _onDestroy = new Subject<void>();

    /** @ignore */
    constructor(
        private _differs: IterableDiffers,
        private _cd: ChangeDetectorRef,
        private _timelinePositionControlService: TimelinePositionControlService,
        private _viewportRuler: ViewportRuler,
        private _elementRef: ElementRef<HTMLElement>,
        private _ngZone: NgZone
    ) {}

    /** @ignore */
    ngOnInit(): void {
        this._dataDifferForFirstList = this._differs.find([]).create(this.trackBy);
        this._dataDifferForSecondList = this._differs.find([]).create(this.trackBy);

        this._canShowFirstList = this.layout !== 'right' && this.layout !== 'bottom';
        this._canShowSecondList = this.layout !== 'left' && this.layout !== 'top';
    }

    /** @ignore */
    ngOnChanges(changes: SimpleChanges): void {
        if ('axis' in changes || 'layout' in changes) {
            this._canShowFirstList = this.layout !== 'right' && this.layout !== 'bottom';
            this._canShowSecondList = this.layout !== 'left' && this.layout !== 'top';
            this._setPositionStrategy();
            this.switchDataSource(this.dataSource);
        }
        if ('dataSource' in changes && !changes['dataSource'].firstChange) {
            const value = changes['dataSource'].currentValue;
            this.switchDataSource(value);
        }
    }

    /** @ignore */
    ngAfterViewInit(): void {
        resizeObservable(this._elementRef.nativeElement)
            .pipe(debounceTime(50), takeUntil(this._onDestroy))
            .subscribe(() => this._timelinePositionControlService.calculatePositions());
        this._setPositionStrategy();
        this.switchDataSource(this.dataSource);
    }

    /** @ignore */
    ngOnDestroy(): void {
        this._firstListOutlet.viewContainer.clear();
        this._onDestroy.next();
        this._onDestroy.complete();
    }

    /**
     * Update state by new data source
     * If the data source is null, interpret this by clearing the node outlet.
     */
    /** @ignore */
    private switchDataSource(data: T[]): void {
        this._loading = true;
        if (!data) {
            this._firstListOutlet.viewContainer.clear();
            this._firstListOutlet.viewContainer.createEmbeddedView(this._loadingTemplate);
            this._cd.detectChanges();
            this._timelinePositionControlService.calculatePositions();
            this._cd.detectChanges();
            return;
        }
        if (this._nodeDefs) {
            const [first, second] = this._splitList(data);
            this._renderNodeChanges(first, this._dataDifferForFirstList, this._firstListOutlet?.viewContainer);
            this._renderNodeChanges(second, this._dataDifferForSecondList, this._secondListOutlet?.viewContainer);
            this._cd.detectChanges();
            this._timelinePositionControlService.calculatePositions();
            this._loading = false;
            this._cd.detectChanges();
        }
    }

    /** Check for changes made in the data and render each change (node added/removed/moved). */
    /** @ignore */
    private _renderNodeChanges(data: T[], differ: IterableDiffer<T>, vcr: ViewContainerRef): void {
        const changes = differ.diff(data);
        if (!changes) {
            return;
        }
        changes.forEachOperation(
            (item: IterableChangeRecord<T>, adjustedPreviousIndex: number | null, currentIndex: number | null) => {
                if (currentIndex != null && item.previousIndex === null) {
                    this._insertNode(data[currentIndex], currentIndex, vcr);
                } else if (currentIndex === null && adjustedPreviousIndex != null) {
                    vcr.remove(adjustedPreviousIndex);
                } else if (adjustedPreviousIndex != null && currentIndex != null) {
                    const view = vcr.get(adjustedPreviousIndex);
                    if (view) {
                        vcr.move(view, currentIndex);
                    }
                }
            }
        );
    }

    /** @ignore */
    private _setPositionStrategy(): void {
        this._timelinePositionControlService.setStrategy(`${this.axis}-${this.layout}` as TimeLinePositionStrategy);
    }

    /**
     * Create the embedded view for the data node template and place it in the correct index location
     * within the data node view container.
     */
    /** @ignore */
    private _insertNode(nodeData: T, index: number, vcr: ViewContainerRef): void {
        const node = this._getNodeDef(index);

        // Node context that will be provided to created embedded view
        const context = new TimelineNodeOutletContext<T>(nodeData);

        vcr.createEmbeddedView(node.template, context, index);
    }

    /**
     * Finds the matching node definition that should be used for this node data. If there is only
     * one node definition, it is returned.
     */
    /** @ignore */
    private _getNodeDef(i: number): TimelineNodeDefDirective<T> {
        if (this._nodeDefs.length === 1) {
            return this._nodeDefs.first;
        }
        return this._nodeDefs[i];
    }

    /**
     * Split data list to two list first and second to represent timelines in two lists.
     */
    /** @ignore */
    private _splitList(dataSource: T[]): T[][] {
        let dataForFirstList: T[] = [];
        let dataForSecondList: T[] = [];
        if (this.layout === 'left' || this.layout === 'top') {
            dataForFirstList = [...dataSource];
        } else if (this.layout === 'right' || this.layout === 'bottom') {
            dataForSecondList = [...dataSource];
        } else {
            dataSource.forEach((item, index) => {
                if (index % 2 === 0) {
                    dataForFirstList.push(item);
                } else {
                    dataForSecondList.push(item);
                }
            });
        }
        return [dataForFirstList, dataForSecondList];
    }
}
