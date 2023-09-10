import { BaseToastDurationDismissibleConfig } from '@fundamental-ngx/cdk/utils';

/**
 * Configuration used when opening a Message Toast.
 */
export class MessageToastConfig<T = any> extends BaseToastDurationDismissibleConfig<T> {
    /** Whether to truncate Message Toast text. Default is `false`. */
    truncate?: boolean = false;
}