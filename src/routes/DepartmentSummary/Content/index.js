import React, { PropTypes, Component } from 'react'
import './index.css'

const Content = () => {
  return (
    <div className="container">
      <div className="section" key="DepartmentProfile">
         系部介绍
      </div>
      <div className="section" key="DepartmentLeadership">
         系部领导
      </div>
      <div className="section" key="OrganizationalStructure">
         组织架构
      </div>
      <div className="section" key="DirectorMessage">
         主任寄语
      </div>
    </div>
  );
}

export default Content;
