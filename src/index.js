import navbar from "./modules/components/navbar";
import homePage from "./modules/pages/home";
import contactPage from "./modules/pages/contact"
import menuPage from "./modules/pages/menu"
import { appendChildren } from "./modules/helpers/domManipulation";

// initial page load
const content = document.querySelector('#content');
appendChildren(content, navbar(), homePage());

const navItems = document.querySelector('.nav-items').childNodes;
navItems.forEach(page => {
    page.addEventListener('click', () => handleNavigation(page.textContent.toLowerCase()))
});

function handleNavigation(page) {
    // clear everything except navbar
    Array.from(content.children).splice(1).forEach(item => item.remove());
    if (page === 'contact') {
        content.appendChild(contactPage())    
    } else if (page === 'menu') {
        content.appendChild(menuPage())
    } else {
        content.appendChild(homePage());
    }
}