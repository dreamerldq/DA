import React from 'react';
import { Menu, Icon } from 'antd';
import { connect } from 'dva';
import _ from 'lodash';

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
const { Item } = Menu
const NewsNotice = ({dispatch, newsNotice}) => {
 return (
     <div>这是新闻通知的界面</div>
 )
   
}
 NewsNotice.propTypes = {
};
const mapStateToProps = ({ newsNotice }) => ({
    newsNotice
});
export default connect(mapStateToProps)(NewsNotice);