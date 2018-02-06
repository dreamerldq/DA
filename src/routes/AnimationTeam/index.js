import React from 'react';
import { connect } from 'dva';
import _ from 'lodash';
import DetailsTable from '../../components/DetailsTable'
import { professionalTable } from '../../data'
import TeachersList from '../../components/TeachersList'

const AnimationTeam = ({ dispatch, animationTeam }) => {
  const dataSource = animationTeam.user
  return (
    <div>
      <TeachersList />
      <div>
        <DetailsTable dataSource={dataSource} />
      </div>
    </div>
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
