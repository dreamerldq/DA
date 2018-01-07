import React from 'react';
import { Menu, Icon } from 'antd';
import styles from './index.less';
import { connect } from 'dva';
import title from './menu';
import _ from 'lodash';

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
const { Item } = Menu
const Header = ({dispatch, header}) => {
  const handleClick = (e) => {
    dispatch({type: 'header/link', payload: e.key })
  }
  return (
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
  );
};

Header.propTypes = {
};
const mapStateToProps = ({ header }) => ({
  header
});
export default connect(mapStateToProps)(Header);