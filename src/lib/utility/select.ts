export function select(selector: string, all: boolean | null = false): any {
    selector = selector.trim();
    if (all) {
        return [...document.querySelectorAll(selector)];
    } else {
        return document.querySelector(selector);
    }
};
