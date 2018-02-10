import React, { PropTypes } from 'react'
import { Menu, Affix } from 'antd';
import { Link, Events, scrollSpy } from 'react-scroll';
import './index.css'

const MenuBar = ({ configs }) => {
  return (
    <Affix className="menu_bar">
      <ul >
        {
                  configs.map(config => (
                    <li
                      key={config.key}
                    >
                      <Link
                        activeClass="menu_bar_link"
                        to={config.key}
                        spy={true}
                        smooth={true}
                        duration={250}
                      >
                        {config.name}
                      </Link>
                    </li>
                  ))
                }
      </ul>
    </Affix>
  );
}

export default MenuBar;
