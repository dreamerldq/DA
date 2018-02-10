import React from 'react';
import { Icon, Button, Modal, Form, Input, Col, Row, Table, List } from 'antd';
import { connect } from 'dva';
import { routerRedux } from 'dva/router';
import _ from 'lodash';
import './index.css'

const { Item } = List
const FormItem = Form.Item
class MultipleList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      visible: false,
      type: null
    }
    this.handleCancel = this.handleCancel.bind(this)
    this.handleOk = this.handleOk.bind(this)
  }
  showModal(type) {
    this.setState({
      visible: true,
      type
    })
  }
  handleCancel() {
    this.setState({
      visible: false
    })
  }
  handleOk() {
    const { dispatch } = this.props
    const { getFieldValue } = this.props.form
    const value = getFieldValue(this.state.type)
    dispatch({ type: 'registered/addInfo', payload: { type: this.state.type, value } })
    this.setState({
      visible: false
    })
  }
  render() {
    const {
      form, dispatch, registered, catagory
    } = this.props
    const { getFieldDecorator, getFieldValue } = form;
    const {
      staffInfo
    } = registered
    return (
      <div className="registered_container" >
        <Form>
          <Row gutter={16}>
            <Col span={8}>
              <div>
                <span>工作室成员</span>
                <List
                  header={<Button onClick={this.showModal.bind(this, `${catagory}`)} icon="plus" type="primary">添加</Button>}
                  bordered
                  dataSource={staffInfo[catagory]}
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
            onOk={this.handleOk}
            onCancel={this.handleCancel}
          >
            <span>{`添加${catagory}`}</span>
            <FormItem className="registered_container_form" >
              {getFieldDecorator(`${catagory}`, {
           })(<Input />)}
            </FormItem>

          </Modal>
        </Form>
      </div>


    )
  }
}
const mapStateToProps = ({ registered }) => {
  return {
    registered
  }
}
export default Form.create()(connect(mapStateToProps)(MultipleList))
