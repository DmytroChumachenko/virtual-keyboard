export let getCollectionOfKeyboardRows = () => {

  // document.addEventListener("mouseover",)
  const collection = document.querySelectorAll('.keyboard--key');
  for (let div of collection) {
    div.onmouseover = function (event) {
      let target = event.target;
      target.style.background = 'green';
    }
    div.onmouseout = function (event) {
      let target = event.target;
      target.style.background = '';
    }
  }


  let arrOfCode = [];
  collection.forEach(key => {
    const symbol = key.getAttribute('data-attribute')
    arrOfCode.push(symbol);
  })

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
    if(event.code === 'CapsLock') {
      toggleCapsLock();
      changeCapsLock(isCapsLockDown)
    } else {
      arr.forEach(el => {
        if(el.classList.contains(event.code)){
          el.classList.add('active');
      }
      });
      document.addEventListener("keyup", () => {
        arr.forEach(el => {
          if(el.getAttribute('data-attribute')  !== 'CapsLock') {
            el.classList.remove('active')
          }
        });
      })
    }

    // arrOfCode.forEach(code => {
    //   if (code === event.code) {
    //     for (let attr of collection) {
    //       if (attr.getAttribute('data-attribute') === code) {
    //         attr.classList.add('active');
    //         document.addEventListener("keyup", () => {
    //           attr.classList.remove('active');
    //         })
    //       }
    //     }
    //   }
    // })

  })

};