import React from "react"
import { Link } from "gatsby"
import Button from "../../button/Button"
import Heading from "../../heading/Heading"

import Background from "./ConsumersStyles"
import { Item, Content, Image, subHeadingRight } from "./ConsumersStyles"
import { DarkOverlay } from "../../../../styles/GlobalStyles"
import Fade from "react-reveal/Fade"
import { backToTop } from "../../button/ButtonStyles"
import Icon from "../../../../styles/Icon"

const Consumers = props => {
    return (
        <div css={Background}>
            <div css={DarkOverlay}>
                <div css={Content}>
                    <div css={Item}>
                        <Fade left>
                            <img
                                css={Image}
                                alt="drone"
                                src="https://firebasestorage.googleapis.com/v0/b/dronify-245011.appspot.com/o/consumer%2Fphantom-3%2Fphantom-3-se_1.png?alt=media&token=f0712e2a-2fa7-4ede-a214-f858c4bf581d"
                            />
                        </Fade>
                    </div>
                    <div css={Item}>
                        <Heading name="Consumer" />
                        <h5 css={subHeadingRight}>
                            Capture your best moments with our consumer drones
                            series
                        </h5>
                        <Link to="/consumer-drones/">
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

export default Consumers
