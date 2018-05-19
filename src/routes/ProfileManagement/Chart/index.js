import React from 'react'
import { Button } from 'antd'
import Teachers from './Teachers'
import ContentPie from './ContentPie'
import './index.css'


export default class Charts extends React.Component {
  state = {
    key: 'content'
  }
  changeKey(key) {
    return () => {
      this.setState({
        key
      })
    }
  }
  render() {
    return (
      <div className="chartsContainer">
        <div className="chartsButtonGroup">
          <Button onClick={this.changeKey('teacher')}>教师占比图</Button>
          <Button onClick={this.changeKey('content')}>文章占比图</Button>
        </div>
        {this.state.key === 'content' ?
          <ContentPie /> :
          <Teachers />
       }
      </div>
    )
  }
}
