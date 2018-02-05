import _ from 'lodash'
import request from '../utils/request';

const url = 'http://127.0.0.1:3000/users'
export default async function createUser(params) {
  console.log('这是转换成json的数据', JSON.stringify(params))
  return request(url, {
    method: 'POST',
    headers: _.pickBy({
      'Content-Type': 'application/json'
    }),
    body: JSON.stringify(params)
  });
}
