import React from "react"
import { Link } from "gatsby"
import Button from "../../button/Button"
import Heading from "../../heading/Heading"

import Background from "./AccessoriesStyles"
import { Item, Content, subHeadingLeft } from "./AccessoriesStyles"
import { DarkOverlay } from "../../../../styles/GlobalStyles"
import { StaticQuery, graphql } from "gatsby"
import { backToTop } from "../../button/ButtonStyles"
import Icon from "../../../../styles/Icon"

const Accessories = props => (
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
                            <h5 css={subHeadingLeft}>
                                The best drone accessories and tools to keep you
                                flying safer, longer and smarter
                            </h5>
                            <Link to="/accessories/">
                                <Button label="Explore" />
                            </Link>
                        </div>
                        <div css={Item}></div>
                        <button
                            css={backToTop}
                            onClick={() => {
                                props.gotopage(0) //Go to top, page 0
                            }}
                        >
                            <Icon color="white" name="chevrons-up" />
                        </button>
                    </div>
                </div>
            </div>
        )}
    />
)

export default Accessories
