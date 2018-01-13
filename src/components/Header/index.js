import React from 'react';
import { Menu, Icon, Button } from 'antd';
import { connect } from 'dva';
import _ from 'lodash';
import { Row, Col } from 'antd/lib/grid';
import title from './menu';
import Modal from './Modal';
import styles from './index.less';

const { SubMenu } = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
const { Item } = Menu

const Header = ({ dispatch, header, form }) => {
  const { modelVisiable } = header;
  const handleClick = (e) => {
    dispatch({ type: 'header/link', payload: e.key })
  }
  const loginToggle = () => {
    dispatch({ type: 'header/showModel' })
  }

  return (
    <div className={styles.container} >
      <Menu
        onClick={handleClick}
        mode="horizontal"
      >
        {title.map((menu) => {
              if (menu.subTitle) {
                  return (
                    <SubMenu key={menu.key} title={<span><Icon type="setting" />{menu.title}</span>}>
                      {menu.subTitle.map((sub) => {
                        return <Item key={sub.key}>{sub.title}</Item>
                      })}
                    </SubMenu>
                      )
              }
                return (
                  <Item key={menu.key}>
                    <Icon type="appstore" />{menu.title}
                  </Item>
              )
            })}
      </Menu>

      <Button onClick={loginToggle}>
              登陆
      </Button>


      {
        modelVisiable ?
          <Modal visible={modelVisiable} dispatch={dispatch} />
        : null
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
