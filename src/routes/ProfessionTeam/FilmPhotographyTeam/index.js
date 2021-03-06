import React from 'react';
import { connect } from 'dva';
import _ from 'lodash';
import { Spin } from 'antd'

import TeachersList from '../../../components/TeachersList'
import DetailsTable from '../../../components/DetailsTable'
import '../index.css'

const FilmPhotographyTeam = ({ dispatch, filmPhotographyTeam: model }) => {
  const dataSource = model.user
  const { loading } = model
  return (
    <Spin spinning={loading}>
      <div className="teacherList">
        <TeachersList />
        <div>
          <DetailsTable dataSource={dataSource} />
        </div>
      </div></Spin>

  )
}
const mapStateToProps = ({ filmPhotographyTeam }) => {
  return {
    filmPhotographyTeam
  }
}
export default connect(mapStateToProps)(FilmPhotographyTeam);
