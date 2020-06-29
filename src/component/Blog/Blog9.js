import React from 'react'
import HeaderBlog from './HeaderBlog/HeaderBlog'
import Article9 from './Article/Article9'
import './Blog.css'

export default function Blog(props) {
	return (
		<div className='blog-page'>
			<HeaderBlog />
			<div className='wrap'>
				<Article9 />
			</div>
		</div>
	)
}
