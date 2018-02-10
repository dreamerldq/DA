import React from 'react'
import { connect } from 'dva'
import { Col, Row, Spin, List } from 'antd'
import './index.css'

const { Item } = List
const TeacherDetail = ({ teacherDetail }) => {
  const { user, loading } = teacherDetail
  const {
    patent, research, teacherTrainning, award, studentAward
  } = user
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
        <Row>
          <List
            header={<div>教师培训</div>}
            bordered
            dataSource={teacherTrainning}
            renderItem={(item) => {
              return (
                <Item>
                  <Row style={{ width: '100%' }}>
                    <Col span={2}>
                      {item}
                    </Col>
                  </Row>
                </Item>
              )
            }}
          />
        </Row>
        <Row>
          <List
            header={<div>专利</div>}
            bordered
            dataSource={patent}
            renderItem={(item) => {
              return (
                <Item>
                  <Row style={{ width: '100%' }}>
                    <Col span={2}>
                      {item}
                    </Col>
                  </Row>
                </Item>
              )
            }}
          />
        </Row>
        <Row>
          <List
            header={<div>科研成果</div>}
            bordered
            dataSource={research}
            renderItem={(item) => {
              return (
                <Item>
                  <Row style={{ width: '100%' }}>
                    <Col span={2}>
                      {item}
                    </Col>
                  </Row>
                </Item>
              )
            }}
          />
        </Row>
        <Row>
          <List
            header={<div>获奖情况</div>}
            bordered
            dataSource={award}
            renderItem={(item) => {
              return (
                <Item>
                  <Row style={{ width: '100%' }}>
                    <Col span={2}>
                      {item}
                    </Col>
                  </Row>
                </Item>
              )
            }}
          />
        </Row>
        <Row>
          <List
            header={<div>指导学生获奖情况</div>}
            bordered
            dataSource={studentAward}
            renderItem={(item) => {
              return (
                <Item>
                  <Row style={{ width: '100%' }}>
                    <Col span={2}>
                      {item}
                    </Col>
                  </Row>
                </Item>
              )
            }}
          />
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

