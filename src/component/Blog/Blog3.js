import React from 'react'
import HeaderBlog from './HeaderBlog/HeaderBlog'
import Article3 from './Article/Article3'
import Sidebar from './Sidebar/Sidebar'
import Comment from './Comment/Comment'
import './Blog.css'

export default function Blog(props) {
	return (
		<div className='blog-page'>
			<HeaderBlog />
			<div className='wrap grid-wrapper'>
				<Article3 />
				<Sidebar />
			</div>
			<Comment />
		</div>
	)
}
