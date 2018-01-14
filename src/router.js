import React from 'react'
import 'antd/dist/antd.css'
import { Router, Route, Switch } from 'dva/router'
import NewsNotice from './routes/NewsNotice'
import DepartmentProfile from './routes/DepartmentProfile'
import Index from './routes/Index'
import Header from './components/Header'
import NewsNoticeDetail from './routes/newsNoticeDetail/index'

export default ({ history }) => {
  console.log('HISTORY', history)
  return (
    <Router history={history}>
      <div>
        <Header />
        <div className="container">
          <Route path="/NewsNotice" component={NewsNotice} />
          <Route path="/DepartmentProfile" component={DepartmentProfile} />
          <Route path="/NewsNotice/detail/:id" component={NewsNoticeDetail} />
        </div>

      </div>

    </Router>
  )
}
