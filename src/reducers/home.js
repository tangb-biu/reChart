const homeData = [
	{
		name: '散点图',
		items: [
			{
				name: '气泡图',
				imgSrc: 'src/containers/Home/bubble-gradient.png'
			},
			{
				name: '全国空气质量',
				imgSrc: 'src/containers/Home/effectScatter-map.png'
			}
		]
	},
	{
		name: '折线图',
		items: [
			{
				name: '大数据量面积图',
				imgSrc: 'src/containers/Home/area-simple.png'
			},
			{
				name: '堆叠区域图',
				imgSrc: 'src/containers/Home/area-stack.png'
			}
		]
	},
	{
		name: '饼图',
		items: [
			{
				name: '环形图',
				imgSrc: 'src/containers/Home/pie-doughnut.png'
			},
			{
				name: '嵌套环形图',
				imgSrc: 'src/containers/Home/pie-nest.png'
			}
		]
	}
]

import { handleActions } from 'redux-actions'
import { loadData, loadingData } from '@/actions/global'

export const home = handleActions({
	[loadData] (state, {payload: {status, response}}) {
		return Object.assign({}, state, {status, response})
	},
	[loadingData] (state, {payload: {status, response}}) {
		return Object.assign({}, state, {status, response})
	}
}, {status: 'loaded', response: homeData})