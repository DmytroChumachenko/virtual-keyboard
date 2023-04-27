export let getCollectionOfKeyboardRows = () => {
  
// document.addEventListener("mouseover",)
  const collection = document.querySelectorAll('.key');
  for(let div of collection) {
    div.onmouseover = function (event) {
      let  target = event.target;
      target.style.background = 'pink';
    } 
    div.onmouseout = function (event) {
      let  target = event.target;
      target.style.background = '';
    } 
  }


  let arrOfCode = [];
  collection.forEach(key => {
    const symbol = key.getAttribute('data-attribute')
    arrOfCode.push(symbol);
  })
  document.addEventListener("keydown", (event) => {
    arrOfCode.forEach(code => {
      if (event.code === code) {
        let el = code;
        for(let attr of collection) {
          if(attr.getAttribute('data-attribute') === el){
           attr.classList.add('active');
           document.addEventListener("keyup", () => {
            attr.classList.remove('active');
           })
          }
        }
      }
    })
  })

};