import React from 'react';
import { Icon, Button, Modal, Form, Input, Col, Row, Table, List } from 'antd';
import { connect } from 'dva';
import { routerRedux } from 'dva/router';
import _ from 'lodash';
import './index.css'

const { Item } = List
const FormItem = Form.Item
class StudioIntroductionListCreate extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      visible: false,
      type: null
    }
    this.handleCancel = this.handleCancel.bind(this)
    this.handleOk = this.handleOk.bind(this)
    this.createStudio = this.createStudio.bind(this)
  }
  showModal(dispatch, type) {
    this.setState({
      visible: true,
      type
    })
  }
  createStudio() {
    const { dispatch } = this.props
    const { getFieldsValue } = this.props.form
    const value = getFieldsValue()
    const params = {
      address: value.address,
      introduction: value.introduction,
      principal: value.principal,
      studioName: value.studioName
    }
    dispatch({ type: 'studioIntroductionListCreate/createStudioInfo', payload: params })
  }
  handleCancel() {
    this.setState({
      visible: false
    })
  }
  handleOk(dispatch, getFieldValue) {
    const value = getFieldValue(this.state.type)
    dispatch({ type: 'studioIntroductionListCreate/addInfo', payload: { type: this.state.type, value } })
    this.setState({
      visible: false
    })
  }
  render() {
    const { form, dispatch, studioIntroductionListCreate } = this.props
    const { getFieldDecorator, getFieldValue } = form;
    const { studioInfo: { name, research, course } } = studioIntroductionListCreate
    return (
      <div className="registered_container" >
        <Button onClick={this.createStudio}>创建</Button>
        <Form>
          <Row>
            <Col>
              <Col className="registered_container_lable" span={4}>
                    工作室名称
              </Col>
              <Col span={20}>
                <FormItem className="registered_container_form" >
                  {getFieldDecorator('studioName', {
                    })(<Input />)}
                </FormItem>
              </Col>
            </Col>
            <Col>
              <Col className="registered_container_lable" span={4}>
                    负责人
              </Col>
              <Col span={20}>
                <FormItem className="registered_container_form" >
                  {getFieldDecorator('principal', {
                    })(<Input />)}
                </FormItem>
              </Col>
            </Col>
            <Col>
              <Col className="registered_container_lable" span={4}>
                    工作室位置
              </Col>
              <Col span={20}>
                <FormItem className="registered_container_form" >
                  {getFieldDecorator('address', {
                    })(<Input />)}
                </FormItem>
              </Col>
            </Col>
            <Col>
              <Col className="registered_container_lable" span={4}>
                    工作室介绍
              </Col>
              <Col span={20}>
                <FormItem className="registered_container_form" >
                  {getFieldDecorator('introduction', {
                    })(<Input />)}
                </FormItem>
              </Col>
            </Col>
          </Row>

          <Row gutter={16}>
            <Col span={8}>
              <div>
                <span>工作室成员</span>
                <List
                  header={<Button onClick={this.showModal.bind(this, dispatch, 'name')} icon="plus" type="primary">添加</Button>}
                  bordered
                  dataSource={name}
                  renderItem={(item) => {
                      return (
                        <Item>
                          <Row style={{ width: '100%' }}>
                            <Col span={22}>
                              {item}
                            </Col>
                          </Row>
                        </Item>
                      )
                    }}
                />


              </div>
            </Col>
            <Col span={8}>
              <div>
                <span>工作室承担课程</span>
                <List
                  header={<Button onClick={this.showModal.bind(this, dispatch, 'course')} icon="plus" type="primary">添加</Button>}
                  bordered
                  dataSource={course}
                  renderItem={(item) => {
                      return (
                        <Item>
                          <Row style={{ width: '100%' }}>
                            <Col span={22}>
                              {item}
                            </Col>
                          </Row>
                        </Item>
                      )
                    }}
                />

              </div>
            </Col>
            <Col span={8}>
              <div>
                <span>工作室承担项目方向</span>
                <List
                  header={<Button onClick={this.showModal.bind(this, dispatch, 'research')} icon="plus" type="primary">添加</Button>}
                  bordered
                  dataSource={research}
                  renderItem={(item) => {
                      return (
                        <Item>
                          <Row style={{ width: '100%' }}>
                            <Col span={22}>
                              {item}
                            </Col>
                          </Row>
                        </Item>
                      )
                    }}
                />

              </div>
            </Col>
          </Row>


          <Modal
            visible={this.state.visible}
            title="添加"
            onOk={this.handleOk.bind(this, dispatch, getFieldValue)}
            onCancel={this.handleCancel}
          >
            <span>{`添加${this.state.type}`}</span>
            <FormItem className="registered_container_form" >
              {getFieldDecorator(`${this.state.type}`, {
           })(<Input />)}
            </FormItem>

          </Modal>
        </Form>
      </div>


    )
  }
}
const mapStateToProps = ({ studioIntroductionListCreate }) => {
  return {
    studioIntroductionListCreate
  }
}
export default Form.create()(connect(mapStateToProps)(StudioIntroductionListCreate))
