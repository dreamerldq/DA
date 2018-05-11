import React from 'react';
import { connect } from 'dva';
import _ from 'lodash';
import { Carousel, Card, Upload, message, Button, Icon, Row, Col, Collapse } from 'antd';
import { routerRedux, Link } from 'dva/router';
import './index.css'
import Footer from '../../components/Footer';

const { Panel } = Collapse;
const { Meta } = Card;
const ArtIndex = ({ dispatch, departmentProfile, rightSide }) => {
  const { data } = rightSide
  const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;
  const { news, studio, project } = data
  console.log('QQQQ', project)
  console.log('AAAA', news)
  console.log('PPP', studio)
  const imageInfo = [
    {
      title: '大连东软信息学院',
      sub_title: '数字艺术系'
    },
    {
      title: '大连东软信息学院',
      sub_title: '数字艺术系'
    },
    {
      title: '大连东软信息学院',
      sub_title: '数字艺术系'
    },
    {
      title: '大连东软信息学院',
      sub_title: '数字艺术系'
    },
    {
      title: '大连东软信息学院',
      sub_title: '数字艺术系'
    }
  ]
  const panelContent = [
    {
      header: '系部简介',
      content: `
      数字艺术系成立于2004年。自建系以来，该系一直强调数字技术与艺术的有机融合
      ，强调产学深度融合，并致力于为数字内容产业培养急需的数字艺术应用型人才。`
    },
    {
      header: '组织架构',
      content: `
      数字艺术系结合TOPCARES-CDIO教育教学改革，将原专业教研室和学生工作办公室合并，成立专业教育管理团队，使专业教师与素质教师（辅导员）融合互动
      、形成合力，实现专业教育与思想政治教育和学生日常管理的一体化。`
    },
    {
      header: '主任寄语',
      content: `
      数字技术与文化创意产业的深度融合发展，不仅催生了一个极具发展潜力的朝阳产业，还
      使其在短短十来年时间里迅速发展成为我国的支柱性产业。这个令全球瞩目的新兴产业就是数字内容产业。`
    }
  ]
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
            <div className={`img_0${index + 1}`}>
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
          <Col>
            <Card className="cardItem" title={card.title} extra={<Link to={card.path}>更多</Link>} bordered={false}>
              {
                      (card.data || []).filter((item, index) => {
                     return index < 3
                   }).map((item) => {
                   const title = item.studioName ? `${(item.studioName)}...` : `${(item.title)}...`
                     return (
                       <Link to={`${card.detail}${item.id}`}><p>{title}</p></Link>
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
              <Col span={8}>
                <Card className="blockCard" title={<Link to="DigitalMediaTechnologyTeam">教师团队</Link>} bordered={false}>
                数字艺术系建立了一支规模适中，实力较为雄厚的师资队伍，充分满足了人才培养的需要。
                长期以来，数字艺术系鼓励和支持教师开展校企深度合作，不断提高教师的工程实践能力和行业企业技术服务能力，同时坚持科研教学相长，注重教学成果的产品转化，取得明显的教学成效。
                </Card>
              </Col>
              <Col span={8}>
                <Card className="blockCard" title={<Link to="QuanJingList">全景展览</Link>} bordered={false}>
                通过全景图预览的方式，充分展现数字艺术系的风采。将艺术系的每一个角落都拍摄成为全景图，然后展示在网站中，
                可以通过旋转、缩放等交互来实现全景图360度展示，通过点击全景图下方的连接，实现全景图之间的无缝切换。
                </Card>
              </Col>
              <Col span={8}>
                <Card className="blockCard" title={<Link to="CampusCulture">校园文化</Link>} bordered={false}>
                校园文化是以学生为主体，以课外文化活动为主要内容，校园文化建设是以学生为主体，
                校园为主要空间，涵盖院校领导、教职工在内，以校园精神为主要特征的一种群体文化。校园文化是社会整体文化的一部分。校园文化一般取自该学校的精神文化的含义。
                校园文化的特性为互动性、渗透性和传承性。校园文化建设可以提升学校的文化品位。
                </Card>
              </Col>
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
