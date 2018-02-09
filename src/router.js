import React from 'react'
import 'antd/dist/antd.css'
import { Router, Route, Switch } from 'dva/router'
import NewsNotice from './routes/NewsNotice'
import ArtIndex from './routes/ArtIndex/index'
import Header from './components/Header'
import NewsNoticeDetail from './routes/newsNoticeDetail/index'
import CreateNews from './routes/CreateNews/index'
import DepartmentSummary from './routes/DepartmentSummary/index'
import AdminLogin from './routes/login/index'
import ArtSpaceProfile from './routes/ArtSpaceProfile'
import FacultyProfiles from './routes/FacultyProfiles'
import Registered from './routes/Registered'
import DigitalMediaArtTeam from './routes/DigitalMediaArtTeam'
import DigitalMediaTechnologyTeam from './routes/DigitalMediaTechnologyTeam'
import FilmPhotographyTeam from './routes/FilmPhotographyTeam'
import VisualCommunicationDesignTeam from './routes/VisualCommunicationDesignTeam'
import AnimationTeam from './routes/AnimationTeam'
import TeacherDetail from './routes/TeacherDetail/index'
import StudioIntroductionList from './routes/StudioIntroductionList'
import ProfileManagement from './routes/ProfileManagement'
import StudioIntroductionListCreate from './routes/StudioIntroductionListCreate'
import ProfessionCreate from './routes/Profession/ProfessionCreate'
import StudioIntroductionDetail from './routes/StudioIntroductionDetail'
import ProfessionDetail from './routes/Profession/ProfessionDetail'
import VentureProjectCreate from './routes/VentureProject/VentureProjectCreate'
import VentureProjectDetail from './routes/VentureProject/VentureProjectDetail'
import VentureProjectList from './routes/VentureProject/VentureProjectList'
import CampusCultureList from './routes/CampusCulture/CampusCultureList'
import CampusCultureDetail from './routes/CampusCulture/CampusCultureDetail'

export default ({ history }) => {
  return (
    <Router history={history}>
      <div>
        <Header />
        <div className="container">
          <Switch>
            {/* 师资介绍 begain */}
            <Route path="/AnimationTeam" component={AnimationTeam} />
            <Route path="/DigitalMediaArtTeam" component={DigitalMediaArtTeam} />
            <Route path="/DigitalMediaTechnologyTeam" component={DigitalMediaTechnologyTeam} />
            <Route path="/FilmPhotographyTeam" component={FilmPhotographyTeam} />
            <Route path="/VisualCommunicationDesignTeam" component={VisualCommunicationDesignTeam} />
            {/* 师资介绍 end */}

            {/* 创业项目 start */}
            <Route path="/VentureProject/create" component={VentureProjectCreate} />
            <Route path="/VentureProject/detail/:id" component={VentureProjectDetail} />
            <Route path="/VentureProject" component={VentureProjectList} />
            {/* 创业项目 end */}

            {/* 校园文化 start */}
            <Route path="/CampusCulture/:id" component={CampusCultureDetail} />
            <Route path="/CampusCulture" component={CampusCultureList} />
            {/* 校园文化 end */}

            <Route path="/NewsNotice" component={NewsNotice} />
            <Route path="/ProfileManagement" component={ProfileManagement} />
            <Route path="/News/detail/:id" component={NewsNoticeDetail} />
            <Route path="/TeacherDetail/:id" component={TeacherDetail} />
            <Route path="/CreateNews" component={CreateNews} />
            <Route path="/DepartmentSummary" component={DepartmentSummary} />
            <Route path="/StudioIntroduction/:id" component={StudioIntroductionDetail} />
            <Route path="/StudioIntroduction/create" component={StudioIntroductionListCreate} />
            <Route path="/StudioIntroductionList" component={StudioIntroductionList} />
            <Route path="/ProfessionCreate" component={ProfessionCreate} />
            <Route path="/ProfessionIntroduction/:profession" component={ProfessionDetail} />
            <Route path="/Login" component={AdminLogin} />
            <Route path="/ArtSpaceProfile" component={ArtSpaceProfile} />
            <Route path="/FacultyProfiles" component={FacultyProfiles} />
            <Route path="/Registered" component={Registered} />

            <Route path="/" component={ArtIndex} />
          </Switch>

        </div>

      </div>

    </Router>
  )
}
