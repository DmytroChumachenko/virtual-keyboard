export let switchLanguage = () => {
  const keyboardButtons = document.querySelectorAll('.keyboard--key');
  const arrRestrict = ['Backspace', 'Tab', 'Del', 'CapsLock', 'Enter', 'Space', 'ShiftLeft', 'ShiftRight', 'ArrowUp', 'ArrowLeft', 'ArrowDown', 'ArrowRight', 'ControlLeft', 'ControlRight', 'AltLeft', 'AltRight', 'MetaLeft'];
  let textarea = document.querySelector('.textarea');
  let isCtrlDown = false;
  let isAltDown = false;
  let isShiftDown = false;
  let isUkrLayout = false;
  let isCapsLockDown = false;
  let keyCode;

  document.addEventListener("click", (event) => {
    let span = event.target;
    let spanLanguage = span.parentElement;
    let attr = spanLanguage.parentElement.getAttribute('data-attribute');
    if(!isCapsLockDown && attr !== 'CapsLock'){
      spanLanguage.parentElement.classList.remove('active');
    }
    if (span.parentElement.classList.contains('eng') || span.parentElement.classList.contains('ukr')) {
      if (!arrRestrict.includes(attr)) {
        textarea.value += span.innerText;
      }
    }
    if(attr === 'CapsLock'){
      toggleCapsLock();
      toCapsLock(isCapsLockDown);
    }
  })
  document.addEventListener("mousedown", (event) => {
    let span = event.target;
    let spanLanguage = span.parentElement;
    let attr = spanLanguage.parentElement.getAttribute('data-attribute');
    spanLanguage.parentElement.classList.add('active');
    
    if (attr === 'ShiftLeft' || attr === 'ShiftRight') {
      isShiftDown = true;
      shiftCaps(isShiftDown);
    }
  })
  document.addEventListener("mouseup", (event) => {
    let span = event.target;
    let spanLanguage = span.parentElement;
    let attr = spanLanguage.parentElement.getAttribute('data-attribute');
    if(attr !== 'CapsLock') {
      spanLanguage.parentElement.classList.remove('active');
    }
    if (attr === 'ShiftLeft' || attr === 'ShiftRight') {
      isShiftDown = false;
      shiftCaps(isShiftDown);
    }
    if(isCapsLockDown){

      toCapsLock(isCapsLockDown);
    }
  })


  document.addEventListener("keydown", (event) => {

    keyCode = event.code;
    if (event.code === 'ControlLeft') {
      isCtrlDown = true;
    }
    if (event.code === 'AltLeft') {
      isAltDown = true;
    }

    if (isCtrlDown && event.code === 'AltLeft') {
      isUkrLayout = !isUkrLayout;
      updateKeyboardLayout(isUkrLayout, isCapsLockDown);
    }
    if (isAltDown && event.code === 'ControlLeft') {
      isUkrLayout = !isUkrLayout;
      updateKeyboardLayout(isUkrLayout, isCapsLockDown);
    }

    if (event.code === 'ShiftLeft' || event.code === 'ShiftRight') {
      isShiftDown = true;
      shiftCaps(isShiftDown);
    }

    if (event.code === 'CapsLock') {
      toggleCapsLock();
      toCapsLock(isCapsLockDown);
    }
    toFillTextArea(event, keyCode, isUkrLayout);
  })

  document.addEventListener("keyup", (event) => {
    if (event.code === 'ControlLeft') {
      isCtrlDown = false;
    }
    if (event.code === 'AltLeft') {
      isAltDown = false;
    }
    if (event.code === 'ControlLeft') {
      isCtrlDown = false;
    }
    if (event.code === 'ShiftLeft' || event.code === 'ShiftRight') {
      isShiftDown = false;
      shiftCaps(isShiftDown);
    }

  })



  function toFillTextArea(event, keyCode, isUkrLayout) {

    textarea.focus();
    keyboardButtons.forEach(button => {
      let attr;

      if (button.getAttribute('data-attribute') === keyCode) {
        attr = keyCode;
        if (!arrRestrict.includes(attr)) {
          event.preventDefault();
          if (isUkrLayout) {
            if (isCapsLockDown) {
              textarea.value += button.querySelector('.ukr').querySelector('.caps').innerText;
            }
            if (!isCapsLockDown) {
              textarea.value += button.querySelector('.ukr').querySelector('.caseDown').innerText;
            }

          } else {
            if (isCapsLockDown) {
              textarea.value += button.querySelector('.eng').querySelector('.caps').innerText;
            }
            if (!isCapsLockDown) {
              textarea.value += button.querySelector('.eng').querySelector('.caseDown').innerText;
            }

          }
        }

      }

    })

  }

  function toggleCapsLock() {
    isCapsLockDown = !isCapsLockDown;
  }

  function toCapsLock(isCapsLockDown) {
    keyboardButtons.forEach((button) => {
      const ukrBlock = button.querySelectorAll('.ukr');
      const engBlock = button.querySelectorAll('.eng');
      const ukrElements = ukrBlock[0].querySelectorAll('.caseDown, .caseUp, .caps, .shiftCaps');
      const engElements = engBlock[0].querySelectorAll('.caseDown, .caseUp, .caps, .shiftCaps');
      if (isCapsLockDown) {
        ukrElements.forEach((el) => {
          if (!el.classList.contains('hidden')) {
            el.classList.add('hidden')
          }
          if (el.classList.contains('caps')) {
            el.classList.remove('hidden')
          }
        })
        engElements.forEach((el) => {
          if (!el.classList.contains('hidden')) {
            el.classList.add('hidden')
          }
          if (el.classList.contains('caps')) {
            el.classList.remove('hidden')
          }
        })
      }
      if (!isCapsLockDown) {
        ukrElements.forEach((el) => {
          if (!el.classList.contains('hidden')) {
            el.classList.add('hidden')
          }
          if (el.classList.contains('caseDown')) {
            el.classList.remove('hidden')
          }
        })
        engElements.forEach((el) => {
          if (!el.classList.contains('hidden')) {
            el.classList.add('hidden')
          }
          if (el.classList.contains('caseDown')) {
            el.classList.remove('hidden')
          }
        })
      }
    })
  }

  function shiftCaps(isShiftDown) {
    keyboardButtons.forEach((button) => {
      const ukrBlock = button.querySelectorAll('.ukr');
      const engBlock = button.querySelectorAll('.eng');
      const ukrElements = ukrBlock[0].querySelectorAll('.caseDown, .caseUp, .caps, .shiftCaps');
      const engElements = engBlock[0].querySelectorAll('.caseDown, .caseUp, .caps, .shiftCaps');

      if (isShiftDown) {
        ukrElements.forEach((el) => {
          if (!el.classList.contains('hidden')) {
            el.classList.add('hidden')
          }
          if (el.classList.contains('caseUp')) {
            el.classList.remove('hidden')
          }
        })
        engElements.forEach((el) => {
          if (!el.classList.contains('hidden')) {
            el.classList.add('hidden')
          }
          if (el.classList.contains('caseUp')) {
            el.classList.remove('hidden')
          }
        })
      }
      if (!isShiftDown) {
        ukrElements.forEach((el) => {
          if (!el.classList.contains('hidden')) {
            el.classList.add('hidden')
          }
          if (el.classList.contains('caseDown')) {
            el.classList.remove('hidden')
          }
        })
        engElements.forEach((el) => {
          if (!el.classList.contains('hidden')) {
            el.classList.add('hidden')
          }
          if (el.classList.contains('caseDown')) {
            el.classList.remove('hidden')
          }
        })
      }
    })
  }

  function updateKeyboardLayout(isUkrLayout, isCapsLockDown) {
    keyboardButtons.forEach((button) => {
      const ukrBlock = button.querySelectorAll('.ukr');
      const engBlock = button.querySelectorAll('.eng');

      if (isUkrLayout) {
        ukrBlock.forEach((el) => el.classList.remove('hidden'));
        engBlock.forEach((el) => el.classList.add('hidden'));
        const ukrElements = ukrBlock[0].querySelectorAll('.caseDown, .caseUp, .caps, .shiftCaps');
        if (isCapsLockDown) {
          ukrElements.forEach((el) => {
            if (el.classList.contains('caps')) {
              el.classList.remove('hidden')
            }
          })
        }
        if (!isCapsLockDown) {
          ukrElements.forEach((el) => {
            if (el.classList.contains('caseDown')) {
              el.classList.remove('hidden')
            }
          })
        }


      } else {
        ukrBlock.forEach((el) => el.classList.add('hidden'));
        engBlock.forEach((el) => el.classList.remove('hidden'));
        const engElements = engBlock[0].querySelectorAll('.caseDown, .caseUp, .caps, .shiftCaps');
        if (isCapsLockDown) {
          engElements.forEach((el) => {
            if (el.classList.contains('caps')) {
              el.classList.remove('hidden')
            }
          })
        }
        if (!isCapsLockDown) {
          engElements.forEach((el) => {
            if (el.classList.contains('caseDown')) {
              el.classList.remove('hidden')
            }
          })
        }
      }
    })
  }

}