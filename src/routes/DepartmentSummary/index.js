import React, { PropTypes, Component } from 'react'
import { Menu, Affix } from 'antd';
import { Link, Events, scrollSpy } from 'react-scroll';


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
class DepartmentSummary extends Component {
  render() {
    return (
      <div style={{ width: 180 }}>
        <Affix offsetTop={70}>
          <div >
            <div>
              <ul >
                {
                  configs.map(config => (
                    <li
                      key={config.key}
                    >
                      <Link
                        offset={-80}
                        // activeClass={classNames(classes.menuLinkActive)}
                        to={config.key}
                        spy={true}
                        smooth={true}
                        duration={250}
                      >
                       这是跳转的连接
                      </Link>
                    </li>
                  ))
                }
              </ul>
            </div>
          </div>
        </Affix>
      </div>
    );
  }
}

export default DepartmentSummary;
