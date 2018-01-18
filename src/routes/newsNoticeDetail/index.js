import React from 'react';
import { connect } from 'dva';
import { newsContainer, newsTitle } from '../../data'

const NewsNoticeDetail = ({ dispatch, newsNoticeDetail }) => {
  const { id } = newsNoticeDetail
  return (
    <div key={id}>
      <h1>{newsTitle[id].title}</h1>
      <p>{newsContainer[id].body}</p>
    </div>

  )
}
const mapStateToProps = ({ newsNoticeDetail }) => ({
  newsNoticeDetail
})
export default connect(mapStateToProps)(NewsNoticeDetail)
