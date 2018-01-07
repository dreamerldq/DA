import React from 'react';
import { Menu, Icon, Button } from 'antd';
import styles from './index.less';
import { connect } from 'dva';
import title from './menu';
import _ from 'lodash';
import Modal from './Modal'
import { Row, Col } from 'antd/lib/grid';

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
const { Item } = Menu

const Header = ({ dispatch, header, form }) => {
  const { modelVisiable } = header;
  const handleClick = (e) => {
    dispatch({type: 'header/link', payload: e.key })
  }
  const loginToggle = () => {
    dispatch({type: 'header/showModel'})
  }

  return (
    <div>
      <Row>
          <Col span={20}>
          <Menu
            onClick={handleClick}
            mode="horizontal"
            className="container"
              >
            {title.map((menu) => {
              if(menu.subTitle){
                  return (
                    <SubMenu key={menu.key} title={<span><Icon type="setting" />{menu.title}</span>}>
                      {menu.subTitle.map((sub) => {
                        return <Item key={sub.key}>{sub.title}</Item>
                      })}
                  </SubMenu>
                      )
              } else {
                return (
                <Item key={menu.key}>
                <Icon type="appstore" />{menu.title}
                </Item>
              )
              } 
            })}
              </Menu>
          </Col>
          <Col span={4}>
            <Button onClick={loginToggle}>
              登陆
            </Button>
          </Col>
      </Row>
     
     
      {
        modelVisiable ? 
        <Modal visible={modelVisiable} dispatch={dispatch} />
        :null
      }
    </div>
    
  );
 
};

Header.propTypes = {
};
const mapStateToProps = ({ header }) => ({
  header
});
export default connect(mapStateToProps)(Header);