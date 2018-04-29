import React from 'react';
import { Table, Tabs, Button } from 'antd';
import { connect } from 'dva';
import { routerRedux, Link } from 'dva/router';
import _ from 'lodash';
import FileSaver from 'file-saver'
import XLSX from 'xlsx'
import column from './column'
import './index.css'

const { TabPane } = Tabs;
const DetailsTable = ({
  dispatch, DetailsTablem, dataSource
}) => {
  const exportTable = () => {
    const wb = XLSX.utils.table_to_book(document.querySelector('#out-table'))
    const wbout = XLSX.write(wb, { bookType: 'xlsx', bookSST: true, type: 'array' })
    try {
      FileSaver.saveAs(new Blob([wbout], { type: 'application/octet-stream' }), `${dataSource[0].professionalTeam}教师信息.xlsx`)
    } catch (e) {
      if (typeof console !== 'undefined') {
      }
    }
    return wbout
  }
  return (
    <div>
      <Button onClick={exportTable}>导出</Button>
      <Table
        className="techerDetailTable"
        id="out-table"
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
