import React from 'react'
import { connect } from 'dva'
import Header from '../Header'

class MainLayout extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div>
        <Header />
        {this.props.children}
        {

        }
      </div>
    )
  }
}

MainLayout.propTypes = {
}
const mapStateToProps = ({ header }) => ({
  header
})
export default connect(mapStateToProps)(MainLayout)
