import React from 'react'
import { connect } from 'dva'
import { Col, Row, Spin } from 'antd'
import { Link } from 'dva/router'
import './index.css'

const RightSide = ({ rightSide }) => {
  const { data, loading } = rightSide
  const { news, studio } = data
  const profession = [
    {
      title: '视觉传达设计',
      key: 'ProfessionIntroduction/VisualCommunicationDesign'
    },
    {
      title: '数字媒体技术',
      key: 'ProfessionIntroduction/DigitalMediaTechnology'
    },
    {
      title: '数字媒体艺术',
      key: 'ProfessionIntroduction/DigitalMediaArt'
    },
    {
      title: '动画专业',
      key: 'ProfessionIntroduction/Animation'
    },
    {
      title: '影视摄影与制作',
      key: 'ProfessionIntroduction/FilmPhotography'
    }
  ]
  return (
    <Spin spinning={loading}>
      <div className="right_side_container">
        <Row>
          <h3>专业介绍</h3>
          <ul>
            {(profession || []).map((item) => {
          return (
            <Link style={{ color: 'black' }} to={`/${item.key}`}><li>{item.title}</li></Link>
          )
        })}
          </ul>

        </Row>
        <Row>
          <div>
            <h3>新闻通知</h3>
            <ul>
              {(news || []).filter((item, index) => {
               return index < 5
            })
            .map((item) => {
          return (
            <Link style={{ color: 'black' }} to={`/News/detail/${item.id}`}><li>{item.title}</li></Link>
          )
        })}
            </ul>

          </div>

        </Row>
        <Row>
          <h3>工作室</h3>
          <ul>
            {(studio || []).map((item) => {
          return (
            <Link style={{ color: 'black' }} to={`/StudioIntroduction/${item.id}`}><li>{item.studioName}</li></Link>
          )
        })}
          </ul>
        </Row>
      </div>
    </Spin>


  )
}
const mapStateToProps = ({ rightSide }) => {
  return {
    rightSide
  }
}
export default connect(mapStateToProps)(RightSide)

