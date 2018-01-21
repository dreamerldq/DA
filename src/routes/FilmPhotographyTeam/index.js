import React from 'react';
import { connect } from 'dva';
import _ from 'lodash';
import DetailsTable from '../../components/DetailsTable'
import { professionalTable } from '../../data'

const FilmPhotographyTeam = ({ dispatch, departmentProfile }) => {
  return (
    <div>
      <DetailsTable dataSource={professionalTable} />
    </div>
  )
}
FilmPhotographyTeam.propTypes = {
};
export default connect()(FilmPhotographyTeam);
