import React from 'react'

// REDUX
import { connect } from "react-redux"
import { addedToCart } from "../actions"

// STYLES
import { Global, css } from "@emotion/core"
import Icon from '../components/styles/Icon'
import GlobalStyles from "../components/styles/GlobalStyles"
// import { textWrapper } from "../components/styles/ProductOverviewStyles"
import { carouselWrapper, specWrapper, descriptionStyle, specText, column, btnBuy } from '../components/styles/ProductDetailStyles'

// COMPONENTS
import Img from "gatsby-image"
import Navigation from "../components/main-page/landing/navigation/Navigation"

// CAROUSEL
import CarouselUI from '../components/product-page/CarouselUI'
import makeCarousel from "react-reveal/makeCarousel"
import Slide from "react-reveal/Slide"
const Carousel = makeCarousel(CarouselUI)

const itemWrapper = css`
    margin-top: 10rem auto 0;
    
`

const ItemPage = ({ item, addedToCart }) => {

    const { id, name, description, price, category, icon1, icon2, icon3, icon4, icon5, icon6, spec1, spec2, spec3, spec4, spec5, spec6, localImage1, localImage2, localImage3, localImage4 } = item

    return (
        <>
            <Global styles={GlobalStyles} />
            <Navigation />
            <div css={itemWrapper}>
                <h2 style={{ letterSpacing: `1px` }}>
                    {name}
                </h2>
                <h3>€ {price}</h3>
                <h5>
                    <strong>Category:</strong> {category}
                </h5>
                <hr />
                <h6 css={descriptionStyle}>{description}</h6>
                <div css={specWrapper}>
                    <section css={column}>
                        <p>
                            <Icon name={icon1} />{" "}
                            <span css={specText}>
                                {spec1}
                            </span>
                        </p>
                        <p>
                            <Icon name={icon2} />{" "}
                            <span css={specText}>
                                {spec2}
                            </span>
                        </p>
                        <p>
                            <Icon name={icon3} />{" "}
                            <span css={specText}>
                                {spec3}
                            </span>
                        </p>
                    </section>
                    <section css={column}>
                        <p>
                            <Icon name={icon4} />{" "}
                            <span css={specText}>
                                {spec4}
                            </span>
                        </p>
                        <p>
                            <Icon name={icon5} />{" "}
                            <span css={specText}>
                                {spec5}
                            </span>
                        </p>
                        <p>
                            <Icon name={icon6} />{" "}
                            <span css={specText}>
                                {spec6}
                            </span>
                        </p>
                    </section>
                </div>
                <button
                    onClick={() => addedToCart(id)}
                    css={btnBuy}
                >
                    Add to cart
                </button>
            </div>
            <Carousel defaultWait={3000} css={carouselWrapper}>
                <Slide right>
                    <div>
                        <Img
                            fluid={
                                localImage1
                            }
                            imgStyle={{
                                position: `absolute`,
                                objectFit: `contain`,
                                top: `3rem`,
                                left: `10rem`,
                                maxHeight: `350px`,
                                maxWidth: `700px`
                            }}
                            style={{
                                position: `relative`,
                            }}
                        />
                    </div>
                </Slide>
                <Slide right>
                    <div>
                        <Img
                            fluid={
                                localImage2
                            }
                            imgStyle={{
                                position: `absolute`,
                                objectFit: `contain`,
                                top: `3rem`,
                                left: `10rem`,
                                maxHeight: `350px`,
                                maxWidth: `700px`
                            }}
                            style={{
                                position: `relative`,
                            }}
                        />
                    </div>
                </Slide>
                <Slide right>
                    <div>
                        <Img
                            fluid={
                                localImage3
                            }
                            imgStyle={{
                                position: `absolute`,
                                objectFit: `contain`,
                                top: `3rem`,
                                left: `10rem`,
                                maxHeight: `350px`,
                                maxWidth: `700px`
                            }}
                            style={{
                                position: `relative`,
                            }}
                        />
                    </div>
                </Slide>
                <Slide right>
                    <div>
                        <Img
                            fluid={
                                localImage4
                            }
                            imgStyle={{
                                position: `absolute`,
                                objectFit: `contain`,
                                top: `3rem`,
                                left: `10rem`,
                                maxHeight: `350px`,
                                maxWidth: `700px`
                            }}
                            style={{
                                position: `relative`,
                            }}
                        />
                    </div>
                </Slide>
            </Carousel>
        </>
    )
}

const mapStateToProps = ({ item }) => {
    return {
        item
    }
}

const mapDispatchToState = {
    addedToCart
}

export default connect(mapStateToProps, mapDispatchToState)(ItemPage)