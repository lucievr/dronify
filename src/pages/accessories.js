import React, { useEffect } from "react"

// REDUX
import { connect } from "react-redux"
import { addedToCart, menuLoaded, showItem } from "../actions"

// STYLES
import { Global } from "@emotion/core"
import GlobalStyles from "../components/styles/GlobalStyles"
import {
    contentWrapper,
    cardsWrapper,
    cardList,
    card,
    imageWrapper,
    textWrapper,
    productTitle,
    buttonStyle,
} from "../components/styles/ProductOverviewStyles"

// COMPONENTS
import SEO from "../components/gatsby-default-files/seo"
import { Link } from 'gatsby'
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"
import Navigation from "../components/main-page/landing/navigation/Navigation"
import CategoriesHeading from "../components/categories/heading/CategoriesHeading"

const AccessoriesDrones = ({ menuLoaded, menuItems, addedToCart, showItem }) => {
    useEffect(() => {
        menuLoaded(data.allMongodbDronifyDrones.edges)
    }, [])

    const data = useStaticQuery(graphql`
            query DbAccQuery {
                allMongodbDronifyDrones(
                    filter: { category: { eq: "accessories" } }
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
            <SEO title="Accessories" />
            <div css={contentWrapper}>
                <CategoriesHeading
                    label='Accessories'
                    descriptionText='some description goes here'
                />
                <div css={cardsWrapper}>

                    {
                        menuItems.map(({ node }) => (
                            <ul key={node.id} css={cardList}>
                                <li css={card}>
                                    <div css={imageWrapper}>
                                        <Img
                                            fluid={
                                                node.localImage1
                                                    .childImageSharp.fluid
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
                                        <h3 css={productTitle}>
                                            {node.name}
                                        </h3>
                                        <p>
                                            <strong>Category:</strong>{" "}
                                            {node.category}
                                        </p>
                                        <p>
                                            <strong>Price:</strong>{" "}
                                            {node.price}€
                                        </p>
                                        <button
                                            onClick={() => addedToCart(node.id)}
                                            css={buttonStyle}>
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
                            </ul>
                        ))
                    }

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
)(AccessoriesDrones)