import './styles.scss'
import PropTypes from 'prop-types'
import { useEffect, useRef, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons'

const NavItem = ({ title, currentPage, setPage }) => {
  const linkTitle = title.replace(/^\w/, (c) => c.toUpperCase())
  const linkTo = `/cf-portfolio/${title === 'home' ? '' : title}`

  const handleClick = () => {
    const page = title === 'home' ? '/' : '/' + title
    setPage(page)
    console.log(linkTo)
  }

  return (
    <Link
      className={`nav-item ${currentPage === '/cf-portfolio/' && title === 'home' ? 'activePage' : currentPage === '/cf-portfolio/' + title ? 'activePage' : ''}`}
      to={linkTo}
      onClick={handleClick}
      role='menuitem'>
        {linkTitle}  
    </Link>
  )
}

const Navbar = () => {
  let location = useLocation()
  const [page, setPage] = useState(location.pathname)
  const [navBarOpen, setNavBarOpen] = useState(false)
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)
  const navbarRef = useRef()

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowWidth(window.innerWidth)
    }

    window.addEventListener('resize', handleWindowResize)

    return () => {
      window.removeEventListener('resize', handleWindowResize)
    }
  })

  useEffect(() => {
    setPage(location.pathname)
  }, [location])

  useEffect(() => {
    if (windowWidth < 1100) {
      navbarRef.current.classList.add('hidden')
    } else {
      navbarRef.current.classList.remove('hidden')
    }
  }, [windowWidth])

  useEffect(() => {
    if (windowWidth < 1100 && navBarOpen) {
      navbarRef.current.classList.add('mobile-active')
    } else if (windowWidth < 1100 && !navBarOpen) {
      navbarRef.current.classList.remove('mobile-active')
    } else if (windowWidth > 1100) {
      setNavBarOpen(false)
    }
  }, [navBarOpen, windowWidth])

  const handleNavBarOpen = () => {
    setNavBarOpen(!navBarOpen)
  }

  return (
    <nav className='nav-bar' ref={navbarRef}>
      <button id='hamburger' aria-expanded='false' onClick={handleNavBarOpen}>
        {
          !navBarOpen ? (
            <FontAwesomeIcon icon={faBars} />
          ) : (
            <FontAwesomeIcon icon={faXmark} />
          )
        }
      </button>
      <ul className='nav-list' role='menubar'>
        <NavItem title={'home'} currentPage={page} setPage={setPage} />
        <NavItem title={'about'} currentPage={page} setPage={setPage} />
        <NavItem title={'work'} currentPage={page} setPage={setPage} />
        <NavItem title={'contact'} currentPage={page} setPage={setPage} />
        <div className='active' />
      </ul>
    </nav>
  )
}

NavItem.propTypes = {
  title: PropTypes.string.isRequired,
  currentPage: PropTypes.string.isRequired,
  setPage: PropTypes.func.isRequired
}

export default Navbar