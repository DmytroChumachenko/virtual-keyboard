import {
  SYMBOLS
} from "./symbols.js";
import {
  CREATEEL
} from "./createElement.js";
import {
  createRows
} from "./createRows.js";
import { getKeyboardButtons } from "./interactive.js";

export const RENDERPAGE = () => {
  const BODY = document.querySelector('body');

  const CENTRALIZER = CREATEEL({
    tag: 'div',
    classes: 'centralizer'
  });
  BODY.prepend(CENTRALIZER);

  const TITLE = CREATEEL({
    tag: 'p',
    classes: 'title',
    textContent: 'RSS virtual keyboard'
  })

  const TEXTAREA = CREATEEL({
    tag: 'textarea',
    classes: ['body--textarea', 'textarea'],
    id: 'textarea',
    attributes: {
      rows: '5',
      cols: '50',
      spellcheck: 'false'
    }
  })

  const BODYKEYBOARD = CREATEEL({
    tag: 'div',
    classes: ['body--keyboard', 'keyboard'],
    id: 'keyboard'
  })
  CENTRALIZER.append(TITLE, TEXTAREA, BODYKEYBOARD);

  let rows = createRows(SYMBOLS, BODYKEYBOARD)
  // BODYKEYBOARD.append(row);

  let keyboardButtons = getKeyboardButtons();
  let keyboardRows = Array.prototype.slice.call(keyboardButtons);
console.log(keyboardRows);
keyboardRows.forEach(row => {
  console.log(row);
});
  console.log(keyboardButtons);

  // for(let i = 0; i < keyboardButtons.length; i++) {
  //   console.log(keyboardButtons[i]);
  // }
}