import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Route, BrowserRouter as Router , Link } from 'react-router-dom'
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup'
import createHistory from 'history/createHashHistory'
import '@/bootstrap.min.css'
import '@/style'

import * as globalActions from '@/actions/global'


import Header from '@/components/Home/Header'
const history = createHistory()

@connect(
	state => state,
	dispatch => bindActionCreators(globalActions, dispatch)
)
class App extends Component {
	render() {
		const { animate } = this.props.globals;
		console.log(this.props)
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
									<div style={{background: '#993366'}}>
										<h1>首页</h1>
										<Link to="/chartList">图表列表</Link><br/>
										<Link to="/chart/1">柱状图</Link> 
									</div>
								}/>
								<Route loaction={location} path="/chartList" component={Header}/>
								<Route location={location} path="/chart/:chartId" render={
									() =>
									<div style={{background: '#FF6633'}}>
										<h1>柱状图</h1>
										<Link to="/">首页</Link> <br/>
										<Link to="/chartList">图表列表</Link>
									</div>
								} />
							</div>
						</CSSTransitionGroup>
					)
				}}/>
			</Router>
		)
	}
}

export default App