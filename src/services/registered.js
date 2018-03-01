import _ from 'lodash'
import request from '../utils/request';

const url = `${window.host}/users`
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
  return request(`${url}/${params}`, {
    method: 'GET',
    headers: _.pickBy({
      'Content-Type': 'application/json'
    })
  });
}
export async function getAloneUser(params) {
  return request(`${url}/detail/${params}`, {
    method: 'GET',
    headers: _.pickBy({
      'Content-Type': 'application/json'
    })
  });
}
export async function updateUser(params, id) {
  return request(`${url}/${id}`, {
    method: 'PATCH',
    headers: _.pickBy({
      'Content-Type': 'application/json'
    }),
    body: JSON.stringify(params)
  });
}

