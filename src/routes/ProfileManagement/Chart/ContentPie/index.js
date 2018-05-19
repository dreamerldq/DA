import React from 'react'
import { connect } from 'dva';
import * as echarts from 'echarts'
import '../index.css'

class ContentPie extends React.Component {
  componentDidMount() {
    const myChart = echarts.init(document.getElementById('charts'));
    const { news, studio, project } = this.props
    const newsNotice = news.filter(item => item.articleType === 'news' || !item.articleType)
    const introduction = news.filter(item => item.articleType === 'profileIntroduction')
    const campus = news.filter(item => item.articleType === 'campusCulture')
    const option = {
      aria: {
        show: true
      },
      title: {
        text: '数字艺术系官网主要内容占比',
        x: 'center'
      },
      legend: {
        type: 'plain',
        bottom: '10px'
      },
      calculable: true,
      series: [
        {
          name: '占比',
          type: 'pie',
          radius: '55%',
          center: ['50%', '50%'],
          hoverAnimation: true,
          label: {
            normal: {
              show: false
            },
            emphasis: {
              show: true
            }
          },
          lableLine: {
            normal: {
              show: false
            },
            emphasis: {
              show: true
            }
          },


          data: [
            { value: newsNotice.length, name: '新闻通知' },
            { value: campus.length, name: '校园文化' },
            { value: introduction.length, name: '内容简介' },
            { value: studio.length, name: '工作室' },
            { value: project.length, name: '双创项目' }
          ]
        }
      ],
      roseType: 'area'
    };
    myChart.setOption(option)
  }
  render() {
    return (
      <div id="charts" />
    )
  }
}
const mapStateToProps = ({ rightSide }) => {
  return {
    news: rightSide.data.news,
    studio: rightSide.data.studio,
    project: rightSide.data.project
  }
}
export default connect(mapStateToProps)(ContentPie);
