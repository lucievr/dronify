import React from "react"
import { Link } from "gatsby"
import Button from "../../button/Button"
import Heading from "../../heading/Heading"

import Background from "./AccessoriesStyles"
import { Item, Content } from "./AccessoriesStyles"
import { DarkOverlay } from "../../../../styles/GlobalStyles"
import { StaticQuery, graphql } from "gatsby"

const Accessories = () => (
    <StaticQuery
        query={graphql`
            query SiteTitleQuery {
                site {
                    siteMetadata {
                        title
                    }
                }
            }
        `}
        render={data => (
            <div css={Background}>
                <div css={DarkOverlay}>
                    <div css={Content}>
                        <div css={Item}>
                            <Heading name="Accessories" />
                            <Link to="/accessories/">
                                <Button label="Explore" />
                            </Link>
                        </div>
                        <div css={Item}></div>
                    </div>
                    <footer>
                        © {new Date().getFullYear()}{" "}
                        {data.site.siteMetadata.title}
                    </footer>
                </div>
            </div>
        )}
    />
)

export default Accessories
