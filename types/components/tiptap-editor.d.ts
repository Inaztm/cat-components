import { LitElement } from 'lit';
import { Editor } from '@tiptap/core';
/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart editor - The tiptap editor
 */
export declare class TiptapEditor extends LitElement {
    static styles: import("lit").CSSResult;
    value: string;
    editor: any;
    firstUpdated(): void;
    setupEditor(): void;
    render(): import("lit-html").TemplateResult<1>;
    _onChange(value: string): void;
    _onFocus(): void;
    _onBlur(): void;
    _onCreated(data: Editor): void;
}
declare global {
    interface HTMLElementTagNameMap {
        'tiptap-editor': TiptapEditor;
    }
}