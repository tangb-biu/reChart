import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Route, BrowserRouter as Router , Link } from 'react-router-dom'
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup'
import createHistory from 'history/createHashHistory'
import '@/styles/bootstrap.css'
import '@/styles/style.css'

import * as globalActions from '@/actions/global'

import Home from '@/containers/Home/Home'
import Document from '@/containers/Document/Document'
import Example from '@/containers/Example/Example'
import About from '@/containers/About/About'
const history = createHistory()

@connect(
	state => state,
	dispatch => bindActionCreators(globalActions, dispatch)
)
class App extends Component {
	render() {
		const { animate } = this.props.globals;
		console.log(this.props);
		return (
			<Router history={history}>
				<Route render={({ location }) => {
					return (
						<CSSTransitionGroup
							transitionName={animate}
							transitionEnter={true}
							transitionLeave={false}
							transitionAppear={true}
							transitionEnterTimeout={400}
							transitionLeaveTimeout={400}
							transitionAppearTimeout={100}
						>
							<div key={location.pathname}>
								<Route location={location} exact path="/" render={
									() => 
									<Home chartData={this.props.home.response}/>
								}/>
								<Route loaction={location} path="/document" component={Document}/>
								<Route location={location} path="/example" component={Example}/>
								<Route location={location} path="/about" component={About} />
							</div>
						</CSSTransitionGroup>
					)
				}}/>
			</Router>
		)
	}
}

export default App