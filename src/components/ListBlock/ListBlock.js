import React, { Component } from 'react'
import ListItem from '../ListItem/ListItem'
import './index.less'
class HomeListBlock extends Component {
	constructor(props) {
		super(props)
	}

	render() {
		return (
			<div className="chart-list-panel">
			{
				this.props.types.map((chart, index) => 
					<ListItem name={chart.name} items={chart.items} key={index}></ListItem>
				)
			}
			</div>
		)
	}
}

export { HomeListBlock as default }