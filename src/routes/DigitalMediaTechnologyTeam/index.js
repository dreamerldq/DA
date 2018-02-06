import React from 'react';
import { connect } from 'dva';
import _ from 'lodash';
import DetailsTable from '../../components/DetailsTable'
import { professionalTable } from '../../data'
import TeachersList from '../../components/TeachersList'

const DigitalMediaTechnologyTeam = ({ dispatch, digitalMediaTechnologyTeam }) => {
  const dataSource = digitalMediaTechnologyTeam.user
  console.log('data', dataSource)
  return (
    <div>
      <TeachersList />
      <div>
        <DetailsTable dataSource={dataSource} />
      </div>
    </div>

  )
}
const mapStateToProps = ({ digitalMediaTechnologyTeam }) => {
  return {
    digitalMediaTechnologyTeam
  }
}
export default connect(mapStateToProps)(DigitalMediaTechnologyTeam);
