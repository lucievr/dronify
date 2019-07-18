import React from 'react'
import { css } from "@emotion/core"

const heading = css`
    font-family: "Montserrat", sans-serif !important;
    text-transform: uppercase;
    letter-spacing: .2rem;
    color: #fff;
    font-size: calc(25px + 2vw);
    margin: calc(22px + 3vw);
`

const description = css`
    font-family: "Montserrat", sans-serif !important;
    padding: 2rem;
    color: #fff;
    font-size: 1rem;
    line-height: 2;
    margin: calc(20px + 2vw);
`

const CategoriesHeading = ({ label, descriptionText }) => {
    return ( 
        <>
        <h1 css={heading}>{label}</h1>
        <p css={description}>
            {descriptionText}
        </p>
        </>
     )
}
 
export default CategoriesHeading