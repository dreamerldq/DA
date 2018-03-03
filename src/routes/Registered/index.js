import React, { PropTypes, Component } from 'react'
import { connect } from 'dva'
import { Menu, Affix, Button, Form } from 'antd';
import { Link, Events, scrollSpy } from 'react-scroll';
import MenuBar from '../../components/Menubar'
import Content from './Content/index'
import configs from './configs'
import './index.css'

const Registered = ({ dispatch, registered, form }) => {
  const { getFieldsValue, validateFields } = form
  const createProfile = () => {
    const values = getFieldsValue()
    dispatch({ type: 'registered/createProfile', payload: values })
  }
  const editProfile = () => {
    const values = getFieldsValue()
    dispatch({ type: 'registered/updateProfile', payload: values })
  }
  return (
    <div className="profile_Container">
      <MenuBar configs={configs} />
      <Content form={form} />
      {registered.id ?
        <div style={{ position: 'absolute', right: '50px', top: '10px' }}>
          <Button type="primary" onClick={editProfile}>编辑教师档案</Button>
        </div> :
        <div style={{ position: 'absolute', right: '50px', top: '10px' }}>
          <Button type="primary" onClick={createProfile}>创建教师档案</Button>
        </div>
      }

    </div>
  );
}
const mapStateToProps = ({ registered }) => {
  return {
    registered
  }
}
export default Form.create()(connect(mapStateToProps)(Registered))
