import { html, css, LitElement } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import { Editor } from '@tiptap/core';
import StarterKit from '@tiptap/starter-kit';
import Link from '@tiptap/extension-link';

const makeEvent = (dispatcher: any, eventName: string, inOptions = {}) => {
  const options = { detail: null, bubbles: true, composed: true, ...inOptions };
  dispatcher(new CustomEvent(eventName, options));
}

/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart editor - The tiptap editor
 */
@customElement('tiptap-editor')
export class TiptapEditor extends LitElement {
  static styles = css`
    :host {
        --tte-bg-color: transparent;
        --tte-border-color: #50546c;
        --tte-min-height: 100px;
        --tte-link-color: #36a3f7;
    }

    .link {
        color: var(--tte-link-color);
        cursor: pointer;
    }

    .tiptap-editor .ProseMirror {
        background-color: var(--tte-bg-color);
        border: 1px solid var(--tte-border-color);
        border-radius: 3px;
        padding: 0 1em;
        min-height: var(--tte-min-height);
    }
  `

  @property({ type: String })
  value: string = ''

  editor: any;

  firstUpdated() {
    this.setupEditor();
  }

  setupEditor() {
    this.editor = new Editor({
      element: this.renderRoot.querySelector('.tiptap-editor') as HTMLElement,
      extensions: [
        StarterKit,
        Link.configure({
          autolink: true,
          openOnClick: true,
          linkOnPaste: true,
          HTMLAttributes: {
            class: 'link',
          },
        }),
      ],
      content: this.value,
      onBeforeCreate: () => {
      // Before the view is created.
      },
      onCreate: ({ editor }) => {
        this._onCreated(editor);
      },
      onUpdate: ({ editor }) => {
        const value = editor.getHTML();
        this._onChange(value);
      },
      onSelectionUpdate: () => {
      // The selection has changed.
      },
      onTransaction: () => {
      // The editor state has changed.
      },
      onFocus: () => {
        this._onFocus();
      },
      onBlur: () => {
        this._onBlur();
      },
      onDestroy: () => {
      // The editor is being destroyed.
      },
    });
  }

  // Render the UI as a function of component state
  render() {
    return html`<div class="tiptap-editor"></div>`;
  }

  _onChange(value: string) {
    if (this.value !== value) {
      makeEvent(this.dispatchEvent.bind(this), 'onChange', { detail: { value } });
    }
  }

  _onFocus() {
    makeEvent(this.dispatchEvent.bind(this), 'onFocus');
  }

  _onBlur() {
    makeEvent(this.dispatchEvent.bind(this), 'onBlur');
  }

  _onCreated(editor: Editor) {
    if (editor) {
      const editorEl: Element = editor.view.dom;
      makeEvent(this.dispatchEvent.bind(this), 'onCreated', { detail: { editor, editorEl } });
    }
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'tiptap-editor': TiptapEditor
  }
}
