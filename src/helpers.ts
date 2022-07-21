export const makeEvent = (eventName: string, inOptions = {}) => {
    const options = { detail: null, bubbles: true, composed: true, ...inOptions };
    return new CustomEvent(eventName, options);
}

export type StickyStateOptions = {
    el: Element | null,
    fackeEl?: Element | null,
    classToggle?: string
    rootMargin?: string
    threshold?: number | number[] | undefined
}