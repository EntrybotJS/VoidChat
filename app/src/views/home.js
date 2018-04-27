//	eslint-disable-next-line no-unused-vars
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import '../styles/Home.css'
import PropTypes from 'prop-types'

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
	handleFormSuccess(username, password) {
		this.setState({
			message: null
		})

		//	Subject to change, could be very unsafe, need more analysis and studying
		this.props.socket.emit('login', {
			username: username,
			password: password
		})

		this.props.socket.on('login', (data) => {
			//	Recieve response of login operation
			//	If the response is positive, move to messaging page, if not, set state for error
		})
	}
	render() {
		return (
			<main>
				<div className='page'>
					<div className='landing'>
						<div className='menu'>
							<h1>{this.props.brand}</h1>
							<Link to='/privacy'>Privacy</Link>
							<Link to='/how'>How</Link>
						</div>
						<div className='page-content'>
							<h1>Login</h1>
							<LoginError error={this.state.error}/>
							<LoginForm onFormError={this.handleFormError} onFormSuccess={this.handleFormSuccess}/>
							<Link to='/register'>I do not have an account</Link>
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

class LoginForm extends Component {
	constructor(props) {
		super(props)
		this.state = {
			username: '',
			password: ''
		}

		this.handleSubmit = this.handleSubmit.bind(this)
		this.handleChange = this.handleChange.bind(this)
	}
	handleSubmit(e) {
		e.preventDefault()
		
		let code = verifyCreds(e.target.username.value, e.target.password.value)

		if(code === 0) { //	Send request to api
			this.props.onFormSuccess(e.target.username.value, e.target.password.value)
		} else {
			this.props.onFormError(code)
		}
	}
	handleChange(event) {
		const value = event.target.type === 'checkbox' ? event.target.checked : event.target.value
		this.setState({[event.target.name]: value})
	}
	render() {
		return (
			<form onSubmit={this.handleSubmit}>
				<div className='input-label'>
					<input type='text' name='username' onChange={this.handleChange}/>
					<label>username</label>
				</div>
				<div className='input-label'>
					<input type='password' name='password' onChange={this.handleChange}/>
					<label>password</label>
				</div>
				<input type='submit'/>
			</form>
		)
	}
}

LoginForm.propTypes = {
	onFormError: PropTypes.func.isRequired,
	onFormSuccess: PropTypes.func.isRequired
}

const LoginError = (props) => (
	<p className='login-error'>{(props.error) ? props.error : null}</p>
)

//	eslint-disable-next-line
function verifyCreds(username, password) {
	if(username === '' || username == null) {
		return 1
	}

	if(password === '' || password == null) {
		return 2
	}

	return 0
}

function translateError(errorCode) {
	switch(errorCode) {
	case 1:
		return 'Username is empty'
	case 2:
		return 'Password is empty'
	default:
		return 'Unknown error'
	}
}

export default Home
