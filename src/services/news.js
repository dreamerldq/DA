import _ from 'lodash'
import request from '../utils/request';

const url = `${window.host}/news`
console.log('SSSS', url)
//const url = 'http://127.0.0.1:3000/news'
export async function createUser(params) {
  return request(url, {
    method: 'POST',
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

