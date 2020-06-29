import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import './App.css'

import Navbar from './Navbar/Navbar'
import Landing from './Landing/Landing'
import Footer from './Footer/Footer'
import Blog from './Blog/Blog'
import Blog2 from './Blog/Blog2'
import Blog3 from './Blog/Blog3'
import Blog4 from './Blog/Blog4'
import Blog5 from './Blog/Blog5'
import Blog6 from './Blog/Blog6'
import Blog7 from './Blog/Blog7'
import Blog8 from './Blog/Blog8'
import Blog9 from './Blog/Blog9'
import Blog10 from './Blog/Blog10'
import Blog11 from './Blog/Blog11'

function App(props) {
	return (
		<Router>
			<div className='App'>
				<Navbar />
				<Switch>
					<Route exact path='/' component={Landing} />
					<Route path='/blog' component={Blog} />
					<Route path='/blog2' component={Blog2} />
					<Route path='/blog3' component={Blog3} />
					<Route path='/blog4' component={Blog4} />
					<Route path='/blog5' component={Blog5} />
					<Route path='/blog6' component={Blog6} />
					<Route path='/blog7' component={Blog7} />
					<Route path='/blog8' component={Blog8} />
					<Route path='/blog9' component={Blog9} />
					<Route path='/blog10' component={Blog10} />
					<Route path='/blog11' component={Blog11} />
				</Switch>

				<Footer />
			</div>
		</Router>
	)
}

export default App
