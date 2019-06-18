import React from 'react'
import { css } from '@emotion/core'

const Navbar = css`
    display: flex;
    justify-content: center;
    height: 4.5rem;
`

const NavList = css`
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    width: 70%;
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
        </nav>
    )
}

export default Navigation