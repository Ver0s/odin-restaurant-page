import { createElement } from "../helpers/domManipulation"

function contact() {
    const container = createElement({
        tag: 'div',
        classList: 'container',
    });
    const h1 = createElement({
        tag: 'h1',
        textContent: 'Contact:',
    })
    const p = createElement({
        tag: 'p',
        textContent: 'Some city, some street, number'
    })

    container.appendChild(h1);
    container.appendChild(p);
    return container;
}

export default contact;