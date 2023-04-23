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
        classes: ['keyboard--key', 'key', `${keyWord}`]
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
          classes: [arrOfUkrKeys[i], 'hidden'],
          textContent: arrOfUkrValues[i]
        })
        spanUkr.append(span);
      }

      let arrOfEngKeys = Object.keys(eng);
      let arrOfEngValues = Object.values(eng);
      for (let i = 0; i < arrOfEngKeys.length; i++) {
        let span = CREATEEL({
          tag: 'span',
          textContent: arrOfEngValues[i]
        })
        if(arrOfEngKeys[i] === 'caseDown') {
         span.classList.add(arrOfEngKeys[i])
        } else {
          span.classList.add('hidden')
        }
        spanEng.append(span);
      }
      keyDiv.append(spanUkr,spanEng);
      rowDiv.append(keyDiv);
      
      // html += ` <div class="keyboard--key key ${keyWord}" data-key=${keyWord}>
      //             <span class="ukr hidden">
      //               <span class="hidden">${ukr.caseDown}</span>
      //               <span class="hidden">${ukr.caseUp}</span>
      //               <span class="hidden">${ukr.caps}</span>
      //               <span class="hidden">${ukr.shiftCaps}</span>
      //             </span>
      //             <span class="eng">
      //               <span class="">${eng.caseDown}</span>
      //               <span class="hidden">${eng.caseUp}</span>
      //               <span class="hidden">${eng.caps}</span>
      //               <span class="hidden">${eng.shiftCaps}</span>
      //             </span>
      //           </div>`;
    }
    parentElement.append(rowDiv);
  });


  // let html;
  // for (const key of row) {
  //   const ukr = key.ukr;
  //   const eng = key.eng;

  //   html += ` <div class="keyboard--key key ${key.keyWord}" data-key=${key.keyWord}>
  //               <span class="ukr hidden">
  //                 <span class="hidden">${ukr.caseDown}</span>
  //                 <span class="hidden">${ukr.caseUp}</span>
  //                 <span class="hidden">${ukr.caps}</span>
  //                 <span class="hidden">${ukr.shiftCaps}</span>
  //               </span>
  //               <span class="eng">
  //                 <span class="">${eng.caseDown}</span>
  //                 <span class="hidden">${eng.caseUp}</span>
  //                 <span class="hidden">${eng.caps}</span>
  //                 <span class="hidden">${eng.shiftCaps}</span>
  //               </span>
  //             </div>`;
  // }
  // return html;

}