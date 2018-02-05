import React, { PropTypes, Component } from 'react'
import { Element } from 'react-scroll';
import './index.css'
import BasicInfo from '../BasicInfo'
import Research from '../Research'
import StaffFiles from '../StaffFiles'
import Awards from '../Awards'
import StudentAwards from '../StudentAwards'
import TeacherTraining from '../TeacherTraining'
import Patent from '../Patent'

const Content = ({ form }) => {
  return (
    <div className="contenr_container">
      <Element className="section" name="BasicInfo">
        <BasicInfo form={form} />
      </Element>
      <Element className="section" name="StaffFiles">
        <StaffFiles form={form} />
      </Element>
      <Element className="section" name="Research">
        <Research form={form} />
      </Element>
      <Element className="section" name="Awards">
        <Awards form={form} />
      </Element>
      <Element className="section" name="StudentAwards">
        <StudentAwards form={form} />
      </Element>
      <Element className="section" name="TeacherTraining">
        <TeacherTraining form={form} />
      </Element>
      <Element className="section" name="Patent">
        <Patent form={form} />
      </Element>
    </div>
  );
}

export default Content;
