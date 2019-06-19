import React from "react"
// import { Link } from "gatsby"
// import Button from '@material-ui/core/Button';
// import Layout from "../components/layout"
import SEO from "../components/seo"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const SecondPage = () => (

  <StaticQuery
    query={graphql`
      query DbConQuery {
        allMongodbDronifyDrones(filter: { category: { eq: "consumer" } }) {
          edges {
            node {
              category
              colors
              description
              icon1
              icon2
              icon3
              icon4
              icon5
              icon6
              id
              name
              price
              spec1
              spec2
              spec3
              spec4
              spec5
              spec6
              version
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
        <SEO title="products" />
        <h1>Hi from the second page</h1>
        {
          allMongodbDronifyDrones.edges.map(({ node }) => (
            <>
                    <ul key={node.id}>
                          <li><strong>Product:</strong> {node.name}</li>
                          <li><strong>Price:</strong> {node.price}</li>
                          <li><strong>Category:</strong> {node.category}</li>
                    </ul>
                    <div>
                       <Img fluid={node.localImage.childImageSharp.fluid} />
                    </div>
            </>
              ))
        }
        </>
)}
  />
)

export default SecondPage
