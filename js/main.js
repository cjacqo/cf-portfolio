const navContainer = document.getElementById('navContainer')

function handleWindowResize() {
  const width = window.innerWidth

  if (width <= 750) {
    navContainer.dataset.size = 'mobile'
  } else {
    navContainer.dataset.size = 'desktop'
  }
}

window.addEventListener('load', handleWindowResize)

window.addEventListener('resize', handleWindowResize)