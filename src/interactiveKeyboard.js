export let getCollectionOfKeyboardRows = () => {
  const collection = document.querySelectorAll('.keyboard--key');

  collection.forEach(button => {
    button.addEventListener("mouseover", () => {
      button.classList.add('hover');
    })
    button.addEventListener("mouseout", () => {
      button.classList.remove('hover');
    })
  })


  let arrOfCode = [];

  collection.forEach(key => {
    const symbol = key.getAttribute('data-attribute')
    arrOfCode.push(symbol);
  });

  let arr = Array.from(collection);
  let isCapsLockDown = false;

  function toggleCapsLock() {
    isCapsLockDown = !isCapsLockDown;
  }

  function changeCapsLock(isCapsLockDown) {
    if (isCapsLockDown) {
      arr.forEach(el => {
        if (el.classList.contains('CapsLock')) {
          el.classList.add('active')
        }
      })
    } else {
      arr.forEach(el => {
        if (el.classList.contains('CapsLock')) {
          el.classList.remove('active')
        }
      })
    }
  }

  document.addEventListener("keydown", (event) => {
    if (event.code === 'CapsLock') {
      toggleCapsLock();
      changeCapsLock(isCapsLockDown)
    } else {
      arr.forEach(el => {
        if (el.classList.contains(event.code)) {
          el.classList.add('active');
        }
      });
      document.addEventListener("keyup", () => {
        arr.forEach(el => {
          if (el.getAttribute('data-attribute') !== 'CapsLock') {
            el.classList.remove('active')
          }
        });
      })
    }

  })

};