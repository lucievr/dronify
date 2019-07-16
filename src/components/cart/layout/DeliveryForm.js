import React from "react"
import { Col, Row, Button, Form, FormGroup, Label, Input } from "reactstrap"
import { Global } from "@emotion/core"
import { Link } from "gatsby"
import GlobalStyles from "../../styles/GlobalStyles"
import { login, isAuthenticated, getProfile } from "../../../utils/auth"
import { navigate } from "gatsby"

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
        // let user = getProfile()
        this.state = {
            user: {
                email: "",
                name: "",
                picture: "",
                address: "Taborska 31",
                address2: "",
                city: "Prague",
                country: "Czech Republic",
                postcode: "140 00",
            },
        }
    }

    handleChange = event => {
        const { user } = { ...this.state }
        const currentState = user
        const { name, value } = event.target
        currentState[name] = value

        this.setState({ user: currentState })
    }

    handleSubmit = event => {
        event.preventDefault()
        try {
            navigate("/payment/")
            this.setState({})
        } catch (error) {
            alert(error)
        }
    }
    render() {
        if (!isAuthenticated()) {
            login()
            return <p>Redirecting to login...</p>
        }

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

                    <Form onSubmit={this.handleSubmit}>
                        <Row form>
                            <Col md={6}>
                                <FormGroup>
                                    <Label for="name">Full Name</Label>
                                    <Input
                                        type="text"
                                        name="name"
                                        id="name"
                                        value={this.state.user.name}
                                        onChange={this.handleChange}
                                        required
                                    />
                                </FormGroup>
                            </Col>
                            <Col md={6}>
                                <FormGroup>
                                    <Label for="email">Email</Label>
                                    <Input
                                        type="email"
                                        name="email"
                                        id="email"
                                        value={this.state.user.email}
                                        onChange={this.handleChange}
                                        required
                                    />
                                </FormGroup>
                            </Col>
                        </Row>

                        <FormGroup>
                            <Label for="address">Address</Label>
                            <Input
                                type="text"
                                name="address"
                                id="address"
                                value={this.state.user.address}
                                onChange={this.handleChange}
                                required
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for="exampleAddress2">
                                Address Description (optional)
                            </Label>
                            <Input
                                type="text"
                                name="address2"
                                id="exampleAddress2"
                                placeholder="Apartment, studio, or floor"
                                value={this.state.user.address2}
                                onChange={this.handleChange}
                            />
                        </FormGroup>
                        <Row form>
                            <Col md={6}>
                                <FormGroup>
                                    <Label for="exampleCity">City</Label>
                                    <Input
                                        type="text"
                                        name="city"
                                        id="exampleCity"
                                        value={this.state.user.city}
                                        onChange={this.handleChange}
                                        required
                                    />
                                </FormGroup>
                            </Col>
                            <Col md={4}>
                                <FormGroup>
                                    <Label for="country">Country</Label>
                                    <Input
                                        type="text"
                                        name="country"
                                        id="country"
                                        value={this.state.user.country}
                                        onChange={this.handleChange}
                                        required
                                    />
                                </FormGroup>
                            </Col>
                            <Col md={2}>
                                <FormGroup>
                                    <Label for="postcode">Post Code</Label>
                                    <Input
                                        type="text"
                                        name="postcode"
                                        id="postcode"
                                        value={this.state.user.postcode}
                                        onChange={this.handleChange}
                                        required
                                    />
                                </FormGroup>
                            </Col>
                        </Row>
                        <FormGroup check>
                            <Input
                                type="checkbox"
                                name="check"
                                id="exampleCheck"
                                required
                            />
                            <Label for="exampleCheck" check>
                                The above details are correct
                            </Label>
                        </FormGroup>
                        <Link to="/cart/">
                            <Button size="lg">Previous Step</Button>
                        </Link>

                        <Button size="lg" type="submit">
                            Next Step
                        </Button>
                    </Form>
                </div>
            </section>
        )
    }
}

export default DeliveryForm
