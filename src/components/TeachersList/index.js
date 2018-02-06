import React from 'react';
import { connect } from 'dva';
import { routerRedux } from 'dva/router';
import _ from 'lodash';
import { Tabs } from 'antd';
import './index.css'

const { TabPane } = Tabs;

const TeachersList = ({ dispatch, teacherList }) => {
  const { key } = teacherList
  const callback = (tabkey) => {
    dispatch(routerRedux.push({ pathname: `/${tabkey}` }))
  }
  return (
    <div className="TeachersDetails">
      <Tabs defaultActiveKey={key} onChange={callback}>
        <TabPane tab="数字媒体技术" key="DigitalMediaTechnologyTeam" />
        <TabPane tab="数字媒体艺术" key="DigitalMediaArtTeam" />
        <TabPane tab="影视摄影与制作" key="FilmPhotographyTeam" />
        <TabPane tab="视觉传达设计" key="VisualCommunicationDesignTeam" />
        <TabPane tab="动画" key="AnimationTeam" />
      </Tabs>
    </div>
  )
}
const mapStateToProps = ({ teacherList }) => {
  return {
    teacherList
  }
}
export default connect(mapStateToProps)(TeachersList);
