import React from "react"
// import { Link } from "gatsby"
import Layout from "../components/layout"
import GlobalStyles from "../components/GlobalStyles"
import { Global } from "@emotion/core"
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
    <Layout>
      <Global styles={GlobalStyles} />
      <SEO title="Consumer drones" />
        <div style={{textAlign: `center`, marginTop: `160px`}}>
          <h1 style={{fontWeight: `300`}}>Consumer drones</h1>
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
                      width: `400px`,
                      height: `500px`,
                      backgroundColor: `rgb(255,255,255, 0.2)`,
                      margin: `30px`,
                      color: `grey`,
                      fontFamily: `'Montserrat', sans-serif`,
                      padding: `20px`,
                      display: `flex`,
                      flexDirection: `column`, 
                      justifyContent: `center`
                    }}
                  >
                    <a href="/" style={{ textDecoration: `none` }}>
                      <article className="productCard">
                        <div style={{ width: `100%`, height: `auto` }}>
                          <Img fluid={node.localImage.childImageSharp.fluid} />
                        </div>
                        <div
                          style={{
                            padding: `0 20px`,
                            textAlign: `center`,
                            color: `black`,
                          }}
                        >
                          <h3 style={{letterSpacing: `1px`}}>
                            <strong>{node.name}</strong>
                          </h3>
                          <p>
                            <strong>Category:</strong> {node.category}
                          </p>
                          <p>
                            <strong>Price:</strong> € {node.price}
                          </p>
                          <button>Show product</button>
                        </div>
                      </article>
                    </a>
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
