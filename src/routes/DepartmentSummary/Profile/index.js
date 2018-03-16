import React from 'react';
import { connect } from 'dva';
import _ from 'lodash'

const Profile = ({ profileIntroduction }) => {
  const { newsList, loading } = profileIntroduction
  const news = _.find(newsList, { title: '系部简介' });
  return (
    <div>
      <h3>系部简介</h3>
      <div className="departmentSummaryContent" dangerouslySetInnerHTML={{ __html: (news || {}).content }} />
    </div>
  )
}
const mapStateToProps = ({ newsNoticeDetail, profileIntroduction }) => ({
  newsNoticeDetail, profileIntroduction
})
export default connect(mapStateToProps)(Profile)
