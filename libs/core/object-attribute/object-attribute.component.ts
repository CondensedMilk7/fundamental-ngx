import {
    ChangeDetectionStrategy,
    Component,
    ElementRef,
    EventEmitter,
    Input,
    OnInit,
    Output,
    Renderer2,
    ViewEncapsulation
} from '@angular/core';
import { warnOnce } from '@fundamental-ngx/cdk/utils';

@Component({
    selector: 'fd-object-attribute, fdp-object-attribute',
    templateUrl: './object-attribute.component.html',
    styleUrl: './object-attribute.component.scss',
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true,
    imports: []
})
export class ObjectAttributeComponent implements OnInit {
    /** label for the element */
    @Input()
    label: string;

    /** Text in link */
    @Input()
    linkText: string;

    /** Is linked object attribute */
    @Input()
    islink: boolean;

    /** To disabled linked object attribute */
    @Input()
    disabled: boolean;

    /** Emitting object attribute link click event */
    @Output()
    objectAttributeclick = new EventEmitter<Event>();

    /** @ignore */
    constructor(
        private _el: ElementRef<HTMLElement>,
        private _renderer: Renderer2
    ) {
        if (this._el.nativeElement.tagName === 'fdp-object-attribute') {
            warnOnce('`fdp-object-attribute` selector is deprecated, use `fd-object-attribute` instead.');
        }
    }

    /** @ignore */
    ngOnInit(): void {
        this._renderer.addClass(this._el.nativeElement, 'fd-object-attribute');
        if (this.label !== null && this.label !== undefined) {
            this._renderer.setProperty(this._el.nativeElement, 'aria-label', this.label);
            this._renderer.setProperty(this._el.nativeElement, 'title', this.label);
        }
    }

    /**
     *  Handles link click
     */
    onObjectAttributeClick(event: Event): void {
        if (this.islink) {
            this.objectAttributeclick.emit(event);
        }
    }
}
