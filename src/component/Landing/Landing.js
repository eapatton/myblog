import React from 'react'
import { render } from 'react-dom'
import './Landing.css';

import Header from './Header/Header'
import Archive from './Archive/Archive'
import About from './About/About'
import Gallery from './Gallery/Gallery'
import Contact from './Contact/Contact'

export default function Landing(props) {
    return (
       <section>
           <Header />
           <Gallery />
           <About />
           <Archive />
           <Contact />
       </section>
    )
}



