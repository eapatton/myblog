import React from 'react'
import HeaderBlog from './HeaderBlog/HeaderBlog'
import Article11 from './Article/Article11'
import './Blog.css'

export default function Blog(props) {
	return (
		<div className='blog-page'>
			<HeaderBlog />
			<div className='wrap'>
				<Article11 />
			</div>
		</div>
	)
}
