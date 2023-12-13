import { Routes } from '@angular/router';
import { PatchingTranslationsDocsComponent } from './patching-translations-docs.component';
import { PatchingTranslationsHeaderComponent } from './patching-translations-header/patching-translations-header.component';

export const LIBRARY_NAME = 'patching-translations';
export const LIBRARY_IMPORT_PATH = '@fundamental-ngx/i18n';
export const ROUTES: Routes = [
    {
        path: '',
        component: PatchingTranslationsHeaderComponent,
        data: { primary: true },
        children: [
            {
                path: '',
                component: PatchingTranslationsDocsComponent
            }
        ]
    }
];
