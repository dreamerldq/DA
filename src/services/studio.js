import _ from 'lodash'
import request from '../utils/request';

export async function createStudio(params) {
  return request('http://127.0.0.1:3000/studios', {
    method: 'POST',
    headers: _.pickBy({
      'Content-Type': 'application/json'
    }),
    body: JSON.stringify(params)
  });
}
export async function getStudioList() {
  return request('http://127.0.0.1:3000/studios', {
    method: 'GET',
    headers: _.pickBy({
      'Content-Type': 'application/json'
    })
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
export async function getProfession(profession) {
  return request(`http://127.0.0.1:3000/professions/detail/${profession}`, {
    method: 'GET',
    headers: _.pickBy({
      'Content-Type': 'application/json'
    })
  });
}
export async function getStudio(id) {
  return request(`http://127.0.0.1:3000/studios/${id}`, {
    method: 'GET',
    headers: _.pickBy({
      'Content-Type': 'application/json'
    })
  });
}

