import React from "react"
import { Container, Row, Col } from "reactstrap"
import { css } from "@emotion/core"
import { Map, GoogleApiWrapper, Marker } from "google-maps-react"
import "./contacts.scss"
import Form from './Form'

const maps = css`
    min-height: 60vh;
    margin-bottom: 5rem;
`

const findUs = css`
    color: #fff;
    padding-bottom: 3rem;

    h2 {
        text-transform: uppercase;
        letter-spacing: .2rem;
        padding-bottom: 2rem;
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
                {/* <Container style={{ padding: `2rem` }}>
                    <Row>
                        <Col>
                            <div css={findUs}>
                                <h2>Find us</h2>
                                <p>Taborska 31</p>
                                <p>Prague 4, Nusle, 18000</p>
                                <p>Prague, Czech Republic</p>
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
                </Container> */}
            </>
        )
    }
}

export default GoogleApiWrapper({
    apiKey: "AIzaSyCHMqCbsIxKOrTKvtYvvsfAEXnz2trsiAI",
})(ContactForm)
