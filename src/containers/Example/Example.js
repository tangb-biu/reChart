import React, { Component } from 'react'
import Header from '@/components/Header/Header'

class Example extends Component {
	render() {
		return (
			<div>
				<Header/>
				<div className="example-container">
					<h1>Example</h1>
				</div>
			</div>
		)
	}
}

export  { Example as default }