export let switchLanguage = () => {
  const keyboardButtons = document.querySelectorAll('.keyboard--key');
  let isCtrlDown = false;
  let isAltDown = false;
  let isShiftDown = false;
  let isUkrLayout = false;
  let isCapsLockDown = false;


  document.addEventListener("keydown", (event) => {
    if (event.code === 'ControlLeft') {
      isCtrlDown = true;
    }
    if (event.code === 'AltLeft') {
      isAltDown = true;
    }

    if (isCtrlDown && event.code === 'AltLeft') {
      isUkrLayout = !isUkrLayout;
      updateKeyboardLayout(isUkrLayout);
    }
    if (isAltDown && event.code === 'ControlLeft') {
      isUkrLayout = !isUkrLayout;
      updateKeyboardLayout(isUkrLayout);
    }

    if (event.code === 'ShiftLeft' || event.code === 'ShiftRight') {
      isShiftDown = true;
      shiftCaps(isShiftDown);
    }

    if (event.code === 'CapsLock') {
      toggleCapsLock();
      toCapsLock(isCapsLockDown);
    }
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