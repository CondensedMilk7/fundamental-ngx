import { Directive, HostBinding } from '@angular/core';

@Directive({
    selector: '[fdTableFixed], [fd-table-fixed]',
    standalone: true
})
export class TableFixedDirective {
    /** @ignore */
    @HostBinding('class.fd-table--fixed')
    fdTableFixedClass = true;
}
