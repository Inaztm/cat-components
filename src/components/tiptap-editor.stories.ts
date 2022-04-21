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
  render: (args) => html`
  <div style="min-width: 500px">
    <tiptap-editor @onChange=${args.onChange} .value=${args.value}></tiptap-editor>
  </div>
  `,
} as Meta

export const Default: StoryObj = {
  name: 'Default',
  args: {
    value: 'Lit',
  },
}

export const Link: StoryObj = {
  name: 'Link',
  args: {
    value: '<p>Test text editor, link&nbsp;<a target="_blank" rel="noopener noreferrer nofollow" class="link" href="https://youtu.be/lfjxMhvCNmA">https://youtu.be/lfjxMhvCNmA</a></p>',
  },
}
