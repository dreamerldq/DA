import React from 'react';
import { Menu, Icon, List } from 'antd';
import { connect } from 'dva';
import _ from 'lodash';
import RightSide from '../../RightSide'
import './index.css'

const InnovationProfiles = ({ dispatch, profileIntroduction }) => {
  const { newsList } = profileIntroduction
  const news = _.find(newsList, { title: '创新创业概况' });
  return (
    <div className="contentDetail_container">
      <div className="contentDetail_content">
        <div className="newsDetailContainer">
          <div style={{ width: '100%' }} dangerouslySetInnerHTML={{ __html: (news || {}).content }} />
        </div>
      </div>
      <RightSide />
    </div>

  )
}
InnovationProfiles.propTypes = {
};
const mapStateToProps = ({ newsNoticeDetail, profileIntroduction }) => ({
  newsNoticeDetail, profileIntroduction
})
export default connect(mapStateToProps)(InnovationProfiles);
