import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import SiteMenu from '../components/siteMenu'

class Register extends Component{
	constructor(props) {
		super(props)

		this.state = {
			username: '',
			password: '',
			email: ''
		}

		this.baseState = this.state
	}
	render() {
		return (
			<div className="page">
				<div className="landing">
					<div className="page-content">
						
					</div>
				</div>
			</div>
		)
	}
}