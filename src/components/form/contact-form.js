import React from "react"
import { saveBtn, sectionWrapper } from "../styles/AccountStyles"
import { Col, Row, Button, Form, FormGroup, Label, Input } from "reactstrap"
import { css } from "@emotion/core"
import { Map, GoogleApiWrapper, Marker } from "google-maps-react"

const GoogleMaps = css`
    width: 50%;
    height: 80vh;
    position: relative;
`
const FlexContainer = css`
    display: flex;
    justify-content: center;
`

const ContactForm = props => {
    return (
        <>
            <section css={sectionWrapper}>
                <Form name="contact" method="POST" data-netlify="true">
                    <Row form>
                        <Col md={6}>
                            <FormGroup>
                                <Label for="name">
                                    Your Name: <Input type="text" name="name" />
                                </Label>
                            </FormGroup>
                        </Col>
                    </Row>

                    <Row form>
                        <Col md={6}>
                            <FormGroup>
                                <Label for="email">
                                    Your Email:{" "}
                                    <Input type="email" name="email" />
                                </Label>
                            </FormGroup>
                        </Col>
                    </Row>
                    <Row form>
                        <Col md={6}>
                            <FormGroup>
                                <label>
                                    Message:{" "}
                                    <Input type="textarea" name="message" />
                                </label>
                            </FormGroup>
                        </Col>
                    </Row>
                    <Col md={6}>
                        <Button size="lg" css={saveBtn}>
                            Send
                        </Button>
                    </Col>
                </Form>
            </section>

            <div css={FlexContainer}>
                <div css={GoogleMaps}>
                    <Map
                        google={props.google}
                        zoom={8}
                        initialCenter={{ lat: 50.06224, lng: 14.437376 }}
                    >
                        <Marker position={{ lat: 50.06224, lng: 14.437376 }} />
                    </Map>
                </div>
            </div>
        </>
    )
}

/* export default ContactForm
 */
export default GoogleApiWrapper({
    apiKey: "AIzaSyCHMqCbsIxKOrTKvtYvvsfAEXnz2trsiAI",
})(ContactForm)
