import React from 'react';
import { Icon, Button, Modal, Form, Input, Col, Row, Checkbox } from 'antd';
import { connect } from 'dva';
import _ from 'lodash';
import { routerRedux } from 'dva/router';
import './index.css'
import login from '../../models/login';

class AdminLogin extends React.Component {
  constructor({ props }) {
    super(props)
    this.handleOk = this.handleOk.bind(this)
    this.normal = this.normal.bind(this)
    this.registered = this.registered.bind(this)
  }
  componentDidMount() {

  }
  handleOk() {
    const { dispatch, form } = this.props
    const { getFieldDecorator, validateFields } = form;
    validateFields((err, values) => {
      if (!err) {
        dispatch({ type: 'login/saveUserData', payload: values })
      } else {
      }
    })
  }
  normal() {
    const { dispatch, form } = this.props
    dispatch(routerRedux.push({
      pathname: '/'
    }));
  }
  registered() {
    const { dispatch, form } = this.props
    dispatch(routerRedux.push({
      pathname: '/Registered'
    }))
  }
  render() {
    const FormItem = Form.Item
    const { dispatch, form } = this.props
    const { getFieldDecorator, validateFields } = form;

    return (
      <div className="login">
        <div className="login_block" >
          <Form>
            <Row>
              <img src='http://oli7sq88l.bkt.clouddn.com/logo/color_logo.png' alt="NEUSOFT" />
            </Row>
            <Row >
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
            })(<Input type="password" prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Password" />)}
                </FormItem>

              </Col>
            </Row>
          </Form>
          <Row>
            <Button style={{ width: '100%', height: '50px' }} onClick={this.handleOk} type="primary" className="login_container_button">登陆</Button>
          </Row>
          <Row type="flex" justify="space-between" style={{ margin: '10px 0' }}>
            <Col >
              <a onClick={this.registered}>注册</a>/<a onClick={this.normal}>游客登录</a>
            </Col>
          </Row>
        </div>
      </div>
    )
  }
}
const mapStateToProps = ({ login }) => {
  return {
    login
  }
}
export default Form.create()(connect()(AdminLogin))
