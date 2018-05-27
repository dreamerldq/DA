import React from 'react';
import { connect } from 'dva';
import './index.css'
import AddBackgroundImage from '../../../components/BackgroundImage'

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
export default AddBackgroundImage('02')(connect(mapStateToProps)(CampusCultureDetail))
