import React from 'react';
import { Menu, Icon, List, Spin, Modal, Button } from 'antd';
import { connect } from 'dva';
import { Link, routerRedux } from 'dva/router'
import _ from 'lodash';
import { Row, Col } from 'antd/lib/grid';
import './index.css'

const { Item } = List

class ManageVentureProjectList extends React.Component {
  constructor({ props }) {
    super(props);
    this.create = this.create.bind(this)
  }
  deleteVentureProject(id) {
    const { dispatch } = this.props
    dispatch({ type: 'ventureProject/deleteVentureProject', payload: id })
  }
  create() {
    const { dispatch } = this.props
    dispatch(routerRedux.push({
      pathname: '/VentureProjectCreate'
    }))
  }
  render() {
    const { dispatch, profileManagement } = this.props;
    const { ventureProject } = profileManagement
    return (


      <Spin spinning={false}>
        <div className="ventureProject">
          <List
            header={
              <div style={{ position: 'relative' }}>
                <span>双创项目</span>
                <Button
                  type="primary"
                  style={{ position: 'absolute', right: 0, top: '-5px' }}
                  onClick={this.create}
                >
                创建
                </Button>
              </div>
            }
            dataSource={ventureProject}
            bordered
            renderItem={(item) => {
              return (
                <Item>
                  <Row style={{ width: '100%' }}>
                    <Link to={`/VentureProject/detail/${item.id}`}>{item.projectName}</Link>
                    <span style={{ marginLeft: '30px' }}>
                      <Link to={`/VentureProjectCreate/${item.id}`}>编辑</Link>
                      <a style={{ marginLeft: '5px' }} onClick={this.deleteVentureProject.bind(this, item.id)}>删除</a>
                    </span>
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
export default connect(mapStateToProps)(ManageVentureProjectList);
