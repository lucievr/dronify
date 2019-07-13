import React, { useEffect } from "react"
import { connect } from 'react-redux'
import { addedToCart, menuLoaded } from "../actions"
import Layout from "../components/gatsby-default-files/layout"
import GlobalStyles from "../components/styles/GlobalStyles"
import { contentWrapper, categoryTitle, cardsWrapper, cardList, card, imageWrapper, textWrapper, productTitle, buttonStyle } from '../components/styles/ProductOverviewStyles'
import { Global, css } from "@emotion/core"
import SEO from "../components/gatsby-default-files/seo"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import Navigation from "../components/main-page/landing/navigation/Navigation"


const EnterpriseDrones = (props) => {

  useEffect(() => {
    props.menuLoaded(data.allMongodbDronifyDrones.edges)
  }, [])

  const { menuItems, addedToCart } = props

  console.log(menuItems)

  const data = useStaticQuery(graphql`
      query DbEntQuery {
        allMongodbDronifyDrones(filter: { category: { eq: "enterprise" } }) {
          edges {
            node {
              id
              name
              category
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
    <Layout>
      <Navigation />
      <Global styles={GlobalStyles} />
      <SEO title="Enterprise drones" />
      <div css={contentWrapper}>
        <h1 css={categoryTitle}>Enterprise drones</h1>
        <div css={cardsWrapper}>
          {
            menuItems.map(({ node }) => (
              <ul key={node.id} css={cardList}>
                <li css={card}>
                  <div css={imageWrapper}>
                    <Img fluid={node.localImage1.childImageSharp.fluid} imgStyle={{ position: `absolute`, objectFit: `contain` }} style={{ position: `relative`, maxHeight: `280px` }} />
                  </div>
                  <div css={textWrapper}>
                    <h3 css={productTitle}>{node.name}</h3>
                    <p>
                      <strong>Category:</strong> {node.category}
                    </p>
                    <p>
                      <strong>Price:</strong> € {node.price}
                    </p>
                    <button
                      onClick={() => addedToCart(node.id)}
                      css={buttonStyle}>
                      Show product
                    </button>
                  </div>
                </li>
              </ul>
            ))
          }
        </div>
      </div>
    </Layout>
  )
}

const mapStateToProps = (state) => {
  return {
    menuItems: state.menu
  }
}

const mapDispatchToProps = {
  addedToCart,
  menuLoaded
}

export default connect(mapStateToProps, mapDispatchToProps)(EnterpriseDrones)
