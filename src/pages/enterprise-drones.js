import React, { useEffect } from "react"
import { connect } from "react-redux"
import { addedToCart, menuLoaded } from "../actions"
import GlobalStyles from "../components/styles/GlobalStyles"
import {
    contentWrapper,
    categoryTitle,
    cardsWrapper,
    cardList,
    card,
    imageWrapper,
    textWrapper,
    productTitle,
    buttonStyle,
} from "../components/styles/ProductOverviewStyles"
import { carouselWrapper, specWrapper, descriptionStyle, specText, column, btnBuy} from '../components/styles/ProductDetailStyles'
import { Global } from "@emotion/core"
import SEO from "../components/gatsby-default-files/seo"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import Navigation from "../components/main-page/landing/navigation/Navigation"
import useToggle from "react-use/lib/useToggle"
import Icon from '../components/styles/Icon'

import makeCarousel from "react-reveal/makeCarousel"
import Slide from "react-reveal/Slide"
import CarouselUI from '../components/product-page/CarouselUI'

const Carousel = makeCarousel(CarouselUI)

const EnterpriseDrones = props => {
    useEffect(() => {
        props.menuLoaded(data.allMongodbDronifyDrones.edges)
    }, [])

    const { menuItems, addedToCart } = props

    const [show, toggle] = useToggle(false)

    const data = useStaticQuery(graphql`
        query DbEntQuery {
            allMongodbDronifyDrones(
                filter: { category: { eq: "enterprise" } }
            ) {
                edges {
                    node {
                        id
                        name
                        category
                        description
                        price
                        icon1
                        icon2
                        icon3
                        icon4
                        icon5
                        icon6
                        spec1
                        spec2
                        spec3
                        spec4
                        spec5
                        spec6
                        imageURL1
                        imageURL2
                        imageURL3
                        imageURL4
                        localImage1 {
                            id
                            childImageSharp {
                                fluid(maxWidth: 700, fit: CONTAIN) {
                                    ...GatsbyImageSharpFluid
                                }
                            }
                        }
                        localImage2 {
                            id
                            childImageSharp {
                                fluid(maxWidth: 700, fit: CONTAIN) {
                                    ...GatsbyImageSharpFluid
                                }
                            }
                        }
                        localImage3 {
                            id
                            childImageSharp {
                                fluid(maxWidth: 700, fit: CONTAIN) {
                                    ...GatsbyImageSharpFluid
                                }
                            }
                        }
                        localImage4 {
                            id
                            childImageSharp {
                                fluid(maxWidth: 700, fit: CONTAIN) {
                                    ...GatsbyImageSharpFluid
                                }
                            }
                        }
                    }
                }
            }
        }
    `)
    return (
        <>
            <Navigation />
            <Global styles={GlobalStyles} />
            <SEO title="Enterprise drones" />
            <div css={contentWrapper}>
                <h1 css={categoryTitle}>Enterprise drones</h1>
                <div css={cardsWrapper}>
                    <ul css={cardList}>

                        {menuItems.map(({ node }) => (
                            
                            <li css={card} key={node.id}>
                                
                                <div
                                    className={
                                        show
                                            ? "modal display-block"
                                            : "modal display-none"
                                    }
                                >
                                    <div className="modal-content">
                                        <span
                                            className="icon close"
                                            onClick={toggle}
                                        >
                                            <Icon name="x-circle"/>
                                        </span>
                        
                            <div css={textWrapper}>
                                <h2 style={{ letterSpacing: `1px` }}>
                                    {node.name}
                                </h2>
                                <h3>€ {node.price}</h3>
                                <h5>
                                    <strong>Category:</strong> {node.category}
                                </h5>
                                <hr />
                                <h6 css={descriptionStyle}>{node.description}</h6>
                                <div css={specWrapper}>
                                    <section css={column}>
                                        <p>
                                            <Icon name={node.icon1} />{" "}
                                            <span css={specText}>
                                                {node.spec1}
                                            </span>
                                        </p>
                                        <p>
                                            <Icon name={node.icon2} />{" "}
                                            <span css={specText}>
                                                {node.spec2}
                                            </span>
                                        </p>
                                        <p>
                                            <Icon name={node.icon3} />{" "}
                                            <span css={specText}>
                                                {node.spec3}
                                            </span>
                                        </p>
                                    </section>
                                    <section css={column}>
                                        <p>
                                            <Icon name={node.icon4} />{" "}
                                            <span css={specText}>
                                                {node.spec4}
                                            </span>
                                        </p>
                                        <p>
                                            <Icon name={node.icon5} />{" "}
                                            <span css={specText}>
                                                {node.spec5}
                                            </span>
                                        </p>
                                        <p>
                                            <Icon name={node.icon6} />{" "}
                                            <span css={specText}>
                                                {node.spec6}
                                            </span>
                                        </p>
                                    </section>
                                </div>
                                <button
                                        onClick={() => addedToCart(node.id)}
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
                                                node.localImage1.childImageSharp
                                                    .fluid
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
                                                node.localImage2.childImageSharp
                                                    .fluid
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
                                                node.localImage3.childImageSharp
                                                    .fluid
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
                                                node.localImage4.childImageSharp
                                                    .fluid
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
                            </div>
                        </div>

                                <div css={imageWrapper}>
                                    <Img
                                        fluid={
                                            node.localImage1.childImageSharp
                                                .fluid
                                        }
                                        imgStyle={{
                                            position: `absolute`,
                                            objectFit: `contain`,
                                        }}
                                        style={{
                                            position: `relative`,
                                            maxHeight: `280px`,
                                        }}
                                    />
                                </div>
                                
                                <div css={textWrapper}>
                                    <h3 css={productTitle}>{node.name}</h3>
                                    <p>
                                        <strong>Category:</strong>{" "}
                                        {node.category}
                                    </p>
                                    <p>
                                        <strong>Price:</strong> € {node.price}
                                    </p>
                                    <button
                                        onClick={() => addedToCart(node.id)}
                                        css={buttonStyle}
                                    >
                                        Add to cart
                                    </button>

                                    <button
                                        css={buttonStyle}
                                        onClick={toggle}
                                    >
                                        Show product
                                    </button>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
                <footer>© {new Date().getFullYear()} dronify</footer>
            </div>
        </>
    )
}

const mapStateToProps = state => {
    return {
        menuItems: state.menu,
    }
}

const mapDispatchToProps = {
    addedToCart,
    menuLoaded,
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(EnterpriseDrones)
