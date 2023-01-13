import { select } from "./select"

export function on(event: any, selector: any, listener: any, all: boolean | null = false): any {
    let element = select(selector, all);
    if (element) {
        if (all) {
            element.forEach((e: any) => e.addEventListener(event, listener));
        } else {
            element.addEventListener(event, listener);
        }
    }
};