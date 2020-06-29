import React from 'react'
import {HashLink as Link} from 'react-router-hash-link'

export default function Navbar(props) {
    return (
        <nav>
            <a className="hamburger" href=""><i className="fa fa-bars"></i></a>
            <ul>
                <li><Link to="/#about">About</Link></li>
                <li><Link to="/#gallery">Gallery</Link></li>
                <li><Link to="/blog">Blog</Link></li>
                <li><Link to="/#contact">Contact</Link></li>
            </ul>
        </nav>
    )
}
