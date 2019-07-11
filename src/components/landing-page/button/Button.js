import React from "react"
import { Link } from "gatsby"
import "./button.scss"

const Button = () => {
  return (
    <div className="navigation">
      <input type="checkbox" className="navigation__checkbox" id="nav-toggle" />

      <label htmlFor="nav-toggle" className="navigation__button">
        <span className="navigation__icon">&nbsp;</span>
      </label>

      <div className="navigation__background">&nbsp;</div>

      <nav className="navigation__nav">
        <ul className="navigation__list">
          <li className="navigation__item">
            <Link to="/consumer-drones/" className="navigation__link">
              Consumer
            </Link>
          </li>
          <li className="navigation__item">
            <Link to="/professional-drones/" className="navigation__link">
              Professional
            </Link>
          </li>
          <li className="navigation__item">
            <Link to="/enterprise-drones/" className="navigation__link">
              Enterprise
            </Link>
          </li>
          <li className="navigation__item">
            <Link to="/accessories/" className="navigation__link">
              Accessories
            </Link>
          </li>
          <li className="navigation__item">
            <Link to="/contact-us/" className="navigation__link">
              Contact Us
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Button
