import React from 'react';
import { Menu, Icon, List, Spin, Modal, Button } from 'antd';
import { connect } from 'dva';
import { Link, routerRedux } from 'dva/router'
import _ from 'lodash';
import { Row, Col } from 'antd/lib/grid';
import './index.css'

const { Item } = List

class VentureProjectList extends React.Component {
  constructor({ props }) {
    super(props);
  }
  render() {
    const { dispatch, profileManagement } = this.props;
    const { ventureProject } = profileManagement
    return (


      <Spin spinning={false}>
        <div className="ventureProject">
          <List
            header={
              <span>双创项目</span>
            }
            dataSource={ventureProject}
            bordered
            renderItem={(item) => {
              return (
                <Item>
                  <Row style={{ width: '100%' }}>

                    <Link to={`/VentureProject/detail/${item.id}`}>{item.projectName}</Link>
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
export default connect(mapStateToProps)(VentureProjectList);
