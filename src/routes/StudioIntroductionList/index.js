import React from 'react';
import { Menu, Icon, List, Spin, Modal, Button } from 'antd';
import { connect } from 'dva';
import { Link, routerRedux } from 'dva/router'
import _ from 'lodash';
import { Row, Col } from 'antd/lib/grid';
import './index.css'
import AddBackgroundImage from '../../components/BackgroundImage'

const { Item } = List

class StudioIntroductionList extends React.Component {
  constructor({ props }) {
    super(props);
  }
  deleteStudio(id) {
    const { dispatch } = this.props
    dispatch({ type: 'studioIntroductionListCreate/deleteStudioInfo', payload: id })
  }
  render() {
    const { dispatch, studioIntroduction } = this.props;
    const { studio } = studioIntroduction
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
const mapStateToProps = ({ studioIntroduction }) => ({
  studioIntroduction
});
export default AddBackgroundImage('01')(connect(mapStateToProps)(StudioIntroductionList));
