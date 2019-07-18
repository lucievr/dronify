import React from 'react'
import HeadingStyles from './HeadingStyles'

const Heading = ({ name }) => {
    return (
        <h3 css={HeadingStyles}>{name}</h3>
    )
}

export default Heading