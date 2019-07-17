// import React from "react"
// import Navigation from "../components/main-page/landing/navigation/Navigation"
// import GlobalStyles from "../components/styles/GlobalStyles"
// import { Global, css } from "@emotion/core"

// import SEO from "../components/gatsby-default-files/seo"
// import { StaticQuery, graphql } from "gatsby"
// import Img from "gatsby-image"
// import makeCarousel from "react-reveal/makeCarousel"
// import Slide from "react-reveal/Slide"
// import CarouselUI from '../components/product-page/CarouselUI'

// import { connect } from "react-redux"
// import Icon from "../components/styles/Icon"

// const Carousel = makeCarousel(CarouselUI)

// const ProductDetail = () => (
//     <StaticQuery
//         query={graphql`
//             query ProductQuery {
//                 allMongodbDronifyDrones {
//                     edges {
//                         node {
//                             category
//                             description
//                             icon1
//                             icon2
//                             icon3
//                             icon4
//                             icon5
//                             icon6
//                             id
//                             imageURL1
//                             imageURL2
//                             imageURL3
//                             imageURL4
//                             name
//                             price
//                             spec1
//                             spec2
//                             spec3
//                             spec4
//                             spec5
//                             spec6
//                             localImage1 {
//                                 id
//                                 childImageSharp {
//                                     fluid(maxHeight: 500, fit: CONTAIN) {
//                                         ...GatsbyImageSharpFluid
//                                     }
//                                 }
//                             }
//                             localImage2 {
//                                 id
//                                 childImageSharp {
//                                     fluid(maxHeight: 500, fit: CONTAIN) {
//                                         ...GatsbyImageSharpFluid
//                                     }
//                                 }
//                             }
//                             localImage3 {
//                                 id
//                                 childImageSharp {
//                                     fluid(maxHeight: 500, fit: CONTAIN) {
//                                         ...GatsbyImageSharpFluid
//                                     }
//                                 }
//                             }
//                             localImage4 {
//                                 id
//                                 childImageSharp {
//                                     fluid(maxHeight: 500, fit: CONTAIN) {
//                                         ...GatsbyImageSharpFluid
//                                     }
//                                 }
//                             }
//                         }
//                     }
//                 }
//             }
//         `}
//         render={({ allMongodbDronifyDrones }) => (
//             <>
//                 <Navigation />
//                 <Global styles={GlobalStyles} />
//                 <SEO title="Product Detail" />

//                 {allMongodbDronifyDrones.edges.map(({ node }) => (
//                     <ul key={node.id} css={cardList}>
//                         <li css={card}>
//                             <Carousel defaultWait={3000} css={carouselWrapper}>
//                                 <Slide right>
//                                     <div>
//                                         <Img
//                                             fluid={
//                                                 node.localImage1.childImageSharp
//                                                     .fluid
//                                             }
//                                             imgStyle={{
//                                                 position: `absolute`,
//                                                 objectFit: `contain`,
//                                                 top: `50px`,
//                                                 maxHeight: `500px`,
//                                                 maxWidth: `500px`
//                                             }}
//                                             style={{
//                                                 position: `relative`,
//                                                 maxHeight: `500px`,
//                                             }}
//                                         />
//                                     </div>
//                                 </Slide>
//                                 <Slide right>
//                                     <div>
//                                         <Img
//                                             fluid={
//                                                 node.localImage2.childImageSharp
//                                                     .fluid
//                                             }
//                                             imgStyle={{
//                                                 position: `absolute`,
//                                                 objectFit: `contain`,
//                                                 top: `50px`,
//                                                 maxHeight: `500px`,
//                                                 maxWidth: `500px`
//                                             }}
//                                             style={{
//                                                 position: `relative`,
//                                                 maxHeight: `500px`,
//                                             }}
//                                         />
//                                     </div>
//                                 </Slide>
//                                 <Slide right>
//                                     <div>
//                                         <Img
//                                             fluid={
//                                                 node.localImage3.childImageSharp
//                                                     .fluid
//                                             }
//                                             imgStyle={{
//                                                 position: `absolute`,
//                                                 objectFit: `contain`,
//                                                 top: `50px`,
//                                                 maxHeight: `500px`,
//                                                 maxWidth: `500px`
//                                             }}
//                                             style={{
//                                                 position: `relative`,
//                                                 maxHeight: `500px`,
//                                             }}
//                                         />
//                                     </div>
//                                 </Slide>
//                                 <Slide right>
//                                     <div>
//                                         <Img
//                                             fluid={
//                                                 node.localImage4.childImageSharp
//                                                     .fluid
//                                             }
//                                             imgStyle={{
//                                                 position: `absolute`,
//                                                 objectFit: `contain`,
//                                                 top: `50px`,
//                                                 maxHeight: `500px`,
//                                                 maxWidth: `500px`
//                                             }}
//                                             style={{
//                                                 position: `relative`,
//                                                 maxHeight: `500px`,
//                                             }}
//                                         />
//                                     </div>
//                                 </Slide>
//                             </Carousel>
//                             <div css={textWrapper}>
//                                 <h2 style={{ letterSpacing: `1px` }}>
//                                     {node.name}
//                                 </h2>
//                                 <h2>€ {node.price}</h2>
//                                 <p>
//                                     <strong>Category:</strong> {node.category}
//                                 </p>
//                                 <hr />
//                                 <h5 css={descriptionStyle}>{node.description}</h5>
//                                 <div css={specWrapper}>
//                                     <section css={column}>
//                                         <p>
//                                             <Icon name={node.icon1} />{" "}
//                                             <span css={specText}>
//                                                 {node.spec1}
//                                             </span>
//                                         </p>
//                                         <p>
//                                             <Icon name={node.icon2} />{" "}
//                                             <span css={specText}>
//                                                 {node.spec2}
//                                             </span>
//                                         </p>
//                                         <p>
//                                             <Icon name={node.icon3} />{" "}
//                                             <span css={specText}>
//                                                 {node.spec3}
//                                             </span>
//                                         </p>
//                                     </section>
//                                     <section css={column}>
//                                         <p>
//                                             <Icon name={node.icon4} />{" "}
//                                             <span css={specText}>
//                                                 {node.spec4}
//                                             </span>
//                                         </p>
//                                         <p>
//                                             <Icon name={node.icon5} />{" "}
//                                             <span css={specText}>
//                                                 {node.spec5}
//                                             </span>
//                                         </p>
//                                         <p>
//                                             <Icon name={node.icon6} />{" "}
//                                             <span css={specText}>
//                                                 {node.spec6}
//                                             </span>
//                                         </p>
//                                     </section>
//                                 </div>

//                                 <button css={Button}>Buy</button>
//                             </div>
//                         </li>
//                     </ul>
//                 ))}
//                 <footer>© {new Date().getFullYear()} dronify</footer>
//             </>
//         )}
//     />
// )

// export default connect()(ProductDetail)
