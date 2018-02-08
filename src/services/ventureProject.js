import _ from 'lodash'
import request from '../utils/request';

export async function get(id) {
  return request(`http://127.0.0.1:3000/projects/${id}`, {
    method: 'GET',
    headers: _.pickBy({
      'Content-Type': 'application/json'
    })
  });
}
export async function create(params) {
  return request('http://127.0.0.1:3000/projects', {
    method: 'POST',
    headers: _.pickBy({
      'Content-Type': 'application/json'
    }),
    body: JSON.stringify(params)
  });
}

export async function getAll() {
  return request('http://127.0.0.1:3000/projects', {
    method: 'GET',
    headers: _.pickBy({
      'Content-Type': 'application/json'
    })
  });
}

