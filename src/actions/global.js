import { createActions } from 'redux-actions'
import fetch from 'isomorphic-fetch'

export const { currentAnimate, loadData, currentPage} = createActions({
	CURRENT_ANIMATE: animate => ({ animate }),
	LOAD_DATA: (status, response) => {
		return {status: status, response: response}
	},
	CURRENT_PAGE: (curpage) => ({curpage})
})

function sleep() {
	return new Promise(function(resolve, reject){
		setTimeout(function() {
			resolve({status: 'loaded', response: homeData});
		}, 2000)
	});
}

export const fetchTopics = options => (dispatch) => {
  dispatch(loadData('loading', []))
  const BASIC_URL = 'https://ruby-china.org/api/v3'
  const type = 'TOPICS'
  let url = `${BASIC_URL}/topics`
  let node = ''
  if (options && options.node_id){
    node = `node_id=${options.node_id}`
  }
  if (options) {
    url = `${BASIC_URL}/topics?${node}&limit=${options.limit||20}&type=${options.type||'last_actived'}&offset=${options.offset||0}`
  }
  console.log('url', url)

  return fetch(url)
    .then(response => response.json())
    .then(json => dispatch(loadData('loaded', homeData)))
}

const homeData = [
	{
		name: '散点图',
		items: [
			{
				name: '气泡图',
				imgSrc: 'http://echarts.baidu.com/gallery/data/thumb/bubble-gradient.png'
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

