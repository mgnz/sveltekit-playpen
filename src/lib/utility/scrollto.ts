import { select } from "./select"

export function scrollto(selector: string): any {
    let elementPos = select(selector).offsetTop;
    window.scrollTo({
        top: elementPos,
        behavior: 'smooth'
    });
};