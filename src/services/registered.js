import _ from 'lodash'
import request from '../utils/request';

const url = 'http://127.0.0.1:3000/users'
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
  return request(`http://127.0.0.1:3000/users/${params}`, {
    method: 'GET',
    headers: _.pickBy({
      'Content-Type': 'application/json'
    })
  });
}
export async function getAloneUser(params) {
  return request(`http://127.0.0.1:3000/users/detail/${params}`, {
    method: 'GET',
    headers: _.pickBy({
      'Content-Type': 'application/json'
    })
  });
}
export async function updateUser(params, id) {
  return request(`http://127.0.0.1:3000/users/${id}`, {
    method: 'PATCH',
    headers: _.pickBy({
      'Content-Type': 'application/json'
    }),
    body: JSON.stringify(params)
  });
}

