import _ from 'lodash'
import request from '../utils/request';

const url = `${window.host}/studios`
const url2 = `${window.host}`
export async function createStudio(params) {
  return request(`${url}`, {
    method: 'POST',
    headers: _.pickBy({
      'Content-Type': 'application/json'
    }),
    body: JSON.stringify(params)
  });
}
export async function getStudioList() {
  return request(`${url}`, {
    method: 'GET',
    headers: _.pickBy({
      'Content-Type': 'application/json'
    })
  });
}
export async function getProfessionList() {
  return request(`${url2}/professions`, {
    method: 'GET',
    headers: _.pickBy({
      'Content-Type': 'application/json'
    })
  });
}
export async function getProfession(profession) {
  return request(`${url2}/professions/detail/${profession}`, {
    method: 'GET',
    headers: _.pickBy({
      'Content-Type': 'application/json'
    })
  });
}
export async function getStudio(id) {
  return request(`${url}/${id}`, {
    method: 'GET',
    headers: _.pickBy({
      'Content-Type': 'application/json'
    })
  });
}

