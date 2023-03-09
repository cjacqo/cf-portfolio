let windowWidth = window.innerWidth
let windowHeight = window.innerHeight

const navCheckBox = document.getElementById('navToggle')

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

  if (navCheckBox.getAttribute('checked') === true) {
    
  }
}