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
    console.log('AAAAA', id)
    dispatch({ type: 'newsNotice/showModal' })
    dispatch({ type: 'newsNotice/saveID', payload: id })
  }
  handleOk(dispatch) {
    dispatch({ type: 'newsNotice/deleteNewsRecord' })
  }
  handleCancel(dispatch) {
    dispatch({ type: 'newsNotice/hiddenModal' })
  }

  render() {
    const { dispatch, newsNotice } = this.props;
    const { newsList, loading, modalVisible } = newsNotice
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
                    <Col><a onClick={this.deleteNews.bind(this, item.id, dispatch)}>删除</a></Col>
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
const mapStateToProps = ({ newsNotice }) => ({
  newsNotice
});
export default connect(mapStateToProps)(NewsNotice);
