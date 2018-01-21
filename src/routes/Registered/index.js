import React from 'react';
import { Icon, Button, Modal, Form, Input, Col, Row, Checkbox } from 'antd';
import { connect } from 'dva';
import _ from 'lodash';
import { routerRedux } from 'dva/router';
import basicInfo from './basicInfo'
import Avatar from '../../components/upload'

const Registered = ({ form, visible, dispatch }) => {
  const FormItem = Form.Item
  const { getFieldDecorator, validateFields } = form;
  return (
    <div >
      <div >
        <Avatar />
        <Form>
          {
              basicInfo.map((item) => {
                return (
                  <Row>
                    <Col span={12}>
                      <Col span={4}>
                        {item.lable}
                      </Col>
                      <Col span={20}>
                        <FormItem >
                          {getFieldDecorator(`${item.key}`, {
            rules: [{ required: true, message: `${item.placeholder}为必填项!` }]
          })(<Input placeholder={`${item.placeholder}`} />)}
                        </FormItem>
                      </Col>

                    </Col>
                  </Row>
                )
              })
            }
        </Form>
      </div>
    </div>


  )
}
export default Form.create()(connect()(Registered))
