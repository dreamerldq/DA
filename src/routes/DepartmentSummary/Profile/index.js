import React from 'react';
import { connect } from 'dva';
import _ from 'lodash'
import './index.css'

const Profile = ({ profileIntroduction }) => {
  const { newsList, loading } = profileIntroduction
  const news = _.find(newsList, { title: '系部简介' });
  return (
    <div>
      <h2 className="globalTitle">系部简介</h2>
      <div className="departmentSummaryContent" dangerouslySetInnerHTML={{ __html: (news || {}).content }} />
    </div>
  )
}
const mapStateToProps = ({ newsNoticeDetail, profileIntroduction }) => ({
  newsNoticeDetail, profileIntroduction
})
export default connect(mapStateToProps)(Profile)
