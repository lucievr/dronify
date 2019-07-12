import React from "react"
<<<<<<< HEAD
import Layout from "../components/gatsby-default-files/layout"
import Navigation from "../components/main-page/landing/navigation/Navigation"
import GlobalStyles from "../components/styles/GlobalStyles"
import { Global } from "@emotion/core"
import SEO from "../components/gatsby-default-files/seo"

// import { connect } from 'react-redux'

const Accessories = () => {

    return (
        <Layout>
            <Navigation />
            <Global styles={GlobalStyles} />
            <SEO title="Contact Us" />
        </Layout>
    )
}

// export default connect()(Accessories)
export default Accessories
=======
// import { Link } from "gatsby"
import Layout from "../components/layout"
import Navigation from "../components/landing-page/Navigation/Navigation"
import GlobalStyles from "../components/GlobalStyles"
import { Global, css } from "@emotion/core"
import SEO from "../components/seo"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const contentWrapper = css`
  text-align: center;
  margin-top: 160px;
`

const categoryTitle = css`
  font-weight: 300;
`

const cardsWrapper = css`
  width: 100%;
  max-width: 1512px;
  margin: 0 auto 50px auto;
  padding-left: 1rem;
  padding-right: 1rem;
  line-height: 1.5;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`

const cardList = css`
  list-style-type: none;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`

const card = css`
  width: 450px;
  height: 500px;
  background-color: rgb(255, 255, 255, 0.2);
  margin: 30px;
  color: grey;
  font-family: "Montserrat", sans-serif;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`

const imageWrapper = css`
  width: 100%;
  height: auto;
  max-height: 40%;
`

const textWrapper = css`
  padding: 0 20px;
  text-align: center;
  color: black;
`
const Button = css`
  color: #fff;
  background-color: transparent;
  border: 2px solid #fff;
  padding: 1rem 1rem;
  border-radius: 5rem;
  font-size: 1rem;
  text-transform: uppercase;
  &:hover {
    background-color: rgb(0, 0, 0, 0.3);
    cursor: pointer;
  }
`

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
              imageURL
              localImage {
                id
                childImageSharp {
                  fluid(maxWidth: 500) {
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
                      <Img fluid={node.localImage.childImageSharp.fluid} />
                    </div>
                    <div css={textWrapper}>
                      <h3 style={{ letterSpacing: `1px` }}>{node.name}</h3>
                      <p>
                        <strong>Category:</strong> {node.category}
                      </p>
                      <p>
                        <strong>Price:</strong> € {node.price}
                      </p>
                      <button css={Button}>Show product</button>
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

export default ConsumerDrones
>>>>>>> marijan
