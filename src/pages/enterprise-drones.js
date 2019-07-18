import React, { useEffect } from "react"
import { connect } from "react-redux"
import { addedToCart, menuLoaded, showItem } from "../actions"
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
// import { carouselWrapper, specWrapper, descriptionStyle, specText, column, btnBuy } from '../components/styles/ProductDetailStyles'
import { Global } from "@emotion/core"
import SEO from "../components/gatsby-default-files/seo"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import Navigation from "../components/main-page/landing/navigation/Navigation"
import { Link } from 'gatsby'
// import useToggle from "react-use/lib/useToggle"

// const Carousel = makeCarousel(CarouselUI)

const EnterpriseDrones = ({ menuItems, menuLoaded, addedToCart, showItem }) => {
    useEffect(() => {
        menuLoaded(data.allMongodbDronifyDrones.edges)
    }, [])

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
                                        <strong>Price:</strong>
                                         € {node.price}
                                    </p>
                                    <button
                                        onClick={() => addedToCart(node.id)}
                                        css={buttonStyle}
                                    >
                                        Add to cart
                                    </button>

                                    <Link to='/item'>
                                        <button
                                            css={buttonStyle}
                                            onClick={() => {
                                                showItem(node.id)
                                            }}
                                        >
                                            Show product
                                        </button>
                                    </Link>
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
        item: state.item
    }
}

const mapDispatchToProps = {
    addedToCart,
    menuLoaded,
    showItem
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(EnterpriseDrones)
