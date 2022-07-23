const menu = document.querySelector('.icon')

menu.addEventListener('click', () => {
  let x = document.querySelector('.nav')
  if (x.className === "nav") {
    x.className += ' responsive'
  } else {
    x.className = 'nav'
  }
})
