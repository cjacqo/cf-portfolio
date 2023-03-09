let windowHeight, windowWidth

const navCheckBox = document.getElementById('navToggle')

window.addEventListener('resize', () => {
  windowHeight = window.innerHeight
  windowWidth = window.innerWidth
})

navCheckBox.addEventListener('onclick', () => {
  console.log('hi')
})