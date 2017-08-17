import React, { Component } from 'react'
import ListItem from '../ListItem/ListItem'
class HomeListBlock extends Component {
	constructor(props) {
		super(props)
	}

	render() {
		return (
			<div className="chart-list-panel">
			{
				this.props.types.map((chart) => 
					<ListItem name={chart.name} items={chart.items}></ListItem>
				)
			}
			</div>
		)
	}
}

export { HomeListBlock as default }