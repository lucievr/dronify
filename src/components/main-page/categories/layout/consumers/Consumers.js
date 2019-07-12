import React from "react"
import { Link } from "gatsby"
import Button from '../../button/Button'
import Heading from '../../heading/Heading'

import Background from './ConsumersStyles'
import { Item, Content, Image } from './ConsumersStyles'
import { DarkOverlay } from '../../../../styles/GlobalStyles'

const Consumers = () => {
	return (
		<div css={Background}>
			<div css={DarkOverlay}>
				<div css={Content}>
					<div css={Item}>
						<Heading name='Consumer drones' />
						<Link to="/consumer-drones/">
							<Button label='Button' />
						</Link>
					</div>
					<div css={Item}>
						<img
							css={Image}
							alt="drone"
							src="https://firebasestorage.googleapis.com/v0/b/shoolix.appspot.com/o/consumer-drones%2Fphantom-3-se.png?alt=media&token=07f00be4-b994-4e35-91f6-90335b2b74b6"
						/>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Consumers
