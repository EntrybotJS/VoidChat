import React, { Component } from 'react'

class LandingHero extends Component {
	constructor(props) {
		super(props)
		this.state = {
			action: 'talk'
		}

		this.changeText = this.changeText.bind(this)
	}
	changeText() {
		//needs overhaul
		const actions = ['talk', 'have fun', 'play', 'meet', 'ask', 'learn', 'make friends', 'share']
		
		let filterValue = (arr, index) => {
			return arr.filter((value, arrIndex) => {
				return index !== arrIndex
			})
		}

		let temp = filterValue(actions, this.state.action)

		this.setState({
			action: temp[Math.floor(Math.random() * temp.length)]
		})
	}
	componentDidMount() {
		setInterval(this.changeText, 1000)
	}
	render() {
		return (
			<div className='hero'><p>I use it to <span className='action'>{this.state.action}</span></p></div>
		)
	}
}

export default LandingHero