import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import classname from 'classnames'
import './header.less'
import githubImg from './github.png'
import logoImg from './logo.png'
import * as globalActions from '@/actions/global'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

@connect(
	state => state,
	dispatch => bindActionCreators(globalActions, dispatch)
)
export default class Header extends Component {
	constructor(props) {
		super(props)
		this.state = {
			hide: true,
		}
		//const pathname = this.props.pathname;
		//this.props.currentPage(pathname);
	}

	componentDidMount() {

	}

	render() {
		return (
			<nav className="navbar navbar-default navbar-fixed-top" onLoad={() => this.props.currentPage(this.props.pathname)}>
				<div className="container-fluid">
					<div className="navbar-header">
						<button type="button" className="bs-navbar-collapse navbar-toggle collapsed" onClick={() => this.setState({'hide': !this.state.hide})}>
							<span className="sr-only">Toggle navigation</span>
							<span className="icon-bar"></span>
							<span className="icon-bar"></span>
							<span className="icon-bar"></span>
						</button>
						<a href="#" className="navbar-brand">
							<img src={logoImg} alt="It's logo" className="navbar-logo"/>
						</a>
					</div>
					<div className={classname("navbar-collapse", {hide: this.state.hide})}>
						<ul className="nav navbar-nav navbar-left">
							<li className={this.props.globals.curpage == '/' ? 'active' : ''} onClick={() => this.props.currentPage('/')}><Link to="/">首页</Link></li>
							<li className={this.props.globals.curpage == '/document' ? 'active' : ''} onClick={() => this.props.currentPage('/document')}><Link to="/document">文档</Link></li>
							<li className={this.props.globals.curpage == '/example' ? 'active' : ''} onClick={() => this.props.currentPage('/example')}><Link to="/example">实例</Link></li>
							<li className={this.props.globals.curpage == '/about' ? 'active' : ''} onClick={() => this.props.currentPage('/about')}><Link to="/about">关于</Link></li>
						</ul>
						<ul className="nav navbar-nav navbar-right">
							<li>
								<a href="https://github.com/ecomfe/echarts" target="_blank">
									<img src={githubImg} width="20"/>
								</a>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		)
	}

}