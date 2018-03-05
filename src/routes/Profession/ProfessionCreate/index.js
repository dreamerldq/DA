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
    this.editProfession = this.editProfession.bind(this)
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
  editProfession() {
    const { dispatch } = this.props
    const { getFieldsValue } = this.props.form
    const self = this
    const value = getFieldsValue()
    dispatch({ type: 'professionCreate/editProfessionInfo', payload: value })
  }
  render() {
    const { form, dispatch, professionCreate } = this.props
    const { getFieldDecorator, getFieldValue } = form;
    const { profession, id } = professionCreate
    return (
      <div className="profession_create_container" >
        <Form>
          <Row>
            <Col span={4} className="registered_container_lable">
              专业名称
            </Col>
            <Col span={20}>
              <FormItem>
                {getFieldDecorator('professionName', {
                     initialValue: `${profession.professionName || ''}`
                    })(<Input />)}
              </FormItem>
            </Col>
          </Row>
          <Row>
            <Col span={4} className="registered_container_lable">
              专业介绍
            </Col>
            <Col span={20}>
              <FormItem>
                {getFieldDecorator('professionIntroduction', {
                    initialValue: `${profession.professionIntroduction || ''}`
                    })(<TextArea autosize={{ minRows: 2, maxRows: 6 }} />)}
              </FormItem>
            </Col>
          </Row>
          <Row>
            <Col span={4} className="registered_container_lable">
              培养定位及目标
            </Col>
            <Col span={20}>
              <FormItem>
                {getFieldDecorator('trainingPositioning', {
                    initialValue: `${profession.trainingPositioning || ''}`
                    })(<TextArea autosize={{ minRows: 2, maxRows: 6 }} />)}
              </FormItem>
            </Col>
          </Row>
          <Row>
            <Col span={4} className="registered_container_lable">
              师资力量
            </Col>
            <Col span={20}>
              <FormItem>
                {getFieldDecorator('faculty', {
                    initialValue: `${profession.faculty || ''}`
                    })(<TextArea autosize={{ minRows: 2, maxRows: 6 }} />)}
              </FormItem>
            </Col>
          </Row>
          <Row>
            <Col span={4} className="registered_container_lable">
              专业优势
            </Col>
            <Col span={20}>
              <FormItem>
                {getFieldDecorator('professionalAdvantage', {
                    initialValue: `${profession.professionalAdvantage || ''}`
                    })(<TextArea autosize={{ minRows: 2, maxRows: 6 }} />)}
              </FormItem>
            </Col>
          </Row>
          <Row>
            <Col span={4} className="registered_container_lable">
              专业特色
            </Col>
            <Col span={20}>
              <FormItem>
                {getFieldDecorator('professionalFeatures', {
                    initialValue: `${profession.professionalFeatures || ''}`
                    })(<TextArea autosize={{ minRows: 2, maxRows: 6 }} />)}
              </FormItem>
            </Col>
          </Row>
        </Form>
        {id ? <Button style={{ width: '100%', marginTop: '30px' }} type="primary" onClick={this.editProfession}>编辑</Button> :
        <Button style={{ width: '100%', marginTop: '30px' }} type="primary" onClick={this.createProfession}>创建</Button>}
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
