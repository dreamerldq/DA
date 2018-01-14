import React from 'react';
import { Menu, Icon, List } from 'antd';
import { connect } from 'dva';
import { Link } from 'dva/router'
import _ from 'lodash';
import Header from '../components/Header'
import { Row, Col } from 'antd/lib/grid';

const { Item } = List
const data = [
  {
    id: '1',
    title: '数字艺术系师生观看十九大开幕会 工作报告',
    time: '2017-01-01'
  },
  {
    id: '2',
    title: '数字艺术系师生观看十九大开幕会 工作报告',
    time: '2017-01-01'
  },
  {
    id: '3',
    title: '数字艺术系师生观看十九大开幕会 工作报告',
    time: '2017-01-01'
  },
  {
    id: '4',
    title: '数字艺术系师生观看十九大开幕会 工作报告',
    time: '2017-01-01'
  },
  {
    id: '5',
    title: '数字艺术系师生观看十九大开幕会 工作报告',
    time: '2017-01-01'
  },
  {
    id: '6',
    title: '数字艺术系师生观看十九大开幕会 工作报告',
    time: '2017-01-01'
  }
];
const renderItem = (item) => {
  return (
    <Item>
      <Row style={{ width: '100%' }}>
        <Col span={22}>
          <Link style={{ color: 'black' }} to={`/NewsNotice/detail/${item.id}`}>{item.title}</Link>
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
        dataSource={data}
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
