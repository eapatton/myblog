import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
	faFacebook,
	faTwitter,
	faInstagram,
} from '@fortawesome/free-brands-svg-icons'

export default function Footer(props) {
	return (
		<footer>
			<div className='social-container'>
				<div class='socials-media text-center'>
					<a
						href='https://www.facebook.com/elizabeth.patton.148/'
						className='facebook social'>
						<FontAwesomeIcon icon={faFacebook} size='2x' />
					</a>
					<a href='https://twitter.com/CodingBey' className='twitter social'>
						<FontAwesomeIcon icon={faTwitter} size='2x' />
					</a>
					<a
						href='https://www.instagram.com/slizpatton/'
						className='instagram social'>
						<FontAwesomeIcon icon={faInstagram} size='2x' />
					</a>
				</div>
				<p class='copyright'>&copy;2020 Elizabeth Patton</p>
			</div>
		</footer>
	)
}
