import React from 'react'
import { connect } from 'dva'
import { Col, Row, Spin } from 'antd'
import './index.css'

const TeacherDetail = ({ teacherDetail }) => {
  const { user, loading } = teacherDetail
  return (
    <Spin spinning={loading}>
      <div className="teacherDetail_Container">
        <Row>
          <h2>教师详情</h2>
        </Row>
        <Row>
          <Col span={2}>姓名:</Col>
          <Col span={2}>{user.name}</Col>
        </Row>
        <Row>
          <Col span={2}>职称:</Col>
          <Col span={2}>{user.jobTitle}</Col>
        </Row>
        <Row>
          <Col span={2}>学历:</Col>
          <Col span={2}>{user.education}</Col>
        </Row>
        <Row>
          <Col span={2}>所属团队:</Col>
          <Col span={3}>{user.professionalTeam}</Col>
        </Row>
        <Row>
          <Col span={2}>研究方向:</Col>
          <Col span={3}>{user.researchDirection}</Col>
        </Row>
        <Row>
          <Col span={2}>毕业院校:</Col>
          <Col span={3}>{user.graduatedSchool}</Col>
        </Row>
        <Row>
          <Col span={2}>电子邮件:</Col>
          <Col span={3}>{user.email}</Col>
        </Row>
      </div>
    </Spin>

  )
}
const mapStateToProps = ({ teacherDetail }) => {
  return {
    teacherDetail
  }
}
export default connect(mapStateToProps)(TeacherDetail)

