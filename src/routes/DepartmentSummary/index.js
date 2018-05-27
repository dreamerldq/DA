import React, { PropTypes, Component } from 'react'
import { Menu, Affix } from 'antd';
import { Link, Events, scrollSpy } from 'react-scroll';
import MenuBar from '../../components/Menubar'
import Content from './Content/index'
import './index.css'
import configs from './configs'
import AddBackgroundImage from '../../components/BackgroundImage'

const DepartmentSummary = () => {
  return (
    <div className="departmentSummary_Container">
      <MenuBar configs={configs} />
      <Content />
    </div>
  );
}

export default AddBackgroundImage('02')(DepartmentSummary);
