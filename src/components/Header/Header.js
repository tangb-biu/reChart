import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import classname from 'classnames'
import './header.less'
import githubImg from './github.png'
import logoImg from './logo.png'
export default class Header extends Component {
	constructor(props) {
		super(props)
		this.state = {
			hide: true,
			currentPath: '/'
		}
	}

	componentDidMount() {

	}

	render() {
		return (
			<nav className="navbar navbar-default navbar-fixed-top">
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
							<li className={this.state.currentPath == '/' ? 'active' : ''} onClick={() => this.setState({currentPath: '/'})}><Link to="/">首页</Link></li>
							<li className={this.state.currentPath == '/document' ? 'active' : ''} onClick={() => this.setState({currentPath: '/document'})}><Link to="/document">文档</Link></li>
							<li className={this.state.currentPath == '/example' ? 'active' : ''} onClick={() => this.setState({currentPath: '/example'})}><Link to="/example">实例</Link></li>
							<li className={this.state.currentPath == '/about' ? 'active' : ''} onClick={() => this.setState({currentPath: '/about'})}><Link to="/about">关于</Link></li>
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