import React from "react"
import { saveBtn, sectionWrapperCol } from "../styles/AccountStyles"
import { Button, Form, FormGroup, Label, Input } from "reactstrap"
import { css } from "@emotion/core"
import { Map, GoogleApiWrapper, Marker } from "google-maps-react"

const GoogleMaps = css`
    min-height: 60vh;
    width: 100%;
    position: relative;
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-between;
    align-items: center;
`

const ContactForm = props => {
    return (
        <>
            <section css={sectionWrapperCol}>
                <div css={GoogleMaps}>
                    <Map
                        google={props.google}
                        zoom={13}
                        initialCenter={{ lat: 50.06224, lng: 14.437376 }}
                        style={{ width: `50%`, left: `40px` }}
                    >
                        <Marker position={{ lat: 50.06224, lng: 14.437376 }} />
                    </Map>
                    <div style={{ width: `50%`, margin: `30px` }}>
                        <h2>Find us</h2>
                        <h4>Dronify</h4>
                        <p>Taborska 31</p>
                        <p>Prague 4</p>
                        <p>140 00</p>
                    </div>
                </div>

                <Form
                    style={{ width: `40%`, marginTop: `4rem` }}
                    name="contact"
                    method="POST"
                    data-netlify="true"
                >
                    <h2>Contact Us</h2>
                    <FormGroup>
                        <Label for="name">Your Name: </Label>
                        <Input type="text" name="name" />
                    </FormGroup>

                    <FormGroup>
                        <Label for="email">Your Email: </Label>
                        <Input type="email" name="email" />
                    </FormGroup>

                    <FormGroup>
                        <Label for="message">Message: </Label>
                        <Input type="textarea" name="message" id="message" />
                    </FormGroup>

                    <Button size="lg" css={saveBtn}>
                        Send
                    </Button>
                </Form>
            </section>
        </>
    )
}

/* export default ContactForm
 */
export default GoogleApiWrapper({
    apiKey: "AIzaSyCHMqCbsIxKOrTKvtYvvsfAEXnz2trsiAI",
})(ContactForm)
