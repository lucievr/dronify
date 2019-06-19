import React, { Fragment } from "react"
// import { Link } from "gatsby"
import Button from '@material-ui/core/Button';
// import Layout from "../components/layout"
import SEO from "../components/seo"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const ConsumerDrones = () => (
  <StaticQuery
    query={graphql`
      query DbConQuery {
        allMongodbDronifyDrones(filter: { category: { eq: "consumer" } }) {
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
                  fluid(maxWidth: 700) {
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
      <>
      <div>
        <SEO title="products" />
        <h1>Hi from the second page</h1>
        <div
          className="div--card"
          style={{
            width: `100%`,
            maxWidth: `1512px`,
            margin: `0 auto 50px auto`,
            paddingLeft: `1rem`,
            paddingRight: `1rem`,
            lineHeight: `1.5`,
            display: `flex`,
            flexWrap: `wrap`,
            justifyContent: `center`,
            alignItems: `center`,
          }}
        >
          {allMongodbDronifyDrones.edges.map(({ node }) => (
            <>
              <ul
                key={node.id}
                className="productListing"
                style={{
                  listStyleType: `none`,
                  padding: `0`,
                  display: `flex`,
                  flexWrap: `wrap`,
                  flexDirection: `row`,
                  justifyContent: `center`,
                  alignItems: `center`,
                }}
              >
                <li 
                style={{
                  minWidth: `400px`, 
                  backgroundColor: `rgb(0,0,0, 0.05)`, 
                  margin: `30px`, 
                  color: `grey`, 
                  fontFamily: `'Montserrat', sans-serif`,
                  padding: `20px`
                }}>
                  <a href="/" style={{textDecoration: `none`}}>
                    <article className="productCard">
                      <div style={{maxWidth: `500px`}}>
                        <Img fluid={node.localImage.childImageSharp.fluid} />
                      </div>
                      <div style={{padding: `0 20px`, textAlign: `center`, color: `grey`}}>
                      <h3>
                        <strong>{node.name}</strong>
                      </h3>
                      <p>
                        <strong>Category:</strong> {node.category}
                      </p>
                      <p>
                        <strong>Price:</strong> € {node.price}
                      </p>
                      <Button variant="outlined">Show product</Button>
                      </div>
                    </article>
                  </a>
                </li>
              </ul>
            </>
          ))}
        </div>
        </div>
      </>
    )}
  />
)

export default ConsumerDrones
