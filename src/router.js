import React from 'react'
import 'antd/dist/antd.css'
import { Router, Route, Switch } from 'dva/router'
import NewsNotice from './routes/NewsNotice'
import DepartmentProfile from './routes/DepartmentProfile'
import Index from './routes/Index'
import Header from './components/Header'
import NewsNoticeDetail from './routes/newsNoticeDetail/index'
import PostArticle from './routes/PostArticle/index'
import DepartmentSummary from './routes/DepartmentSummary/index'

export default ({ history }) => {
  return (
    <Router history={history}>
      <div>
        <Header />
        <div className="container">
          <Route path="/NewsNotice" component={NewsNotice} />
          <Route path="/DepartmentProfile" component={DepartmentProfile} />
          <Route path="/News/detail/:id" component={NewsNoticeDetail} />
          <Route path="/PostArticle" component={PostArticle} />
          <Route path="/DepartmentSummary" component={DepartmentSummary} />
        </div>

      </div>

    </Router>
  )
}
