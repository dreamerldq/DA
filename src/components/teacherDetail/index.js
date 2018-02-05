import React from 'react'
import { connect } from 'dva'

const TeacherDetail = ({ teacherDetail }) => {
  const { user } = TeacherDetail
  return (
    <div>
      {user.name}
    </div>
  )
}
const mapStateToProps = ({ teacherDetail }) => {
  return {
    teacherDetail
  }
}
export default connect()(TeacherDetail)
