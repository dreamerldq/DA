import React from 'react';
import './index.css'

export default type => (Component) => {
  return class AddBackgroundImage extends React.Component {
    render() {
      return (
        <div>
          <img className="EnhanceImage_background" src={`http://oli7sq88l.bkt.clouddn.com/background${type}.jpg`} alt="背景图" />
          <Component />
        </div>

      )
    }
  }
}