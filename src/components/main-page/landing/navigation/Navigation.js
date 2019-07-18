import React from "react"
import { connect } from "react-redux"
import { Link } from "gatsby"

// COMPONENTS
import Button from "../../navigation-button/Button"
import Icon from "../../../styles/Icon"
import {
    NavBar,
    NavMenuTop,
    ButtonWrapper,
    LogoName,
    Icons,
    IconItem,
    NavList,
    NavItem,
    NavLink,
} from "../../../styles/NavigationStyles"
import { isAuthenticated, logout } from "../../../../utils/auth"

const Navigation = ({ items }) => {
    const total = items.reduce(
        (acc, item) => acc + item.price * item.quantity,
        0
    )

    return (
        <nav css={NavBar}>
            <div css={NavMenuTop}>
                <div css={ButtonWrapper}>
                    {/* <Button /> */}
                </div>
                <Link to="/">
                    <div css={LogoName}> Dronify </div>
                </Link>
                <div css={Icons}>
                    {!isAuthenticated() ? (
                        <Link to="/account">
                            <div css={IconItem}>
                                <span className="iconDiv">
                                    <Icon name="user-plus" />
                                </span>
                                <span className="iconName">Log In</span>
                            </div>
                        </Link>
                    ) : (
                        <>
                            <Link to="/account">
                                <div css={IconItem}>
                                    <span className="iconDiv">
                                        <Icon name="user" />
                                    </span>
                                    <span className="iconName">Account</span>
                                </div>
                            </Link>
                            <a
                                href="#logout"
                                onClick={e => {
                                    logout()
                                    e.preventDefault()
                                }}
                            >
                                <div css={IconItem}>
                                    <span className="iconDiv">
                                        <Icon name="x-circle" />
                                    </span>
                                    <span className="iconName">Log Out</span>
                                </div>
                            </a>
                        </>
                    )}

                    <Link to="/cart">
                        <div css={IconItem}>
                            <span className="iconDiv">
                                <Icon name="shopping-cart" />
                            </span>
                            <span className="iconName">Cart: {total}€</span>
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
        items,
    }
}

export default connect(mapStateToProps)(Navigation)
