import React from 'react';
import { Menu, Icon, List } from 'antd';
import { connect } from 'dva';
import _ from 'lodash';
import RightSide from '../../RightSide'
import './index.css'

const FacultyProfiles = ({ dispatch, profileIntroduction }) => {
  const { newsList } = profileIntroduction
  console.log('OOOO', newsList)
  const news = _.find(newsList, { title: '师资概况' });
  console.log('LLL', news)
  return (
    <div className="contentDetail_container">
      <div className="contentDetail_content">
        <h3 className="contentDetail_introduction">专业简介</h3>
        <div className="newsDetailContainer">
          <div style={{ width: '100%' }} dangerouslySetInnerHTML={{ __html: (news || {}).content }} />
        </div>
      </div>
      <RightSide />
    </div>

  )
}
FacultyProfiles.propTypes = {
};
const mapStateToProps = ({ newsNoticeDetail, profileIntroduction }) => ({
  newsNoticeDetail, profileIntroduction
})
export default connect(mapStateToProps)(FacultyProfiles);
