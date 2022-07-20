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
    static styles: string;
    value: Array<any>;
    options: CalendarOptions;
    calendarInstance: Object;
    calendar: Calendar;
    firstUpdated(): void;
    setup(): void;
    updateModel(): void;
    render(): import("lit-html").TemplateResult<1>;
    _onAddNewEvent(value: any): void;
    _onChange(value: Array<any>): void;
    _onCreated(model: Calendar): void;
}
declare global {
    interface HTMLElementTagNameMap {
        'full-calendar': FullCalendar;
    }
}
