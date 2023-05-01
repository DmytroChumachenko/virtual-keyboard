

const BODY = document.querySelector("body");
let createEl = (tag, className, text, parentElement, action = 'append', attrName, attrValue) => {
  let el = document.createElement(tag);
  if (className) {
    if(!Array.isArray(className)){
      el.classList.add(className);
    } else {
      className.forEach(name => {
        el.classList.add(name)
      });
    }
  }
  if(text) {
    el.textContent = text;
  }
  if (parentElement) {
    parentElement[action](el);
  }
  if(attrName && attrValue) {
    el.setAttribute(attrName, attrValue)
  }
  return el;
}

let textareaEl = createEl("textarea", ["body--textarea", "textarea"], null, BODY, "prepend");

  document.addEventListener("DOMContentLoaded",() => {
    localStorage.setItem('isUkrLayout', false);
    textareaEl
  } );
  export {createEl}


