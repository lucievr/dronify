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

const ProfessionalDrones = ({ menuLoaded, showItem, menuItems, addedToCart }) => {

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
            onClick={() => navigate('/cart')}
          />,
        ],
    })

    const data = useStaticQuery(graphql`
        query DbProQuery {
            allMongodbDronifyDrones(
                filter: { category: { eq: "professional" } }
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
            <SEO title="Professional drones" />
            <Button />
            <div css={contentWrapper}>
                <CategoriesHeading
                    label='Professional drones'
                    descriptionText="Single-origin coffee yuccie hell of taxidermy tumeric iceland. Green juice pop-up ramps woke letterpress synth franzen, subway tile scenester literally. Sartorial vexillologist cliche, hammock green juice salvia whatever waistcoat. Bespoke raclette pop-up fanny pack 3 wolf moon lyft. Trust fund taiyaki shaman wayfarers. Bitters craft beer franzen, coloring book VHS ugh affogato forage." />
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
                                                maxHeight: `220px`,
                                            }}
                                        />
                                    </div>
                                    <div css={textWrapper}>
                                        <h3 css={productTitle}>{node.name}</h3>
                                        <p>
                                            {node.description}
                                        </p>
                                        <p>
                                            <strong>Price:</strong>{" "}
                                            {node.price}€
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
)(ProfessionalDrones)
