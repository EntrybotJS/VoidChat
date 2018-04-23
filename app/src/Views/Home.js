//	eslint-disable-next-line no-unused-vars
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import '../styles/Home.css'
import PropTypes from 'prop-types'

class Home extends Component {
	constructor(props) {
		super(props)
		this.state = {}


	}
	render() {
		return (
			<main>
				<div className='page'>
					<div className='landing'>
						<div className='menu'>
							<h1>{this.props.brand}</h1>
							<Link to='/privacy'>Privacy</Link>
							<Link to='/how'></Link>
						</div>
						<div className=''>

						</div>
					</div>
					<div className='info'>

					</div>
				</div>
			</main>
		)
	}
}

Home.propTypes = {
	brand: PropTypes.string.isRequired
}

export default Home
