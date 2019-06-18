import React from 'react'
import Button from '../Button/Button'
import { css } from '@emotion/core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { faUser } from '@fortawesome/free-regular-svg-icons'

const cart = <FontAwesomeIcon icon={faShoppingCart} size='1x' color='white' />
const user = <FontAwesomeIcon icon={faUser} size='1x' color='white' />

const Navbar = css`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    
    position: absolute;
    top: 0;

    height: 7rem;
    width: 100%;
    padding-top: 1rem;
`

const NavMenuTop = css`
    display: flex;
    justify-content: space-between;

    width: 100%;
    padding: 0 1.5rem;
`

const ButtonWrapper = css`
    flex: 1 1 20%;
`

const LogoName = css`
    flex: 1 1 60%;
    font-size: 1.5rem;
    color: #fff;
    text-transform: uppercase;
`

const Icons = css`
    flex: 1 1 20%;
    display: flex;
    justify-content: flex-end;

    div:first-child {
        margin-right: 1rem;
    }
`

const NavList = css`
    display: flex;
    justify-content: space-between;
    margin: 0;

    width: 70%;
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

            <div css={NavMenuTop}>
                <div css={ButtonWrapper}>
                    <Button />
                </div>
                <a href='localhost:8000'>
                    <span css={LogoName}>Dronify</span>
                </a>
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
            </div>

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

        </nav>
    )
}

export default Navigation