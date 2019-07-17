import React from "react"
import { saveBtn, sectionWrapperCol } from "../styles/AccountStyles"
import { Button, Form, FormGroup, Label, Input } from "reactstrap"
import { css } from "@emotion/core"
import { Map, GoogleApiWrapper, Marker } from "google-maps-react"
import { navigate } from "gatsby"

const GoogleMaps = css`
    min-height: 60vh;
    width: 100%;
    position: relative;
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-between;
    align-items: center;
`

const encode = (data) => {
    return Object.keys(data)
        .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
        .join("&");
}

class ContactForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = { name: "", email: "", message: "" }
    }

    handleChange = e => this.setState({ [e.target.name]: e.target.value });

    handleSubmit = e => {
        fetch("/", {
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: encode({ "form-name": "contact", ...this.state })
        })
          .then(() => navigate("/form-success/"))
          .catch(error => alert(error))
          .finally(this.setState({ name: "", email: "", message: "" }));
  
        e.preventDefault();
      };

    render() {
        return (
            <>
                <section css={sectionWrapperCol}>
                    <div css={GoogleMaps}>
                        <Map
                            google={this.props.google}
                            zoom={13}
                            initialCenter={{ lat: 50.06224, lng: 14.437376 }}
                            style={{ width: `50%`, left: `50px` }}
                        >
                            <Marker
                                position={{ lat: 50.06224, lng: 14.437376 }}
                            />
                        </Map>
                        <div style={{ width: `50%`, margin: `30px` }}>
                            <h2>Find us</h2>
                            <h4>Dronify</h4>
                            <p>Taborska 31</p>
                            <p>Prague 4</p>
                            <p>140 00</p>
                        </div>
                    </div>
                    <div style={{ marginTop: `3rem` }}>
                        <Form
                            name="contact"
                            method="POST"
                            data-netlify="true"
                            netlify-honeypot="bot-field"
                            onSubmit={this.handleSubmit}
                            action="/form-success/"
                        >
                            <input
                                type="hidden"
                                name="form-name"
                                value="contact"
                            />
                            <input name="bot-field" type="hidden" />
                            <h2>Contact Us</h2>
                            <FormGroup>
                                <Label for="name">Your Name: </Label>
                                <Input
                                    type="text"
                                    name="name"
                                    id="name"
                                    value={this.state.name}
                                    onChange={this.handleChange}
                                    pattern="^([A-Za-z ]){5,}$"
                                    title="Minimum 5 letters"
                                    maxLength="40"
                                    required
                                />
                            </FormGroup>

                            <FormGroup>
                                <Label for="email">Your Email: </Label>
                                <Input
                                    type="email"
                                    name="email"
                                    id="email"
                                    value={this.state.email}
                                    onChange={this.handleChange}
                                    pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                                    title="Enter a valid email address"
                                    maxLength="50"
                                    required
                                />
                            </FormGroup>

                            <FormGroup>
                                <Label for="message">Message: </Label>
                                <Input
                                    type="textarea"
                                    name="message"
                                    id="message"
                                    value={this.state.message}
                                    onChange={this.handleChange}
                                    title="Your message is too short"
                                    minLength="10"
                                    required
                                />
                            </FormGroup>

                            <Button size="lg" css={saveBtn} type="submit">
                                Send
                            </Button>
                        </Form>
                    </div>
                </section>
            </>
        )
    }
}

export default GoogleApiWrapper({
    apiKey: "AIzaSyCHMqCbsIxKOrTKvtYvvsfAEXnz2trsiAI",
})(ContactForm)
