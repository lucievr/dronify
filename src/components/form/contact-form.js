import React from "react"
import { Container, Row, Col } from "reactstrap"
// import { saveBtn, sectionWrapperCol } from "../styles/AccountStyles"
// import { Button, Form, FormGroup, Label, Input } from "reactstrap"
import { css } from "@emotion/core"
import { Map, GoogleApiWrapper, Marker } from "google-maps-react"
import { navigate } from "gatsby"
import "./contacts.scss"
import HeadingStyles from "../main-page/categories/heading/HeadingStyles"

const maps = css`
    min-height: 60vh;
`

// import drone from "../../images/icon.png"

// const GoogleMaps = css`
//     min-height: 40vh;
//     height: 55vh;
//     max-height: 80vh;
//     width: 100%;
//     position: relative;
//     display: flex;
//     flex-direction: row-reverse;
//     justify-content: space-between;
//     align-items: center;
// `

// const heading = css`
//     margin-bottom: 2rem;
//     font-weight: 400;
// `
// const dronify = css`
//     text-transform: uppercase;
//     letter-spacing: 1px;
//     font-weight: 400;
//     font-family: "Montserrat", sans-serif !important;
// `

// const address = css`
//     margin-bottom: 0.2rem;
// `

// const droneImg = css`
//     margin: 0.1rem auto;
//     height: 4rem;
//     width: 4rem;
// `

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
            body: encode({ "form-name": "contact", ...this.state }),
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
                            <form action="#" className="form">
                                <div className="form__group">
                                    <input
                                        type="text"
                                        className="form__input"
                                        placeholder="Name"
                                        id="name"
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
                                        placeholder="Message"
                                        id="message"
                                        cols="30"
                                        rows="6"
                                    />
                                </div>

                                <div className="form__group">
                                    <button className="form__button">
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
                {/* <div css={GoogleMaps}>
                        
                    </div> */}
            </>
        )
    }
}

export default GoogleApiWrapper({
    apiKey: "AIzaSyCHMqCbsIxKOrTKvtYvvsfAEXnz2trsiAI",
})(ContactForm)

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
