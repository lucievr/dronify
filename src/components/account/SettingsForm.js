import React from "react"
import { saveBtn } from "../styles/AccountStyles"
import { Col, Row, Button, Form, FormGroup, Label, Input } from "reactstrap"

export default class UserSettings extends React.Component {
    render() {
        console.log(this.props.user)
        return (
            <Form>
                <Row form>
                    <Col md={6}>
                        <FormGroup>
                            <Label for="fullname">Full Name</Label>
                            <Input
                                type="text"
                                name="fullname"
                                id="fullname"
                                value={this.props.user.nickname}
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
                                value={this.props.user.email}
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
                        value={this.props.user.address}
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
                        value={this.props.user.address2}
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
                                value={this.props.user.city}
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
                                value={this.props.user.country}
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
                                value={this.props.user.postcode}
                            />
                        </FormGroup>
                    </Col>
                </Row>
                <FormGroup check>
                    <Input type="checkbox" name="check" id="exampleCheck" />
                    <Label for="exampleCheck" check>
                        The above details are correct
                    </Label>
                </FormGroup>
                <Button size="lg" css={saveBtn}>
                    Save Changes
                </Button>
            </Form>
        )
    }
}
