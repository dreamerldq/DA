import _ from 'lodash'
import request from '../utils/request';

const url = 'http://127.0.0.1:3000/news'
export async function createUser(params) {
  return request(url, {
    method: 'POST',
    headers: _.pickBy({
      'Content-Type': 'application/json'
    }),
    body: JSON.stringify(params)
  });
}
export async function getUser(params) {
  return request(`http://127.0.0.1:3000/news/${params}`, {
    method: 'GET',
    headers: _.pickBy({
      'Content-Type': 'application/json'
    })
  });
}

