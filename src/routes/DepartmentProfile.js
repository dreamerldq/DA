import React from 'react';
import { Menu, Icon } from 'antd';
import { connect } from 'dva';
import _ from 'lodash';

const DepartmentProfile = ({ dispatch, departmentProfile }) => {
  return (
    <div>
      <div>这是系部简介的界面</div>
    </div>
  )
}
DepartmentProfile.propTypes = {
};
const mapStateToProps = ({ departmentProfile }) => ({
  departmentProfile
});
export default connect(mapStateToProps)(DepartmentProfile);
