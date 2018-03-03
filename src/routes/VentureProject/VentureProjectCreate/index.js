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
    this.editProject = this.editProject.bind(this)
  }
  createProject() {
    const { dispatch } = this.props
    const { getFieldsValue } = this.props.form
    const self = this
    const value = getFieldsValue()
    dispatch({ type: 'ventureProject/createVentureProject', payload: value })
  }
  editProject() {
    const { dispatch } = this.props
    const { getFieldsValue } = this.props.form
    const self = this
    const value = getFieldsValue()
    dispatch({ type: 'ventureProject/editVentureProject', payload: value })
  }
  render() {
    const { form, dispatch, ventureProject } = this.props
    const { getFieldDecorator, getFieldValue } = form;
    const { record, id } = ventureProject
    return (
      <div className="venture_container" >
        {id ? <Button onClick={this.editProject}>编辑</Button> :
        <Button type="primary" onClick={this.createProject}>创建</Button>}
        <Form>
          <Row>
            <Col>
              <Col className="venture_container_lable" span={4}>
              项目名称
              </Col>
              <Col span={20}>
                <FormItem className="venture_container_form" >
                  {getFieldDecorator('projectName', {
                     initialValue: `${record.projectName || ''}`
                    })(<Input />)}
                </FormItem>
              </Col>
            </Col>
            <Col>
              <Col className="venture_container_lable" span={4}>
              项目所属一级学科
              </Col>
              <Col span={20}>
                <FormItem className="venture_container_form" >
                  {getFieldDecorator('projectType', {
                     initialValue: `${record.projectType || ''}`
                    })(<Input />)}

                </FormItem>
              </Col>
            </Col>
            <Col>
              <Col className="venture_container_lable" span={4}>
              指导老师
              </Col>
              <Col span={20}>
                <FormItem className="venture_container_form" >
                  {getFieldDecorator('instructor', {
                     initialValue: `${record.instructor || ''}`
                    })(<Input />)}
                </FormItem>
              </Col>
            </Col>
            <Col>
              <Col className="venture_container_lable" span={4}>
              企业导师
              </Col>
              <Col span={20}>
                <FormItem className="venture_container_form" >
                  {getFieldDecorator('businessMentor', {
                     initialValue: `${record.businessMentor || ''}`
                    })(<Input />)}
                </FormItem>
              </Col>
            </Col>
            <Col>
              <Col className="venture_container_lable" span={4}>
              单位
              </Col>
              <Col span={20}>
                <FormItem className="venture_container_form" >
                  {getFieldDecorator('unit', {
                     initialValue: `${record.unit || ''}`
                    })(<Input />)}
                </FormItem>
              </Col>
            </Col>
            <Col>
              <Col className="venture_container_lable" span={4}>
              职称\职务
              </Col>
              <Col span={20}>
                <FormItem className="venture_container_form" >
                  {getFieldDecorator('title', {
                     initialValue: `${record.title || ''}`
                    })(<Input />)}
                </FormItem>
              </Col>
            </Col>
          </Row>
          <Row>
            <Col className="venture_container_lable" >
              产品介绍
            </Col>
            <Col>
              <FormItem className="venture_container_form" >
                {getFieldDecorator('productDescription', {
                     initialValue: `${record.productDescription || ''}`
                    })(<TextArea autosize={{ minRows: 2, maxRows: 6 }} />)}
              </FormItem>
            </Col>

            <Col />
          </Row>

          <Row>
            <Col className="venture_container_lable" >
              产品技术水平
            </Col>
            <Col>
              <FormItem className="venture_container_form" >
                {getFieldDecorator('productTechnicalLevel', {
                     initialValue: `${record.productTechnicalLevel || ''}`
                    })(<TextArea autosize={{ minRows: 2, maxRows: 6 }} />)}
              </FormItem>
            </Col>

            <Col />
          </Row>

          <Row>
            <Col className="venture_container_lable" >
              产品的竞争优势
            </Col>
            <Col>
              <FormItem className="venture_container_form" >
                {getFieldDecorator('productCompetitive', {
                     initialValue: `${record.productCompetitive || ''}`
                    })(<TextArea autosize={{ minRows: 2, maxRows: 6 }} />)}
              </FormItem>
            </Col>
          </Row>


          <Row>
            <Col className="venture_container_lable" >
              先进性和独特性
            </Col>
            <Col>
              <FormItem className="venture_container_form" >
                {getFieldDecorator('advanced', {
                     initialValue: `${record.advanced || ''}`
                    })(<TextArea autosize={{ minRows: 2, maxRows: 6 }} />)}
              </FormItem>
            </Col>
          </Row>


          <Row>
            <Col className="venture_container_lable" >
              产品的新颖性
            </Col>
            <Col>
              <FormItem className="venture_container_form" >
                {getFieldDecorator('noveltyProducts', {
                     initialValue: `${record.noveltyProducts || ''}`
                    })(<TextArea autosize={{ minRows: 2, maxRows: 6 }} />)}
              </FormItem>
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
