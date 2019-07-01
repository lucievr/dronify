import React from 'react'
import { css } from '@emotion/core'
import Button from '../../products-button/Button'
import Heading from '../../products-heading/Heading'

const Layout = css`
    height: 100%;
`

const Accessories = () => {
    return (
        <div css={Layout}>
            <Heading name='Accessories'/>
            <Button label='Button' />
        </div>
    )
}

export default Accessories