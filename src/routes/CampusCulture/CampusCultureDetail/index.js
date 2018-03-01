import React from 'react';
import { connect } from 'dva';
import './index.css'

const CampusCultureDetail = ({ dispatch, campusCulture }) => {
  const { record } = campusCulture
  return (
    <div className="campusDetailContainer">
      <div dangerouslySetInnerHTML={{ __html: record.content }} />
    </div>

  )
}
const mapStateToProps = ({ campusCulture }) => ({
  campusCulture
})
export default connect(mapStateToProps)(CampusCultureDetail)
