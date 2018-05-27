import React from 'react'
import { connect } from 'dva'
import { Col, Row, Spin } from 'antd'
import RightSide from '../RightSide'
import './index.css'
import AddBackgroundImage from '../../components/BackgroundImage'

const StudioIntroductionDetail = ({ studioIntroductionDetail }) => {
  const { studio, loading } = studioIntroductionDetail
  return (
    <Spin spinning={loading}>
      <div className="studioDetail_container">
        <div className="studioDetail_contant">
          <Row>
            <h2>{studio.studioName}</h2>
          </Row>
          <Row>
            <Col span={4}>负责人:</Col>
            <Col span={20}>{studio.principal}</Col>
          </Row>
          <Row>
            <Col span={4}>工作室介绍:</Col>
            <Col sspan={20}>{studio.introduction}</Col>
          </Row>
          <Row>
            <Col span={4}>工作室地址:</Col>
            <Col span={20}>{studio.address}</Col>
          </Row>
          <Row>
            <Col span={4}>工作室成员:</Col>
          </Row>
          <Row>
            <ul className="introductionList">
              {(studio.name || []).map((item, index) => {
            return (
              <li key={index}>{item}</li>
            )
          })}
            </ul>
          </Row>
          <Row>
            <Col>工作室承担课程:</Col>
          </Row>
          <Row>
            <ul className="introductionList">
              {(studio.course || []).map((item, index) => {
            return (
              <li key={index}>{item}</li>
            )
        })}
            </ul>
          </Row>
          <Row>
            <Col>工作室承担项目方向:</Col>
          </Row>
          <Row>
            <ul className="introductionList">
              {(studio.research || []).map((item, index) => {
            return (
              <li key={index}>{item}</li>
            )
        })}
            </ul>
          </Row>

        </div>
        <RightSide className="rightSide" />
      </div>
    </Spin>

  )
}
const mapStateToProps = ({ studioIntroductionDetail }) => {
  return {
    studioIntroductionDetail
  }
}
export default AddBackgroundImage('02')(connect(mapStateToProps)(StudioIntroductionDetail))

