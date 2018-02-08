import React from 'react'
import { connect } from 'dva'
import { Col, Row, Spin } from 'antd'
import './index.css'

const StudioIntroductionDetail = ({ studioIntroductionDetail }) => {
  const { studio, loading } = studioIntroductionDetail
  console.log('OOO', studio)
  return (
    <Spin spinning={loading}>
      <div className="teacherDetail_Container">
        <Row>
          <h2>工作室简介</h2>
        </Row>
        <Row>
          <Col span={4}>工作室名称:</Col>
          <Col span={4}>{studio.studioName}</Col>
        </Row>
        <Row>
          <Col span={4}>负责人:</Col>
          <Col span={4}>{studio.principal}</Col>
        </Row>
        <Row>
          <Col span={4}>工作室介绍:</Col>
          <Col span={4}>{studio.introduction}</Col>
        </Row>
        <Row>
          <Col span={4}>工作室地址:</Col>
          <Col span={4}>{studio.address}</Col>
        </Row>
        {(studio.name || []).map((item, index) => {
            return (
              <Row key={index}>
                <Col span={4}>{item}</Col>
              </Row>
            )
        })}
        {(studio.course || []).map((item, index) => {
            return (
              <Row key={index}>
                <Col span={4}>{item}</Col>
              </Row>
            )
        })}
        {(studio.reserach || []).map((item, index) => {
            return (
              <Row key={index}>
                <Col span={4}>{item}</Col>
              </Row>
            )
        })}
      </div>
    </Spin>

  )
}
const mapStateToProps = ({ studioIntroductionDetail }) => {
  return {
    studioIntroductionDetail
  }
}
export default connect(mapStateToProps)(StudioIntroductionDetail)

