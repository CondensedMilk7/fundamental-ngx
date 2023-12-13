import { Component, Optional } from '@angular/core';
import { MessageBoxConfig, MessageBoxHost } from '../utils/message-box-config.class';

/**
 * Building block of the message box used to create message box body.
 *
 * ```html
 * <fd-message-box-body></fd-message-box-body>
 * ```
 */
@Component({
    selector: 'fd-message-box-body',
    template: '<ng-content></ng-content>',
    host: {
        '[class.fd-message-box__body]': 'true',
        '[class.fd-message-box__body--no-vertical-padding]': '!messageBoxConfig.verticalPadding'
    },
    standalone: true
})
export class MessageBoxBodyComponent {
    /** @ignore */
    get messageBoxConfig(): MessageBoxConfig {
        return this.messageBox?._messageBoxConfig || {};
    }
    /** @ignore */
    constructor(@Optional() private messageBox?: MessageBoxHost) {}
}
