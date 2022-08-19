// https://dev.to/ahmedadel/custom-javascript-createelement-function-244f
function createElement(elObj) {
    const element = document.createElement(elObj.tag);
    for (const prop in elObj) {
        element[prop] = elObj[prop];
    }
    return element;
}

function appendChildren(parent, ...children) {
    for (const child of children){
        parent.appendChild(child);
    }

    return parent;
}

export { createElement, appendChildren }