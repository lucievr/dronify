import React from "react"
import { saveBtn, sectionWrapper } from "../styles/AccountStyles"
import { Col, Row, Button, Form, FormGroup, Label, Input } from "reactstrap"
import { css } from "@emotion/core"
import GoogleMapReact from "google-maps-react"

const ContactForm = props => {
    return (
        <>
            <section css={sectionWrapper}>
                <Form name="contact" method="POST" data-netlify="true">
                    <Col form>
                        <Col md={6}>
                            <FormGroup>
                                <Label for="name">
                                    Your Name: <input type="text" name="name" />
                                </Label>
                            </FormGroup>
                        </Col>

                        <Col md={6}>
                            <FormGroup>
                                <Label for="email">
                                    Your Email:{" "}
                                    <input type="email" name="email" />
                                </Label>
                            </FormGroup>
                        </Col>

                        <Col md={6}>
                            <FormGroup>
                                <label>
                                    Message:{" "}
                                    <textarea name="message"></textarea>
                                </label>
                            </FormGroup>
                        </Col>
                        <Col md={6}>
                            <Button size="lg" css={saveBtn}>
                                Send
                            </Button>
                        </Col>
                    </Col>
                </Form>
            </section>

            <Map
                google={props.google}
                zoom={8}
                initialCenter={{ lat: 47.444, lng: -122.176 }}
            />
        </>
    )
}

/* export default ContactForm
 */
export default GoogleApiWrapper({
    apiKey: "AIzaSyAC9WtkRbRs0W1wo_bpmspdAsOGKSll5zA",
})(ContactForm)
