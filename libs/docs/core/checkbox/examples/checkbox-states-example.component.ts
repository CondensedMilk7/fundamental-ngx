import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonComponent } from '@fundamental-ngx/core/button';
import { CheckboxComponent } from '@fundamental-ngx/core/checkbox';
import { ContentDensityDirective } from '@fundamental-ngx/core/content-density';
import { FormHeaderComponent } from '@fundamental-ngx/core/form';

@Component({
    selector: 'fd-checkbox-states-example',
    template: `
        <h4 fd-form-header>Checkbox States Examples</h4>
        <div>
            <p>States:</p>
            <fd-checkbox [(ngModel)]="checkboxValue1" label="No state"></fd-checkbox>
            <fd-checkbox [(ngModel)]="checkboxValue2" state="information" label="Info state"></fd-checkbox>
            <fd-checkbox [(ngModel)]="checkboxValue3" state="success" label="Success state"></fd-checkbox>
            <fd-checkbox [(ngModel)]="checkboxValue4" state="warning" label="Warning state"></fd-checkbox>
            <fd-checkbox [(ngModel)]="checkboxValue5" state="error" label="Error state"></fd-checkbox>
        </div>
        <div>
            <p>Display-only:</p>
            <fd-checkbox [(ngModel)]="checkboxValue6" [displayOnly]="true" label="Display-only label"></fd-checkbox>
            <button fd-button (click)="toggleDisplay()">Change value to {{ checkboxValue6 }}</button>
        </div>
        <div>
            <p>Disabled:</p>
            <fd-checkbox [(ngModel)]="checkboxValue7" [disabled]="true" label="Disabled label"></fd-checkbox>
        </div>
        <div>
            <p>Read Only:</p>
            <fd-checkbox [(ngModel)]="checkboxValue8" [readonly]="true" label="Read only label"></fd-checkbox>
            <fd-checkbox [(ngModel)]="checkboxValue9" [readonly]="true" label="Read only & checked label"></fd-checkbox>
        </div>
        <div>
            <p>Compact:</p>
            <fd-checkbox [(ngModel)]="checkboxValue10" fdCompact label="Compact label"></fd-checkbox>
        </div>
    `,
    standalone: true,
    imports: [FormHeaderComponent, CheckboxComponent, FormsModule, ContentDensityDirective, ButtonComponent]
})
export class CheckboxStatesExampleComponent {
    public checkboxValue1 = false;
    public checkboxValue2 = false;
    public checkboxValue3 = false;
    public checkboxValue4 = false;
    public checkboxValue5 = false;

    public checkboxValue6 = true;
    toggleDisplay(): void {
        this.checkboxValue6 = !this.checkboxValue6;
    }

    public checkboxValue7 = false;
    public checkboxValue8 = false;
    public checkboxValue9 = true;
    public checkboxValue10 = false;
}
