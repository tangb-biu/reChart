import React, { Component } from 'react'
import Header from '@/components/Header/Header'
import ListBlock from '@/components/ListBlock/ListBlock'
import './index.less'
class Home extends Component {
	render() {
		return(
			<div>
				<div className="chart-container">
					{this.props.chartData.length > 0 
						? <ListBlock types={this.props.chartData}/>
						: <h1 style={{'marginTop': '60px', 'textAlign': 'center'}}>数据加载中。。。。</h1>
					}
				</div>
			</div>
		)
	}
}
export { Home as default }