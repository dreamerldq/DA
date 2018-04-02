import React from 'react'
import 'antd/dist/antd.css'
import { Router, Route, Switch } from 'dva/router'
import NewsList from './routes/NewsList'
import ArtIndex from './routes/ArtIndex/index'
import Header from './components/Header'
import NewsNoticeDetail from './routes/newsNoticeDetail/index'
import CreateNews from './routes/CreateNews/index'
import DepartmentSummary from './routes/DepartmentSummary/index'
import AdminLogin from './routes/login/index'
import FacultyProfiles from './routes/ProfileIntroduction/FacultyProfiles'
import InnovationProfiles from './routes/ProfileIntroduction/InnovationProfiles'
import Registered from './routes/Registered'
import DigitalMediaArtTeam from './routes/ProfessionTeam/DigitalMediaArtTeam'
import DigitalMediaTechnologyTeam from './routes/ProfessionTeam/DigitalMediaTechnologyTeam'
import FilmPhotographyTeam from './routes/ProfessionTeam/FilmPhotographyTeam'
import VisualCommunicationDesignTeam from './routes/ProfessionTeam/VisualCommunicationDesignTeam'
import AnimationTeam from './routes/ProfessionTeam/AnimationTeam'
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
import DisciplineCompetition from './routes/ProfileIntroduction/DisciplineCompetition'
import ArtSpaceProfile from './routes/ProfileIntroduction/ArtSpaceProfile'
import Footer from './components/Footer'
import BatchCreateProfile from './routes/BatchCreateProfile'
import QuanJing from './routes/QuanJing'
import QuanJingList from './routes/QuanJing/QuanJingList'

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
            <Route path="/VentureProjectCreate" component={VentureProjectCreate} />
            <Route path="/VentureProject/detail/:id" component={VentureProjectDetail} />
            <Route path="/VentureProject" component={VentureProjectList} />
            {/* 创业项目 end */}

            {/* 校园文化 start */}
            <Route path="/CampusCulture/:id" component={CampusCultureDetail} />
            <Route path="/CampusCulture" component={CampusCultureList} />
            {/* 校园文化 end */}
            {/* 简介  start*/}
            <Route path="/FacultyProfiles" component={FacultyProfiles} />
            <Route path="/InnovationProfile" component={InnovationProfiles} />
            <Route path="/DisciplineCompetition" component={DisciplineCompetition} />
            <Route path="/ArtSpaceProfile" component={ArtSpaceProfile} />
            <Route path="/QuanJing/:id" component={QuanJing} />
            <Route path="/QuanJingList" component={QuanJingList} />
            {/* 简介  end*/}
            <Route path="/NewsNotice" component={NewsList} />
            <Route path="/ProfileManagement" component={ProfileManagement} />
            <Route path="/News/detail/:id" component={NewsNoticeDetail} />
            <Route path="/TeacherDetail/:id" component={TeacherDetail} />
            <Route path="/CreateNews" component={CreateNews} />
            <Route path="/DepartmentSummary" component={DepartmentSummary} />
            <Route path="/StudioIntroduction/:id" component={StudioIntroductionDetail} />
            <Route path="/StudioIntroductionCreate" component={StudioIntroductionListCreate} />
            <Route path="/StudioIntroduction" component={StudioIntroductionList} />
            <Route path="/ProfessionCreate" component={ProfessionCreate} />
            <Route path="/ProfessionIntroduction/:profession" component={ProfessionDetail} />
            <Route path="/Login" component={AdminLogin} />
            <Route path="/ArtSpaceProfile" component={ArtSpaceProfile} />
            <Route path="/BatchCreateProfile" component={BatchCreateProfile} />
            <Route path="/Registered/:id" component={Registered} />
            <Route path="/Registered" component={Registered} />
            <Route path="/" component={ArtIndex} />
          </Switch>

        </div>
        {/* <Footer /> */}
      </div>

    </Router>
  )
}
