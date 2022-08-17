import { createElement, appendChildren } from "../helpers/domManipulation";
import burgerImage from "../../assets/images/burger.png"

function home() {
    const main = createElement({
        tag: 'main',
    })
    const container = createElement({
        tag: 'div',
        classList: 'container',
    });
    const mainContainer = createElement({
        tag: 'div',
        classList: 'main-container',
    });
    const hero = createElement({
        tag: 'div',
        classList: 'hero',
    })
    const heroText = createElement({
        tag: 'h1',
        classList: 'hero-text',
        textContent: 'The best burgers in town.',
    })
    const button = createElement({
        tag: 'button',
        textContent: 'ORDER NOW',
    })
    const burgerImg = createElement({
        tag: 'img',
        src: burgerImage,
        classList: 'burger-image'
    })

    main.appendChild(container);
    container.appendChild(mainContainer);
    mainContainer.appendChild(hero);
    appendChildren(hero, heroText, button);
    mainContainer.appendChild(burgerImg);

    return main
}

export { home }