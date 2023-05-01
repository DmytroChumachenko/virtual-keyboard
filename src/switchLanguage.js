export let switchLanguage = () => {
  let isUkrLayout = localStorage.getItem('isUkrLayout');
  
  
  const keyboardButtons = document.querySelectorAll('.keyboard--key');
  const arrRestrict = ['Backspace', 'Tab', 'Delete', 'CapsLock', 'Enter', 
  'Space', 'ShiftLeft', 'ShiftRight', 
  'ControlLeft', 'ControlRight', 'AltLeft', 'AltRight', 'MetaLeft'];
  let textarea = document.querySelector('.textarea');
  let isCtrlDown = false;
  let isAltDown = false;
  let isShiftDown = false;
  // let isUkrLayout = false;
  // const isUkrLayout = localStorage.getItem('isUkrLayout');
  let isCapsLockDown = false;
  let keyCode;
  let span;
  let spanLanguage;
  let attr;

  document.addEventListener("click", (event) => {
    if (document.body.contains(event.target)) {
      span = event.target;
      spanLanguage = span.parentElement;
      attr = spanLanguage.parentElement.getAttribute('data-attribute');
      if (attr === 'Backspace') {
        backspace();
      }
      if (isCapsLockDown && (attr === 'CapsLock')) {
        spanLanguage.parentElement.classList.remove('active');
      }
      if (span.parentElement.classList.contains('eng') || span.parentElement.classList.contains('ukr')) {
        if (!arrRestrict.includes(attr)) {
          textarea.value += span.innerText;
        }
      }
      if (attr === 'CapsLock') {
        toggleCapsLock();
        toCapsLock(isCapsLockDown);
      }
      if (attr !== 'CapsLock') {
        spanLanguage.parentElement.classList.remove('active');
      }
    }
  })
  document.addEventListener("mousedown", (event) => {

    if (document.body.contains(event.target)) {
      span = event.target;
      spanLanguage = span.parentElement;
      spanLanguage.parentElement.classList.add('active');
      attr = spanLanguage.parentElement.getAttribute('data-attribute');

      if (attr === 'ShiftLeft' || attr === 'ShiftRight') {
        isShiftDown = true;
        shiftCaps(isShiftDown);
      }
    }
  })
  document.addEventListener("mouseup", (event) => {
    if (document.body.contains(event.target)) {
      span = event.target;
      spanLanguage = span.parentElement;
      attr = spanLanguage.parentElement.getAttribute('data-attribute');
      if (attr === 'ShiftLeft' || attr === 'ShiftRight') {
        spanLanguage.parentElement.classList.remove('active');
        isShiftDown = false;
        shiftCaps(isShiftDown);
      }
      if (isCapsLockDown) {
        toCapsLock(isCapsLockDown);
      }
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
      localStorage.setItem('isUkrLayout', isUkrLayout);
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
    if (isCapsLockDown) {
      toCapsLock(isCapsLockDown);
    }

  })

  function backspace() {
    textarea.focus();
    const currentCursorPosition = textarea.selectionStart;
    const textBeforeCursor = textarea.value.slice(0, currentCursorPosition - 1);
    const textAfterCursor = textarea.value.slice(currentCursorPosition);

    let str = textarea.value.toString().length;
    if (currentCursorPosition === 0) {
      return
    } else if (currentCursorPosition !== str) {
      textarea.value = textBeforeCursor + textAfterCursor;
    } else if (currentCursorPosition === str) {
      textarea.value = textBeforeCursor;
    }

    textarea.selectionStart = currentCursorPosition - 1;
    textarea.selectionEnd = currentCursorPosition - 1;
  }


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