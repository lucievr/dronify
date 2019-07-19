import React from "react"
import { Container, Row, Col } from "reactstrap"
import { css } from "@emotion/core"
import { Map, GoogleApiWrapper, Marker } from "google-maps-react"
import "./contacts.scss"
import Form from './Form'

const maps = css`
    min-height: 30vh;
    margin-bottom: calc(15px + 0.5vh);
    bottom: calc(15px + 0.1vh);
    right: calc(5px + 0.1vw);
    left: calc(5px + 0.1vw);
`

const heading2 = css`
    text-transform: uppercase;
    letter-spacing: .2rem;
    margin-bottom: 4rem;
    font-size: 2.5rem;
    font-family: "Montserrat", sans-serif !important;
    color: #fff;
`

const findUs = css`
    color: #fff;
    padding-bottom: 3rem;
    height: 30rem;

    ul {
        text-align: left;
        list-style: none;
        margin-bottom: 2rem;

        li {
            margin-bottom: 1rem;

            &:first-of-type {
                font-size: 1.5rem;
                font-weight: bold;
            }
        }
    }
`

const heading = css`
    font-family: "Montserrat", sans-serif !important;
    text-transform: uppercase;
    letter-spacing: .2rem;
    color: #fff;
    font-size: calc(25px + 2vw);
    margin: calc(20px + 3vw);
`

class ContactForm extends React.Component {

    render() {
        return (
            <>
                <section className="section-contact" id="contact">
                    <h1 css={heading}>Drop us a line:</h1>
                    <div className="contact">
                        <div className="contact__form">
                            <Form />
                        </div>
                    </div>
                </section>
                <Container style={{ padding: `2rem` }}>
                    <h2 css={heading2}>Find us</h2>
                    <Row>
                        <Col>
                            <div css={findUs}>
                                <ul>
                                    <li>Address:</li>
                                    <li>Taborska 31</li>
                                    <li>Prague 4, Nusle, 18000</li>
                                    <li>Prague, Czech Republic</li>
                                </ul>
                                <ul>
                                    <li>Contacts:</li>
                                    <li>Phone: +420 700500700</li>
                                    <li>E-mail: hello@dronify.com</li>
                                    {/* <li>Prague, Czech Republic</li> */}
                                </ul>
                                <ul>
                                    <li>Office Hours:</li>
                                    <li>Monday to Friday, 9:00 to 18:00 (Prague time GMT+2)</li>
                                </ul>
                            </div>
                        </Col>
                        <Col md='6'>
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

                    </Row>
                </Container>
            </>
        )
    }
}

export default GoogleApiWrapper({
    apiKey: "AIzaSyCHMqCbsIxKOrTKvtYvvsfAEXnz2trsiAI",
})(ContactForm)

// export default ContactForm
