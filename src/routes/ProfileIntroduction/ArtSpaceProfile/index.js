import React from 'react';
import { Menu, Icon, List, Spin } from 'antd';
import { connect } from 'dva';
import _ from 'lodash';
import RightSide from '../../RightSide'
import AddBackgroundImage from '../../../components/BackgroundImage'

const ArtSpaceProfile = ({ dispatch, profileIntroduction }) => {
  const { newsList, loading } = profileIntroduction
  const news = _.find(newsList, { title: '艺创空间简介' });
  return (
    <div className="contentDetail_container">
      <div className="contentDetail_content">
        <h2 style={{ width: '8em' }} className="globalTitle">艺创空间简介</h2>
        <div className="profileIntroductionContainer">
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
export default AddBackgroundImage('01')(connect(mapStateToProps)(ArtSpaceProfile));
