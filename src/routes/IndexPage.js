import React from 'react';
import { connect } from 'dva';
import Header from '../components/Header/index';
function IndexPage() {
  return (
    <div>
      <Header/>
    </div>
  );
}

IndexPage.propTypes = {
};

export default connect()(IndexPage);
