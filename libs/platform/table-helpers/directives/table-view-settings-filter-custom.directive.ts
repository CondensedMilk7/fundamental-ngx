import { Directive, EventEmitter, TemplateRef } from '@angular/core';
import { ContentDensityMode } from '@fundamental-ngx/core/content-density';

export interface FdpViewSettingsFilterCustomDefContext {
    $implicit: any;
    valueChangeEmitter: EventEmitter<unknown>;
    contentDensity: ContentDensityMode;
}

@Directive({ selector: '[fdpViewSettingsFilterCustomDef]', standalone: true })
// eslint-disable-next-line @angular-eslint/directive-class-suffix
export class FdpViewSettingsFilterCustomDef {
    /** @ignore */
    static ngTemplateContextGuard(
        dir: FdpViewSettingsFilterCustomDef,
        ctx: FdpViewSettingsFilterCustomDefContext
    ): ctx is FdpViewSettingsFilterCustomDefContext {
        return true;
    }

    /** @ignore */
    constructor(public templateRef: TemplateRef<FdpViewSettingsFilterCustomDefContext>) {}
}
