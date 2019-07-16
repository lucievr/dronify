import React from 'react'
import { Col, Button, Form, FormGroup, Label, Input } from "reactstrap"
import { Global } from "@emotion/core"
import { Link } from 'gatsby'
import GlobalStyles from '../../styles/GlobalStyles'
import { Spinner } from 'reactstrap';

import {
    wrapper,
    top,
    bottom,
    payformWrapper,
    top_button,
    bottom__heading,
    bottom__heading__title,
    bottom__heading__total,
} from './CartStyles'

const PaymentSuccess = () => {
    return(
        <section css={wrapper}>
        <Global styles={GlobalStyles} />
            <div css={top}>
                <Button color="secondary">
                    <Link css={top_button} to='/'>Home</Link>
                </Button>
            </div>
            <div css={bottom}>
                <div css={bottom__heading}>
                    <h3 css={bottom__heading__title}>My order</h3>
                    <span css={bottom__heading__total}>
                        <span>PAYMENT </span>
                    </span>
                </div>
                <div>
                <Spinner color="info" style={{ width: '4rem', height: '4rem', margin: `5rem` }} />
                <h5>Your payment is being processed...</h5>
                </div>
            </div>
        </section>
    )
}

export default PaymentSuccess
