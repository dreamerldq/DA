import React from 'react';
import { connect } from 'dva';

const NewsNoticeDetail = ({ dispatch, departmentProfile }) => {
  return (
    <div>111</div>
  )
}
const mapStateToProps = ({ newsNoticeDetail }) => ({
  newsNoticeDetail
})
export default connect(mapStateToProps)(NewsNoticeDetail)
