import React from 'react';
import { Icon, Button, Modal, Form, Input, Col, Row, Checkbox } from 'antd';
import { connect } from 'dva';
import _ from 'lodash';
import { routerRedux } from 'dva/router';
import './index.css'
import login from '../../models/login';

const AdminLogin = ({ form, visible, dispatch }) => {
  const FormItem = Form.Item
  const { getFieldDecorator, validateFields } = form;
  const handleOk = () => {
    validateFields((err, values) => {
      if (!err) {
        dispatch({ type: 'login/saveUserData', payload: values })
      } else {
      }
    })
  }
  const normal = () => {
    dispatch(routerRedux.push({
      pathname: '/'
    }));
  }
  const registered = () => {
    dispatch(routerRedux.push({
      pathname: '/Registered'
    }))
  }
  return (
    <div className="login_container">
      <div className="login_container_inner">
        <Form>
          <Row className="login_container_form">
            <Col>
              <FormItem >
                {getFieldDecorator('username', {
            rules: [{ required: true, message: 'Please input your username!' }]
          })(<Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />)}
              </FormItem>

            </Col>
          </Row>
          <Row className="login_container_form">
            <Col>
              <FormItem >
                {getFieldDecorator('password', {
            rules: [{ required: true, message: 'Please input your Password!' }]
          })(<Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Password" />)}
              </FormItem>

            </Col>
          </Row>
        </Form>
        <Row>
          <Button onClick={handleOk} type="primary" className="login_container_button">登陆</Button>
        </Row>
        <Row style={{ margin: '10px 0' }}>
          <Col span={6}>
            <a>忘记密码？</a>
          </Col>
          <Col span={8} offset={10}>
            <a onClick={registered}>注册</a>/<a onClick={normal}>游客登录</a>
          </Col>
        </Row>
      </div>
    </div>


  )
}
const mapStateToProps = ({ login }) => {
  return {
    login
  }
}
export default Form.create()(connect()(AdminLogin))
