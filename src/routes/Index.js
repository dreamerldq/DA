import React from 'react';
import { Menu, Icon } from 'antd';
import { connect } from 'dva';
import _ from 'lodash';
import Header from '../components/Header'

const Index = ({ dispatch, departmentProfile }) => {
  return (
    <div>
      <div>这是首页</div>
    </div>
  )
}
Index.propTypes = {
};
const mapStateToProps = ({ departmentProfile }) => ({
  departmentProfile
});
export default connect(mapStateToProps)(Index);
