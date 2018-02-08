import React from 'react'
import { connect } from 'dva'
import { Col, Row, Spin } from 'antd'
import './index.css'

const ProfessionDetail = ({ profileManagement }) => {
  const { content, loading } = profileManagement
  console.log('ZZZZZ', content);

  return (
    <Spin spinning={loading}>
      <div className="teacherDetail_Container">
        <Row>
          <Col>专业名称:</Col>
          <Col>{content.professionName || ''}</Col>
        </Row>
        <Row>
          <Col>专业介绍:</Col>
          <Col>{content.professionIntroduction || ''}</Col>
        </Row>
        <Row>
          <Col>专业特色:</Col>
          <Col>{content.professionalFeatures || ''}</Col>
        </Row>
        <Row>
          <Col>培训目标:</Col>
          <Col>{content.trainingPositioning || ''}</Col>
        </Row>
        <Row>
          <Col>师资力量:</Col>
          <Col>{content.faculty || ''}</Col>
        </Row>
        <Row>
          <Col>专业优势:</Col>
          <Col>{content.professionalAdvantage || ''}</Col>
        </Row>
      </div>
    </Spin>

  )
}
const mapStateToProps = ({ profileManagement }) => {
  return {
    profileManagement
  }
}
export default connect(mapStateToProps)(ProfessionDetail)

