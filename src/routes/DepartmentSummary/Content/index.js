import React, { PropTypes, Component } from 'react'
import { Element } from 'react-scroll';
import './index.css'
import Director from '../Director'
import Organization from '../Organization'
import Profile from '../Profile'

const Content = () => {
  return (
    <div className="contenr_container">
      <Element className="section" name="DepartmentProfile">
        <Profile />
      </Element>
      <Element className="section" name="OrganizationalStructure">
        <Organization />
      </Element>
      <Element className="section" name="DirectorMessage">
        <Director />
      </Element>
    </div>
  );
}

export default Content;
