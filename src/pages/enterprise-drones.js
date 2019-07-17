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
import { Global } from "@emotion/core"
import SEO from "../components/gatsby-default-files/seo"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import Navigation from "../components/main-page/landing/navigation/Navigation"
import useToggle from "react-use/lib/useToggle"

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
                        imageURL1
                        localImage1 {
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
                                    id="myModal"
                                    className={
                                        show
                                            ? "modal display-block"
                                            : "modal display-none"
                                    }
                                >
                                    <div className="modal-content">
                                        <span
                                            className="close"
                                            onClick={toggle}
                                        >
                                            &times;
                                        </span>
                                        <h2>{node.name}</h2>
                                        <p>{node.description}</p>
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
                                        id="myBtn"
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
