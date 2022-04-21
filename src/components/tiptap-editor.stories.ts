import { Meta, StoryObj } from '@storybook/web-components'
import { html } from 'lit'

import './tiptap-editor'

export default {
  title: 'Tiptap editor',
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    onChange: { action: 'changed' },
  },
  render: (args) => html`<tiptap-editor @onChange=${args.onChange} .value=${args.value}></tiptap-editor>`,
} as Meta

export const Default: StoryObj = {
  name: 'Default',
  args: {
    value: 'Lit',
  },
}
