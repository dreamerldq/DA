import React from 'react'
import { connect } from 'dva'
import { Col, Row, Spin } from 'antd'
import './index.css'

const ProfessionDetail = ({ ventureProject }) => {
  const { record, loading } = ventureProject

  return (
    <Spin spinning={loading}>
      <div className="ventureProjectDetail">
        <Row>
          <h1>{record.projectName || ''}</h1>
        </Row>
        <Row>
          <Col span={4}>项目所属一级学科:</Col>
          <Col span={20}>{record.projectType || ''}</Col>
        </Row>
        <Row>
          <Col span={4}>指导老师:</Col>
          <Col span={20}>{record.instructor || ''}</Col>
        </Row>
        <Row>
          <Col span={4}>企业导师:</Col>
          <Col span={20}>{record.businessMentor || ''}</Col>
        </Row>
        <Row>
          <Col span={4}>单位:</Col>
          <Col span={20}>{record.unit || ''}</Col>
        </Row>
        <Row>
          <Col span={4}>职称\职务:</Col>
          <Col span={20}>{record.title || ''}</Col>
        </Row>
        <Row>
          <Col span={4}>产品介绍:</Col>
          <Col span={20}>{record.productDescription || ''}</Col>
        </Row>
        <Row>
          <Col span={4}>产品技术水平:</Col>
          <Col span={20}>{record.ProductTechnicalLevel || ''}</Col>
        </Row>
        <Row>
          <Col span={4}>产品的新颖性:</Col>
          <Col span={20}>{record.NoveltyProducts || ''}</Col>
        </Row>
        <Row>
          <Col span={4}>先进性和独特性:</Col>
          <Col span={20}>{record.advanced || ''}</Col>
        </Row>
        <Row>
          <Col span={4}>产品的竞争优势:</Col>
          <Col span={20}>{record.ProductCompetitive || ''}</Col>
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

