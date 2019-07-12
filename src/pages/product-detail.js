import React from "react"
import Layout from "../components/layout"
import Navigation from "../components/landing-page/navigation/Navigation"
import GlobalStyles from "../components/GlobalStyles"
import { Global, css } from "@emotion/core"
import SEO from "../components/seo"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import { connect } from "react-redux"
import Icon from "../components/Icon"


const cardList = css`
    max-width: 1512px;
  margin: 160px auto 50px auto;
  padding-left: 1rem;
  padding-right: 1rem;
  line-height: 1.5;
  list-style-type: none;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`

const card = css`
width: 100%;
  background-color: rgb(255, 255, 255, 0.2);
  margin: 30px;
  color: grey;
  font-family: "Montserrat", sans-serif;
  padding: 2rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`

const imageWrapper = css`
  width: 50%;
  height: auto;
`

const textWrapper = css`
    width: 50%;
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

const ProductDetail = () => (
  <StaticQuery
    query={graphql`
      query ProductQuery {
        allMongodbDronifyDrones {
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
              imageURL
              name
              otherImageURL
              price
              spec1
              spec2
              spec3
              spec4
              spec5
              spec6
              version
              localImage {
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
        <SEO title="Product Detail" />

            {allMongodbDronifyDrones.edges.map(({ node }) => (
              <ul key={node.id} css={cardList}>
                <li css={card}>
                  <div css={imageWrapper}>
                    <Img
                      fluid={node.localImage.childImageSharp.fluid}
                      imgStyle={{ position: `absolute`, objectFit: `contain` }}
                      style={{ position: `relative`, maxHeight: `300px` }}
                    />
                  </div>
                  <div css={textWrapper}>
                    <h1 style={{ letterSpacing: `1px` }}>{node.name}</h1>
                    <h2>€ {node.price}</h2>
                    <p>
                      <strong>Category:</strong> {node.category}
                    </p>
                    <p>
                      
                    </p>
                    <Icon name="aperture" class="white" />
                    <Icon name="camera" class="white" />
                    <Icon name="radio" class="white" />
                    <Icon name="send" class="white" />
                    <Icon name="clock" class="white" />
                    <button css={Button}>Buy</button>
                  </div>
                </li>
              </ul>
            ))}
      </Layout>
    )}
  />
)

export default connect()(ProductDetail)
