import React, { PropTypes, Component } from 'react'
import { connect } from 'dva'
import { Menu, Affix, Button, Form } from 'antd';
import { Link, Events, scrollSpy } from 'react-scroll';
import MenuBar from '../../components/Menubar'
import Content from './Content/index'
import configs from './configs'
import './index.css'

const Registered = ({ registered, form }) => {
  const { getFieldsValue } = form
  const createProfile = () => {
    const value = getFieldsValue()
    console.log('这是表单中的所有的值', value)
  }
  return (
    <div className="profile_Container">
      <MenuBar configs={configs} />
      <Content form={form} />
      <div style={{ position: 'fixed', bottom: '0px' }}>
        <Button onClick={createProfile}>创建教师档案</Button>
      </div>
    </div>
  );
}
const mapStateToProps = ({ registered }) => {
  return {
    registered
  }
}
export default Form.create()(connect()(Registered))
