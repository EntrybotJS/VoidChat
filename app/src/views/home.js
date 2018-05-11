//	eslint-disable-next-line no-unused-vars
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import LoginForm from '../components/loginForm'
import axios from 'axios'

class Home extends Component {
	constructor(props) {
		super(props)

		this.state = {
			message: null
		}

		this.handleFormError = this.handleFormError.bind(this)
		this.handleFormSuccess = this.handleFormSuccess.bind(this)
	}
	handleFormError(errorCode) {
		this.setState({
			message: translateError(errorCode)
		})
	}
	handleFormSuccess(handle, password) {
		this.setState({
			message: null
		})

		axios.post('https://localhost:8443/auth/login', { handle: handle, password: password })
			.then((response) => {
				console.log(response)
			})
			.catch((reason) => {
				console.log(reason)
			})
	}
	render() {
		return (
			<main>
				<div className='page'>
					<div className='landing'>
						<div className='menu'>
							<h1>{this.props.brand}</h1>
							<ul>
								<li><Link to='/privacy'>Privacy</Link></li>
								<li><Link to='/how'>How</Link></li>
							</ul>
						</div>
						<div className='page-content'>
							<h1>Login</h1>
							<LoginError error={this.state.error}/>
							<LoginForm onFormError={this.handleFormError} onFormSuccess={this.handleFormSuccess}/>
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

const LoginError = (props) => (
	<p className='login-error'>{(props.error) ? props.error : null}</p>
)

//	This should be integrated in the loginForm conponent
function translateError(errorCode) {
	switch(errorCode) {
	case 1:
		return 'Handle is empty'
	case 2:
		return 'Password is empty'
	default:
		return 'Unknown error'
	}
}

export default Home
