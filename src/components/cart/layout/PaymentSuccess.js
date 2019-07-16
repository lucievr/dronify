import React from "react"
import { Button, Spinner } from "reactstrap"
import { Global } from "@emotion/core"
import { Link } from "gatsby"
import GlobalStyles from "../../styles/GlobalStyles"

import {
    wrapper,
    top,
    bottom,
    top_button,
    bottom__heading,
    bottom__heading__title,
    bottom__heading__total,
} from "./CartStyles"

class PaymentSuccess extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isLoading: true,
        }
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({ isLoading: false })
        }, 4000)
    }

    render() {
        return (
            <section css={wrapper}>
                <Global styles={GlobalStyles} />
                <div css={top}>
                    <Button color="secondary">
                        <Link css={top_button} to="/">
                            Home
                        </Link>
                    </Button>
                </div>
                <div css={bottom}>
                    <div css={bottom__heading}>
                        <h3 css={bottom__heading__title}>My order</h3>
                        <span css={bottom__heading__total}>
                            <span>PAYMENT </span>
                        </span>
                    </div>
                    {this.state.isLoading ? 
                    (<div className="loading">
                        <Spinner
                            color="info"
                            style={{
                                width: "6rem",
                                height: "6rem",
                                margin: `5rem`,
                            }}
                        />
                        <h5>Your payment is being processed...</h5>
                    </div>) :
                    (<div className="loaded">
                        <svg
                            version="1.1"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 130.2 130.2"
                        >
                            <circle
                                className="path circle"
                                fill="none"
                                stroke="#73AF55"
                                strokeWidth={6}
                                strokeMiterlimit={10}
                                cx="65.1"
                                cy="65.1"
                                r="62.1"
                            />
                            <polyline
                                className="path check"
                                fill="none"
                                stroke="#73AF55"
                                strokeWidth={6}
                                strokeLinecap="round"
                                strokeMiterlimit={10}
                                points="100.2,40.2 51.5,88.8 29.8,67.5 "
                            />
                        </svg>
                        <p className="svg success">
                            Oh Yeah! Your payment has been processed.
                        </p>
                    </div>)
                }
                </div>
            </section>
        )
    }
}

export default PaymentSuccess
