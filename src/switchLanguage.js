export let switchLanguage = () => {
  // let isCtrlDown = false;
  // let isAltDown = false;
  let isUkrLayout = false;

  document.addEventListener("keydown", (event) => {
    if(event.code === 'ControlLeft' && event.altKey){
      isUkrLayout = !isUkrLayout;
      updateKauboardLayout(isUkrLayout);
    }
  })

  function updateKauboardLayout(isUkrLayout) {
    const keyboardButtons = document.querySelectorAll('.keyboard--key');
    keyboardButtons.forEach((button) => {
      const ukrBlock = button.querySelectorAll('.ukr');
      const engBlock = button.querySelectorAll('.eng');
   
      if(isUkrLayout) {
        ukrBlock.forEach((el) => el.classList.remove('hidden'));
        engBlock.forEach((el) => el.classList.add('hidden'));

       
        const ukrElements = ukrBlock[0].querySelectorAll('.caseDown, .caseUp, .caps, .shiftCaps');

        ukrElements.forEach((el) => {
          if(el.classList.contains('caseDown')) {
            el.classList.remove('hidden')
          }
  
        })

      } else {
        ukrBlock.forEach((el) => el.classList.add('hidden'));
        engBlock.forEach((el) => el.classList.remove('hidden'));

        const engElements = engBlock[0].querySelectorAll('.caseDown, .caseUp, .caps, .shiftCaps');
        engElements.forEach((el) => {
          if(el.classList.contains('caseDown')) {
            el.classList.remove('hidden')
          }
        })

      }
    })
  }
}