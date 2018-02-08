import React from 'react';
import { Icon, Button, Modal, Form, Input, Col, Row, Table, List } from 'antd';
import { connect } from 'dva';
import { routerRedux } from 'dva/router';
import _ from 'lodash';
import './index.css'

const { TextArea } = Input;
const { Item } = List
const FormItem = Form.Item
class ProfessionCreate extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      visible: false,
      type: null
    }
    this.createProfession = this.createProfession.bind(this)
  }
  showModal(dispatch, type) {
    this.setState({
      visible: true,
      type
    })
  }
  createProfession() {
    const { dispatch } = this.props
    const { getFieldsValue } = this.props.form
    const self = this
    const value = getFieldsValue()
    dispatch({ type: 'professionCreate/createProfessionInfo', payload: value })
  }
  render() {
    const { form, dispatch, professionCreate } = this.props
    const { getFieldDecorator, getFieldValue } = form;
    return (
      <div className="registered_container" >
        <Button onClick={this.createProfession}>创建</Button>
        <Form>
          <Row>
            <Col>
              <Col className="registered_container_lable" span={4}>
              专业名称
              </Col>
              <Col span={20}>
                <FormItem className="registered_container_form" >
                  {getFieldDecorator('professionName', {
                    })(<Input />)}
                </FormItem>
              </Col>
            </Col>
            <Col>
              <Col className="registered_container_lable" span={4}>
              专业介绍
              </Col>
              <Col span={20}>
                <FormItem className="registered_container_form" >
                  {getFieldDecorator('professionIntroduction', {
                    })(<TextArea autosize={{ minRows: 1, maxRows: 6 }} />)}
                </FormItem>
              </Col>
            </Col>
            <Col>
              <Col className="registered_container_lable" span={4}>
              培养定位及目标
              </Col>
              <Col span={20}>
                <FormItem className="registered_container_form" >
                  {getFieldDecorator('trainingPositioning', {
                    })(<TextArea autosize={{ minRows: 1, maxRows: 6 }} />)}
                </FormItem>
              </Col>
            </Col>
            <Col>
              <Col className="registered_container_lable" span={4}>
              师资力量
              </Col>
              <Col span={20}>
                <FormItem className="registered_container_form" >
                  {getFieldDecorator('faculty', {
                    })(<TextArea autosize={{ minRows: 1, maxRows: 6 }} />)}
                </FormItem>
              </Col>
            </Col>
            <Col>
              <Col className="registered_container_lable" span={4}>
              专业优势
              </Col>
              <Col span={20}>
                <FormItem className="registered_container_form" >
                  {getFieldDecorator('professionalAdvantage', {
                    })(<TextArea autosize={{ minRows: 1, maxRows: 6 }} />)}
                </FormItem>
              </Col>
            </Col>
            <Col>
              <Col className="registered_container_lable" span={4}>
              专业特色
              </Col>
              <Col span={20}>
                <FormItem className="registered_container_form" >
                  {getFieldDecorator('professionalFeatures', {
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
const mapStateToProps = ({ professionCreate }) => {
  return {
    professionCreate
  }
}
export default Form.create()(connect(mapStateToProps)(ProfessionCreate))
