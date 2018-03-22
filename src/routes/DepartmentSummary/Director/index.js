import React from 'react';
import { connect } from 'dva';
import _ from 'lodash'

const Director = ({ profileIntroduction }) => {
  const { newsList, loading } = profileIntroduction
  const news = _.find(newsList, { title: '主任寄语' });
  return (
    <div>
      <h2 className="globalTitle">主任寄语</h2>
      <div className="departmentSummaryContent" dangerouslySetInnerHTML={{ __html: (news || {}).content }} />
    </div>
  )
}

const mapStateToProps = ({ newsNoticeDetail, profileIntroduction }) => ({
  newsNoticeDetail, profileIntroduction
})
export default connect(mapStateToProps)(Director)
