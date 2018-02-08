import React from 'react'
import { connect } from 'dva'
import { Col, Row, Spin } from 'antd'
import './index.css'

const ProfessionDetail = ({ ventureProject }) => {
  const { record, loading } = ventureProject

  return (
    <Spin spinning={loading}>
      <div className="teacherDetail_Container">
        <Row>
          <Col>项目名称:</Col>
          <Col>{record.projectName || ''}</Col>
        </Row>
        <Row>
          <Col>项目所属一级学科:</Col>
          <Col>{record.projectType || ''}</Col>
        </Row>
        <Row>
          <Col>指导老师:</Col>
          <Col>{record.instructor || ''}</Col>
        </Row>
        <Row>
          <Col>企业导师:</Col>
          <Col>{record.businessMentor || ''}</Col>
        </Row>
        <Row>
          <Col>单位:</Col>
          <Col>{record.unit || ''}</Col>
        </Row>
        <Row>
          <Col>职称\职务:</Col>
          <Col>{record.title || ''}</Col>
        </Row>
        <Row>
          <Col>产品介绍:</Col>
          <Col>{record.productDescription || ''}</Col>
        </Row>
        <Row>
          <Col>产品技术水平:</Col>
          <Col>{record.ProductTechnicalLevel || ''}</Col>
        </Row>
        <Row>
          <Col>产品的新颖性:</Col>
          <Col>{record.NoveltyProducts || ''}</Col>
        </Row>
        <Row>
          <Col>先进性和独特性:</Col>
          <Col>{record.advanced || ''}</Col>
        </Row>
        <Row>
          <Col>产品的竞争优势:</Col>
          <Col>{record.ProductCompetitive || ''}</Col>
        </Row>
      </div>
    </Spin>

  )
}
const mapStateToProps = ({ ventureProject }) => {
  return {
    ventureProject
  }
}
export default connect(mapStateToProps)(ProfessionDetail)

