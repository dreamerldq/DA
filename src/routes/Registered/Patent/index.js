import React from 'react';
import MultipleList from '../../MultipleList'

const Patent = ({ model }) => {
  const { user } = model
  return (
    <MultipleList catagory="patent" dataSource={user.patent} />
  )
}
export default Patent
