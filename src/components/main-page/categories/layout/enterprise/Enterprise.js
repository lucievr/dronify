import React from "react"
import { Link } from "gatsby"
import Button from "../../button/Button"
import Heading from "../../heading/Heading"

import Background from "./EnterpriseStyles"
import { Item, Content, Image } from "./EnterpriseStyles"
import { DarkOverlay } from "../../../../styles/GlobalStyles"
import Fade from "react-reveal/Fade"

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
                                src="https://firebasestorage.googleapis.com/v0/b/shoolix.appspot.com/o/enterprise-drones%2Fmatrice-200v2-ii.png?alt=media&token=c8176e7c-4869-4f0f-abce-48e6fd4d8cf3"
                            />
                        </Fade>
                    </div>
                    <div css={Item}>
                        <Heading name="Enterprise drones" />
                        <Link to="/enterprise-drones/">
                            <Button label="Explore" />
                        </Link>
                    </div>
                    <button
                        onClick={() => {
                            props.gotopage(0) //Go to top, page 0
                        }}
                    >
                        Back to top
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Enterprise
