import React from 'react'
import HeaderBlog from './HeaderBlog/HeaderBlog'
import Article7 from './Article/Article7'
import './Blog.css'

export default function Blog(props) {
	return (
		<div className='blog-page'>
			<HeaderBlog />
			<div className='wrap'>
				<Article7 />
			</div>
		</div>
	)
}
