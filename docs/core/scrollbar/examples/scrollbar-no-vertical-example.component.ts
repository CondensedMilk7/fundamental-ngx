import { CdkScrollable } from '@angular/cdk/overlay';
import { Component } from '@angular/core';
import { ScrollbarDirective } from '@fundamental-ngx/core/scrollbar';

@Component({
    selector: 'fd-scrollbar-no-vertical-example',
    template: `
        <div fd-scrollbar noVerticalScroll [style.height.px]="200">
            <div [style.width.px]="9000" [style.height.px]="9000"></div>
        </div>
    `,
    standalone: true,
    imports: [CdkScrollable, ScrollbarDirective]
})
export class ScrollbarNoVerticalExampleComponent {}
