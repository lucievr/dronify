import React from "react"
import { Col, Button, Form, FormGroup, Label, Input } from "reactstrap"
import { Global } from "@emotion/core"
import { Link } from "gatsby"
import GlobalStyles from "../../styles/GlobalStyles"
import Navigation from "../../main-page/landing/navigation/Navigation"
import { navigate } from "gatsby"

import Cards from "react-credit-cards"
import "react-credit-cards/lib/styles-compiled.css"
import valid from "card-validator"

import {
    wrapper,
    bottom,
    payformWrapper,
    bottom__heading,
    bottom__heading__title,
    bottom__heading__total,
    formGroup,
    cardStyles,
    formWrapper
} from "./CartStyles"

class Payment extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            number: this.props.number || "",
            numIsValid: false,
            name: this.props.name || "",
            expiry: this.props.expiry || "",
            expiryIsValid: false,
            cvc: this.props.cvc || "",
            cvcIsValid: false,
            focused: "",
        }
    }

    isNumValid = event => {
        let numValidation = valid.number(event.target.value).isValid

        if (!numValidation) {
            this.setState({
                numIsValid: false,
            })
        } else if (numValidation) {
            this.setState({
                numIsValid: true,
            })
        }
    }

    handleNumChange = event => {
        this.isNumValid(event)
        this.setState({
            number: event.target.value,
        })
    }

    handleNameChange = event => {
        this.setState({
            name: event.target.value,
        })
    }

    isExpiryValid = event => {
        let expiryValidation = valid.expirationDate(event.target.value).isValid

        if (!expiryValidation) {
            this.setState({
                expiryIsValid: false,
            })
        } else if (expiryValidation) {
            this.setState({
                expiryIsValid: true,
            })
        }
    }

    handleExpiryChange = event => {
        this.isExpiryValid(event)
        this.setState({
            expiry: event.target.value,
        })
    }

    isCvcValid = event => {
        let cvcValidation = valid.cvv(event.target.value).isValid

        if (!cvcValidation) {
            this.setState({
                cvcIsValid: false,
            })
        } else if (cvcValidation) {
            this.setState({
                cvcIsValid: true,
            })
        }
    }

    handleCvcChange = event => {
        this.isCvcValid(event)
        this.setState({
            cvc: event.target.value,
        })
    }

    handleOnFocus = fieldName => event => {
        this.setState({
            focused: fieldName,
        })
    }

    handleSubmit = event => {
        event.preventDefault()
        try {
            navigate("/payment-success/")
            this.setState({
                number: this.props.number || "",
                numIsValid: false,
                name: this.props.name || "",
                expiry: this.props.expiry || "",
                expiryIsValid: false,
                cvc: this.props.cvc || "",
                cvcIsValid: false,
                focused: "",
            })
        } catch (error) {
            alert(error)
        }
    }

    render() {
        return (
            <section css={wrapper}>
                <Global styles={GlobalStyles} />
                <Navigation />
                <div css={bottom}>
                    <div css={bottom__heading}>
                        <h3 css={bottom__heading__title}>My order</h3>
                        <span css={bottom__heading__total}>
                            <span>PAYMENT </span>
                        </span>
                    </div>
                    <div css={payformWrapper}>
                        <div css={formWrapper}>
                            <Cards
                                css={cardStyles}
                                cvc={this.state.cvc}
                                name={this.state.name}
                                number={this.state.number}
                                expiry={this.state.expiry}
                                focused={this.state.focused}
                            />
                            <Form
                                css={formGroup}
                                onSubmit={this.handleSubmit}
                                action="/payment-success/"
                            >
                                <FormGroup row>
                                    <Col md={12}>
                                        <Label for="number">Card Number</Label>
                                        <Input
                                            type="tel"
                                            name="number"
                                            id="number"
                                            placeholder="1234 1234 1234 1234"
                                            value={this.state.number}
                                            onChange={this.handleNumChange}
                                            onFocus={this.handleOnFocus("number")}
                                            maxLength="16"
                                            required
                                        />
                                        {/* <div>E.g.: 49..., 51..., 36..., 37...</div> */}
                                    </Col>
                                    {this.state.focused === "number" &&
                                        !this.state.numIsValid ? (
                                            <span style={{ color: `red` }}>
                                                Card number is invalid
                                    </span>
                                        ) : null}
                                </FormGroup>
                                <FormGroup row>
                                    <Col md={12}>
                                        <Label for="name">Name on Card</Label>
                                        <Input
                                            type="text"
                                            name="name"
                                            id="name"
                                            placeholder="Jane Doe"
                                            value={this.state.name}
                                            onChange={this.handleNameChange}
                                            onFocus={this.handleOnFocus("name")}
                                            pattern="^([A-Za-z ]){5,}$"
                                            title="Minimum 5 letters"
                                            maxLength="40"
                                            required
                                        />
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Col md={6}>
                                        <Label for="expiry">Date of Expiry</Label>
                                        <Input
                                            type="tel"
                                            name="expiry"
                                            id="expiry"
                                            placeholder="12/20"
                                            value={this.state.expiry}
                                            onChange={this.handleExpiryChange}
                                            onFocus={this.handleOnFocus("expiry")}
                                            maxLength="7"
                                            required
                                        />
                                    </Col>
                                    {this.state.focused === "expiry" &&
                                        !this.state.expiryIsValid ? (
                                            <span style={{ color: `red` }}>
                                                Invalid expiry date
                                    </span>
                                        ) : null}
                                    <Col md={6}>
                                        <Label for="cvc">CVC</Label>
                                        <Input
                                            type="tel"
                                            name="cvc"
                                            id="cvc"
                                            placeholder="123"
                                            value={this.state.cvc}
                                            onChange={this.handleCvcChange}
                                            onFocus={this.handleOnFocus("cvc")}
                                            maxLength="3"
                                            required
                                        />
                                    </Col>
                                    {this.state.focused === "cvc" &&
                                        !this.state.cvcIsValid ? (
                                            <span style={{ color: `red` }}>
                                                Invalid CVC
                                    </span>
                                        ) : null}
                                </FormGroup>
                                <div style={{display: `flex`, justifyContent: `space-between`}}>
                                    <Link to="/delivery/">
                                        <Button
                                            style={{padding: `.5rem 1rem`}}
                                            size="lg"
                                        >
                                            Previous Step
                                        </Button>
                                    </Link>

                                    <Button
                                        style={{padding: `.5rem 1rem`}}
                                        size="lg"
                                        type="submit"
                                    >
                                        Confirm payment
                                    </Button>
                                </div>
                            </Form>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default Payment
