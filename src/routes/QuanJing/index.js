import React from 'react'
import { connect } from 'dva'
import PhotoSphereViewer from 'photo-sphere-viewer'
import { Row, Col } from 'antd'
import { routerRedux, Link } from 'dva/router';
import '../../../node_modules/photo-sphere-viewer/dist/photo-sphere-viewer.css'
import './index.css'

class QuanJing extends React.Component {
  constructor(props) {
    super(props)
  }
  componentDidMount() {
    const { quanjing, dispatch } = this.props
    const { imgData } = quanjing
    const navbar = this.getNavBar()
    const viewer = PhotoSphereViewer({
      container: 'view',
      panorama: require(`./asset/${imgData.path}.jpg`),
      navbar
    });
  }

  componentDidUpdate() {
    const view = document.getElementById('view')
    while (view.hasChildNodes()) {
      view.removeChild(view.firstChild);
    }
    const { quanjing, dispatch } = this.props
    const { imgData } = quanjing

    const navbar = this.getNavBar()
    const viewer = PhotoSphereViewer({
      container: 'view',
      panorama: require(`./asset/${imgData.path}.jpg`),
      navbar
    });
  }
  getNavBar() {
    const { quanjing, dispatch } = this.props
    const { imgData } = quanjing
    console.log('AAAA', imgData)
    const navbar = [
      {
        id: 'my-button',
        title: `前往${imgData.navbar.name}`,
        className: 'button',
        content: `前往${imgData.navbar.name}`,
        onClick() {
          dispatch(routerRedux.push({
            pathname: `/quanjing/${imgData.navbar.path}`
          }))
        }
      },
      'autorotate',
      'zoom',
      'markers',
      'caption',
      'fullscreen'
    ]
    return navbar
  }
  render() {
    return (
      <div>
        <div style={{ width: '1000px', height: '526px', margin: '100px auto' }} id="view" />
      </div>

    )
  }
}
const mapStateToProps = ({ quanjing }) => {
  return {
    quanjing
  }
}
export default connect(mapStateToProps)(QuanJing);
