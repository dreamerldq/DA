import React from 'react';
import { connect } from 'dva';
import _ from 'lodash';
import DetailsTable from '../../components/DetailsTable'
import { professionalTable } from '../../data'

const DigitalMediaArtTeam = ({ dispatch, departmentProfile }) => {
  return (
    <div>
      <DetailsTable dataSource={professionalTable} />
    </div>
  )
}
DigitalMediaArtTeam.propTypes = {
};
export default connect()(DigitalMediaArtTeam);
