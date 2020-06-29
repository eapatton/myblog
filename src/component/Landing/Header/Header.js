import React from 'react'

export default function Header(props) {
	return (
		<header
			className='vertical-center'
			style={{ backgroundImage: "url('images/vnmPanarama.jpg')" }}>
			<div>
				<h1>
					<a href=''>Phoenix</a>
				</h1>
				<h2>A Personal Blog</h2>
			</div>
		</header>
	)
}
