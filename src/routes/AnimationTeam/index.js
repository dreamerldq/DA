import React from 'react';
import { connect } from 'dva';
import _ from 'lodash';
import DetailsTable from '../../components/DetailsTable'
import { professionalTable } from '../../data'

const AnimationTeam = ({ dispatch, departmentProfile }) => {
  return (
    <div>
      <DetailsTable dataSource={professionalTable} />
    </div>
  )
}
AnimationTeam.propTypes = {
};
export default connect()(AnimationTeam);
