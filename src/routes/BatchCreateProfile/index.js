import React from 'react'
import { connect } from 'dva'
import { Button, Input, Row, Col } from 'antd'
import XLSX from 'xlsx';
import _ from 'lodash'

class BatchCreateProfile extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      fileData: []
    }
    this.resoleXlsx = this.resoleXlsx.bind(this)
    this.createProfile = this.createProfile.bind(this)
  }
  resoleXlsx(e) {
    const fr = new FileReader();
    let workbook;
    fr.onload = (e) => {
      const data = e.target.result;

      workbook = XLSX.read(data, {
        type: 'binary'
      });

      const dataSource = XLSX.utils.sheet_to_json(workbook.Sheets[workbook.SheetNames[0]], { header: 'A' }).filter((item, index) => {
        return index !== 0;
      });

      this.setState({
        fileData: dataSource
      });
    };
    fr.readAsBinaryString(e.target.files[0]);
  }
  transform(data) {
    const finalData = []
    data.forEach((item) => {
      const {
        A, B, C, D, E, F, G, H, I, J
      } = item
      const obj = {
        username: A,
        password: B,
        email: C,
        phone: D,
        name: E,
        professionalTeam: F,
        jobTitle: G,
        education: H,
        graduatedSchool: I,
        researchDirection: J
      }
      finalData.push(obj)
    });
    return finalData;
  }
  createProfile() {
    const data = this.transform(this.state.fileData)
    const { dispatch } = this.props
    dispatch({ type: 'batchCreateProfile/createProfile', payload: data })
  }
  render() {
    return (
      <div style={{ width: '600px', margin: '0 auto' }}>
        <Row type="flex" justify="space-between">
          <Col>
            <input onChange={this.resoleXlsx} type="file" />
          </Col>
          <Col>
            <Button onClick={this.createProfile}>批量创建教师档案</Button>
          </Col>
        </Row>
      </div>
    )
  }
}
const mapStateToProps = ({ batchCreateProfile }) => {
  return {
    batchCreateProfile
  }
}
export default connect(mapStateToProps)(BatchCreateProfile)
