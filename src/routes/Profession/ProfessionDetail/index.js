import React from 'react'
import { connect } from 'dva'
import { Col, Row, Spin } from 'antd'
import './index.css'
import RightSide from '../../RightSide'

const ProfessionDetail = ({ profileManagement }) => {
  const { content, loading } = profileManagement;

  return (
    <Spin spinning={loading}>
      <div className="professionDetail_Container">
        <div className="professionDetail_content">
          <Row>
            <h2>{content.professionName || ''}</h2>
          </Row>
          <Row>
            <h3>专业介绍:</h3>
            <Col>{content.professionIntroduction || ''}</Col>
          </Row>
          <Row>
            <h3>专业特色:</h3>
            <Col>{content.professionalFeatures || ''}</Col>
          </Row>
          <Row>
            <h3>培训目标:</h3>
            <Col>{content.trainingPositioning || ''}</Col>
          </Row>
          <Row>
            <h3>师资力量:</h3>
            <Col>{content.faculty || ''}</Col>
          </Row>
          <Row>
            <h3>专业优势:</h3>
            <Col>{content.professionalAdvantage || ''}</Col>
          </Row>
        </div>
        <RightSide style={{ float: 'right' }} />
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

