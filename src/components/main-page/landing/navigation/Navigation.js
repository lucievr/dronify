import React from "react"
import { connect } from 'react-redux'
import { Link } from "gatsby"

// FONTAWESOME
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons"
import { faUser } from "@fortawesome/free-regular-svg-icons"

// COMPONENTS
import Button from "../../navigation-button/Button"
import { NavBar, NavMenuTop, ButtonWrapper, LogoName, Icons, IconItem, NavList, NavItem, NavLink} from '../../../styles/NavigationStyles'

const cart = <FontAwesomeIcon
    icon={faShoppingCart}
    size="1x"
    color="white" />
const user = <FontAwesomeIcon
    icon={faUser}
    size="1x"
    color="white" />


const Navigation = ({ items }) => {

    const total = items.reduce((acc, item) => (acc + item.price * item.quantity), 0)

    return (
        <nav css={NavBar}>
            <div css={NavMenuTop}>
                <div css={ButtonWrapper}>
                    <Button />
                </div>
                <Link to="/">
                    <span css={LogoName}> Dronify </span>
                </Link>
                <div css={Icons}>
                    <Link to="/account">
                        <div css={IconItem}>
                            {user}
                            <span>Log In</span>
                        </div>
                    </Link>
                    <Link to="/cart">
                        <div css={IconItem}>
                            {cart}
                            <span>Cart: {total}€</span>
                        </div>
                    </Link>
                </div>
            </div>

            <ul css={NavList}>
                <li css={NavItem}>
                    <Link to="/consumer-drones/" css={NavLink}>
                        Consumer
                    </Link>
                </li>
                <li css={NavItem}>
                    <Link to="/professional-drones/" css={NavLink}>
                        Professional
                    </Link>
                </li>
                <li css={NavItem}>
                    <Link to="/enterprise-drones/" css={NavLink}>
                        Enterprise
                    </Link>
                </li>
                <li css={NavItem}>
                    <Link to="/accessories/" css={NavLink}>
                        Accessories
                    </Link>
                </li>
                <li css={NavItem}>
                    <Link to="/contact-us/" css={NavLink}>
                        Contact Us
                    </Link>
                </li>
            </ul>
        </nav>
    )
}

const mapStateToProps = ({ items }) => {
    return {
        items
    }
}

export default connect(mapStateToProps)(Navigation)