import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './index.scss'
import Logo from '../../assets/images/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faHome, faUser } from '@fortawesome/free-solid-svg-icons'


const Sidebar = () => (
    <div className='nav-bar'>
        <Link className='logo pixel-corners' to='/'>
            <img src={Logo} alt = "logo" />
        </Link>
        <nav>
            <NavLink exact="true" activeclassname="active" to ="/">
                <span className='icon-box pixel-corners'>
                    <FontAwesomeIcon icon={faHome} />
                </span>
            </NavLink>

            <span className='dot-trail'>
                <span className='pac-dot'></span>
                <span className='pac-dot'></span>
                <span className='pac-dot'></span>
            </span>

            <NavLink exact="true" activeclassname="active" className="about-link" to ="/about">
                <span className='icon-box pixel-corners'>
                    <FontAwesomeIcon icon={faUser} />
                </span>
            </NavLink>

            <span className='dot-trail'>
                <span className='pac-dot'></span>
                <span className='pac-dot'></span>
                <span className='pac-dot'></span>
            </span>

            <NavLink exact="true" activeclassname="active" className="contact-link" to ="/contact">
                <span className='icon-box pixel-corners'>
                    <FontAwesomeIcon icon={faEnvelope} />
                </span>
            </NavLink>
            
        </nav>
    </div>

)

export default Sidebar