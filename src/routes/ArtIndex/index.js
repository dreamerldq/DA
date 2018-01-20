import React from 'react';
import { connect } from 'dva';
import _ from 'lodash';
import { Carousel } from 'antd';
import './index.css'

const ArtIndex = ({ dispatch, departmentProfile }) => {
  return (
    <div>
      <Carousel autoplay>
        <div className="img_01">1</div>
        <div className="img_02">1</div>
        <div className="img_03">1</div>
        <div className="img_04">1</div>
        <div className="img_05">1</div>
      </Carousel>
    </div>
  )
}
ArtIndex.propTypes = {
};
export default connect()(ArtIndex);
