import React from 'react'
import { Link } from 'react-scroll'
import './index.scss'
import Logo from '../../assets/images/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faLinkedin,
    faGithub,
  } from '@fortawesome/free-brands-svg-icons'
  import {
    faHome,
    faUser,
    faEnvelope,
  } from '@fortawesome/free-solid-svg-icons'


const Sidebar = () => (
    <div className='nav-bar'>
        <Link className='logo' to="home" smooth={true} duration={500} spy={true} offset={-50}>
            <img src={Logo} alt = "logo" />
        </Link>
        <nav>
            <Link
            activeClass='active'
            to ="home"
            smooth={true}
            duration={500}
            spy={true}
            offset={-50}
            className='nav-link'
            >
             <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
            </Link>
            <Link 
            activeClass='active'
            to ="about"
            smooth={true}
            duration={500}
            spy={true}
            offset={-50}
            className='nav-link about-link'
            >
             <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
            </Link>
            <Link 
            activeClass='active'
            to ="contact"
            smooth={true}
            duration={500}
            spy={true}
            offset={-50}
            className='nav-link contact-link'
            >
             <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
            </Link>  
        </nav>
        <ul>
            <li>
                <a
                    target="_blank"
                     rel="noopener noreferrer"
                    href="https://www.linkedin.com/in/andrea-gonz%C3%A1lez-535675278/"
                >
                    <FontAwesomeIcon icon={faLinkedin} color = "#4d4d4e" className='anchor-icon' />
                </a>
            </li>
            <li>
                <a
                    target="_blank"
                     rel="noopener noreferrer"
                    href="https://github.com/andrea7308"
                >
                    <FontAwesomeIcon icon={faGithub} color = "#4d4d4e" className='anchor-icon' />
                </a>
            </li>
        </ul>
    </div>

)

export default Sidebar