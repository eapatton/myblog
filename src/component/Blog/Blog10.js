import React from 'react'
import HeaderBlog from './HeaderBlog/HeaderBlog'
import Article10 from './Article/Article10'
import './Blog.css'

export default function Blog(props) {
	return (
		<div className='blog-page'>
			<HeaderBlog />
			<div className='wrap'>
				<Article10 />
			</div>
		</div>
	)
}
