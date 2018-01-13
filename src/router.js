import React from 'react'
import 'antd/dist/antd.css'
import { Router, Route, IndexRoute } from 'dva/router'
import NewsNotice from './routes/NewsNotice'
import DepartmentProfile from './routes/DepartmentProfile'
import MainLayout from './components/MainLayout'

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Route
        path="/"
        component={MainLayout}
      />
      <Route path="/NewsNotice" component={NewsNotice} />
      <Route path="/DepartmentProfile" component={DepartmentProfile} />
    </Router>
  )
}

export default RouterConfig
