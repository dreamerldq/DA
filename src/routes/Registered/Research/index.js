import React from 'react';
import MultipleList from '../../MultipleList'

const Research = ({ model }) => {
  const { user } = model
  return (

    <MultipleList catagory="research" dataSource={user.research} />
  )
}
export default Research
