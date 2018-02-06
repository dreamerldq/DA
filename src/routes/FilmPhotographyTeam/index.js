import React from 'react';
import { connect } from 'dva';
import _ from 'lodash';
import DetailsTable from '../../components/DetailsTable'
import { professionalTable } from '../../data'
import TeachersList from '../../components/TeachersList'

const FilmPhotographyTeam = ({ dispatch, filmPhotographyTeam }) => {
  const dataSource = filmPhotographyTeam.user
  return (
    <div>
      <TeachersList />
      <div>
        <DetailsTable dataSource={dataSource} />
      </div>
    </div>
  )
}
const mapStateToProps = ({ filmPhotographyTeam }) => {
  return {
    filmPhotographyTeam
  }
}
export default connect(mapStateToProps)(FilmPhotographyTeam);
