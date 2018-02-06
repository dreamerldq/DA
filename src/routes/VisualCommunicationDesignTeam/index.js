import React from 'react';
import { connect } from 'dva';
import _ from 'lodash';
import { Spin } from 'antd'

import DetailsTable from '../../components/DetailsTable'
import { professionalTable } from '../../data'
import TeachersList from '../../components/TeachersList'

const VisualCommunicationDesignTeam = ({ dispatch, visualCommunicationDesignTeam: model }) => {
  const dataSource = model.user
  const { loading } = model
  return (
    <Spin spinning={loading}>
      <div>
        <TeachersList />
        <div>
          <DetailsTable dataSource={dataSource} />
        </div>
      </div>
    </Spin>
  )
}
const mapStateToProps = ({ visualCommunicationDesignTeam }) => {
  return {
    visualCommunicationDesignTeam
  }
}
export default connect(mapStateToProps)(VisualCommunicationDesignTeam);
