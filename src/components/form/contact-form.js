import React from "react"
import { Container, Row, Col } from "reactstrap"
// import { saveBtn, sectionWrapperCol } from "../styles/AccountStyles"
import { css } from "@emotion/core"
import { Map, GoogleApiWrapper, Marker } from "google-maps-react"
import { navigate } from "gatsby"
import "./contacts.scss"
import HeadingStyles from "../main-page/categories/heading/HeadingStyles"

const maps = css`
    min-height: 60vh;
`

const encode = data => {
    return Object.keys(data)
        .map(
            key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
        )
        .join("&")
}

class ContactForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = { name: "", email: "", message: "" }
    }

    handleChange = e => this.setState({ [e.target.name]: e.target.value })

    handleSubmit = e => {
        fetch("/", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
<<<<<<< HEAD
            body: encode({ "form-name": "contact", ...this.state }),
=======
            body: encode({ "form-name": "contact-form", ...this.state }),
>>>>>>> d039bbd712362ba436cce14f54c1f21df19e8e90
        })
            .then(() => navigate("/form-success/"))
            .catch(error => alert(error))
            .finally(this.setState({ name: "", email: "", message: "" }))

        e.preventDefault()
    }

    render() {
        return (
            <>
                <section className="section-contact" id="contact">
                    <h1 css={HeadingStyles}>Drop us a line:</h1>
                    <div className="contact">
                        <div className="contact__form">
                            <form
                                className="form"
                                name="contact-form"
                                method="POST"
                                data-netlify="true"
                                netlify-honeypot="bot-field"
                                onSubmit={this.handleSubmit}
                                action="/form-success/"
                            >
                                <input
                                    type="hidden"
                                    name="form-name"
                                    value="contact-form"
                                />
                                <input name="bot-field" type="hidden" />
                                <div className="form__group">
                                    <input
                                        type="text"
                                        className="form__input"
                                        placeholder="Name"
                                        id="name"
<<<<<<< HEAD
=======
                                        name="name"
                                        value={this.state.name}
                                        onChange={this.handleChange}
                                        pattern="^([A-Za-z ]){5,}$"
                                        title="Minimum 5 letters"
                                        maxLength="40"
>>>>>>> d039bbd712362ba436cce14f54c1f21df19e8e90
                                        required
                                    />
                                    <label
                                        htmlFor="name"
                                        className="form__label"
                                    >
                                        Name
                                    </label>
                                </div>

                                <div className="form__group">
                                    <input
                                        type="email"
                                        className="form__input"
                                        placeholder="Email"
                                        id="email"
<<<<<<< HEAD
=======
                                        name="email"
                                        value={this.state.email}
                                        onChange={this.handleChange}
                                        pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                                        title="Enter a valid email address"
                                        maxLength="50"
>>>>>>> d039bbd712362ba436cce14f54c1f21df19e8e90
                                        required
                                    />
                                    <label
                                        htmlFor="email"
                                        className="form__label"
                                    >
                                        Email
                                    </label>
                                </div>

                                <div className="form__group">
                                    <textarea
                                        name="message"
                                        className="form__message"
<<<<<<< HEAD
                                        placeholder="Message"
                                        id="message"
                                        cols="30"
                                        rows="6"
=======
                                        placeholder="Your message"
                                        id="message"
                                        cols="30"
                                        rows="6"
                                        value={this.state.message}
                                        onChange={this.handleChange}
                                        title="Your message is too short"
                                        minLength="10"
                                        required
>>>>>>> d039bbd712362ba436cce14f54c1f21df19e8e90
                                    />
                                </div>

                                <div className="form__group">
<<<<<<< HEAD
                                    <button className="form__button">
=======
                                    <button
                                        className="form__button"
                                        type="submit"
                                    >
>>>>>>> d039bbd712362ba436cce14f54c1f21df19e8e90
                                        Send
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </section>
                <Container style={{ padding: `2rem` }}>
                    <Row>
                        <Col>
                            <Map
                                google={this.props.google}
                                zoom={13}
                                initialCenter={{
                                    lat: 50.06224,
                                    lng: 14.437376,
                                }}
                                css={maps}
                            >
                                <Marker
                                    position={{ lat: 50.06224, lng: 14.437376 }}
                                />
                            </Map>
                        </Col>
                        <Col>
                            <h2>Find us</h2>
                            <p>Taborska 31</p>
                            <p>Prague 4, Nusle, 18000</p>
                            <p>Prague, Czech Republic</p>
                        </Col>
                    </Row>
                </Container>
            </>
        )
    }
}

export default GoogleApiWrapper({
    apiKey: "AIzaSyCHMqCbsIxKOrTKvtYvvsfAEXnz2trsiAI",
})(ContactForm)
<<<<<<< HEAD

{
    /* <div style={{ marginTop: `3rem` }}>
                <section css={sectionWrapperCol}>
                    <h2 css={heading}>Find us</h2>
                    <div css={GoogleMaps}>
                        <Map
                            google={this.props.google}
                            zoom={13}
                            initialCenter={{ lat: 50.06224, lng: 14.437376 }}
                            style={{ width: `50%`, left: `7rem` }}
                        >
                            <Marker
                                position={{ lat: 50.06224, lng: 14.437376 }}
                            />
                        </Map>
                        <div style={{ width: `55%`, margin: `0.5rem` }}>
                            <img src={drone} alt="drone icon" css={droneImg} />
                            <h4 css={dronify}>Dronify</h4>
                            <p css={address}>Taborska 31</p>
                            <p css={address}>Prague 4</p>
                            <p css={address}>140 00</p>
                        </div>
                    </div>
                    <div style={{ marginTop: `3rem` }}>
                        <h2 css={heading}>Contact Us</h2>
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
                                Send message
                            </Button>
                        </Form>
                    </div> */
}
=======
>>>>>>> d039bbd712362ba436cce14f54c1f21df19e8e90
