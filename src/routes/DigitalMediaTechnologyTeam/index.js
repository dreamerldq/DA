import React from 'react';
import { connect } from 'dva';
import _ from 'lodash';
import DetailsTable from '../../components/DetailsTable'
import { professionalTable } from '../../data'

const DigitalMediaTechnologyTeam = ({ dispatch, departmentProfile }) => {
  return (
    <div>
      <DetailsTable dataSource={professionalTable} />
    </div>
  )
}
DigitalMediaTechnologyTeam.propTypes = {
};
export default connect()(DigitalMediaTechnologyTeam);
