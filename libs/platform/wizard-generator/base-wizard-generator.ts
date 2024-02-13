import { ChangeDetectorRef, DestroyRef, Directive, EventEmitter, Input, Output, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { debounceTime, finalize } from 'rxjs/operators';

import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { Nullable } from '@fundamental-ngx/cdk/utils';
import { ContentDensityMode } from '@fundamental-ngx/core/content-density';
import { WizardStepStatus } from '@fundamental-ngx/core/wizard';
import { WizardGeneratorFormsValue, WizardStepSubmittedForms } from './interfaces/wizard-generator-forms.interface';
import { PreparedWizardGeneratorItem, WizardGeneratorItem } from './interfaces/wizard-generator-item.interface';
import { WizardNavigationButtons } from './interfaces/wizard-navigation-buttons.interface';
import { WizardGeneratorService } from './wizard-generator.service';

/**
 * @description Default button labels.
 */
export const DEFAULT_WIZARD_NAVIGATION_BUTTONS: Required<WizardNavigationButtons> = {
    goBack: {
        label: 'Previous Step',
        contentDensity: ContentDensityMode.COMPACT,
        type: 'ghost'
    },
    goNext: {
        label: 'Next Step',
        contentDensity: ContentDensityMode.COMPACT,
        type: 'emphasized'
    },
    cancel: {
        label: 'Cancel',
        contentDensity: ContentDensityMode.COMPACT,
        type: 'ghost'
    },
    finish: {
        label: 'Finish',
        contentDensity: ContentDensityMode.COMPACT,
        type: 'emphasized'
    },
    review: {
        label: 'Review',
        contentDensity: ContentDensityMode.COMPACT,
        type: 'emphasized'
    }
};

/**
 * @description Base Wizard Generator component with necessary inputs and methods.
 */
@Directive()
export class BaseWizardGenerator {
    /**
     * @description Whether or not apply responsive paddings styling.
     */
    @Input()
    responsivePaddings = true;

    /**
     * @description Button labels to be used in Wizard navigation
     */
    @Input()
    set navigationButtonLabels(value: WizardNavigationButtons) {
        this._navigationButtonLabels = Object.assign({}, DEFAULT_WIZARD_NAVIGATION_BUTTONS, value);
    }
    get navigationButtonLabels(): WizardNavigationButtons {
        return this._navigationButtonLabels;
    }

    /**
     * @description Array of Wizard Steps.
     */
    @Input()
    set items(items: WizardGeneratorItem[]) {
        this.wizardCreated = false;
        this._wizardGeneratorService.clearWizardStepComponents();

        if (!items) {
            return;
        }

        this._wizardGeneratorService.prepareWizardItems(items).then((newItems) => {
            this._items = newItems;
            this._visibleItems = newItems;
            this.wizardCreated = true;
            this._cd.detectChanges();
        });
    }
    get items(): WizardGeneratorItem[] {
        return this._items;
    }

    /**
     * Whether to append the step to the wizard. If false, each step will be displayed on a different page.
     * Default is true.
     */
    @Input()
    set appendToWizard(value: boolean) {
        this._wizardGeneratorService.setOriginalAppendToWizardState(value);
    }

    get appendToWizard(): boolean {
        return this._appendToWizard;
    }

    /** If navigation buttons should be visible. */
    @Input()
    navigationButtons = true;

    /**
     * Custom height to use for the wizard's content pane. By default, this value is calc(100vh - 144px), where 144px
     * is the combined height of the shellbar, wizard header and wizard footer.
     */
    @Input()
    contentHeight: Nullable<string>;

    /**
     * @description Boolean flag indicating whether to display Summary step in Wizard progress bar.
     */
    @Input()
    displaySummaryStep = false;

    /** Whether all form items should have identical layout provided for form group. */
    @Input()
    unifiedLayout = true;

    /**
     * @description Emits wizard value when it's completed.
     */
    @Output()
    wizardFinished: EventEmitter<WizardGeneratorFormsValue> = new EventEmitter();

    /**
     * Flag indicating that wizard is ready to be shown
     */
    wizardCreated = false;

    /**
     * @description Is current step is summary step.
     */
    get isSummaryStep(): boolean {
        const currentIndex = this._wizardGeneratorService.getCurrentStepIndex();

        return this.visibleItems[currentIndex]?.summary === true;
    }

    /**
     * @description Array of visible Wizard Steps.
     */
    set visibleItems(items: PreparedWizardGeneratorItem[]) {
        this._visibleItems = items;
    }
    get visibleItems(): PreparedWizardGeneratorItem[] {
        return this._visibleItems || this._items;
    }

    /**
     * @description Whether or not Wizard is currently on the first step
     */
    get isFirstStep(): boolean {
        return this.visibleItems[0]?.status === 'current';
    }

    /**
     * @description Whether or not Wizard is currently on the last step
     */
    get isLastStep(): boolean {
        const lastStep = this.visibleItems[this.visibleItems.length - 1];
        return lastStep?.status === 'current' && !lastStep.branching;
    }

    /**
     * Whether current step is a branching step.
     */
    get isBranchingStep(): boolean {
        const currentIndex = this._wizardGeneratorService.getCurrentStepIndex();

        return this._visibleItems[currentIndex]?.branching === true;
    }

    /**
     * Whether the next step is a Summary step.
     */
    get isNextStepSummary(): boolean {
        const nextStep = this.visibleItems[this._nextStepIndex];
        return nextStep?.summary === true;
    }

    /** Whether the current step is completed */
    get isCurrentStepCompleted(): boolean {
        const currentIndex = this._wizardGeneratorService.getCurrentStepIndex();
        return this._visibleItems[currentIndex]?.completed === true;
    }

    /**
     * @hidden
     */
    _visibleItems: PreparedWizardGeneratorItem[] = [];

    /** @hidden */
    _nextStepIndex: number;

    /** @hidden */
    _stepsOrderChanged = false;

    /**
     * @hidden
     */
    private _items: PreparedWizardGeneratorItem[] = [];

    /** @hidden */
    private _appendToWizard = false;

    /**
     * @hidden
     */
    private _formPending = false;

    /**
     * @hidden
     */
    protected readonly _destroyRef = inject(DestroyRef);

    /** @hidden */
    protected readonly _wizardGeneratorService = inject(WizardGeneratorService);

    /** @hidden */
    protected readonly _cd = inject(ChangeDetectorRef);

    /**
     * @hidden
     */
    _navigationButtonLabels: Required<WizardNavigationButtons> = DEFAULT_WIZARD_NAVIGATION_BUTTONS;

    /** @hidden */
    constructor() {
        this._wizardGeneratorService
            .getVisibleSteps()
            .pipe(debounceTime(10), takeUntilDestroyed(this._destroyRef))
            .subscribe((visibleSteps) => {
                this.visibleItems = visibleSteps;
                this._cd.detectChanges();
            });

        this._wizardGeneratorService
            .trackStepsComponents()
            .pipe(debounceTime(10), takeUntilDestroyed(this._destroyRef))
            .subscribe(async (stepsComponents) => {
                if (stepsComponents.size === this.items?.length) {
                    await this._setVisibleSteps();
                }
            });

        this._wizardGeneratorService
            .trackAppendToWizardState()
            .pipe(takeUntilDestroyed(this._destroyRef))
            .subscribe((value) => {
                this._appendToWizard = value;
            });

        this._wizardGeneratorService
            .trackStepsOrder()
            .pipe(takeUntilDestroyed(this._destroyRef))
            .subscribe((newNextStep) => {
                this._nextStepIndex = newNextStep;
                this._stepsOrderChanged = true;
            });

        this._wizardGeneratorService
            .trackNextStepIndex()
            .pipe(takeUntilDestroyed(this._destroyRef))
            .subscribe((index) => {
                this._nextStepIndex = index;
            });
    }

    /**
     * @description Reverts Wizard progress one step back.
     */
    goBack(): void {
        const currentStepIndex = this._wizardGeneratorService.getCurrentStepIndex();
        const previousStepIndex = currentStepIndex - 1;

        if (this.visibleItems[previousStepIndex] === undefined) {
            return;
        }

        this._stepsOrderChanged = false;

        this.visibleItems[currentStepIndex].status = 'upcoming';
        this.visibleItems[previousStepIndex].status = 'current';
        this._wizardGeneratorService.setVisibleSteps(this.visibleItems);

        this._wizardGeneratorService.setNextStepIndex(currentStepIndex);

        this._cd.detectChanges();
    }

    /**
     * @description Progresses the Wizard one step further.
     */
    async goNext(): Promise<void> {
        if (this._formPending) {
            return;
        }

        const currentStepIndex = this._wizardGeneratorService.getCurrentStepIndex();
        const nextStepIndex = this._nextStepIndex;

        this._wizardGeneratorService
            .validateStepForms()
            .pipe(takeUntilDestroyed(this._destroyRef))
            .subscribe(async (result) => {
                if (!result) {
                    return;
                }

                await this._setVisibleSteps();

                const steps = this.visibleItems;

                if (steps[nextStepIndex] === undefined) {
                    return;
                }

                this._stepsOrderChanged = false;

                steps[currentStepIndex].status = 'completed';
                steps[currentStepIndex].completed = true;
                steps[nextStepIndex].status = 'current';

                this._wizardGeneratorService.setVisibleSteps(steps);

                this._wizardGeneratorService.setNextStepIndex(nextStepIndex + 1);

                this._cd.detectChanges();
            });
    }

    /**
     * @description Submits step forms.
     * @param currentStepIndex current step index.
     * @returns {Observable<WizardStepSubmittedForms | null>} Observable with form values.
     */
    submitStepForms(currentStepIndex?: string): Observable<WizardStepSubmittedForms | null> {
        this._formPending = true;

        return this._wizardGeneratorService.submitStepForms(currentStepIndex).pipe(
            finalize(() => {
                this._formPending = false;
            })
        );
    }

    /**
     * @description Completes the wizard and emits it's formatted value.
     */
    async finish(): Promise<void> {
        if (this.isSummaryStep) {
            const wizardResult = await this._wizardGeneratorService.getWizardFormValue(true);
            this.wizardFinished.emit(wizardResult);
            return;
        }

        this._wizardGeneratorService
            .validateStepForms()
            .pipe(takeUntilDestroyed(this._destroyRef))
            .subscribe(async (result) => {
                if (!result) {
                    return;
                }

                const wizardResult = await this._wizardGeneratorService.getWizardFormValue(true);

                this.wizardFinished.emit(wizardResult);
            });
    }

    /**
     * @description Callback function to update steps status.
     * @param stepNumber Step ID to be updated.
     * @param status New step status.
     */
    async stepStatusChanged(stepId: string, status: WizardStepStatus): Promise<void> {
        const stepIndex = this._visibleItems.findIndex((s) => s.id === stepId);

        this._visibleItems[stepIndex].status = status;

        await this._wizardGeneratorService.refreshStepVisibility();
    }

    /**
     * @hidden
     */
    private async _setVisibleSteps(): Promise<void> {
        await this._wizardGeneratorService.refreshStepVisibility();

        this.wizardCreated = true;

        this._cd.detectChanges();
    }
}
