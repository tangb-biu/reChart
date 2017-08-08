import React, { Component } from 'react'

export default class Header extends Component {
	constructor() {
		super();
	}

	componentDidMount() {
		responsiveNav('#nav');
	}

	render() {
		return (
			<nav id="nav">
				<ul>
					<li><a href="#">Home</a></li>
					<li><a href="#">About</a></li>
					<li><a href="#">Projects</a></li>
					<li><a href="#">Contact</a></li>
				</ul>
			</nav>
		)
	}

}