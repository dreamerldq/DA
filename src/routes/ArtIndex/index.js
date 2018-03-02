import React from 'react';
import { connect } from 'dva';
import _ from 'lodash';
import { Carousel, Card, Upload, message, Button, Icon, Row, Col } from 'antd';
import './index.css'
import Footer from '../../components/Footer';

const { Meta } = Card;
const ArtIndex = ({ dispatch, departmentProfile }) => {
  return (
    <div>
      <Carousel autoplay>
        <div className="img_01">
          <h3>Neusoft Picture</h3>
        </div>
        <div className="img_02">
          <h3>Neusoft Picture</h3>
        </div>
        <div className="img_03">
          <h3>Neusoft Picture</h3>
        </div>
        <div className="img_04">
          <h3>Neusoft Picture</h3>
        </div>
        <div className="img_05">
          <h3>Neusoft Picture</h3>
        </div>
      </Carousel>

      <Row className="card" type="flex" justify="space-between">
        <Col>
          <Card
            hoverable="true"
            style={{ width: 240 }}
            cover={<img alt="example"src={require('../../assets/school1.jpg')} />}
          >
            <Meta
              title="校园文化 "
            />
          </Card>
        </Col>
        <Col>
          <Card
            hoverable="true"
            style={{ width: 240 }}
            cover={<img alt="example" src={require('../../assets/school2.jpg')} />}
          >
            <Meta
              title="Europe Street beat"
              description="www.instagram.com"
            />
          </Card>
        </Col>
        <Col>
          <Card
            hoverable="true"
            style={{ width: 240 }}
            cover={<img alt="example" src={require('../../assets/school3.jpg')} />}
          >
            <Meta
              title="Europe Street beat"
              description="www.instagram.com"
            />
          </Card>
        </Col>
      </Row>
      <Row>
        <Footer />
      </Row>
    </div>
  )
}
ArtIndex.propTypes = {
};
export default connect()(ArtIndex);
