import React from 'react';
import { Menu, Icon, List } from 'antd';
import { connect } from 'dva';
import _ from 'lodash';
import RightSide from '../../RightSide'

const ArtSpaceProfile = ({ dispatch, profileIntroduction }) => {
  const { newsList } = profileIntroduction
  const news = _.find(newsList, { title: '艺创空间简介' });
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
ArtSpaceProfile.propTypes = {
};
const mapStateToProps = ({ newsNoticeDetail, profileIntroduction }) => ({
  newsNoticeDetail, profileIntroduction
})
export default connect(mapStateToProps)(ArtSpaceProfile);
