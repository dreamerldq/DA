import _ from 'lodash'
import request from '../utils/request';

const url = `${window.host}/professions`
export async function createProfession(params) {
  return request(`${url}`, {
    method: 'POST',
    headers: _.pickBy({
      'Content-Type': 'application/json'
    }),
    body: JSON.stringify(params)
  });
}
export async function editProfession(id, params) {
  return request(`${url}/${id}`, {
    method: 'PATCH',
    headers: _.pickBy({
      'Content-Type': 'application/json'
    }),
    body: JSON.stringify(params)
  });
}
export async function getProfessionList() {
  return request(`${url}`, {
    method: 'GET',
    headers: _.pickBy({
      'Content-Type': 'application/json'
    })
  });
}
export async function getProfession(id) {
  return request(`${url}/detail/${id}`, {
    method: 'GET',
    headers: _.pickBy({
      'Content-Type': 'application/json'
    })
  });
}

