import React, { Component } from 'react'
import ReactDOM from 'react-dom'

class ListItem extends Component {
	render() {
		return (
			<div className={this.props.className}>
				<h3>{this.props.name}</h3>
				{this.props.items.map((item) => 
					<div className="row">
						<div className="col-lg-3 col-md-4 col-md-6">
							<a className="chart-link">
								<h4>{item.name}</h4>
								<img src={item.imgSrc} />
							</a>
						</div>
					</div>)
				}
			</div>
		)
	}
}

export { ListItem as default }