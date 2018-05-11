import React from 'react';
import { connect } from 'dva';
import _ from 'lodash';
import { Carousel, Card, Upload, message, Button, Icon, Row, Col, Collapse } from 'antd';
import { routerRedux, Link } from 'dva/router';
import './index.css'
import Footer from '../../components/Footer';
import { IntroductionCard, imageInfo, panelContent } from './mock'

const { Panel } = Collapse;
const { Meta } = Card;
const ArtIndex = ({ dispatch, departmentProfile, rightSide }) => {
  const { data } = rightSide
  const { news, studio, project } = data
  const RouteCard = [
    {
      title: '新闻资讯',
      path: '/NewsNotice',
      detail: '/News/detail/',
      data: news
    },
    {
      title: '双创项目',
      path: '/ventureProject',
      detail: '/VentureProject/detail/',
      data: project
    },
    {
      title: '工作室',
      path: '/StudioIntroduction',
      detail: '/StudioIntroduction/',
      data: studio
    }
  ]
  return (
    <div>
      <Carousel autoplay>
        {imageInfo.map((image, index) => {
          return (
            <div key={index} className={`img_0${index + 1}`}>
              <div className="img_container">
                <span className="title">大连东软信息学院</span>
                <span className="sub_title">数字艺术系</span>
              </div>
            </div>
          )
        })}
      </Carousel>
      <Row className="card" type="flex" justify="space-between">
        {RouteCard.map((card, index) => (
          <Col key={index}>
            <Card className="cardItem" title={card.title} extra={<Link to={card.path}>更多</Link>} bordered={false}>
              {
                      (card.data || []).filter((item, index) => {
                     return index < 3
                   }).map((item) => {
                   const title = item.studioName ? `${(item.studioName)}...` : `${(item.title)}...`
                     return (
                       <Link key={item.id} to={`${card.detail}${item.id}`}><p>{title}</p></Link>
                     )
                   })
                   }
            </Card>
          </Col>
      ))}
      </Row>
      <Row className="background2">
        <div className="block" >
          <Collapse className="collapse" bordered={false} defaultActiveKey={['1']}>
            {panelContent.map((item, index) => (
              <Panel style={{ color: '#fff' }} className={`panel${index + 1}`} header={<span style={{ color: '#fff' }}>{item.header}</span>} key={index + 1}>
                <p style={{ color: '#fff' }}>{item.content}</p>
              </Panel>
          ))}
          </Collapse>
        </div>
      </Row>
      <Row className="introduction background1">
        <div className="block">
          <h1>教育创造学生价值</h1>
          <div style={{ width: '1200px', background: '#ECECEC', padding: '30px' }}>
            <Row gutter={16}>
              {IntroductionCard.map((item, index) => (
                <Col key={index} span={8}>
                  <Card className="blockCard" title={<Link to={item.path}>{item.title}</Link>} bordered={false}>
                    {item.content}
                  </Card>
                </Col>
            ))}

            </Row>
          </div>
        </div>
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
