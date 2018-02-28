import React from 'react';
import { connect } from 'dva';
import _ from 'lodash';
import { Carousel, Card, Upload, message, Button, Icon, Row, Col } from 'antd';
import './index.css'
import Footer from '../../components/Footer';

const { Meta } = Card;
const props = {
  name: 'file',
  action: 'http://oli7sq88l.bkt.clouddn.com',
  onChange(info) {
    console.log(info.file.name)
    if (info.file.status !== 'uploading') {
      console.log(info.file, info.fileList);
    }
    if (info.file.status === 'done') {
      message.success(`${info.file.name} file uploaded successfully`);
    } else if (info.file.status === 'error') {
      message.error(`${info.file.name} file upload failed.`);
    }
  }
};
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
            cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
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
            cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
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
            cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
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
