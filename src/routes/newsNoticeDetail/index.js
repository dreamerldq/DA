import React from 'react';
import { connect } from 'dva';
import { newsContainer, newsTitle } from '../../data'

const NewsNoticeDetail = ({ dispatch, newsNoticeDetail }) => {
  const { news } = newsNoticeDetail
  return (
    <div>
      <div dangerouslySetInnerHTML={{ __html: news.content }} />
    </div>

  )
}
const mapStateToProps = ({ newsNoticeDetail }) => ({
  newsNoticeDetail
})
export default connect(mapStateToProps)(NewsNoticeDetail)
