import React from 'react';
import { Row, Col } from 'antd'
import path from 'path'
import './index.css'

const Footer = () => {
  return (
    <div className="footer">
      <Row className="container">
        <Col span={8} className="content_left">
          <img className="logo" src={require('../../assets/logo.png')} alt="logo" />
        </Col>
        <Col offset={4} span={12} className="content_right">
          <Row >
            <ul>
              <li>Powered by 素妆</li>
              <li>Copyright 2016 © 大连东软信息学院</li>
            </ul>

          </Row>
        </Col>
      </Row>
    </div>
  )
}
export default Footer
