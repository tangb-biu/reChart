import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import './index.less'

class ListItem extends Component {
	render() {
		return (
			<div className="row">
				<h3>{this.props.name}</h3>
				{this.props.items.map((item, index) =>
					<div className="col-lg-3 col-md-4 col-md-6" key={index}>
						<div className="chart">
							<a className="chart-link">
								<h4 className="chart-title">{item.name}</h4>
								<img className="chart-area" src={item.imgSrc} />
							</a>
						</div>
					</div>)
				}
			</div>
		)
	}
}

export { ListItem as default }