import React from 'react'
import HeaderBlog from './HeaderBlog/HeaderBlog'
import Article2 from './Article/Article2'
import Sidebar from './Sidebar/Sidebar'
import Comment from './Comment/Comment'
import './Blog.css'

export default function Blog2(props) {
	return (
		<div className='blog-page'>
			<HeaderBlog />
			<div className='wrap grid-wrapper'>
				<Article2 />
				<Sidebar />
			</div>
			<Comment />
		</div>
	)
}
