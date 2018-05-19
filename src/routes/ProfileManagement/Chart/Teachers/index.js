import React from 'react'
import { connect } from 'dva';
import * as echarts from 'echarts'
import '../index.css'

class Teachers extends React.Component {
  componentDidMount() {
    const myChart = echarts.init(document.getElementById('teacher_charts'));
    const {
      animation,
      visualCommunicationDesign, digitalMediaTechnology, digitalMediaArt, filmPhotography
    } = this.props
    const option = {
      aria: {
        show: true
      },
      title: {
        text: '数字艺术系教师团队构成',
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
            { value: animation.length, name: '动画' },
            { value: visualCommunicationDesign.length, name: '视觉传达设计' },
            { value: digitalMediaTechnology.length, name: '数字媒体技术' },
            { value: digitalMediaArt.length, name: '数字媒体艺术' },
            { value: filmPhotography.length, name: '影视摄影与制作' }
          ]
        }
      ],
      roseType: 'radius'
    };
    myChart.setOption(option)
  }
  render() {
    return (
      <div id="teacher_charts" />
    )
  }
}
const mapStateToProps = ({
  animationTeam,
  digitalMediaTechnologyTeam,
  digitalMediaArtTeam,
  filmPhotographyTeam,
  visualCommunicationDesignTeam
}) => {
  return {
    animation: animationTeam.user,
    digitalMediaTechnology: digitalMediaTechnologyTeam.user,
    digitalMediaArt: digitalMediaArtTeam.user,
    filmPhotography: filmPhotographyTeam.user,
    visualCommunicationDesign: visualCommunicationDesignTeam.user
  }
}
export default connect(mapStateToProps)(Teachers);
