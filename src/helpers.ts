export const makeEvent = (eventName: string, inOptions = {}) => {
    const options = { detail: null, bubbles: true, composed: true, ...inOptions };
    return new CustomEvent(eventName, options);
}