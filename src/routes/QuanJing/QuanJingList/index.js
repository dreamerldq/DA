import React from 'react'
import { routerRedux, Link } from 'dva/router';
import { Row, Col } from 'antd'
import Data from '../../../QuanJingData'
import './index.css'

const QuanJingList = ({ imgData }) => {
  return (
    <div className="QuanJingListContainer">
      <Row type="flex" justify="space-around">
        {Data.map((item) => {
          return (
            <Col >
              <Link to={`/quanjing/${item.path}`}><img className="image" src={require(`../asset/${item.path}.jpg`)} alt="tushuguan" /></Link>
              <h3>{item.name}</h3>
            </Col>
          )
        })}
      </Row>

    </div>
  )
}
export default QuanJingList
