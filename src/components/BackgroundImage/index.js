import React from 'react';
import './index.css'

export default type => (Component) => {
  return class AddBackgroundImage extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        name: 'lidanqiu'
      }
    }
    render() {
      return (
        <div>
          <img className="EnhanceImage_background" src={require('../../assets/background01.jpg')} alt="背景图" />
          <Component {...this.props} {...this.state} />
        </div>

      )
    }
  }
}
