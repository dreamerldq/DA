import React from 'react';
import { connect } from 'dva';
import _ from 'lodash';
import { Tabs } from 'antd';
import DigitalMediaArtTeam from '../DigitalMediaArtTeam'
import DigitalMediaTechnologyTeam from '../DigitalMediaTechnologyTeam'
import FilmPhotographyTeam from '../FilmPhotographyTeam'
import VisualCommunicationDesignTeam from '../VisualCommunicationDesignTeam'
import AnimationTeam from '../AnimationTeam'
import './index.css'

const { TabPane } = Tabs;
const callback = (key) => {
}
const TeachersDetails = ({ dispatch, departmentProfile }) => {
  return (
    <div className="TeachersDetails">
      <Tabs defaultActiveKey="1" onChange={callback}>
        <TabPane tab="数字媒体艺术" key="1"><DigitalMediaArtTeam /></TabPane>
        <TabPane tab="数字媒体技术" key="2"><DigitalMediaTechnologyTeam /></TabPane>
        <TabPane tab="影视摄影与制作" key="3"><FilmPhotographyTeam /></TabPane>
        <TabPane tab="视觉传达设计" key="4"><VisualCommunicationDesignTeam /></TabPane>
        <TabPane tab="动画" key="5"><AnimationTeam /></TabPane>
      </Tabs>
    </div>
  )
}
TeachersDetails.propTypes = {
};
export default connect()(TeachersDetails);
