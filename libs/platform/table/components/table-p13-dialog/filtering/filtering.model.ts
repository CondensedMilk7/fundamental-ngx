import {
    CollectionFilter,
    FilterableColumnDataType,
    FilterStrategy,
    getFilterStrategiesBasedOnDataType,
    TableDialogCommonData
} from '@fundamental-ngx/platform/table-helpers';

export interface FilterableColumn {
    label: string;
    key: string;
    dataType: FilterableColumnDataType;
    filterable?: boolean;
}

export interface FilterDialogData extends TableDialogCommonData {
    collectionFilter: CollectionFilter[];
    columns: FilterableColumn[];
}

export interface FilterDialogResultData {
    collectionFilter: CollectionFilter[];
}

/**
 * Filter Rule
 *
 * represents one rule per row
 */

export class FilterRule<T = any> {
    /** Validation flg */
    isValid = false;

    /** Available strategies options */
    strategies: ReadonlyArray<FilterStrategy> = [];

    /** Data type */
    dataType?: FilterableColumnDataType;

    /** returns whether filter rule has value */
    get hasValue(): boolean {
        return this.valueExists(this.value) || this.valueExists(this.value2);
    }

    /** @ignore */
    constructor(
        readonly columns: ReadonlyArray<FilterableColumn>,
        /** Column key the rule belongs to */
        public columnKey?: string,
        /** Data type */
        public strategy?: FilterStrategy,
        /** Main filter value */
        public value?: T | null,
        /** Additional filter value */
        public value2?: T | null
    ) {
        if (!this.columnKey) {
            this.setColumnKey(columns[0]?.key);
        }
        if (!this.dataType) {
            this.setDataTypeByColumnKey(this.columnKey);
        }
        if (this.strategies.length === 0) {
            this.setStrategiesByColumnKey(this.columnKey);
        }
    }

    /** @ignore */
    setValid(isValid: boolean): void {
        this.isValid = isValid;
    }

    /** @ignore */
    setValue(value: T | null): void {
        this.value = value;
    }

    /** @ignore */
    setValue2(value: T | null): void {
        this.value2 = value;
    }

    /** @ignore */
    setStrategy(strategy: FilterStrategy): void {
        this.strategy = strategy;
    }

    /** @ignore */
    setStrategiesByColumnKey(columnKey?: string): void {
        const dataType = this.columns.find((column) => column.key === columnKey)?.dataType;
        if (!dataType) {
            return;
        }

        const strategies = getFilterStrategiesBasedOnDataType(dataType);

        if (this.strategies === strategies) {
            return;
        }

        this.strategies = strategies;

        if (!this.strategies.includes(this.strategy!)) {
            this.setStrategy(strategies[0]);
        }
    }

    /** @ignore */
    setColumnKey(columnKey: string): void {
        if (columnKey === this.columnKey) {
            return;
        }
        this.columnKey = columnKey;

        // reset values
        this.setValue(null);
        this.setValue2(null);

        // update data type
        this.setDataTypeByColumnKey(columnKey);

        // update available strategies list
        this.setStrategiesByColumnKey(columnKey);
    }

    /** @ignore */
    setDataTypeByColumnKey(columnKey?: string): void {
        const dataType = this.columns.find((column) => column.key === columnKey)?.dataType;

        if (dataType === this.dataType) {
            return;
        }

        this.dataType = dataType;
    }

    /** @ignore */
    private valueExists(value: any): boolean {
        return !!value || value === 0 || typeof value === 'boolean';
    }
}
