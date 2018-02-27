import React from 'react';
import { Menu, Icon, List, Spin, Modal } from 'antd';
import { connect } from 'dva';
import { Link } from 'dva/router'
import _ from 'lodash';
import { Row, Col } from 'antd/lib/grid';
import Header from '../components/Header'

const { Item } = List

class NewsNotice extends React.Component {
  constructor({ props }) {
    super(props);
  }
  deleteNews(id, dispatch) {
    const self = this
    dispatch({ type: 'newsNotice/showModal' })
    dispatch({ type: 'newsNotice/saveID', payload: id })
  }
  handleOk(dispatch) {
    const self = this
    dispatch({ type: 'newsNotice/deleteNewsRecord' })
  }
  handleCancel(dispatch) {
    const self = this
    dispatch({ type: 'newsNotice/hiddenModal' })
  }

  render() {
    const { dispatch, newsNotice, currentUser } = this.props;
    const { newsList, loading, modalVisible } = newsNotice
    const { user } = currentUser
    return (


      <Spin spinning={loading}>
        <div>
          <List
            header={<div>新闻通知</div>}
            footer={<div>Footer</div>}
            bordered
            dataSource={newsList}
            renderItem={(item) => {
              return (
                <Item>
                  <Row style={{ width: '100%' }}>
                    <Col span={22}>
                      <Link style={{ color: 'black' }} to={`/News/detail/${item.id}`}>{item.title}</Link>
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
const mapStateToProps = ({ newsNotice, currentUser }) => ({
  newsNotice,
  currentUser
});
export default connect(mapStateToProps)(NewsNotice);
