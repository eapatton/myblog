import React from 'react'
import { HashLink as Link } from 'react-router-hash-link'

export default function Sidebar(props) {
	return (
		<aside>
			<h3>About Me</h3>
			<p>
				I am a simple gal from California who loves to travel and experience the
				cultures of the world. An international animal lover. An explorer who is
				passionate about sustainability and social justice.
			</p>
			<p>
				Explicabo consectetur tempora perferendis voluptas itaque, corporis at
				ipsum quisquam eveniet, facilis perspiciatis. Eum ad adipisci, earum
				fugit perspiciatis deserunt veniam eos? Impedit expedita assumenda,
				saepe excepturi ad voluptatibus. Eveniet.
			</p>
			<img src='images/about.jpg' alt='' />
			<h3>Recent Posts</h3>
			<ul>
				<li>
					<Link to='/blog'>Blog One &mdash; Thailand</Link>
				</li>

				<li>
					<Link to='/blog2'>Blog Two &mdash; Vietnam</Link>
				</li>
				<li>
					<Link to='/blog3'>Blog Three &mdash; Myanmar</Link>
				</li>
				<li>
					<Link to='/blog4'>Blog Four &mdash; Mexico</Link>
				</li>
				<li>
					<Link to='/blog5'>Blog Five &mdash; California</Link>
				</li>
				<li>
					<Link to='/blog6'>Blog Six &mdash; Musings</Link>
				</li>
				<li>
					<Link to='/blog7'>Photos &mdash; Thailand</Link>
				</li>
				<li>
					<Link to='/blog8'>Photos &mdash; Vietnam</Link>
				</li>
				<li>
					<Link to='/blog9'>Photos &mdash; Myanmar</Link>
				</li>
				<li>
					<Link to='/blog10'>Photos &mdash; Mexico</Link>
				</li>
				<li>
					<Link to='/blog11'>Photos &mdash; California</Link>
				</li>
			</ul>
		</aside>
	)
}
