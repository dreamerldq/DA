import React from 'react';
import { Menu, Icon, List, Spin, Modal, Button } from 'antd';
import { connect } from 'dva';
import { Link, routerRedux } from 'dva/router'
import _ from 'lodash';
import { Row, Col } from 'antd/lib/grid';
import './index.css'

const { Item } = List

class ProfessionList extends React.Component {
  constructor({ props }) {
    super(props);
  }
  render() {
    const { dispatch, profileManagement } = this.props;
    const { profession } = profileManagement
    return (


      <Spin spinning={false}>
        <div className="profession_container">
          <List
            header={
              <span>专业列表</span>
            }
            dataSource={profession}
            bordered
            renderItem={(item) => {
              return (
                <Item>
                  <Row style={{ width: '100%' }}>
                    <Col span={20}>
                      <Link to={`/ProfessionIntroduction/${item.professionEnglishName}`}>{item.professionName}</Link>
                    </Col>
                    <Col span={4}>
                      <Link to={`/ProfessionCreate/${item.professionEnglishName}`}>编辑</Link>
                    </Col>
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
export default connect(mapStateToProps)(ProfessionList);
