import React from 'react';
import { Menu, Icon, Button, Modal, Form, Input, Col, Row } from 'antd';
import styles from './index.less';
import { connect } from 'dva';
import title from './menu';
import _ from 'lodash';

const LoginModal = ({ form, visible, dispatch }) => {
    const FormItem = Form.Item
    const { getFieldDecorator, validateFields } = form;
    const handleCancel = () => {
        dispatch({type: 'header/hiddenModel'})
      }
      const handleOk = () => {
        validateFields((err, values) => {
            if(!err){
                console.log("ASA",values)
                handleCancel();
            } else {
                console.log("SSSS",err)
            }
        })
      }
    return (
        <Modal
          title="用户登录"
          visible={visible}
          onOk={handleOk}
          onCancel={handleCancel}
        >
          <Form>
           <Row>
            <Col>
              用户名:
            </Col>
            <Col>
            <FormItem
        >
          {getFieldDecorator('userName', {
            rules: [{ required: true, message: 'Please input your username!' }],
          })(
            <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
          )}
        </FormItem>
        
            </Col>
          </Row>
          <Row>
            <Col>
              密码:
            </Col>
            <Col>
            <FormItem
        >
          {getFieldDecorator('password', {
            rules: [{ required: true, message: 'Please input your Password!' }],
          })(
            <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
          )}
        </FormItem>
        
            </Col>
          </Row>
          </Form>
        </Modal>
    )
}
export default  Form.create()(LoginModal)