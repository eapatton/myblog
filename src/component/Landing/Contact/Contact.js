import React from 'react'

export default function Contact(props) {
	return (
		<section id='contact'>
			<div className='wrap'>
				<h2>Say Hey</h2>
				<form
					className='contact'
					action='https://formspree.io/mlepwgol'
					method='POST'>
					<input
						type='text'
						name='name'
						placeholder='Full Name'
						class='col-third'
					/>
					<input
						type='email'
						name='email'
						placeholder='Email'
						class='col-third'
					/>
					<input
						type='text'
						name='subject'
						placeholder='Subject'
						class='col-third'
					/>
					<textarea
						name='message'
						id=''
						cols='30'
						rows='10'
						placeholder='Message'></textarea>
					<button type='submit'>Submit</button>
				</form>
			</div>
		</section>
	)
}
