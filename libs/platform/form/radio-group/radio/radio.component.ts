import { FocusableOption } from '@angular/cdk/a11y';
import {
    AfterViewInit,
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    ElementRef,
    EventEmitter,
    Host,
    Inject,
    Input,
    Optional,
    Output,
    Self,
    SkipSelf,
    TemplateRef,
    ViewChild
} from '@angular/core';
import { ControlContainer, FormsModule, NgControl, NgForm } from '@angular/forms';

import { NgTemplateOutlet } from '@angular/common';
import { FD_FORM_FIELD, FD_FORM_FIELD_CONTROL } from '@fundamental-ngx/cdk/forms';
import { RadioButtonComponent as CoreRadioButtonComponent } from '@fundamental-ngx/core/radio';
import { BaseInput, PlatformFormField, PlatformFormFieldControl } from '@fundamental-ngx/platform/shared';

let uniqueId = 0;

@Component({
    selector: 'fdp-radio-button',
    templateUrl: './radio.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true,
    imports: [CoreRadioButtonComponent, FormsModule, NgTemplateOutlet]
})
export class RadioButtonComponent extends BaseInput implements AfterViewInit, FocusableOption {
    /** sets radio button tooltip */
    @Input()
    title: string;

    /**
     * Includes the Radio in the page tab sequence.
     */
    @Input()
    tabIndex = -1;

    /** value for Radio button */
    @Input()
    set value(newValue: any) {
        this._value = newValue;
    }
    get value(): any {
        return super.getValue();
    }

    /** used for radio button creation if list value present */
    @Input()
    forceRender = false;

    /** reference of template */
    @ViewChild('renderer')
    renderer: TemplateRef<any>;

    /** @ignore */
    _currentValue: any;

    /** @ignore Radio checked status */
    _isChecked = false;

    /** click event to emit */
    @Output()
    readonly checked: EventEmitter<RadioButtonComponent> = new EventEmitter();

    /** Access radio button child element passed as content of radio button group */
    @ViewChild(CoreRadioButtonComponent, { static: false })
    private coreRadioButton: CoreRadioButtonComponent;

    /** @ignore */
    constructor(
        cd: ChangeDetectorRef,
        elementRef: ElementRef,
        @Optional() @Self() ngControl: NgControl,
        @Optional() @SkipSelf() controlContainer: ControlContainer,
        @Optional() @SkipSelf() ngForm: NgForm,
        @Optional() @SkipSelf() @Host() @Inject(FD_FORM_FIELD) formField: PlatformFormField,
        @Optional() @SkipSelf() @Host() @Inject(FD_FORM_FIELD_CONTROL) formControl: PlatformFormFieldControl
    ) {
        super(cd, elementRef, ngControl, controlContainer, ngForm, formField, formControl);

        if (this.ngControl) {
            this.ngControl.valueAccessor = this;
        }
        // @ignore have to set default initial values as base class has check and throws error
        this.id = `fdp-radio-id-${uniqueId}`;
        this.name = `fdp-radio-name-${uniqueId}`;
        uniqueId++;
    }

    /** @ignore Controlvalue accessor */
    writeValue(value: any): void {
        this._valueChange(value);
    }

    /** @ignore */
    ngAfterViewInit(): void {
        super.ngAfterViewInit();
    }

    /** @ignore */
    _valueChange(value: any, emitEvent = false): void {
        if (this.disabled) {
            emitEvent = false;
        }

        this._currentValue = value;
        this._isChecked = this._currentValue === super.getValue();
        if (this._isChecked && emitEvent) {
            this.checked.emit(this);
        }
        this.tabIndex = this._isChecked ? 0 : -1;
        this._cd.detectChanges();
        if (emitEvent) {
            this.onChange(value);
            this.onTouched();
        }
    }

    /** method for cdk FocusKeymanager */
    focus(): void {
        this.coreRadioButton?.inputElement.nativeElement.focus();
    }

    /** method to select radio button */
    select(): void {
        this._valueChange(super.getValue());
    }

    /** method to uncheck radio button */
    unselect(): void {
        this._valueChange(undefined);
    }

    /** Setting tabIndex for radio accessibility */
    setTabIndex(index: 0 | -1): void {
        this.tabIndex = index;
        this._cd.markForCheck();
    }
}
