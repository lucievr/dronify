import React from "react"
import Layout from "../components/gatsby-default-files/layout"
import Navigation from "../components/main-page/landing/navigation/Navigation"
import GlobalStyles from "../components/styles/GlobalStyles"
import { contentWrapper, categoryTitle, cardsWrapper, cardList, card, imageWrapper, textWrapper, productTitle, buttonStyle } from '../components/styles/ProductOverviewStyles'
import { Global } from "@emotion/core"
import SEO from "../components/gatsby-default-files/seo"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"


const AccessoriesDrones = () => (
  <StaticQuery
    query={graphql`
      query DbAccQuery {
        allMongodbDronifyDrones(filter: { category: { eq: "accessories" } }) {
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
    `}
    render={({ allMongodbDronifyDrones }) => (
      <Layout>
        <Navigation />
        <Global styles={GlobalStyles} />
        <SEO title="Accessories" />
        <div css={contentWrapper}>
          <h1 css={categoryTitle}>Accessories</h1>
          <div css={cardsWrapper}>
            {allMongodbDronifyDrones.edges.map(({ node }) => (
              <>
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
                      <button css={buttonStyle}>Show product</button>
                    </div>
                  </li>
                </ul>
              </>
            ))}
          </div>
        </div>
      </Layout>
    )}
  />
)

export default AccessoriesDrones
