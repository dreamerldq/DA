import React from 'react';
import { Icon, Button, Modal, Form, Input, Col, Row, Checkbox } from 'antd';
import { connect } from 'dva';
import _ from 'lodash';
import { routerRedux } from 'dva/router';
import basicInfo from './basicInfo'
import '../index.css'

const BasicInfo = ({
  form, visible, dispatch, model
}) => {
  const FormItem = Form.Item
  const { user } = model
  const { getFieldDecorator } = form;
  return (
    <div className="registered_container" >
      <Form>
        <Row>
          {
              basicInfo.map((item) => {
                if (item.key === 'email') {
                  return (
                    <Col key={item.key} span={12}>
                      <Col offset={2} className="registered_container_lable" span={4}>
                        {item.lable}
                      </Col>
                      <Col span={18}>
                        <FormItem className="registered_container_form" >
                          {getFieldDecorator(`${item.key}`, {
                            initialValue: `${user.email || ''}`,
              rules: [{
                required: true,
                message: '请输入正确的邮箱格式',
                pattern: /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/
}]
            })(<Input placeholder={`${item.placeholder}`} />)}
                        </FormItem>
                      </Col>

                    </Col>

                  )
                }
                if (item.key === 'password') {
                  return (
                    <Col key={item.key} span={12}>
                      <Col offset={2} className="registered_container_lable" span={4}>
                        {item.lable}
                      </Col>
                      <Col span={18}>
                        <FormItem className="registered_container_form" >
                          {getFieldDecorator(`${item.key}`, {
                             initialValue: `${user.password || ''}`,
              rules: [{ required: true, message: `${item.placeholder}为必填项!` }]
            })(<Input type="password" placeholder={`${item.placeholder}`} />)}
                        </FormItem>
                      </Col>

                    </Col>

                  )
                }
                return (
                  <Col key={item.key} span={12}>
                    <Col offset={2} className="registered_container_lable" span={4}>
                      {item.lable}
                    </Col>
                    <Col span={18}>
                      <FormItem className="registered_container_form" >
                        {getFieldDecorator(`${item.key}`, {
                           initialValue: `${user[item.key] || ''}`,
            rules: [{ required: true, message: `${item.placeholder}为必填项!` }]
          })(<Input placeholder={`${item.placeholder}`} />)}
                      </FormItem>
                    </Col>

                  </Col>

                )
              })
            }
        </Row>

      </Form>
    </div>


  )
}
export default connect()(BasicInfo)
