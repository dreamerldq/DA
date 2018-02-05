import _ from 'lodash'
import request from '../utils/request';


export default async function createUser(params) {
  const url = `http://127.0.0.1:3000/users/${params}`
  return request(url, {
    method: 'GET',
    headers: _.pickBy({
      'Content-Type': 'application/json'
    })
  });
}
