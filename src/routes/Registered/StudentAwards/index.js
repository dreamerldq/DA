import React from 'react';
import MultipleList from '../../MultipleList'

const StudentAwards = ({ model }) => {
  const { user } = model
  return (
    <MultipleList catagory="studentAward" dataSource={user.studentAward} />
  )
}
export default StudentAwards
