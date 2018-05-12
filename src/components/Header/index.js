import React from 'react';
import { Menu, Icon, Button, Row, Col, Popconfirm, message } from 'antd';
import { connect } from 'dva';
import { Link, routerRedux } from 'dva/router'
import _ from 'lodash';
import title from './menu';
import styles from './index.css';


const { SubMenu } = Menu;
const MenuItemGroup = Menu.ItemGroup;
const { Item } = Menu
let count = true
const text = '确定要退出当前用户?';
const Header = ({
  dispatch, header, form, profileManagement, currentUser
}) => {
  const { headerDisplay } = header
  const { user } = currentUser
  const { profession } = profileManagement
  const handleClick = (e) => {
    dispatch({ type: 'header/link', payload: e.key })
  }
  const loginToggle = () => {
    dispatch({ type: 'header/showModel' })
  }
  const toIndex = () => {
    dispatch(routerRedux.push({
      pathname: '/index'
    }))
  }
  const confirm = () => {
    message.info('已经退出')
    dispatch({ type: 'currentUser/clearCurrentUser' })
    dispatch(routerRedux.push({
      pathname: '/login'
    }))
  }

  if (user && count) {
    count = false
    title.push(
      {
        title: '发布文章',
        key: 'CreateNews',
        subTitle: null
      },
      {
        title: '概况管理',
        key: 'ProfileManagement',
        subTitle: null
      }
    )
  }
  return (

    <div className="header_container_outer">
      {headerDisplay ?
        <Row type="flex" justify="space-around" className="header_container">
          <Col span={6}>
            <div>
              <span onClick={toIndex}><img className="logo" src="http://oli7sq88l.bkt.clouddn.com/logo/logo.png" alt="logo" /></span>
            </div>
          </Col>
          <Col span={16}>


            <Menu
              className="pcMenu"
              onClick={handleClick}
              mode="horizontal"
            >
              {title.map((item) => {
            if (item.key === 'DepartmentSummary') {
              return (
                <SubMenu title={<span>{item.title}</span>}>
                  <MenuItemGroup title="系部概括">
                    <Item key={item.key}>{item.title}</Item>
                  </MenuItemGroup>
                  <MenuItemGroup title="专业介绍">
                    {item.subTitle_professionIntroduction.map((sub) => {
                        return <Item key={sub.key}>{sub.title}</Item>
                    })}
                  </MenuItemGroup>
                  <MenuItemGroup title="教师风采">
                    {item.subTitle_teacherStyle.map((sub) => {
                      return <Item key={sub.key}>{sub.title}</Item>
                   })}
                  </MenuItemGroup>
                </SubMenu>
              )
            }
            if (item.key === 'innovation') {
              return (
                <SubMenu title={<span>{item.title}</span>}>
                  <MenuItemGroup title="创新创业">
                    {item.subTitle_innovation.map((sub) => {
                        return <Item key={sub.key}>{sub.title}</Item>
                    })}
                  </MenuItemGroup>
                  <MenuItemGroup title="艺创空间">
                    {item.subTitle_artSpace.map((sub) => {
                      return <Item key={sub.key}>{sub.title}</Item>
                   })}
                  </MenuItemGroup>
                </SubMenu>
              )
            }
            if (item.subTitle) {
                return (
                  <SubMenu key={item.key} title={<span>{item.title}</span>}>
                    {item.subTitle.map((sub) => {
                      return <Item key={sub.key}>{sub.title}</Item>
                    })}
                  </SubMenu>
                    )
            }
              return (
                <Item key={item.key}>
                  {item.title}
                </Item>
            )
          })}
            </Menu>


            <Menu
              onClick={handleClick}
              mode="horizontal"
              className="mobileMenu"
            >
              {title.map((item) => {
            if (item.key === 'DepartmentSummary') {
              return (
                <SubMenu title={<Icon type="menu-unfold" />}>
                  <MenuItemGroup title="系部概括">
                    <Item key={item.key}>{item.title}</Item>
                  </MenuItemGroup>
                  <MenuItemGroup title="专业介绍">
                    {item.subTitle_professionIntroduction.map((sub) => {
                        return <Item key={sub.key}>{sub.title}</Item>
                    })}
                  </MenuItemGroup>
                  <MenuItemGroup title="教师风采">
                    {item.subTitle_teacherStyle.map((sub) => {
                      return <Item key={sub.key}>{sub.title}</Item>
                   })}
                  </MenuItemGroup>
                </SubMenu>
              )
            }
          })}
            </Menu>
          </Col>
          <Col className="loginMenu" span={2}>
            {user ?
              <Menu
                mode="horizontal"
              >
                <SubMenu title={<span><Icon type="menu-unfold" /> {user.name}</span>}>
                  <Item key="setting">
                    <Link style={{ color: 'black' }} to={`/Registered/${user.id}`}>设置</Link>
                  </Item>
                  <Item key="quit">
                    <Popconfirm placement="topLeft" title={text} onConfirm={confirm} okText="Yes" cancelText="No">
                退出
                    </Popconfirm>
                  </Item>
                </SubMenu>
              </Menu> :
              <Link to="/Login">登录 </Link>
    }
          </Col>
        </Row>
      : <Col />}
    </div>


  );
};
const mapStateToProps = ({ header, profileManagement, currentUser }) => ({
  header, profileManagement, currentUser
});
export default connect(mapStateToProps)(Header);
