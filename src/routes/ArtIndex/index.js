import React from 'react';
import { connect } from 'dva';
import _ from 'lodash';
import { Carousel, Card, Upload, message, Button, Icon, Row, Col } from 'antd';
import { routerRedux, Link } from 'dva/router';
import './index.css'
import Footer from '../../components/Footer';

const { Meta } = Card;
const ArtIndex = ({ dispatch, departmentProfile, rightSide }) => {
  const { data, loading } = rightSide
  const { news, studio, project } = data
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
    <div>
      <Carousel autoplay>
        <div className="img_01">
          <div className="img_container">
            <span className="title">大连东软信息学院</span>
            <span className="sub_title">数字艺术系</span>
          </div>
        </div>
        <div className="img_02">
          <div className="img_container">
            <span className="title">大连东软信息学院</span>
            <span className="sub_title">数字艺术系</span>
          </div>
        </div>
        <div className="img_03">
          <div className="img_container">
            <span className="title">大连东软信息学院</span>
            <span className="sub_title">数字艺术系</span>
          </div>
        </div>
        <div className="img_04">
          <div className="img_container">
            <span className="title">大连东软信息学院</span>
            <span className="sub_title">数字艺术系</span>
          </div>
        </div>
        <div className="img_05">
          <div className="img_container">
            <span className="title">大连东软信息学院</span>
            <span className="sub_title">数字艺术系</span>
          </div>
        </div>
      </Carousel>

      <Row className="card">
        <Col>
          <Card className="cardItem" title="新闻资讯" extra={<Link to="/NewsNotice">更多</Link>} bordered={false}>
            {
              (news || []).filter((item, index) => {
             return index < 3
           }).map((item) => {
           const title = `${(item.title).slice(0, 16)}...`
             return (
               <Link to={`/News/detail/${item.id}`}><p>{title}</p></Link>
             )
           })
           }
          </Card>
        </Col>
        <Col>
          <Card className="cardItem" title="双创项目" extra={<Link to="/ventureProject">更多</Link>} bordered={false}>
            {
              (project || []).filter((item, index) => {
             return index < 3
           }).map((item) => {
            const title = `${(item.projectName).slice(0, 16)}...`
             return (
               <Link to={`/VentureProject/detail/${item.id}`}><p>{title}</p></Link>
             )
           })
           }
          </Card>
        </Col>
        <Col>
          <Card className="cardItem" title="工作室" extra={<Link to="/StudioIntroduction">更多</Link>} bordered={false}>
            {
              (studio || []).filter((item, index) => {
             return index < 3
           }).map((item) => {
            const title = `${(item.studioName).slice(0, 16)}...`
             return (
               <Link to={`/StudioIntroduction/${item.id}`}><p>{title}</p></Link>
             )
           })
           }
          </Card>
        </Col>
      </Row>
      <Row>
        <Footer />
      </Row>
    </div>
  )
}
const mapStateToProps = ({ rightSide }) => {
  return {
    rightSide
  }
}
export default connect(mapStateToProps)(ArtIndex)
