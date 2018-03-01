import React from 'react';
import { Menu, Icon, List, Spin, Modal, Button } from 'antd';
import { connect } from 'dva';
import { Link, routerRedux } from 'dva/router'
import _ from 'lodash';
import { Row, Col } from 'antd/lib/grid';

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
        <div>
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

                    <Link to={`/ProfessionIntroduction/${item.professionEnglishName}`}>{item.professionName}</Link>
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
