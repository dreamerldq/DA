import React, { PropTypes, Component } from 'react'
import { connect } from 'dva'
import { Element } from 'react-scroll';
import './index.css'
import BasicInfo from '../BasicInfo'
import Research from '../Research'
import StaffFiles from '../StaffFiles'
import Awards from '../Awards'
import StudentAwards from '../StudentAwards'
import TeacherTraining from '../TeacherTraining'
import Patent from '../Patent'

const Content = ({ form, registered }) => {
  return (
    <div className="contenr_container">
      <Element className="section" name="BasicInfo">
        <BasicInfo model={registered} form={form} />
      </Element>
      <Element className="section" name="StaffFiles">
        <StaffFiles model={registered} form={form} />
      </Element>
      <Element className="section" name="Research">
        <Research model={registered} form={form} />
      </Element>
      <Element className="section" name="Awards">
        <Awards model={registered} form={form} />
      </Element>
      <Element className="section" name="StudentAwards">
        <StudentAwards model={registered} form={form} />
      </Element>
      <Element className="section" name="TeacherTraining">
        <TeacherTraining model={registered} form={form} />
      </Element>
      <Element className="section" name="Patent">
        <Patent model={registered} form={form} />
      </Element>
    </div>
  );
}
const mapStateToProps = ({ registered }) => {
  return {
    registered
  }
}
export default connect(mapStateToProps)(Content);
