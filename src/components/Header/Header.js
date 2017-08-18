import React, { Component } from 'react'
import classname from 'classnames'
import './header.less'
import githubImg from './github.png'
import logoImg from './logo.png'
export default class Header extends Component {
	constructor(props) {
		super(props)
		this.state = {
			hide: true
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
							<li className="active"><a>首页</a></li>
							<li><a href="#">文档</a></li>
							<li><a href="#">实例</a></li>
							<li><a>关于</a></li>
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