import React, { Component } from 'react'
//import { Link } from 'react-router-dom'

import SiteMenu from '../components/siteMenu'
import LandingHero from '../components/landingHero'

class Home extends Component {
	render() {
		return (
			<div>
				<div className='page'>
					<div className='landing'>
						<SiteMenu brand="VoidChat"/>
						<div className='landing-content'>
							<div className='landing-hero'>
								<LandingHero/>
							</div>
						</div>
					</div>
					<div className='sub'>
						<p>Cocky...</p>
					</div>
				</div>
			</div>
		)
	}
}

export default Home