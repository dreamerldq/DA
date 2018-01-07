import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import IndexPage from './routes/IndexPage';
import NewsNotice from './routes/NewsNotice'
import DepartmentProfile from './routes/DepartmentProfile'
import 'antd/dist/antd.css'
function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={IndexPage} />
        <Route path="/NewsNotice" exact component={NewsNotice} />
        <Route path='/DepartmentProfile' exact component={DepartmentProfile} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
