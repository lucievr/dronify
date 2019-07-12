import React from 'react'
import buttonStyles from './ButtonStyles'

const Button = ({ label }) => {
    return (
        <button css={buttonStyles}>
            {label}
        </button>
    );
}

export default Button;