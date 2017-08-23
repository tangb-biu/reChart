import React, { Component } from 'react'
import Header from '@/components/Header/Header'

class Document extends Component {
	render() {
		return (
			<div>
				<Header></Header>
				<div className="doc-container">
					<h1>这是文档标题</h1>
					<h3>这是文档副标题</h3>
					<p>文档内容。。。。。。</p>
					<p>文档内容。。。。。。</p>
					<p>文档内容。。。。。。</p>
					<p>文档内容。。。。。。</p>
					<p>文档内容。。。。。。</p>
					<p>文档内容。。。。。。</p>
					<p>文档内容。。。。。。</p>
				</div>
			</div>
		)
	}
}

export { Document as default }