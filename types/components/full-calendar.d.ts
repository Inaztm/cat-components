import { LitElement } from 'lit';
import '@fullcalendar/core/vdom';
import { Calendar, CalendarOptions } from '@fullcalendar/core';
/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart editor - The tiptap editor
 */
export declare class FullCalendar extends LitElement {
    static styles: import("lit").CSSResult;
    value: any;
    options: CalendarOptions;
    calendar: Calendar;
    firstUpdated(): void;
    setup(): void;
    render(): import("lit-html").TemplateResult<1>;
    _onAddNewEvent(value: string): void;
    _onChange(value: string): void;
    _onFocus(): void;
    _onBlur(): void;
    _onCreated(model: Calendar): void;
}
declare global {
    interface HTMLElementTagNameMap {
        'full-calendar': FullCalendar;
    }
}
