import React from 'react'
import HeaderBlog from './HeaderBlog/HeaderBlog'
import Article8 from './Article/Article8'
import './Blog.css'

export default function Blog(props) {
	return (
		<div className='blog-page'>
			<HeaderBlog />
			<div className='wrap'>
				<Article8 />
			</div>
		</div>
	)
}
