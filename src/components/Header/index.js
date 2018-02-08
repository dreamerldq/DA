import React from 'react';
import { Menu, Icon, Button, Row, Col } from 'antd';
import { connect } from 'dva';
import _ from 'lodash';
import title from './menu';
import styles from './index.css';

const { SubMenu } = Menu;
const MenuItemGroup = Menu.ItemGroup;
const { Item } = Menu

const Header = ({
  dispatch, header, form, profileManagement
}) => {
  const { modelVisiable } = header;
  const { profession } = profileManagement
  console.log('这是公共的数据', profession)
  const handleClick = (e) => {
    dispatch({ type: 'header/link', payload: e.key })
  }
  const loginToggle = () => {
    dispatch({ type: 'header/showModel' })
  }

  return (
    <Row className="header_container">
      <Col span={20}>
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
    </Row>

  );
};

Header.propTypes = {
};
const mapStateToProps = ({ header, profileManagement }) => ({
  header, profileManagement
});
export default connect(mapStateToProps)(Header);
