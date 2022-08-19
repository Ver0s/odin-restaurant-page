import { createElement, appendChildren } from "../helpers/domManipulation"
import "../../styles/style.css"
import logoImage from "../../assets/images/logo.svg"

function navbar() {
    const header = createElement({
        tag: 'header',
    });
    const container = createElement({
        tag: 'div',
        classList: 'container',
    });
    const navContainer = createElement({
        tag: 'div',
        classList: 'nav-container',
    })
    const logo = createElement({
        tag: 'div',
        classList: 'logo',
    })
    const logoImg = createElement({
        tag: 'img',
        src: logoImage,
    })
    const nav = createElement({
        tag: 'nav',
    })
    const ul = createElement({
        tag: 'ul',
        classList: 'nav-items',
    })
    const homeLi = createElement({
        tag: 'li',
        id: 'home',
        textContent: 'Home',
    })
    const menuLi = createElement({
        tag: 'li',
        id: 'menu',
        textContent: 'Menu',
    })
    const contactLi = createElement({
        tag: 'li',
        id: 'contact',
        textContent: 'Contact',
    })

    header.appendChild(container);
    container.appendChild(navContainer);
    navContainer.appendChild(logo);
    logo.appendChild(logoImg);
    navContainer.appendChild(nav);
    nav.appendChild(ul);
    appendChildren(ul, homeLi, menuLi, contactLi);

    return header;
}

export default navbar