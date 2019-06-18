import React from 'react'
import './button.scss'

const Button = () => {
    return (
        <div className="navigation" >
            <input type="checkbox" className="navigation__checkbox" id="nav-toggle" />

            <label htmlFor="nav-toggle" className="navigation__button">
                <span className="navigation__icon">&nbsp;</span>
            </label>

            <div className="navigation__background">&nbsp;</div>

            <nav className="navigation__nav">
                <ul className="navigation__list">
                    <li className="navigation__item">
                        <a href="#" className="navigation__link">Consumers</a>
                    </li>
                    <li className="navigation__item">
                        <a href="#" className="navigation__link">Professionals</a>
                    </li>
                    <li className="navigation__item">
                        <a href="#" className="navigation__link">Enterprise</a>
                    </li>
                    <li className="navigation__item">
                        <a href="#" className="navigation__link">Accessories</a>
                    </li>
                    <li className="navigation__item">
                        <a href="#" className="navigation__link">Contact Us</a>
                    </li>
                </ul>
            </nav>
        </div >
    )
}

export default Button