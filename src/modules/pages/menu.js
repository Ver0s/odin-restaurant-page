import { createElement } from "../helpers/domManipulation"

function menu() {
    const container = createElement({
        tag: 'div',
        classList: 'container',
    });
    const h1 = createElement({
        tag: 'h1',
        textContent: 'Menu:',
    })
    const p = createElement({
        tag: 'p',
        textContent: 'Menu items go here.'
    })

    container.appendChild(h1);
    container.appendChild(p);
    return container;
}

export default menu;