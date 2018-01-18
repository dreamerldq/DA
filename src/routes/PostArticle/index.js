import React from 'react';
import { connect } from 'dva';

class PostArticle extends React.Component {
  render() {
    return (
      <div>
      11
      </div>
    );
  }
}
const mapStateToProps = ({ postArticle }) => ({
  postArticle
});
export default connect(mapStateToProps)(PostArticle);
