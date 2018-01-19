import React, { PropTypes } from 'react'
import { Menu, Affix } from 'antd';
import { Link, Events, scrollSpy } from 'react-scroll';
import './index.css'

const configs = [
  {
    key: 'DepartmentProfile',
    name: '系部简介'
  },
  {
    key: 'DepartmentLeadership',
    name: '系部领导'
  },
  {
    key: 'OrganizationalStructure',
    name: '组织结构'
  },
  {
    key: 'DirectorMessage',
    name: '主任寄语'
  }
]
const MenuBar = () => {
  return (
    <div>
      <Affix>
        <div>
          <ul className="menu-bar" >
            {
                  configs.map(config => (
                    <li
                      key={config.key}
                    >
                      <Link
                        offset={-80}
                        activeClass="menu-bar-link"
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
        </div>
      </Affix>
    </div>
  );
}

export default MenuBar;
