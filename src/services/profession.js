import _ from 'lodash'
import request from '../utils/request';

export async function createProfession(params) {
  return request('http://127.0.0.1:3000/professions', {
    method: 'POST',
    headers: _.pickBy({
      'Content-Type': 'application/json'
    }),
    body: JSON.stringify(params)
  });
}
export async function getProfessionList() {
  return request('http://127.0.0.1:3000/professions', {
    method: 'GET',
    headers: _.pickBy({
      'Content-Type': 'application/json'
    })
  });
}
export async function getProfession(id) {
  return request(`http://127.0.0.1:3000/professions/${id}`, {
    method: 'GET',
    headers: _.pickBy({
      'Content-Type': 'application/json'
    })
  });
}

