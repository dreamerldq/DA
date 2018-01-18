import React from 'react';
import { Menu, Icon, List } from 'antd';
import { connect } from 'dva';
import { Link } from 'dva/router'
import _ from 'lodash';
import { Row, Col } from 'antd/lib/grid';
import Header from '../components/Header'
import { newsTitle } from '../data'

const { Item } = List
const renderItem = (item) => {
  return (
    <Item>
      <Row style={{ width: '100%' }}>
        <Col span={22}>
          <Link style={{ color: 'black' }} to={`/News/detail/${item.id}`}>{item.title}</Link>
        </Col>
        <Col span={2}>
          {item.time}
        </Col>
      </Row>

    </Item>
  )
}
const NewsNotice = ({ dispatch, newsNotice }) => {
  return (
    <div>
      <List
        header={<div>新闻通知</div>}
        footer={<div>Footer</div>}
        bordered
        dataSource={newsTitle}
        renderItem={renderItem}
      />
    </div>

  )
}
NewsNotice.propTypes = {
};
const mapStateToProps = ({ newsNotice }) => ({
  newsNotice
});
export default connect(mapStateToProps)(NewsNotice);
