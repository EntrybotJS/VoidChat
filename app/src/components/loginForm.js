import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

class LoginForm extends Component {
	constructor(props) {
		super(props)
		this.state = {
			handle: '',
			password: ''
		}

		this.handleSubmit = this.handleSubmit.bind(this)
		this.handleChange = this.handleChange.bind(this)
	}
	handleSubmit(e) {
		e.preventDefault()
		
		let code = verifyCreds(e.target.handle.value, e.target.password.value)

		if(code === 0) { //	Send request to api
			this.props.onFormSuccess(e.target.handle.value, e.target.password.value)
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
			<div className='form-container'>
				<form onSubmit={this.handleSubmit}>
					<h1>Login</h1>
					<input type='text' name='handle' placeholder='username' onChange={this.handleChange}/>
					<input type='password' name='password' placeholder='password' onChange={this.handleChange}/>
					<div className='register-link'>
						<Link to='#'>I do not have an account</Link>
						<button value='submit'>Envoyer</button>
					</div>
				</form>
			</div>
		)
	}
}

LoginForm.propTypes = {
	onFormError: PropTypes.func.isRequired,
	onFormSuccess: PropTypes.func.isRequired
}

//	eslint-disable-next-line
function verifyCreds(handle, password) {
	if(handle === '' || handle == null) {
		return 1
	}

	if(password === '' || password == null) {
		return 2
	}

	return 0
}

export default LoginForm