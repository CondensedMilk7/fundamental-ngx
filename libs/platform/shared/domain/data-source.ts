/* eslint-disable @typescript-eslint/no-unused-vars */
/**
 *
 * When working with large set of data using components such as:
 *  - Datatables
 *  - InputSearch
 *  - ComboBox (Autocomplete)
 *  - Tree
 *  - List
 *  - etc..
 *  and for these we need to unify the way we access a data. Currently we leave most of the complex
 *  data access or data manipulation on application developer which leads to different
 *  implementation approaches and allot of code duplication.
 *
 *  It is common practice when working with different data input sources we try to apply some
 *  Design patterns e.g. Adapter Pattern that provides us with guidelines how different interfaces
 *  can talk to each other and from here we can derive another pattern so called Datasource pattern
 *  which is high-level architectural pattern to abstract data and internal resources
 *  access (DB calls, Rest calls, domain objects) with a mininal amount a code.
 *
 * What we want to achieve is to define abstract layer where each specific resource type needs to
 * implement and move all the related logic into reusable DataSources. (TableDataSource,
 * ComboBoxDataSource, ... )
 *
 * Observable<T[]> is a reactive stream, that changes its content based on what it pushed
 * into it using .next().
 *
 * Each type of data component such Autocomplete, DataTable, List,.. needs to provide its own
 * specific implementation to handle specific use-case.
 *
 * ```
 *  export abstract class DataTableDataSource<T> implements DataSource<T> {
 *    data: T[];
 *    filterTerm: string;
 *    paginator: Paginator | null
 *
 *    filterPredicate: ((data: T, filter: string) => boolean;
 *
 *    sortData: ((data: T[], sort: Sort) => T[]);
 *
 *    //
 *    create (t: T): T;
 *    update (t: T): T;
 *    remove (t: T): T;
 *
 *  }
 * ```
 *
 * After we define a format we can start creating concrete implementations based on the usage or
 * resource .e.g:
 *
 *
 * ```
 * export abstract class RestAutoCompleteDataSource<T> extend DataChooserDataSource <T> {
 *   // We can use a registry that is able to map a Entity Type = Endpoint
 *   // have identical way how to fetch , search ,...
 * }
 * ```
 *
 * Probably when working with data only locally, it can be:
 *
 * ```
 * export abstract class LocalArrayAutoCompleteDataSource<T> extend DataChooserDataSource <T> {
 * }
 * ```
 *
 *
 */
import { InjectionToken } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

export enum MatchingStrategy {
    STARTS_WITH_PER_TERM = 'starts with per term',
    STARTS_WITH = 'starts with',
    CONTAINS = 'contains'
}

export const DATA_PROVIDERS = new InjectionToken<Map<string, DataProvider<any>>>('DataProviderRegistry');

export interface DataSource<T, P = T[], L = boolean> {
    open(): Observable<P>;
    close(): void;
    isDataLoading: L;
    onDataRequested(): Observable<void>;
    onDataReceived(): Observable<void>;
}

export type MatchBy = (item: any) => any;

export interface MatchingBy {
    firstBy: MatchBy;
    secondaryBy?: MatchBy;
}

/** Matching Strategy: StartsWithPerTerm - Reqexp */
export function getMatchingStrategyStartsWithPerTermReqexp(value: string): RegExp {
    // We need to escape all special characters in order not to break the regular expression.
    return new RegExp(`(\\s|^)(${value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi');
}

/** @ignore */
export function isDataSource<T = any>(value: any): value is DataSource<T> {
    return value && typeof value.open === 'function';
}

export type ProviderParams = ReadonlyMap<string, any>;
/**
 * Provider is a data driver that can access data and retrieve them. It knows how to get 1
 * or more records, maybe do paging and some other things.
 *
 */
export abstract class DataProvider<T> {
    abstract fetch(params: ProviderParams, start?: number, end?: number): Observable<T[]>;

    /** @ignore */
    protected _keyPath: string;

    /** @ignore */
    protected _matchingStrategy: MatchingStrategy = MatchingStrategy.STARTS_WITH;

    /** @ignore */
    protected _matchingBy: MatchingBy | null = null;

    /** @ignore */
    getTotalItems?(): Observable<number>;

    /**
     * Tells if this DataProvider supports INSERT, REMOVE
     *
     */
    canCRUD(): boolean {
        return false;
    }

    // Implement to support CRUD operations.

    /** @ignore */
    getOne(params: ProviderParams): Observable<T> {
        throw new Error('Not supported');
    }

    /** @ignore */
    insert(payload: any, params?: ProviderParams): Observable<T> {
        throw new Error('Not supported');
    }

    /** @ignore */
    remove(params: ProviderParams): Observable<boolean> {
        throw new Error('Not supported');
    }

    /** @ignore */
    update(payload: any, params?: ProviderParams): Observable<T> {
        throw new Error('Not supported');
    }

    /** @ignore */
    setLookupKey(key: string): void {
        this._keyPath = key;
    }

    /** @ignore */
    setMatchingBy(matchingBy: MatchingBy): void {
        this._matchingBy = matchingBy;
    }

    /** @ignore */
    setMatchingStrategy(strategy: MatchingStrategy): void {
        this._matchingStrategy = strategy;
    }
}

export class ComboBoxDataSource<T> implements DataSource<T> {
    /** @ignore */
    static readonly MaxLimit = 5;

    /** @ignore */
    limitless = false;

    /** @ignore */
    protected readonly _dataChanges: BehaviorSubject<T[]> = new BehaviorSubject<T[]>([]);
    /** @ignore */
    protected readonly _onDataRequested$ = new Subject<void>();
    /** @ignore */
    protected readonly _onDataReceived$ = new Subject<void>();
    /** @ignore */
    protected readonly _onDestroy$ = new Subject<void>();
    /** @ignore */
    protected _dataLoading = false;

    /** @ignore */
    get isDataLoading(): boolean {
        return this._dataLoading;
    }

    /** @ignore */
    constructor(public dataProvider: DataProvider<any>) {}

    /** @ignore */
    match(predicate: string | Map<string, string> = new Map<string, string>(), start = 0, end = Infinity): void {
        this._onDataRequested$.next();
        this._dataLoading = true;
        const searchParam = new Map();

        if (typeof predicate === 'string') {
            searchParam.set('query', predicate);
        } else if (predicate instanceof Map) {
            predicate.forEach((v, k) => searchParam.set(k, v));
        } else {
            throw new Error('DataSource.match() predicate can only accepts string and Map');
        }

        if (!searchParam.has('limit') && !this.limitless) {
            searchParam.set('limit', ComboBoxDataSource.MaxLimit);
        }

        this.dataProvider
            .fetch(searchParam, start, end)
            .pipe(takeUntil(this._onDestroy$))
            .subscribe(
                (result: T[]) => {
                    this._onDataReceived$.next();
                    this._dataLoading = false;
                    this._dataChanges.next(result);
                },
                () => {
                    this._onDataReceived$.next();
                    this._dataLoading = false;
                }
            );
    }

    /** @ignore */
    open(): Observable<T[]> {
        return this._dataChanges.pipe(takeUntil(this._onDestroy$));
    }

    /** @ignore */
    close(): void {
        this._onDestroy$.next();
    }

    /** @ignore */
    onDataRequested(): Observable<void> {
        return this._onDataRequested$.asObservable();
    }

    /** @ignore */
    onDataReceived(): Observable<void> {
        return this._onDataReceived$.asObservable();
    }
}

export class MultiComboBoxDataSource<T> extends ComboBoxDataSource<T> {
    /** @ignore */
    constructor(public dataProvider: DataProvider<any>) {
        super(dataProvider);
    }
}

export class SearchFieldDataSource<T> extends ComboBoxDataSource<T> {
    /** @ignore */
    constructor(public dataProvider: DataProvider<any>) {
        super(dataProvider);
    }
}

export class ListDataSource<T> extends ComboBoxDataSource<T> {
    /** @ignore */
    limitless = true;
    /** @ignore */
    constructor(public dataProvider: DataProvider<any>) {
        super(dataProvider);
    }
}

export class MultiInputDataSource<T> extends ComboBoxDataSource<T> {
    /** @ignore */
    constructor(public dataProvider: DataProvider<any>) {
        super(dataProvider);
    }
}

export class ApprovalFlowUserDataSource<T> extends ComboBoxDataSource<T> {
    /** @ignore */
    constructor(public dataProvider: DataProvider<T>) {
        super(dataProvider);
    }
}

export class ApprovalFlowTeamDataSource<T> extends ComboBoxDataSource<T> {
    /** @ignore */
    constructor(public dataProvider: DataProvider<T>) {
        super(dataProvider);
    }
}
