import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import '../styles/siteMenu.css'

class SiteMenu extends Component {
	render() {
		return (
			<div className='menu'>
				<h1>{this.props.brand}</h1>
				<ul>
					<li><Link to='/privacy'>Privacy</Link></li>
					<li><Link to='/how'>How</Link></li>
				</ul>
			</div>
		)
	}
}

export default SiteMenu