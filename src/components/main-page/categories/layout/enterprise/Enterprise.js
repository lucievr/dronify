import React from "react"
import { Link } from "gatsby"
import Button from "../../button/Button"
import Heading from "../../heading/Heading"

import Background from "./EnterpriseStyles"
import { Item, Content, Image, subHeadingRight } from "./EnterpriseStyles"
import { DarkOverlay } from "../../../../styles/GlobalStyles"
import Fade from "react-reveal/Fade"
import { backToTop } from "../../button/ButtonStyles"
import Icon from "../../../../styles/Icon"

const Enterprise = props => {
    return (
        <div css={Background}>
            <div css={DarkOverlay}>
                <div css={Content}>
                    <div css={Item}>
                        <Fade left>
                            <img
                                css={Image}
                                alt="drone"
                                src="https://firebasestorage.googleapis.com/v0/b/dronify-245011.appspot.com/o/enterprise%2Fmatrice-200%2Fmatrice-200v2_2.png?alt=media&token=763c34dc-60f5-44b5-a7fb-bb19ea57e391"
                            />
                        </Fade>
                    </div>
                    <div css={Item}>
                        <Heading name="Enterprise" />
                        <h5 css={subHeadingRight}>
                            Collect and leverage data across your operations
                            with our enterprise drones
                        </h5>
                        <Link to="/enterprise-drones/">
                            <Button label="Explore" />
                        </Link>
                    </div>
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
    )
}

export default Enterprise
