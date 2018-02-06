import React from 'react'
import 'antd/dist/antd.css'
import { Router, Route, Switch } from 'dva/router'
import NewsNotice from './routes/NewsNotice'
import ArtIndex from './routes/ArtIndex/index'
import Header from './components/Header'
import NewsNoticeDetail from './routes/newsNoticeDetail/index'
import PostArticle from './routes/PostArticle/index'
import DepartmentSummary from './routes/DepartmentSummary/index'
import AdminLogin from './routes/login/index'
import ArtSpaceProfile from './routes/ArtSpaceProfile'
import FacultyProfiles from './routes/FacultyProfiles'
import ArticleEdit from './routes/ArticleEdit'
import Registered from './routes/Registered'
import DigitalMediaArtTeam from './routes/DigitalMediaArtTeam'
import DigitalMediaTechnologyTeam from './routes/DigitalMediaTechnologyTeam'
import FilmPhotographyTeam from './routes/FilmPhotographyTeam'
import VisualCommunicationDesignTeam from './routes/VisualCommunicationDesignTeam'
import AnimationTeam from './routes/AnimationTeam'

export default ({ history }) => {
  return (
    <Router history={history}>
      <div>
        <Header />
        <div className="container">
          {/* 师资介绍 begain */}
          <Route path="/AnimationTeam" component={AnimationTeam} />
          <Route path="/DigitalMediaArtTeam" component={DigitalMediaArtTeam} />
          <Route path="/DigitalMediaTechnologyTeam" component={DigitalMediaTechnologyTeam} />
          <Route path="/FilmPhotographyTeam" component={FilmPhotographyTeam} />
          <Route path="/VisualCommunicationDesignTeam" component={VisualCommunicationDesignTeam} />
          {/* 师资介绍 end */}

          <Route path="/NewsNotice" component={NewsNotice} />
          <Route path="/News/detail/:id" component={NewsNoticeDetail} />
          <Route path="/PostArticle" component={PostArticle} />
          <Route path="/DepartmentSummary" component={DepartmentSummary} />
          <Route path="/Login" component={AdminLogin} />
          <Route path="/index" component={ArtIndex} />
          <Route path="/ArtSpaceProfile" component={ArtSpaceProfile} />
          <Route path="/FacultyProfiles" component={FacultyProfiles} />
          <Route path="/ArticleEdit" component={ArticleEdit} />
          <Route path="/Registered" component={Registered} />
        </div>

      </div>

    </Router>
  )
}
