import React from 'react';
import { connect } from 'dva';
import _ from 'lodash';
import DetailsTable from '../../components/DetailsTable'
import { professionalTable } from '../../data'
import TeachersList from '../../components/TeachersList'

const VisualCommunicationDesignTeam = ({ dispatch, visualCommunicationDesignTeam }) => {
  const dataSource = visualCommunicationDesignTeam.user
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
const mapStateToProps = ({ visualCommunicationDesignTeam }) => {
  return {
    visualCommunicationDesignTeam
  }
}
export default connect(mapStateToProps)(VisualCommunicationDesignTeam);
