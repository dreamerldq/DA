import React from 'react';
import { connect } from 'dva';
import { newsContainer, newsTitle } from '../../data'
import './index.css'

const NewsNoticeDetail = ({ dispatch, newsNoticeDetail }) => {
  const { news } = newsNoticeDetail
  return (
    <div className="newsDetailContainer">
      <div style={{ width: '100%' }} dangerouslySetInnerHTML={{ __html: news.content }} />
    </div>

  )
}
const mapStateToProps = ({ newsNoticeDetail }) => ({
  newsNoticeDetail
})
export default connect(mapStateToProps)(NewsNoticeDetail)
