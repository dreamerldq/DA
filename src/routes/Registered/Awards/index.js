import React from 'react';
import MultipleList from '../../MultipleList'

const Awards = ({ model }) => {
  const { user } = model
  return (
    <MultipleList catagory="award" dataSource={user.award} />
  )
}
export default Awards
