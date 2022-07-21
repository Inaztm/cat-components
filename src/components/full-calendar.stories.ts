import { Meta, StoryObj } from '@storybook/web-components'
import { html } from 'lit'

import './full-calendar'

export default {
  title: 'Full Calendar',
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    onChange: { action: 'changed' },
    onCreated: { action: 'created' },
  },
  render: (args) => html`
    <full-calendar
      sticky
      style="width: 100%; --pfc-top: 0; --pfc-th-top: 53px; --pfc-header-pined-bg-color: red;"
      @onChange=${args.onChange}
      @onCreated=${args.onCreated}
      .options=${args.options}
      .value=${args.value}
    ></tiptap-editor>
  `,
} as Meta

export const Default: StoryObj = {
  name: 'Default',
  args: {
    value: [
      {
        id: 'a',
        title: 'my event',
        start: '2022-08-10T10:30:00',
        end: '2022-08-10T11:30:00',
      },
      {
        id: 'a',
        title: 'my event 2',
        start: '2022-08-10T10:30:00',
        end: '2022-08-10T11:20:00',
      },
      {
        id: 'a',
        title: 'my event 3',
        start: '2022-08-10T10:30:00',
        end: '2022-08-10T11:20:00',
      }
    ],
    options: {
      themeSystem: '',
      height: 'auto',
      contentHeight: 'auto',
      nowIndicator: true
    },
  },
}
