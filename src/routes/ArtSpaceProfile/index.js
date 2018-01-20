import React from 'react';
import { connect } from 'dva';

const ArtSpaceProfile = ({ dispatch, header }) => {
  return (
    <div dangerouslySetInnerHTML={{ __html: header.HTMLContent }} />

  )
}
const mapStateToProps = ({ artSpaceProfile, header }) => ({
  artSpaceProfile,
  header
})
export default connect(mapStateToProps)(ArtSpaceProfile)
