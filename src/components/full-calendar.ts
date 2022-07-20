import { html, LitElement } from 'lit'
import '@fullcalendar/core/vdom'
import { customElement, property } from 'lit/decorators.js'
import { Calendar, CalendarOptions } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from "@fullcalendar/timegrid";
import listPlugin from "@fullcalendar/list";
import interactionPlugin from "@fullcalendar/interaction";
import { makeEvent } from '../helpers';

import fullCalendarStyle from './_full-calendar.scss';

/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart editor - The tiptap editor
 */
@customElement('full-calendar')
export class FullCalendar extends LitElement {
  static styles = fullCalendarStyle
  
  @property({ type: Array })
  value: Array<any> = []

  @property({ type: Object })
  options: CalendarOptions = {}

  calendarInstance: Object = { model: null }

  calendar: Calendar = {} as Calendar

  firstUpdated() {
    this.setup();
  }

  setup() {
    console.log({ 'this.value': this.value })
    const calendarOptions = {
      plugins: [dayGridPlugin, timeGridPlugin, listPlugin, interactionPlugin],
      headerToolbar: {
        left: "prev,next today",
        center: "title",
        right: "dayGridMonth,timeGridWeek,timeGridDay",
      },
      // initialDate: TODAY,
      navLinks: true, // can click day/week names to navigate views
      selectable: true,
      selectMirror: true,

      views: {
        dayGridMonth: { buttonText: "month" },
        timeGridWeek: { buttonText: "week" },
        timeGridDay: { buttonText: "day" },
      },

      editable: true,
      dayMaxEvents: true, // allow "more" link when too many events
      events: this.value,
      dateClick: this._onAddNewEvent.bind(this),
      eventClick: this._onAddNewEvent.bind(this),
      ...this.options,
    } as CalendarOptions;
    console.log({ calendarOptions })
    const calendarEl = this.renderRoot.querySelector('.full-calendar') as HTMLElement;
    console.log('calendarEl', calendarEl)

    this.calendar = new Calendar(calendarEl, calendarOptions);

    this.calendar.render();
    this._onCreated(this.calendar)
  }

  updateModel() {
    this.calendar.setOption('events', this.value)
  }

  // Render the UI as a function of component state
  render() {
    return html`<div class="full-calendar"></div>`;
  }

  // createRenderRoot() {
  //   /**
  //    * Render template in light DOM. Note that shadow DOM features like 
  //    * encapsulated CSS are unavailable.
  //    */
  //   return this;
  // }

  _onAddNewEvent(value: any) {
    if (this.value !== value) {
      // this.dispatchEvent(makeEvent('onChange', { detail: { value } }));
    }
  }

  _onChange(value: Array<any>) {
    if (this.value !== value) {
      this.dispatchEvent(makeEvent('onChange', { detail: { value } }));
    }
  }

  _onCreated(model: Calendar) {
    if (model) {
      this.calendarInstance.model = model
      this.dispatchEvent(makeEvent('onCreated', { detail: { model } }));
    }
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'full-calendar': FullCalendar
  }
}
