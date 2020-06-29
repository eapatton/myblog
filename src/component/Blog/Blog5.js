import React from 'react'
import HeaderBlog from './HeaderBlog/HeaderBlog'
import Article5 from './Article/Article5'
import Sidebar from './Sidebar/Sidebar'
import Comment from './Comment/Comment'
import './Blog.css'

export default function Blog(props) {
	return (
		<div className='blog-page'>
			<HeaderBlog />
			<div className='wrap grid-wrapper'>
				<Article5 />
				<Sidebar />
			</div>
			<Comment />
		</div>
	)
}
