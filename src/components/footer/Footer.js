import React from 'react'
import './footer.css'
import { Link } from 'gatsby'

const Footer = () => {
    return (
        <footer className='footer'>
            <ul className="nav">
                <li className="nav__item">
                    <Link to='/consumer-drones' className="nav__link">Consumer</Link>
                </li>
                <li className="nav__item">
                    <Link to='/professional-drones' className="nav__link">Professional</Link>
                </li>
                <li className="nav__item">
                    <Link to='/enterprise-drones' className="nav__link">Enterprise</Link>
                </li>
                <li className="nav__item">
                    <Link to='/accessories' className="nav__link">Accessories</Link>
                </li>
                <li className="nav__item">
                    <Link to='/contact-us' className="nav__link">Contact us</Link>
                </li>
            </ul>
            <div className='copyright'>
                © {new Date().getFullYear()}{" "} Dronify
            </div>
        </footer>
    );
}

export default Footer;