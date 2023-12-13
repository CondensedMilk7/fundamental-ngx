import { Observable } from 'rxjs';

/** @ignore */
export function objectValues(obj: any): any[] {
    return Object.keys(obj).map((key) => obj[key]);
}

/** @ignore */
export function objectToName(target: any): string {
    if (isBlank(target) || (!isStringMap(target) && !isType(target))) {
        throw new Error(' Cannot convert. Uknown object');
    }

    return isType(target) ? target.prototype.constructor.name : target.constructor.name;
}

/** @ignore */
export function isJsObject(o: any): boolean {
    return o !== null && (typeof o === 'function' || typeof o === 'object');
}

/** @ignore */
export function isPresent(obj: any): boolean {
    return obj !== undefined && obj !== null;
}

/** @ignore */
export function isBlank(obj: any): boolean {
    return obj === undefined || obj === null;
}

/** @ignore */
export function isBoolean(obj: any): boolean {
    return typeof obj === 'boolean';
}

/** @ignore */
export function isNumber(obj: any): boolean {
    return typeof obj === 'number';
}

/** @ignore */
export function isString(obj: any): obj is string {
    return typeof obj === 'string';
}

/** @ignore */
export function isFunction(obj: any): boolean {
    return typeof obj === 'function';
}

/** @ignore */
export function isType(obj: any): boolean {
    return isFunction(obj);
}

/** @ignore */
export function isStringMap(obj: any): obj is Record<string, any> {
    return typeof obj === 'object' && obj !== null;
}

/** @ignore */
export function isObject<T>(item: T): boolean {
    return typeof item === 'object' && !Array.isArray(item) && item !== null;
}

/** @ignore */
export function isPromise<T = any>(obj: any): obj is Promise<T> {
    // allow any Promise/A+ compliant thenable.
    // It's up to the caller to ensure that obj.then conforms to the spec
    return !!obj && isFunction(obj.then);
}

/** @ignore */
export function isSubscribable(obj: any | Observable<any>): obj is Observable<any> {
    return !!obj && isFunction(obj.subscribe);
}
