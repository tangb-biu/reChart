import React, { Component } from 'react'
import Header from '@/components/Header/Header'
import ListBlock from '@/components/ListBlock/ListBlock'
import './index.less'
import $ from 'jquery'
import echarts from 'echarts'

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
				<div style={{height:'500px', width:'500px'}} ref={(dom) => {this.chartDom = dom;}}></div>
			</div>
		)
	}

	componentDidMount() {
		const chart = echarts.init(this.chartDom);
		const option = {
		    tooltip: {
		        trigger: 'item',
		        formatter: "{a} <br/>{b}: {c} ({d}%)"
		    },
		    legend: {
		        orient: 'vertical',
		        x: 'left',
		        data:['直接访问','邮件营销','联盟广告','视频广告','搜索引擎']
		    },
		    series: [
		        {
		            name:'访问来源',
		            type:'pie',
		            radius: ['50%', '70%'],
		            avoidLabelOverlap: false,
		            label: {
		                normal: {
		                    show: false,
		                    position: 'center'
		                },
		                emphasis: {
		                    show: true,
		                    textStyle: {
		                        fontSize: '30',
		                        fontWeight: 'bold'
		                    }
		                }
		            },
		            labelLine: {
		                normal: {
		                    show: false
		                }
		            },
		            data:[
		                {value:335, name:'直接访问'},
		                {value:310, name:'邮件营销'},
		                {value:234, name:'联盟广告'},
		                {value:135, name:'视频广告'},
		                {value:1548, name:'搜索引擎'}
		            ]
		        }
		    ]
		};
		chart.setOption(option);
  	}
}
export { Home as default }