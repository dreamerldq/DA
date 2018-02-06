import React from 'react';
import { Table, Tabs } from 'antd';
import { connect } from 'dva';
import { routerRedux, Link } from 'dva/router';
import _ from 'lodash';
import column from './column'
import { professionalTable } from '../../data'
import './index.css'

const { TabPane } = Tabs;
const DetailsTable = ({
  dispatch, DetailsTablem, dataSource
}) => {
  return (
    <div>
      <Table
        className="techerDetailTable"
        columns={column}
        dataSource={dataSource}
        bordered={true}
        pagination={false}
      />
    </div>

  )
}

const mapStateToProps = ({ DetailsTable }) => ({
  DetailsTable
});
export default connect(mapStateToProps)(DetailsTable);
