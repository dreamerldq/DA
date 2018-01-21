import React from 'react';
import { connect } from 'dva';
import _ from 'lodash';
import DetailsTable from '../../components/DetailsTable'
import { professionalTable } from '../../data'

const VisualCommunicationDesignTeam = ({ dispatch, departmentProfile }) => {
  return (
    <div>
      <DetailsTable dataSource={professionalTable} />
    </div>
  )
}
VisualCommunicationDesignTeam.propTypes = {
};
export default connect()(VisualCommunicationDesignTeam);
