import React from 'react';
import { routerRedux, Link } from 'dva/router';

const column = [
  {
    key: 'name',
    dataIndex: 'name',
    title: '姓名'
  },
  {
    key: 'professionalTeam',
    dataIndex: 'professionalTeam',
    title: '所属专业团队'
  },
  {
    key: 'jobTitle',
    dataIndex: 'jobTitle',
    title: '职称'
  },
  {
    key: 'education',
    dataIndex: 'education',
    title: '学历'
  },
  {
    key: 'graduatedSchool',
    dataIndex: 'graduatedSchool',
    title: '毕业院校'
  },
  {
    key: 'researchDirection',
    dataIndex: 'researchDirection',
    title: '研究方向'
  },
  {
    key: 'operate',
    dataIndex: 'operate',
    title: '操作',
    render: (text, record, index) => {
      return (
        <span><Link to={`/TeacherDetail/${record.id}`}>详情</Link></span>
      )
    }
  }
]
export default column
