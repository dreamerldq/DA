import React from 'react';
import { connect } from 'dva';
import _ from 'lodash'

const Organization = ({ profileIntroduction }) => {
  const { newsList, loading } = profileIntroduction
  const news = _.find(newsList, { title: '组织机构' });
  return (
    <div>
      <h3>组织机构</h3>
      <div className="departmentSummaryContent" dangerouslySetInnerHTML={{ __html: (news || {}).content }} />
    </div>
  )
}
const mapStateToProps = ({ newsNoticeDetail, profileIntroduction }) => ({
  newsNoticeDetail, profileIntroduction
})
export default connect(mapStateToProps)(Organization)
