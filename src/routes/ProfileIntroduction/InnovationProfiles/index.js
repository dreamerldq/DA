import React from 'react';
import { Menu, Icon, List, Spin } from 'antd';
import { connect } from 'dva';
import _ from 'lodash';
import RightSide from '../../RightSide'

const InnovationProfiles = ({ dispatch, profileIntroduction }) => {
  const { newsList, loading } = profileIntroduction
  const news = _.find(newsList, { title: '创新创业概况' });
  return (
    <div className="contentDetail_container">
      <div className="contentDetail_content">
      <h2  style={{width:'10em'}} className="globalTitle">创新创业概况</h2>
        <div className="profileIntroductionContainer">
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
