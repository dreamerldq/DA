import React from 'react';
import { Icon, Button, Modal, Form, Input, Col, Row, Table, List } from 'antd';
import { connect } from 'dva';
import { routerRedux } from 'dva/router';
import _ from 'lodash';
import './index.css'

const { TextArea } = Input;
const { Item } = List
const FormItem = Form.Item
class VentureProjectCreate extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      visible: false,
      type: null
    }
    this.createProject = this.createProject.bind(this)
  }
  createProject() {
    const { dispatch } = this.props
    const { getFieldsValue } = this.props.form
    const self = this
    const value = getFieldsValue()
    dispatch({ type: 'ventureProject/createVentureProject', payload: value })
  }
  render() {
    const { form, dispatch, ventureProjectCreate } = this.props
    const { getFieldDecorator, getFieldValue } = form;
    return (
      <div className="registered_container" >
        <Button onClick={this.createProject}>创建</Button>
        <Form>
          <Row>
            <Col>
              <Col className="registered_container_lable" span={4}>
              项目名称
              </Col>
              <Col span={20}>
                <FormItem className="registered_container_form" >
                  {getFieldDecorator('projectName', {
                    })(<Input />)}
                </FormItem>
              </Col>
            </Col>
            <Col>
              <Col className="registered_container_lable" span={4}>
              项目所属一级学科
              </Col>
              <Col span={20}>
                <FormItem className="registered_container_form" >
                  {getFieldDecorator('projectType', {
                    })(<Input />)}
                </FormItem>
              </Col>
            </Col>
            <Col>
              <Col className="registered_container_lable" span={4}>
              指导老师
              </Col>
              <Col span={20}>
                <FormItem className="registered_container_form" >
                  {getFieldDecorator('instructor', {
                    })(<Input />)}
                </FormItem>
              </Col>
            </Col>
            <Col>
              <Col className="registered_container_lable" span={4}>
              企业导师
              </Col>
              <Col span={20}>
                <FormItem className="registered_container_form" >
                  {getFieldDecorator('businessMentor', {
                    })(<Input />)}
                </FormItem>
              </Col>
            </Col>
            <Col>
              <Col className="registered_container_lable" span={4}>
              单位
              </Col>
              <Col span={20}>
                <FormItem className="registered_container_form" >
                  {getFieldDecorator('unit', {
                    })(<Input />)}
                </FormItem>
              </Col>
            </Col>
            <Col>
              <Col className="registered_container_lable" span={4}>
              职称\职务
              </Col>
              <Col span={20}>
                <FormItem className="registered_container_form" >
                  {getFieldDecorator('title', {
                    })(<Input />)}
                </FormItem>
              </Col>
            </Col>

            <Col>
              <Col className="registered_container_lable" span={4}>
              产品介绍
              </Col>
              <Col span={20}>
                <FormItem className="registered_container_form" >
                  {getFieldDecorator('productDescription', {
                    })(<TextArea autosize={{ minRows: 1, maxRows: 6 }} />)}
                </FormItem>
              </Col>
            </Col>
            <Col>
              <Col className="registered_container_lable" span={4}>
              产品技术水平
              </Col>
              <Col span={20}>
                <FormItem className="registered_container_form" >
                  {getFieldDecorator('productTechnicalLevel', {
                    })(<TextArea autosize={{ minRows: 1, maxRows: 6 }} />)}
                </FormItem>
              </Col>
            </Col>
            <Col>
              <Col className="registered_container_lable" span={4}>
              产品的新颖性
              </Col>
              <Col span={20}>
                <FormItem className="registered_container_form" >
                  {getFieldDecorator('noveltyProducts', {
                    })(<TextArea autosize={{ minRows: 1, maxRows: 6 }} />)}
                </FormItem>
              </Col>
            </Col>
            <Col>
              <Col className="registered_container_lable" span={4}>
              先进性和独特性
              </Col>
              <Col span={20}>
                <FormItem className="registered_container_form" >
                  {getFieldDecorator('advanced', {
                    })(<TextArea autosize={{ minRows: 1, maxRows: 6 }} />)}
                </FormItem>
              </Col>
            </Col>
            <Col>
              <Col className="registered_container_lable" span={4}>
              产品的竞争优势
              </Col>
              <Col span={20}>
                <FormItem className="registered_container_form" >
                  {getFieldDecorator('productCompetitive', {
                    })(<TextArea autosize={{ minRows: 1, maxRows: 6 }} />)}
                </FormItem>
              </Col>
            </Col>
          </Row>
        </Form>
      </div>


    )
  }
}
const mapStateToProps = ({ ventureProject }) => {
  return {
    ventureProject
  }
}
export default Form.create()(connect(mapStateToProps)(VentureProjectCreate))
