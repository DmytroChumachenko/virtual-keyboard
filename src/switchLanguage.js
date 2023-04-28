export let switchLanguage = () => {
  const keyboardButtons = document.querySelectorAll('.keyboard--key');
  let isCtrlDown = false;
  let isAltDown = false;
  let isShiftDown = false;
  let isUkrLayout = false;


  document.addEventListener("keydown", (event) => {
    if(event.code === 'ControlLeft'){
      isCtrlDown = true;
    }
    if(event.code === 'AltLeft'){
      isAltDown = true;
    }

    if(isCtrlDown && event.code === 'AltLeft') {
      isUkrLayout = !isUkrLayout;
      updateKeyboardLayout(isUkrLayout);
    }
    if(isAltDown && event.code === 'ControlLeft') {
      isUkrLayout = !isUkrLayout;
      updateKeyboardLayout(isUkrLayout);
    }
    
    if (event.code === 'ShiftLeft' || event.code === 'ShiftRight') {
      isShiftDown = true;
      console.log(isShiftDown);
    }
  })

  document.addEventListener("keyup", (event) => {
    if(event.code === 'ControlLeft'){
      isCtrlDown = false;
    }
    if(event.code === 'AltLeft'){
      isAltDown = false;
    }
    if(event.code === 'ControlLeft'){
      isCtrlDown = false;
    }
    if (event.code === 'ShiftLeft' || event.code === 'ShiftRight') {
      isShiftDown = false;
    }
  })

  function shiftCaps(isShiftDown) {
    keyboardButtons.forEach((button) => {
      const ukrBlock = button.querySelectorAll('.ukr');
      const engBlock = button.querySelectorAll('.eng');

      if (isShiftDown) {
        const ukrElements = ukrBlock[0].querySelectorAll('.caseDown, .caseUp, .caps, .shiftCaps');
        ukrElements.forEach((el) => {
          if (el.classList.contains('shiftCaps')) {
            el.classList.remove('hidden')
          }
          // else {
          //   el.classList.add('hidden')
          // }
        })
      } else {
        ukrBlock.forEach((el) => el.classList.add('hidden'));
        engBlock.forEach((el) => el.classList.remove('hidden'));

        const engElements = engBlock[0].querySelectorAll('.caseDown, .caseUp, .caps, .shiftCaps');
        engElements.forEach((el) => {
          if (el.classList.contains('caseDown')) {
            el.classList.remove('hidden')
          }
        })
      }
    })
  }

  function updateKeyboardLayout(isUkrLayout) {
    keyboardButtons.forEach((button) => {
      const ukrBlock = button.querySelectorAll('.ukr');
      const engBlock = button.querySelectorAll('.eng');

      if (isUkrLayout) {
        ukrBlock.forEach((el) => el.classList.remove('hidden'));
        engBlock.forEach((el) => el.classList.add('hidden'));

        const ukrElements = ukrBlock[0].querySelectorAll('.caseDown, .caseUp, .caps, .shiftCaps');
        ukrElements.forEach((el) => {
          if (el.classList.contains('caseDown')) {
            el.classList.remove('hidden')
          }

        })

      } else {
        ukrBlock.forEach((el) => el.classList.add('hidden'));
        engBlock.forEach((el) => el.classList.remove('hidden'));

        const engElements = engBlock[0].querySelectorAll('.caseDown, .caseUp, .caps, .shiftCaps');
        engElements.forEach((el) => {
          if (el.classList.contains('caseDown')) {
            el.classList.remove('hidden')
          }
        })
      }
    })
  }
  
}