import React from 'react';
import { connect } from 'dva';

const ArtSpaceProfile = ({ dispatch, postArticle }) => {
  const { content, title } = postArticle
  return (
    <div dangerouslySetInnerHTML={{ __html: content }} />

  )
}
const mapStateToProps = ({ artSpaceProfile, postArticle }) => ({
  artSpaceProfile,
  postArticle
})
export default connect(mapStateToProps)(ArtSpaceProfile)
