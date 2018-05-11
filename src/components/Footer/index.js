import React from 'react';
import { Row, Col } from 'antd'
import path from 'path'
import './index.css'

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer_container">
        <img className="logo" src={require('../../assets/logo.png')} alt="logo" />
        <ul>
          <li>Created by LDQ</li>
          <li>大连东软信息学院</li>
          <li>Neusoft University</li>
        </ul>
      </div>
    </div>
  )
}
export default Footer
