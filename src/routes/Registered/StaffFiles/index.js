import React from 'react';
import { Icon, Button, Modal, Form, Input, Col, Row, Checkbox, Select } from 'antd';
import { connect } from 'dva';
import _ from 'lodash';
import { routerRedux } from 'dva/router';
import basicInfo from './basicInfo'
import '../index.css'

const { Option } = Select;
const StaffFiles = ({ form, visible, dispatch }) => {
  const FormItem = Form.Item
  const { getFieldDecorator } = form;
  return (
    <div className="registered_container" >
      <Form>
        {
              basicInfo.map((item) => {
                if (item.key === 'professionalTeam') {
                  return (
                    <Col key={item.key} span={12}>
                      <Col className="registered_container_lable" span={4}>
                        {item.lable}
                      </Col>
                      <Col span={20}>
                        <FormItem className="registered_container_form" >
                          {getFieldDecorator(`${item.key}`, {
              initialValue: '数字媒体技术',
              rules: [{ required: true, message: `${item.placeholder}为必填项!` }]
            })(<Select>
              <Option value="数字媒体技术">数字媒体技术</Option>
              <Option value="数字媒体艺术">数字媒体艺术</Option>
              <Option value="动画" >动画</Option>
              <Option value="视觉传达设计">视觉传达设计</Option>
              <Option value="摄影">影视设计与制作</Option>
            </Select>)}
                        </FormItem>
                      </Col>

                    </Col>

                  )
                }
                if (item.key === 'jobTitle') {
                  return (
                    <Col key={item.key} span={12}>
                      <Col className="registered_container_lable" span={4}>
                        {item.lable}
                      </Col>
                      <Col span={20}>
                        <FormItem className="registered_container_form" >
                          {getFieldDecorator(`${item.key}`, {
                            initialValue: '教授',
              rules: [{ required: true, message: `${item.placeholder}为必填项!` }]
            })(<Select>
              <Option value="教授">教授</Option>
              <Option value="讲师">讲师</Option>
              <Option value="副教授" >副教授</Option>
              <Option value="助教">助教</Option>
            </Select>)}
                        </FormItem>
                      </Col>
                    </Col>

                  )
                }
                if (item.key === 'education') {
                  return (
                    <Col key={item.key} span={12}>
                      <Col className="registered_container_lable" span={4}>
                        {item.lable}
                      </Col>
                      <Col span={20}>
                        <FormItem className="registered_container_form" >
                          {getFieldDecorator(`${item.key}`, {
                            initialValue: '学士',
              rules: [{ required: true, message: `${item.placeholder}为必填项!` }]
            })(<Select>
              <Option value="学士">学士</Option>
              <Option value="硕士">硕士</Option>
              <Option value="博士">博士</Option>
            </Select>)}
                        </FormItem>
                      </Col>

                    </Col>

                  )
                }
                return (
                  <Col key={item.key} span={12}>
                    <Col className="registered_container_lable" span={4}>
                      {item.lable}
                    </Col>
                    <Col span={20}>
                      <FormItem className="registered_container_form" >
                        {getFieldDecorator(`${item.key}`, {
            rules: [{ required: true, message: `${item.placeholder}为必填项!` }]
          })(<Input placeholder={`${item.placeholder}`} />)}
                      </FormItem>
                    </Col>

                  </Col>

                )
              })
            }
      </Form>
    </div>


  )
}
export default connect()(StaffFiles)
