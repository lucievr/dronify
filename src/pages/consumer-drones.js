import React, { useEffect } from "react"
import { connect } from "react-redux"
import { addedToCart, menuLoaded, showItem } from "../actions"
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
    buttonCartStyle,
} from "../components/styles/ProductOverviewStyles"
import { Global } from "@emotion/core"
import SEO from "../components/gatsby-default-files/seo"
import { useStaticQuery, graphql, Link, navigate } from "gatsby"
import Img from "gatsby-image"
import Navigation from "../components/main-page/landing/navigation/Navigation"
import CategoriesHeading from "../components/categories/heading/CategoriesHeading"
import Button from '../components/main-page/navigation-button/Button'
import Footer from '../components/footer/Footer'
import Modali, { useModali } from 'modali'

const ConsumerDrones = ({ menuItems, menuLoaded, addedToCart, showItem }) => {

    useEffect(() => {
        menuLoaded(data.allMongodbDronifyDrones.edges)
    }, [])

    const [completeModal, toggleCompleteModal] = useModali({
        animated: true,
        title: 'Added!',
        message: 'Your item has been added to the cart.',
        buttons: [
          <Modali.Button
            label="Continue Shopping"
            isStyleCancel
            onClick={() => toggleCompleteModal()}
          />,
          <Modali.Button
            label="View Cart"
            isStyleDestructive
            onClick={() => {
                toggleCompleteModal()
                navigate('/cart')
            }}
          />,
        ],
    })

    const data = useStaticQuery(graphql`
    query DbConQuery {
        allMongodbDronifyDrones(
            filter: { category: { eq: "consumer" } }
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
            <SEO title="Consumer drones" />
            <Button />
            <div css={contentWrapper}>
                <CategoriesHeading
                    label='Consumer drones'
                    descriptionText="Lo-fi meh biodiesel, freegan banh mi jean shorts truffaut portland next level polaroid squid butcher etsy master cleanse. 3 wolf moon listicle keffiyeh, af typewriter quinoa shaman asymmetrical. VHS fanny pack +1, retro etsy truffaut blue bottle hella unicorn tote bag pitchfork slow-carb hell of jianbing. Live-edge messenger bag shoreditch ethical edison bulb ugh." />
                <div css={cardsWrapper}>
                    {
                        menuItems.map(({ node }) => (
                            <ul key={node.id} css={cardList}>
                                <li css={card}>
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
                                                maxHeight: `200px`,
                                            }}
                                        />
                                    </div>
                                    <div css={textWrapper}>
                                        <h3 css={productTitle}>{node.name}</h3>
                                        <p>
                                            {node.description}
                                        </p>
                                        <p>
                                            <strong>Price:</strong>{" "} {node.price}€
                                        </p>
                                        <div>
                                            <button
                                                onClick={() => {
                                                    addedToCart(node.id)
                                                    toggleCompleteModal()
                                                    }}
                                                css={buttonCartStyle}
                                            >
                                                Add to cart
                                            </button>
                                            <Modali.Modal 
                                                {...completeModal}>
                                            </Modali.Modal>
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
                                    </div>
                                </li>
                            </ul>
                        ))
                    }
                </div>
                <Footer />
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
)(ConsumerDrones)
