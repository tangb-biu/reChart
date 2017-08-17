const homeData = [
	{
		name: '散点图',
		items: [
			{
				name: '气泡图',
				imgsrc: 'http://echarts.baidu.com/gallery/data/thumb/bubble-gradient.png'
			},
			{
				name: '全国空气质量',
				imgSrc: 'http://echarts.baidu.com/gallery/data/thumb/effectScatter-map.png'
			}
		]
	},
	{
		name: '折线图',
		items: [
			{
				name: '大数据量面积图',
				imgSrc: 'http://echarts.baidu.com/gallery/data/thumb/area-simple.png'
			},
			{
				name: '堆叠区域图',
				imgSrc: 'http://echarts.baidu.com/gallery/data/thumb/area-stack.png'
			}
		]
	},
	{
		name: '饼图',
		items: [
			{
				name: '环形图',
				imgSrc: 'http://echarts.baidu.com/gallery/data/thumb/pie-doughnut.png'
			},
			{
				name: '嵌套环形图',
				imgSrc: 'http://echarts.baidu.com/gallery/data/thumb/pie-nest.png'
			}
		]
	}
]

import { handleActions } from 'redux-actions'
import { loadStatus } from '@/actions/home'

export const home = handleActions({
	[loadStatus] (state, {paload: {status, response}}) {
		return Object.assign({}, state, {animate, response})
	}
}, {status: 'loaded', response: homeData})