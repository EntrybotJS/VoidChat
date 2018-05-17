import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import '../styles/siteMenu.css'

class SiteMenu extends Component {
	render() {
		return (
			<div className='menu'>
				<Link className='brand' to='/'>{this.props.brand}</Link>
				<ul>
					<li><Link to='/'>Home</Link></li>
					<li><Link to='/privacy'>Privacy</Link></li>
					<li><Link to='/how'>How</Link></li>
					<li><Link to='/login'>Login</Link></li>
					<li><Link to='/register'>Register</Link></li>
				</ul>
			</div>
		)
	}
}

SiteMenu.propTypes = {
	brand: PropTypes.string.isRequired
}

export default SiteMenu