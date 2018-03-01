import _ from 'lodash'
import request from '../utils/request';

const url = `${window.host}/projects`
export async function get(id) {
  return request(`${url}/${id}`, {
    method: 'GET',
    headers: _.pickBy({
      'Content-Type': 'application/json'
    })
  });
}
export async function create(params) {
  return request(`${url}`, {
    method: 'POST',
    headers: _.pickBy({
      'Content-Type': 'application/json'
    }),
    body: JSON.stringify(params)
  });
}

export async function getAll() {
  return request(`${url}`, {
    method: 'GET',
    headers: _.pickBy({
      'Content-Type': 'application/json'
    })
  });
}

