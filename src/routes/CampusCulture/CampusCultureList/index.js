import React from 'react';
import { Menu, Icon, List, Spin, Modal } from 'antd';
import { connect } from 'dva';
import { Link } from 'dva/router'
import _ from 'lodash';
import { Row, Col } from 'antd/lib/grid';
import './index.css'

const { Item } = List

class CampusCultureList extends React.Component {
  constructor({ props }) {
    super(props);
  }
  deleteNews(id, dispatch) {
    const self = this
    dispatch({ type: 'campusCulture/showModal' })
    dispatch({ type: 'campusCulture/saveID', payload: id })
  }
  handleOk(dispatch) {
    const self = this
    dispatch({ type: 'campusCulture/deleteNewsRecord' })
  }
  handleCancel(dispatch) {
    const self = this
    dispatch({ type: 'campusCulture/hiddenModal' })
  }

  render() {
    const { dispatch, campusCulture, currentUser } = this.props;
    const { allRecord, loading, modalVisible } = campusCulture
    const { user } = currentUser
    return (


      <Spin spinning={loading}>
        <div className="campus_container">
          <List
            header={<div>校园文化列表</div>}
            footer={<div>Footer</div>}
            bordered
            dataSource={allRecord}
            renderItem={(item) => {
              return (
                <Item>
                  <Row style={{ width: '100%' }}>
                    <Col span={22}>
                      <Link style={{ color: 'black' }} to={`/CampusCulture/${item.id}`}>{item.title}</Link>
                    </Col>
                    <Col span={2}>
                      {item.time}
                    </Col>
                    {user && <Col><a onClick={this.deleteNews.bind(this, item.id, dispatch)}>删除</a></Col>}
                  </Row>

                </Item>
              )
            }}
          />
        </div>
        <Modal
          title="删除"
          visible={modalVisible}
          onOk={this.handleOk.bind(this, dispatch)}
          onCancel={this.handleCancel.bind(this, dispatch)}
        >
          <p>您确认删除此条新闻通知？</p>
        </Modal>
      </Spin>

    )
  }
}
const mapStateToProps = ({ campusCulture, currentUser }) => ({
  campusCulture, currentUser
});
export default connect(mapStateToProps)(CampusCultureList);
