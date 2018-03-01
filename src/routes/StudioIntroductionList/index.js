import React from 'react';
import { Menu, Icon, List, Spin, Modal, Button } from 'antd';
import { connect } from 'dva';
import { Link, routerRedux } from 'dva/router'
import _ from 'lodash';
import { Row, Col } from 'antd/lib/grid';
import './index.css'

const { Item } = List

class StudioIntroductionList extends React.Component {
  constructor({ props }) {
    super(props);
  }
  render() {
    const { dispatch, profileManagement } = this.props;
    const { studio } = profileManagement
    return (
      <Spin spinning={false}>
        <div className="studio_container">
          <List
            header={
              <span>工作室列表</span>
            }
            dataSource={studio}
            bordered
            renderItem={(item) => {
              return (
                <Item>
                  <Row style={{ width: '100%' }}>
                    <Link to={`/StudioIntroduction/${item.id}`}>{item.studioName}</Link>
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
export default connect(mapStateToProps)(StudioIntroductionList);
