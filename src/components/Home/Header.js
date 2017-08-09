import React, { Component } from 'react'

export default class Header extends Component {
	constructor() {
		super();
	}

	componentDidMount() {

	}

	render() {
		return (
			<nav className="navbar navbar-default navbar-fixed-top">
				<div className="container-fluid">
					<div className="navbar-header">
						<button type="button" data-toggle="collapse" data-target="#navbar-collapse" aria-expanded="false" className="navbar-toggle collapsed">
							<span className="sr-only">Toggle navigation</span>
							<span className="icon-bar"></span>
							<span className="icon-bar"></span>
							<span className="icon-bar"></span>
						</button>
						<a href="http://echarts.baidu.com/index.html" className="navbar-brand">
							<img src="./images/logo.png" alt="echarts logo" className="navbar-logo"/>
						</a>
					</div>
					<div id="navbar-collapse" className="collapse navbar-collapse">
						<ul className="nav navbar-nav navbar-left">
							<li id="nav-index"><a href="http://echarts.baidu.com/index.html">首页</a></li>
							<li id="nav-doc" className="dropdown">
								<a href="#" data-toggle="dropdown" className="dropdown-toggle">文档<b className="caret"></b></a>
							</li>
							<li id="nav-download" className="dropdown">
								<a href="#" data-toggle="dropdown" className="dropdown-toggle">下载<b className="caret"></b></a>
							</li>
							<li id="nav-examples" className="active">
								<a href="#" data-toggle="dropdown" className="dropdown-toggle">实例<b className="caret"></b></a>
							</li>
							<li id="nav-community">
								<a href="#" data-toggle="dropdown" className="dropdown-toggle">社区<b className="caret"></b></a>
							</li>
							<li id="nav-tool">
								<a href="#" data-toggle="dropdown" className="dropdown-toggle">工具<b className="caret"></b></a>
							</li>
							<li id="nav-about">
								<a href="http://echarts.baidu.com/about.html">关于</a>
							</li>
						</ul>
						<ul className="nav navbar-nav navbar-right">
							<li id="nav-github">
								<a href="https://github.com/ecomfe/echarts" target="_blank">
									<img src="http://echarts.baidu.com/images/github.png" width="18"/>
								</a>
							</li>
							<li id="nav-2" className="0"><a href="http://echarts.baidu.com/echarts2/">2.0</a></li>
							<li id="nav-homeen"><a href="https://ecomfe.github.io/echarts-doc/public/en/index.html">EN</a></li>
						</ul>
					</div>
				</div>
			</nav>
		)
	}

}