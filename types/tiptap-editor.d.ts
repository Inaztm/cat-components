import { LitElement } from 'lit';
/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
export declare class TiptapEditor extends LitElement {
    static styles: import("lit").CSSResult;
    /**
     * The value
     */
    value: string;
    render(): import("lit-html").TemplateResult<1>;
    private setupEditor;
    private _onChange;
    private _onFocus;
    private _onBlur;
    private _onCreated;
}
declare global {
    interface HTMLElementTagNameMap {
        'tiptap-editor': TiptapEditor;
    }
}
