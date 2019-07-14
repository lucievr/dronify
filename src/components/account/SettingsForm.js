import React from "react"

import { Col, Row, Button, Form, FormGroup, Label, Input } from "reactstrap"

export default class UserSettings extends React.Component {
    render() {
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
                                placeholder="with a placeholder"
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
                                placeholder="with a placeholder"
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
                        placeholder="1234 Main St"
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="exampleAddress2">Address Description (optional)</Label>
                    <Input
                        type="text"
                        name="address2"
                        id="exampleAddress2"
                        placeholder="Apartment, studio, or floor"
                    />
                </FormGroup>
                <Row form>
                    <Col md={6}>
                        <FormGroup>
                            <Label for="exampleCity">City</Label>
                            <Input type="text" name="city" id="exampleCity" />
                        </FormGroup>
                    </Col>
                    <Col md={4}>
                        <FormGroup>
                            <Label for="country">Country</Label>
                            <Input type="text" name="country" id="country" />
                        </FormGroup>
                    </Col>
                    <Col md={2}>
                        <FormGroup>
                            <Label for="postcode">Post Code</Label>
                            <Input type="text" name="postcode" id="postcode" />
                        </FormGroup>
                    </Col>
                </Row>
                <FormGroup check>
                    <Input type="checkbox" name="check" id="exampleCheck" />
                    <Label for="exampleCheck" check>
                        The above details are correct
                    </Label>
                </FormGroup>
                <Button>Save</Button>
            </Form>
        )
    }
}
