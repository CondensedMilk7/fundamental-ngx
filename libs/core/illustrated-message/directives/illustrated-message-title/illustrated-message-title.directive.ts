import { Directive, HostBinding } from '@angular/core';

@Directive({
    // TODO to be discussed
    // eslint-disable-next-line @angular-eslint/directive-selector
    selector: '[fd-illustrated-message-title]',
    standalone: true
})
export class IllustratedMessageTitleDirective {
    /** @ignore */
    @HostBinding('class.fd-illustrated-message__title')
    fdIllustratedMessageTitleClass = true;
}
