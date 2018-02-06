import _ from 'lodash'
import request from '../utils/request';

export default async function getNewsDetail(id) {
  return request(`http://127.0.0.1:3000/news/${id}`, {
    method: 'GET',
    headers: _.pickBy({
      'Content-Type': 'application/json'
    })
  });
}

