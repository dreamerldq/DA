import React from 'react';
import { Menu, Icon, List, Spin, Modal, Button } from 'antd';
import { connect } from 'dva';
import { Link, routerRedux } from 'dva/router'
import _ from 'lodash';
import { Row, Col } from 'antd/lib/grid';
import './index.css'

const { Item } = List

class ManageStudioList extends React.Component {
  constructor({ props }) {
    super(props);
    this.create = this.create.bind(this)
  }
  deleteStudio(id) {
    const { dispatch } = this.props
    dispatch({ type: 'studioIntroductionListCreate/deleteStudioInfo', payload: id })
  }
  create() {
    const { dispatch } = this.props
    dispatch(routerRedux.push({
      pathname: '/StudioIntroductionCreate'
    }))
  }
  render() {
    const { dispatch, profileManagement } = this.props;
    const { studio } = profileManagement
    return (
      <Spin spinning={false}>
        <div className="studio_container">
          <List
            header={
              <div style={{ position: 'relative' }}>
                <span>工作室列表</span>
                <Button
                  type="primary"
                  style={{ position: 'absolute', right: 0, top: '-5px' }}
                  onClick={this.create}
                >
                创建
                </Button>
              </div>
            }
            dataSource={studio}
            bordered
            renderItem={(item) => {
              return (
                <Item>
                  <Row style={{ width: '100%' }}>
                    <Link to={`/StudioIntroduction/${item.id}`}>{item.studioName}</Link>
                    <span style={{ marginLeft: '30px' }}>
                      <Link to={`/StudioIntroductionCreate/${item.id}`}>编辑</Link>
                      <a style={{ marginLeft: '5px' }} onClick={this.deleteStudio.bind(this, item.id)}>删除</a>
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
export default connect(mapStateToProps)(ManageStudioList);
