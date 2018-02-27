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
  const { modelVisiable } = header;
  const { user } = currentUser
  const { profession } = profileManagement
  const handleClick = (e) => {
    dispatch({ type: 'header/link', payload: e.key })
  }
  const loginToggle = () => {
    dispatch({ type: 'header/showModel' })
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
    title.push({
      title: '发布文章',
      key: 'CreateNews',
      subTitle: null
    })
  }
  return (
    <Row className="header_container">
      <Col span={18}>
        <Menu
          onClick={handleClick}
          mode="horizontal"
        >
          {title.map((item) => {
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
      </Col>
      <Col span={6}>
        {user ?
          <Menu
            mode="horizontal"
          >
            <SubMenu title={<span>{user.name}</span>}>
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
      null
      }
      </Col>
    </Row>

  );
};
const mapStateToProps = ({ header, profileManagement, currentUser }) => ({
  header, profileManagement, currentUser
});
export default connect(mapStateToProps)(Header);
