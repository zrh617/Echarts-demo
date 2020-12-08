// import * as echarts from 'echarts';
var echarts = require('echarts');

const main = document.getElementById('main')
const loadMoreButton = document.getElementById('loadMore')

const width = document.documentElement.clientWidth
main.style.width = `${width}px`
main.style.height = `${width * 1.2}px`
// 基于准备好的dom，初始化echarts实例
var myChart = echarts.init(main);

// 指定图表的配置项和数据
const xData = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
const values = [820, 932, 901, 934, 1290, 1330, 1320]
// 使用刚指定的配置项和数据显示图表。
myChart.setOption({
  baseOption: {
    xAxis: {
      type: 'category',
      data: xData
    },
    yAxis: {
      type: 'value'
    },
    tooltip: {
      show: true
    },
    series: [{
      lineStyle: {
        color: 'blue'
      },
      itemStyle: {
        borderWidth: 10
      },
      data: values,
      type: 'line'
    }]
  },
  media: [{
    query: {
      maxWidth: 500
    },
    option: {
      series: [{
        itemStyle: {
          borderWidth: 30
        }
      }]
    }
  }]
});

let isLoading = false

loadMoreButton.addEventListener('click', () => {
  if (isLoading === true) {
    return
  }
  myChart.showLoading()
  isLoading = true
  setTimeout(() => {
    const key = 'new'
    const value = 1100
    myChart.setOption({
      xAxis: {
        data: [...xData, key]
      },
      series: [{
        data: [...values, value]
      }]
    })
    myChart.hideLoading()
    isLoading = false
  }, 3000)
})

myChart.on('click', (e) => {

})