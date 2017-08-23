import React, { Component } from 'react'
import Header from '@/components/Header/Header'

class About extends Component {
	render() {
		return (
			<div>
				<Header />
				<div className="about-container">
					<h1>这是一个超级垃圾的项目。</h1>
				</div>
			</div>
		)
	}
}

export { About as default }