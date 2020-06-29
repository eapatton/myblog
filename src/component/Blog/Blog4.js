import React from 'react'
import HeaderBlog from './HeaderBlog/HeaderBlog'
import Article4 from './Article/Article4'
import Sidebar from './Sidebar/Sidebar'
import Comment from './Comment/Comment'
import './Blog.css'

export default function Blog(props) {
	return (
		<div className='blog-page'>
			<HeaderBlog />
			<div className='wrap grid-wrapper'>
				<Article4 />
				<Sidebar />
			</div>
			<Comment />
		</div>
	)
}
