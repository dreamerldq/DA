import React from 'react';
import { Row, Col } from 'antd'
import path from 'path'
import './index.css'

const Footer = () => {
  return (
    <div className="footer">
      <Row type="flex" align="middle" justify="space-around" className="footer_container">
        <Col span={12} className="content_left">
          <img className="logo" src={require('../../assets/logo.png')} alt="logo" />
        </Col>
        <Col span={12} className="content_right">
          <ul>
            <li>Powered by 素妆</li>
            <li>大连东软信息学院</li>
            <li>Neusoft University</li>
          </ul>

        </Col>
      </Row>
    </div>
  )
}
export default Footer
