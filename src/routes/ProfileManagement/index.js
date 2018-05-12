import React from 'react';
import { connect } from 'dva';
import { Tabs } from 'antd';
import { routerRedux } from 'dva/router';
import _ from 'lodash';
import ManageStudioList from '../ManageStudioList';
import ProfessionList from '../Profession/ProfessionList';
import ManageVentureProjectList from '../VentureProject/ManageVentureProjectList';
import ProfileIntroductionList from '../ProfileIntroduction/ProfileIntroductionList'
import AddBackgroundImage from '../../components/BackgroundImage'

import './index.css'

const { TabPane } = Tabs;

const ProfileManagement = ({ dispatch, profileManagement }) => {
  const callback = (key) => {
    dispatch({ type: 'profileManagement/changeTab', payload: key })
  }
  return (
    <div className="ProfileManagement">
      <Tabs className="ProfileManagementTab" defaultActiveKey="studio" onChange={callback}>
        <TabPane tab="工作室" key="studio" >
          <ManageStudioList />
        </TabPane>
        <TabPane tab="专业" key="profession" >
          <ProfessionList />
        </TabPane>
        <TabPane tab="双创项目" key="ventureProject" >
          <ManageVentureProjectList />
        </TabPane>
        <TabPane tab="简介" key="introduction" >
          <ProfileIntroductionList />
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
export default AddBackgroundImage('01')(connect(mapStateToProps)(ProfileManagement));
