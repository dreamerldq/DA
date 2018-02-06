import React from 'react';
import { connect } from 'dva';
import _ from 'lodash';
import DetailsTable from '../../components/DetailsTable'
import { professionalTable } from '../../data'
import TeachersList from '../../components/TeachersList'

const AnimationTeam = ({ dispatch }) => {
  return (
    <div>
      <TeachersList />
      <div>
        <DetailsTable dataSource={professionalTable} />
      </div>
    </div>
  )
}
AnimationTeam.propTypes = {
};
const mapStateToProps = () => {
  return {

  }
}
export default connect(mapStateToProps)(AnimationTeam);
