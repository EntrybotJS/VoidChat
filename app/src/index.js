//	ES6 "External" modules
import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import io from 'socket.io-client'

//	Styling
import './styles/index.css'

//	Routes
import Home from './views/home'

//	Service workers
import registerServiceWorker from './registerServiceWorker'

class App extends Component {
	constructor(props) {
		super(props)

		this.socket = io('wss://localhost:8443', { secure: true, upgrade: true })
	}
	componentWillUnmount() {
		this.socket.disconnect()
	}
	render() {
		return (
			<Router>
				<Switch>
					<Route exact path="/" render={(props) => (<Home {... props} socket={this.socket} brand='VoidChat'/>)}/>
					<Route render={() => (<p>Oops, it seems like you got lost.</p>)}/>
				</Switch>
			</Router>
		)
	}
}


ReactDOM.render(<App />, document.getElementById('root'))
registerServiceWorker()
