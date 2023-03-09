let windowWidth = window.innerWidth
let windowHeight = window.innerHeight

const navCheckBox = document.getElementById('navToggle')
const navList = document.getElementById('navigationList')

window.addEventListener('load', () => {
  if (navCheckBox.getAttribute('checked') !== false) navCheckBox.checked = false
})

window.addEventListener('resize', () => {
  windowWidth = window.innerWidth
  windowHeight = window.innerHeight
  
})

navCheckBox.addEventListener('change', function() {
  handleNavigation()
})

function handleNavigation() {
  if (windowWidth >= 750) return
  console.log(navCheckBox.checked)

  if (navCheckBox.checked) {
    console.log('hi')
    navList.classList.remove('hidden')
    navList.classList.add('visible')
  } else {
    navList.classList.remove('visible')
    navList.classList.add('hidden')
  }
}