import React, { PropTypes, Component } from 'react'
import { Menu, Affix } from 'antd';
import { Link, Events, scrollSpy } from 'react-scroll';
import MenuBar from './menubar/index'
import Content from './Content/index'

const DepartmentSummary = () => {
  return (
    <div>
      <MenuBar />
      <Content />
    </div>
  );
}

export default DepartmentSummary;
