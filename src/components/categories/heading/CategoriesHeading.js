import React from 'react'
import { css } from "@emotion/core"

const heading = css`
    font-family: "Montserrat", sans-serif !important;
    text-transform: uppercase;
    letter-spacing: .2rem;
    color: #fff;
`

const description = css`
    font-family: "Montserrat", sans-serif !important;
    padding: 2rem;
    color: #fff;
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