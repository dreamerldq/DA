import React from 'react';
import { connect } from 'dva';
import { Tabs } from 'antd';
import { routerRedux } from 'dva/router';
import _ from 'lodash';
import StudioIntroductionList from '../StudioIntroductionList';
import ProfessionList from '../Profession/ProfessionList';

import './index.css'

const { TabPane } = Tabs;

const ProfileManagement = ({ dispatch, profileManagement }) => {
  const callback = (key) => {
    console.log('KEY', key)
    dispatch({ type: 'profileManagement/changeTab', payload: key })
  }
  return (
    <div className="ProfileManagement">
      <Tabs className="ProfileManagementTab" defaultActiveKey="studio" onChange={callback}>
        <TabPane tab="工作室" key="studio" >
          <StudioIntroductionList />
        </TabPane>
        <TabPane tab="专业" key="profession" >
          <ProfessionList />
        </TabPane>
      </Tabs>
    </div>
  )
}
const mapStateToProps = ({ profileManagement }) => {
  return {
    profileManagement
  }
}
export default connect(mapStateToProps)(ProfileManagement);
