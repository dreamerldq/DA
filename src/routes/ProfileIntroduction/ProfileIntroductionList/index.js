import React from 'react';
import { Menu, Icon, List, Spin, Modal, Button } from 'antd';
import { connect } from 'dva';
import { Link, routerRedux } from 'dva/router'
import _ from 'lodash';
import { Row, Col } from 'antd/lib/grid';
import './index.css'

const { Item } = List

class ProfileIntroductionList extends React.Component {
  constructor({ props }) {
    super(props);
  }
  render() {
    const { dispatch, profileManagement } = this.props;
    const { introduction } = profileManagement
    return (
      <Spin spinning={false}>
        <div className="introduction_container">
          <List
            header={
              <span>简介</span>
            }
            dataSource={introduction}
            bordered
            renderItem={(item) => {
              return (
                <Item>
                  <Row style={{ width: '100%' }}>
                    <Link to={`/StudioIntroduction/${item.id}`}>{item.title}</Link>
                  </Row>

                </Item>
              )
            }}
          />
        </div>
      </Spin>

    )
  }
}
const mapStateToProps = ({ profileManagement }) => ({
  profileManagement
});
export default connect(mapStateToProps)(ProfileIntroductionList);
