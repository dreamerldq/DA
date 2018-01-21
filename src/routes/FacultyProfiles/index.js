import React from 'react';
import { Menu, Icon, List } from 'antd';
import { connect } from 'dva';
import _ from 'lodash';
import './index.css'

const FacultyProfiles = ({ dispatch, FacultyProfiles }) => {
  return (
    <div className="contentDetail_container">
      <h3 className="contentDetail_introduction">专业简介</h3>
      <div>
        <h3>数字艺术系</h3>
      </div>
    </div>

  )
}
FacultyProfiles.propTypes = {
};
const mapStateToProps = ({ FacultyProfiles }) => ({
  FacultyProfiles
});
export default connect(mapStateToProps)(FacultyProfiles);
