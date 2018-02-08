import React from 'react';
import { Modal, Input, Col, Row, Form } from 'antd';
import { connect } from 'dva';
import _ from 'lodash';
import { routerRedux } from 'dva/router';

const FormItem = Form.Item
const createModal = ({ form, type, visible }) => {
  const { getFieldDecorator } = form;
  return (
    <Modal
      visible={visible}
      title="添加"
      onOk={this.handleOk}
      onCancel={this.handleCancel}
    >
      <FormItem className="registered_container_form" >
        {getFieldDecorator(`${type}`, {
   })(<Input />)}
      </FormItem>

    </Modal>
  )
}
export default createModal
