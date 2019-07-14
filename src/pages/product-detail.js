import React from "react"
import Navigation from "../components/main-page/landing/navigation/Navigation"
import GlobalStyles from "../components/styles/GlobalStyles"
import { Global, css } from "@emotion/core"
import styled from "@emotion/styled"
import SEO from "../components/gatsby-default-files/seo"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import makeCarousel from "react-reveal/makeCarousel"
import Slide from "react-reveal/Slide"

import { connect } from "react-redux"
import Icon from "../components/styles/Icon"

const CarouselUI = ({ position, total, handleClick, children }) => (
    <Container>
        <Children>
            {children}
            <Arrow onClick={handleClick} data-position={position - 1}>
                {"<"}
            </Arrow>
            <Arrow right onClick={handleClick} data-position={position + 1}>
                {">"}
            </Arrow>
        </Children>
        <Dots>
            {Array(...Array(total)).map((val, index) => (
                <Dot key={index} onClick={handleClick} data-position={index}>
                    {index === position ? "● " : "○ "}
                </Dot>
            ))}
        </Dots>
    </Container>
)

const Carousel = makeCarousel(CarouselUI)

const width = "600px",
    height = "600px"
const Container = styled.div`
    border: 1px solid white;
    position: relative;
    overflow: hidden;
    width: ${width};
`
const Children = styled.div`
    width: ${width};
    position: relative;
    height: ${height};
    margin: 0 auto;
`
const Arrow = styled.div`
    text-shadow: 1px 1px 1px #fff;
    z-index: 100;
    line-height: ${height};
    text-align: center;
    position: absolute;
    top: 0;
    width: 10%;
    font-size: 3em;
    cursor: pointer;
    user-select: none;
    ${props =>
        props.right
            ? css`
                  left: 90%;
              `
            : css`
                  left: 0%;
              `}
`
const Dot = styled.span`
    font-size: 1.5em;
    cursor: pointer;
    text-shadow: 1px 1px 1px #fff;
    user-select: none;
`
const Dots = styled.span`
    text-align: center;
    width: ${width};
    z-index: 100;
`

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
    ${"" /* background-color: rgb(255, 255, 255, 0.2); */}
    margin: 30px;
    color: grey;
    font-family: "Montserrat", sans-serif;
    padding: 2rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`

const carouselWrapper = css`
    width: 50%;
    height: auto;
`

const textWrapper = css`
    width: 50%;
    padding: 0 20px;
    text-align: center;
    color: black;
`
const descriptionStyle = css`
    line-height: 1.7;
`

const specWrapper = css`
    display: flex;
    flex-wrap: no-wrap;
    align-items: flex-start;
    justify-content: space-evenly;
`

const column = css`
    align-self: left;
    text-align: left;
    word-wrap: break-word;
    margin: 10px;
`

const specText = css`
    margin: 0;
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
                            description
                            icon1
                            icon2
                            icon3
                            icon4
                            icon5
                            icon6
                            id
                            imageURL1
                            imageURL2
                            imageURL3
                            imageURL4
                            name
                            price
                            spec1
                            spec2
                            spec3
                            spec4
                            spec5
                            spec6
                            localImage1 {
                                id
                                childImageSharp {
                                    fluid(maxHeight: 500, fit: CONTAIN) {
                                        ...GatsbyImageSharpFluid
                                    }
                                }
                            }
                            localImage2 {
                                id
                                childImageSharp {
                                    fluid(maxHeight: 500, fit: CONTAIN) {
                                        ...GatsbyImageSharpFluid
                                    }
                                }
                            }
                            localImage3 {
                                id
                                childImageSharp {
                                    fluid(maxHeight: 500, fit: CONTAIN) {
                                        ...GatsbyImageSharpFluid
                                    }
                                }
                            }
                            localImage4 {
                                id
                                childImageSharp {
                                    fluid(maxHeight: 500, fit: CONTAIN) {
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
                <Navigation />
                <Global styles={GlobalStyles} />
                <SEO title="Product Detail" />

                {allMongodbDronifyDrones.edges.map(({ node }) => (
                    <ul key={node.id} css={cardList}>
                        <li css={card}>
                            <Carousel defaultWait={3000} css={carouselWrapper}>
                                <Slide right>
                                    <div>
                                        <Img
                                            fluid={
                                                node.localImage1.childImageSharp
                                                    .fluid
                                            }
                                            imgStyle={{
                                                position: `absolute`,
                                                objectFit: `contain`,
                                                top: `50px`,
                                                maxHeight: `500px`,
                                                maxWidth: `500px`
                                            }}
                                            style={{
                                                position: `relative`,
                                                maxHeight: `500px`,
                                            }}
                                        />
                                    </div>
                                </Slide>
                                <Slide right>
                                    <div>
                                        <Img
                                            fluid={
                                                node.localImage2.childImageSharp
                                                    .fluid
                                            }
                                            imgStyle={{
                                                position: `absolute`,
                                                objectFit: `contain`,
                                                top: `50px`,
                                                maxHeight: `500px`,
                                                maxWidth: `500px`
                                            }}
                                            style={{
                                                position: `relative`,
                                                maxHeight: `500px`,
                                            }}
                                        />
                                    </div>
                                </Slide>
                                <Slide right>
                                    <div>
                                        <Img
                                            fluid={
                                                node.localImage3.childImageSharp
                                                    .fluid
                                            }
                                            imgStyle={{
                                                position: `absolute`,
                                                objectFit: `contain`,
                                                top: `50px`,
                                                maxHeight: `500px`,
                                                maxWidth: `500px`
                                            }}
                                            style={{
                                                position: `relative`,
                                                maxHeight: `500px`,
                                            }}
                                        />
                                    </div>
                                </Slide>
                                <Slide right>
                                    <div>
                                        <Img
                                            fluid={
                                                node.localImage4.childImageSharp
                                                    .fluid
                                            }
                                            imgStyle={{
                                                position: `absolute`,
                                                objectFit: `contain`,
                                                top: `50px`,
                                                maxHeight: `500px`,
                                                maxWidth: `500px`
                                            }}
                                            style={{
                                                position: `relative`,
                                                maxHeight: `500px`,
                                            }}
                                        />
                                    </div>
                                </Slide>
                            </Carousel>
                            <div css={textWrapper}>
                                <h2 style={{ letterSpacing: `1px` }}>
                                    {node.name}
                                </h2>
                                <h2>€ {node.price}</h2>
                                <p>
                                    <strong>Category:</strong> {node.category}
                                </p>
                                <hr />
                                <h5 css={descriptionStyle}>{node.description}</h5>
                                <div css={specWrapper}>
                                    <section css={column}>
                                        <p>
                                            <Icon name={node.icon1} />{" "}
                                            <span css={specText}>
                                                {node.spec1}
                                            </span>
                                        </p>
                                        <p>
                                            <Icon name={node.icon2} />{" "}
                                            <span css={specText}>
                                                {node.spec2}
                                            </span>
                                        </p>
                                        <p>
                                            <Icon name={node.icon3} />{" "}
                                            <span css={specText}>
                                                {node.spec3}
                                            </span>
                                        </p>
                                    </section>
                                    <section css={column}>
                                        <p>
                                            <Icon name={node.icon4} />{" "}
                                            <span css={specText}>
                                                {node.spec4}
                                            </span>
                                        </p>
                                        <p>
                                            <Icon name={node.icon5} />{" "}
                                            <span css={specText}>
                                                {node.spec5}
                                            </span>
                                        </p>
                                        <p>
                                            <Icon name={node.icon6} />{" "}
                                            <span css={specText}>
                                                {node.spec6}
                                            </span>
                                        </p>
                                    </section>
                                </div>

                                <button css={Button}>Buy</button>
                            </div>
                        </li>
                    </ul>
                ))}
                <footer>© {new Date().getFullYear()} dronify</footer>
            </>
        )}
    />
)

export default connect()(ProductDetail)
