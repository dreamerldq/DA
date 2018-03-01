import React from 'react';
import { connect } from 'dva';
import { Spin } from 'antd'
import { newsContainer, newsTitle } from '../../data'
import './index.css'

const NewsNoticeDetail = ({ dispatch, newsNoticeDetail }) => {
  const { news, loading } = newsNoticeDetail
  return (
    <Spin spinning={loading}>
      <div className="newsDetailContainer">
        <div dangerouslySetInnerHTML={{ __html: news.content }} />
      </div>
    </Spin>


  )
}
const mapStateToProps = ({ newsNoticeDetail }) => ({
  newsNoticeDetail
})
export default connect(mapStateToProps)(NewsNoticeDetail)
