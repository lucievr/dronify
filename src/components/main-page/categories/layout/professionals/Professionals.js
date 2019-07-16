import React from "react"
import { Link } from "gatsby"
import Button from "../../button/Button"
import Heading from "../../heading/Heading"

import Background from "./ProfessionalsStyles"
import { Item, Content, Image } from "./ProfessionalsStyles"
import { DarkOverlay } from "../../../../styles/GlobalStyles"
import Fade from "react-reveal/Fade"
import { backToTop } from "../../button/ButtonStyles"
import Icon from "../../../../styles/Icon"

const Professionals = props => {
    return (
        <div css={Background}>
            <div css={DarkOverlay}>
                <div css={Content}>
                    <div css={Item}>
                        <Heading name="Professional drones" />
                        <Link to="/professional-drones/">
                            <Button label="Explore" />
                        </Link>
                    </div>
                    <div css={Item}>
                        <Fade right>
                            <img
                                css={Image}
                                alt="drone"
                                src="https://firebasestorage.googleapis.com/v0/b/shoolix.appspot.com/o/professional-drones%2Fzenmuse-x7.png?alt=media&token=f40badd9-5aa6-4b05-812d-bda0e8186933"
                            />
                        </Fade>
                    </div>
                    <button
                        css={backToTop}
                        onClick={() => {
                            props.gotopage(0) //Go to top, page 0
                        }}
                    >
                        <Icon className="arrow" name="chevrons-up" />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Professionals
