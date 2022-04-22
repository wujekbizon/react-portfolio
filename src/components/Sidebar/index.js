import { Link, NavLink } from 'react-router-dom'
import './index.scss'
import LogoG from '../../assets/images/logoGv2.png'
import LogoSub from '../../assets/images/logo_sub-v3.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faHome, faUser } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { useState } from 'react'
import { MdClose } from 'react-icons/md'
import { FiMenu } from 'react-icons/fi'

const Sidebar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false)

  const handleToggle = () => {
    setNavbarOpen(!navbarOpen)
  }

  const closeMenu = () => {
    setNavbarOpen(false)
  }

  return (
    <div id="nav_bar" className="nav-bar">
      <Link className="logo" to="/">
        <img src={LogoG} alt="logo" />
        <img className="sub-logo" src={LogoSub} alt="wolfinger" />
      </Link>
      <div id="navBar">
        <nav className={`menuNav ${navbarOpen ? 'showMenu' : ''}`}>
          <NavLink
            onClick={() => closeMenu()}
            exact="true"
            activeclassname="active"
            to="/"
          >
            <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
          </NavLink>
          <NavLink
            onClick={() => closeMenu()}
            exact="true"
            activeclassname="active"
            className="about-link"
            to="/about"
          >
            <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
          </NavLink>
          <NavLink
            onClick={() => closeMenu()}
            exact="true"
            activeclassname="active"
            className="contact-link"
            to="/contact"
          >
            <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
          </NavLink>
        </nav>
        <ul>
          <li>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.linkedin.com/in/grzegorz-wolfinger-b88856229/"
            >
              <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" />
            </a>
          </li>
          <li>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://github.com/wujekbizon"
            >
              <FontAwesomeIcon icon={faGithub} color="#4d4d4e" />
            </a>
          </li>
        </ul>
        <button onClick={handleToggle}>
          {navbarOpen ? (
            <MdClose style={{ color: '#fff', width: '40px', height: '40px' }} />
          ) : (
            <FiMenu
              style={{ color: '#7b7b7b', width: '40px', height: '40px' }}
            />
          )}
        </button>
      </div>
    </div>
  )
}

export default Sidebar
