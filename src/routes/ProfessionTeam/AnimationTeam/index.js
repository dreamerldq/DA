import React from 'react';
import { connect } from 'dva';
import { Spin } from 'antd'
import _ from 'lodash';
import TeachersList from '../../../components/TeachersList'
import DetailsTable from '../../../components/DetailsTable'
import '../index.css'

const AnimationTeam = ({ dispatch, animationTeam: model }) => {
  const dataSource = model.user
  const { loading } = model
  return (
    <Spin spinning={loading}>
      <div className="teacherList">
        <TeachersList />
        <div>
          <DetailsTable dataSource={dataSource} />
        </div>
      </div>
    </Spin>

  )
}
AnimationTeam.propTypes = {
};
const mapStateToProps = ({ animationTeam }) => {
  return {
    animationTeam
  }
}
export default connect(mapStateToProps)(AnimationTeam);
