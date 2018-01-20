import React, { PropTypes, Component } from 'react'
import { Menu, Affix } from 'antd';
import { Link, Events, scrollSpy } from 'react-scroll';
import MenuBar from './menubar/index'
import Content from './Content/index'
import './index.css'

const DepartmentSummary = () => {
  return (
    <div className="departmentSummary_Container">
      <MenuBar />
      <Content />
    </div>
  );
}

export default DepartmentSummary;
