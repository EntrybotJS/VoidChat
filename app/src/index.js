import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './styles/index.css'
import Home from './views/Home'
import registerServiceWorker from './registerServiceWorker'

const App = () => (
	<Router>
		<Switch>
			<Route exact path="/" render={(props) => (<Home {... props} brand='VoidChat'/>)}/>
			<Route render={() => (<p>Oops, it seems like you got lost.</p>)}/>
		</Switch>
	</Router>
)

ReactDOM.render(<App />, document.getElementById('root'))
registerServiceWorker()
