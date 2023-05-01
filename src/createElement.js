export const CREATEEL = (options) => {
  // const {tag, classes}
  const ELEMENT = document.createElement(options.tag);
  if (Array.isArray(options.classes)) {
    options.classes.forEach(className => {
      ELEMENT.classList.add(className)
    });
  } else {
    ELEMENT.classList.add(options.classes);
  }
  if(options.id){ELEMENT.id = options.id}
  if (options.attributes) {
    for (const KEY in options.attributes) {
      if (Object.prototype.hasOwnProperty.call(options.attributes, KEY)) {
        ELEMENT.setAttribute(KEY, options.attributes[KEY]);
      }
    }
  }
  if (options.textContent) {
    ELEMENT.textContent = options.textContent
  }
  if (options.innerHTML) {
    ELEMENT.innerHTML = options.innerHTML
  }
  return ELEMENT;

}

// const myElement = createElement({
//   tag: 'div',
//   classes: ['my-class'],
//   attributes: {
//     'data-attribute': 'my-value',
//     'aria-label': 'My label'
//   },
//   textContent: 'Hello, world!',
//   html: '<p>This is some HTML content</p>'
// });