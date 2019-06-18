import React from 'react'
import './navigation.scss'

const Navigation = () => {
    return (
        <nav className='navbar'>
            <ul className='navbar__list'>
                <li className='navbar__item'>
                    <a className='navbar__link' href="#">Customers</a>
                </li>
                <li className='navbar__item'>
                    <a className='navbar__link' href="#">Professionals</a>
                </li>
                <li className='navbar__item'>
                    <a className='navbar__link' href="#">Enterprise</a>
                </li>
                <li className='navbar__item'>
                    <a className='navbar__link' href="#">Accessories</a>
                </li>
                <li className='navbar__item'>
                    <a className='navbar__link' href="#">Contact Us</a>
                </li>
            </ul>
        </nav>
    )
}

export default Navigation