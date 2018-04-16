import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './styles/index.css'
import Home from './Views/Home'
import registerServiceWorker from './registerServiceWorker'

class App extends React.Component {
	render() {
		return (
			<Router>
				<Route exact path="/" component={Home}/>
			</Router>
		)
	}
}

ReactDOM.render(<App />, document.getElementById('root'))
registerServiceWorker()
