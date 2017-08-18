import React, { Component } from 'react'
import Header from '@/components/Header/Header'
import ListBlock from '@/components/ListBlock/ListBlock'
import './index.less'
class Home extends Component {
	render() {
		return(
			<div id="main">
				<Header></Header>
				<div className="chart-container">
					<ListBlock types={this.props.chartData}/>
				</div>
			</div>
		)
	}
}
export { Home as default }