import React from 'react';
import MultipleList from '../../MultipleList'

const TeacherTraining = ({ model }) => {
  const { user } = model
  return (
    <MultipleList catagory="teacherTrainning" dataSource={user.teacherTrainning} />
  )
}
export default TeacherTraining
