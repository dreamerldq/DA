import _ from 'lodash'
import request from '../utils/request';

const url = `${window.host}/news`

export async function createNews(params) {
  return request(url, {
    method: 'POST',
    headers: _.pickBy({
      'Content-Type': 'application/json'
    }),
    body: JSON.stringify(params)
  });
}
export async function editNews(id, params) {
  return request(`${url}/${id}`, {
    method: 'PATCH',
    headers: _.pickBy({
      'Content-Type': 'application/json'
    }),
    body: JSON.stringify(params)
  });
}
export async function getNews() {
  return request(`${url}`, {
    method: 'GET',
    headers: _.pickBy({
      'Content-Type': 'application/json'
    })
  });
}
export async function deleteNews(id) {
  return request(`${url}/${id}`, {
    method: 'DELETE',
    headers: _.pickBy({
      'Content-Type': 'application/json'
    })
  });
}
export async function getNewsDetail(id) {
  return request(`${url}/${id}`, {
    method: 'GET',
    headers: _.pickBy({
      'Content-Type': 'application/json'
    })
  });
}

