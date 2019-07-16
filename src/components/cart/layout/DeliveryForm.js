import React from "react"
import { Col, Button, Form, FormGroup, Label, Input } from "reactstrap"
import { Global } from "@emotion/core"
import { Link } from "gatsby"
import GlobalStyles from "../../styles/GlobalStyles"

import {
    wrapper,
    top,
    bottom,
    top_button,
    bottom__heading,
    bottom__heading__title,
    bottom__heading__total,
} from "./CartStyles"

class DeliveryForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }
    render() {
        return (
            <section css={wrapper}>
                <Global styles={GlobalStyles} />
                <div css={top}>
                    <Button color="secondary">
                        <Link css={top_button} to="/">
                            Home
                        </Link>
                    </Button>
                </div>
                <div css={bottom}>
                    <div css={bottom__heading}>
                        <h3 css={bottom__heading__title}>My order</h3>
                        <span css={bottom__heading__total}>
                            <span>DELIVERY </span>
                        </span>
                    </div>
                    <Link to="/cart/">
                        <Button size="lg">Previous Step</Button>
                    </Link>
                    <Link to="/payment/">
                        <Button size="lg">Next Step</Button>
                    </Link>
                </div>
            </section>
        )
    }
}

export default DeliveryForm
