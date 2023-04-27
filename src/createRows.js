import {
  CREATEEL
} from "./createElement.js";


export let createRows = (symbols, parentElement) => {
  let arrOfRows = symbols.rows;

  arrOfRows.forEach(row => {

    let rowDiv = CREATEEL({
      tag: 'div',
      classes: ['keyboard--row', 'row']
    });

    for (const objectOfButton of row) {
      const objectOfButtonKeys = Object.keys(objectOfButton);
      const keyWord = objectOfButton.keyWord
      const ukr = objectOfButton.ukr;
      const eng = objectOfButton.eng;

      let keyDiv = CREATEEL({
        tag: 'div',
        classes: ['keyboard--key', 'key', `${keyWord}`],
        attributes: {
              'data-attribute': `${keyWord}`
            }
      });
      let spanUkr = CREATEEL({
        tag: 'span',
        classes: [objectOfButtonKeys[1], 'hidden']
      });

      let spanEng = CREATEEL({
        tag: 'span',
        classes: objectOfButtonKeys[2]
      });

      let arrOfUkrKeys = Object.keys(ukr);
      let arrOfUkrValues = Object.values(ukr);
      for (let i = 0; i < arrOfUkrKeys.length; i++) {
        let span = CREATEEL({
          tag: 'span',
          textContent: arrOfUkrValues[i],
          classes: [arrOfUkrKeys[i], 'hidden']
        })
        spanUkr.append(span);
      }

      let arrOfEngKeys = Object.keys(eng);
      let arrOfEngValues = Object.values(eng);
      for (let i = 0; i < arrOfEngKeys.length; i++) {
        let span;
        if(arrOfEngKeys[i] === 'caseDown') {
           span = CREATEEL({
            tag: 'span',
            textContent: arrOfEngValues[i],
            classes: arrOfEngKeys[i]
          })
        } else {
          span = CREATEEL({
            tag: 'span',
            textContent: arrOfEngValues[i],
            classes:[arrOfEngKeys[i], 'hidden']
          })
        }
        spanEng.append(span);
      }
      keyDiv.append(spanUkr,spanEng);
      rowDiv.append(keyDiv);
    }
    parentElement.append(rowDiv);
  });

}