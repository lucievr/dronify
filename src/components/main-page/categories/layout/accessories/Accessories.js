import React from 'react'
import { css } from '@emotion/core'
import Button from '../../button/Button'
import Heading from '../../heading/Heading'

const Layout = css`
    height: 100%;
`

const Accessories = () => {
    return (
        <div css={Layout}>
            <Heading name='Accessories' />
            <Button label='Button' />
        </div>
    )
}

export default Accessories