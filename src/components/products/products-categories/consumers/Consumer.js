import React from "react"
import { Link } from "gatsby"
import Button from '../../products-button/Button'
import Heading from '../../products-heading/Heading'

import Background from './ConsumerStyles'
import { Item, Content, Image } from './ConsumerStyles'
import { DarkOverlay } from '../../../GlobalStyles'

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
