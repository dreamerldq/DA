import React from 'react';
import { connect } from 'dva';
import _ from 'lodash';
import DetailsTable from '../../components/DetailsTable'
import { professionalTable } from '../../data'
import TeachersList from '../../components/TeachersList'

const DigitalMediaArtTeam = ({ dispatch, digitalMediaArtTeam }) => {
  const dataSource = digitalMediaArtTeam.user
  return (
    <div>
      <TeachersList />
      <div>
        <DetailsTable dataSource={dataSource} />
      </div>
    </div>

  )
}
const mapStateToProps = ({ digitalMediaArtTeam }) => {
  return {
    digitalMediaArtTeam
  }
}
export default connect(mapStateToProps)(DigitalMediaArtTeam);
