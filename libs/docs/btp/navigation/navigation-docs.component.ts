import { Component } from '@angular/core';
import {
    CodeExampleComponent,
    ComponentExampleComponent,
    DescriptionComponent,
    DocsSectionTitleComponent,
    ExampleFile,
    SeparatorComponent,
    getExampleFile
} from '@fundamental-ngx/docs/shared';
import { NavigationBasicExampleComponent } from './examples/basic-example/navigation-basic-example.component';
import { NavigationDataSourceExampleComponent } from './examples/data-source/navigation-data-source-example.component';
import { NavigationParentItemLinkComponent } from './examples/parent-item-link/navigation-parent-item-link.component';
import { NavigationSelectionExampleComponent } from './examples/selection-example/navigation-selection-example.component';

@Component({
    templateUrl: './navigation-docs.component.html',
    standalone: true,
    imports: [
        DocsSectionTitleComponent,
        DescriptionComponent,
        ComponentExampleComponent,
        CodeExampleComponent,
        NavigationBasicExampleComponent,
        SeparatorComponent,
        NavigationParentItemLinkComponent,
        NavigationDataSourceExampleComponent,
        NavigationSelectionExampleComponent
    ]
})
export class NavigationDocsComponent {
    basicExample: ExampleFile[] = [
        getExampleFile('basic-example/navigation-basic-example.component.ts', {
            component: 'NavigationBasicExampleComponent'
        }),
        getExampleFile('basic-example/navigation-basic-example.component.html')
    ];

    dataSourceExample: ExampleFile[] = [
        getExampleFile('data-source/navigation-data-source-example.component.ts', {
            component: 'NavigationDataSourceExampleComponent'
        }),
        getExampleFile('basic-example/navigation-data-source-example.component.html')
    ];

    selectionExample: ExampleFile[] = [
        getExampleFile('selection-example/navigation-selection-example.component.ts', {
            component: 'NavigationSelectionExampleComponent'
        }),
        getExampleFile('selection-example/navigation-selection-example.component.html')
    ];

    parentItemLinkExample: ExampleFile[] = [
        getExampleFile('parent-item-link/navigation-parent-item-link.component.ts', {
            component: 'NavigationParentItemLinkComponent'
        }),
        getExampleFile('parent-item-link/navigation-parent-item-link.component.html')
    ];
}
