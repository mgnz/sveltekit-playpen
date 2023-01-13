export function onscroll(element: Document, listener: any): void {
    element.addEventListener('scroll', (e: Event) => listener());
};