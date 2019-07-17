import React, { useState, useEffect } from "react"
import { Global } from "@emotion/core"
import Navigation from "../main-page/landing/navigation/Navigation"
import GlobalStyles from "../styles/GlobalStyles"
import { navigate } from "gatsby"
import { connect } from "react-redux"
import { removeAllItems } from "../../actions"
import Spin from "react-reveal/Spin"
import drone from "../../images/icon.png"

import {
    wrapper,
    bottom,
    bottom__heading,
    bottom__heading__title,
    bottom__heading__total,
} from "../cart/layout/CartStyles"

const FormSuccess = ({ removeAllItems }) => {
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 3000)
        setTimeout(() => {
            removeAllItems()
            navigate("/")
        }, 7000)
    }, [])

    return (
        <section css={wrapper}>
            <Global styles={GlobalStyles} />
            <Navigation />
            <div css={bottom}>
                <div css={bottom__heading}>
                    <h3 css={bottom__heading__title}>Dronify</h3>
                    <span css={bottom__heading__total}>
                        <span>CONTACT </span>
                    </span>
                </div>
                {loading ? (
                    <div className="loading">
                        <Spin>
                            <img
                                src={drone}
                                alt="drone icon"
                                className="droneIcon"
                            />
                        </Spin>
                        <h5>Your form is being processed...</h5>
                    </div>
                ) : (
                    <div className="loaded">
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
                        <h5 className="svg success">
                            Great! Your message has been received.
                        </h5>
                    </div>
                )}
            </div>
        </section>
    )
}

const mapDispatchToProps = {
    removeAllItems,
}

const mapStateToProps = ({ items }) => {
    return {
        items,
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(FormSuccess)
