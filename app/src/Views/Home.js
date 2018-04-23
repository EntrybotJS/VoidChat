//	eslint-disable-next-line no-unused-vars
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import '../styles/Home.css'
import PropTypes from 'prop-types'

const Home = (props) => (
	<main>
		<div className='page'>
			<div className='landing'>
				<div className='menu'>
					<h1>{props.brand}</h1>
					<Link to='/privacy'>Privacy</Link>
					<Link to='/how'>How</Link>
				</div>
				<div className='page-content'>
					<h1>Login</h1>
					<LoginForm/>
					<Link to='/register'>I do not have an account</Link>
				</div>
			</div>
			<div className='info'>

			</div>
		</div>
	</main>
)

class LoginForm extends Component {
	constructor(props) {
		super(props)
		this.state = {
			'username': '',
			'password': ''
		}

		this.handleSubmit = this.handleSubmit.bind(this)
		this.handleChange = this.handleChange.bind(this)
	}
	handleSubmit(e) {
		e.preventDefault()
		
		
	}
	handleChange(event) {
		const value = event.target.type === 'checkbox' ? event.target.checked : event.target.value
		this.setState({[event.target.name]: value})
	}
	render() {
		return (
			<form onSubmit={this.handleSubmit}>
				<input type='text' name='username' onChange={this.handleChange}/>
				<input type='password' name='password' onChange={this.handleChange}/>
				<input type='submit'/>
			</form>
		)
	}
}

function verifyCreds(username, password, callback) {
	//Test passwords return a number for errors > 0
	if(username === '' || usernname == null) {
		return 1
	}

	if(password === '' || password == null) {
		return 2
	}

	return 0
}

Home.propTypes = {
	brand: PropTypes.string.isRequired
}

export default Home
