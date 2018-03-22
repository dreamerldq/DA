import React from 'react';
import { Menu, Icon, List, Spin } from 'antd';
import { connect } from 'dva';
import _ from 'lodash';
import RightSide from '../../RightSide'

const DisciplineCompetition = ({ dispatch, profileIntroduction }) => {
  const { newsList, loading } = profileIntroduction
  const news = _.find(newsList, { title: '学科竞赛' });
  return (

    <div className="contentDetail_container">
      <div className="contentDetail_content">
      <h2  className="globalTitle">学科竞赛</h2>
        <div className="profileIntroductionContainer">
          <div style={{ width: '100%' }} dangerouslySetInnerHTML={{ __html: (news || {}).content }} />
        </div>
      </div>
      <RightSide />
    </div>


  )
}
DisciplineCompetition.propTypes = {
};
const mapStateToProps = ({ newsNoticeDetail, profileIntroduction }) => ({
  newsNoticeDetail, profileIntroduction
})
export default connect(mapStateToProps)(DisciplineCompetition);
