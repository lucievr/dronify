import React from 'react'
import { css } from '@emotion/core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { faUser } from '@fortawesome/free-regular-svg-icons'

const cart = <FontAwesomeIcon icon={faShoppingCart} size='1x' color='white' />
const user = <FontAwesomeIcon icon={faUser} size='1x' color='white' />


const Navbar = css`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    
    position: absolute;
    top: 0;

    width: 100%;
    margin-top: .5rem;
    padding: 0 1rem;
`

const NavList = css`
    flex: 1 1 80%;
    display: flex;
    justify-content: space-between;

    padding-left: 10rem;
`

const Icons = css`
    flex: 1 1 20%;
    display: flex;
    justify-content: flex-end;

    div:first-child {
        margin-right: 1rem;
    }
`

const IconItem = css`
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #fff;
`

const NavItem = css`
    list-style-type: none;
`

const NavLink = css`
    text-decoration: none;
    color: #fff;
    letter-spacing: .2rem;
    text-transform: uppercase;
    font-size: .8rem;
`

const Navigation = () => {
    return (
        <nav css={Navbar}>
            <ul css={NavList}>
                <li css={NavItem}>
                    <a css={NavLink} href="#">Customers</a>
                </li>
                <li css={NavItem}>
                    <a css={NavLink} href="#">Professionals</a>
                </li>
                <li css={NavItem}>
                    <a css={NavLink} href="#">Enterprise</a>
                </li>
                <li css={NavItem}>
                    <a css={NavLink} href="#">Accessories</a>
                </li>
                <li css={NavItem}>
                    <a css={NavLink} href="#">Contact Us</a>
                </li>
            </ul>
            <div css={Icons}>
                <div css={IconItem}>
                    {user}
                    <span>Log In</span>
                </div>
                <div css={IconItem}>
                    {cart}
                    <span>Cart: 0</span>
                </div>
            </div>
        </nav>
    )
}

export default Navigation