import React, { Component } from 'react'
import Noun from '../data/nouns'
import Verb from '../data/verbs'
import Adjective from '../data/adjectives'

class LandingHero extends Component {
	constructor(props) {
		super(props)
		this.state = {
			messages: []
		}

		this.changeText = this.changeText.bind(this)
	}
	changeText() {
		//needs overhaul
		let article = ['the', 'a', 'one', 'some', 'any']
		let adjective = Adjective
		let noun = Noun
		let verb = Verb
		let preposition = ['to', 'from', 'over', 'under', 'on']

		let randArticle = [Math.floor ( Math.random() * article.length )]
		let randArticle2 = [Math.floor ( Math.random() * article.length )]
		let randAdjective = [Math.floor ( Math.random() * adjective.length )]
		let randNoun = [Math.floor ( Math.random() * noun.length )]
		let randVerb = [Math.floor ( Math.random() * verb.length )]
		let randNoun2 = [Math.floor ( Math.random() * noun.length )]
		let randPrep = [Math.floor ( Math.random() * preposition.length )]

		function capitalizeFirstLetter(string) {
			return string.charAt(0).toUpperCase() + string.slice(1)
		}

		let tempArray = this.state.messages
		tempArray.push([`${capitalizeFirstLetter(article[randArticle])} ${adjective[randAdjective]} ${noun[randNoun]} ${verb[randVerb]} ${preposition[randPrep]} ${article[randArticle2]} ${noun[randNoun2]}.`, Math.round(Math.random())])

		if(tempArray.length >= 10) {
			tempArray = tempArray.slice(-1 * 10)
		}

		this.setState({
			messages: tempArray
		})
	}
	componentDidMount() {
		setInterval(this.changeText, Math.random() * 4000)
	}
	render() {
		return (
			<div className='hero'>
				{this.state.messages.map((value, index) => {
					if(value[1] === 0) {
						return (<div className='messageSend'><i className='fas fa-user userSend'></i><p className='messageContentSend'>{value[0]}</p></div>)
					} else {
						return (<div className='message'><i className='fas fa-user user'></i><p className='messageContent'>{value[0]}</p></div>)
					}
					
				})}
			</div>
		)
	}
}

export default LandingHero