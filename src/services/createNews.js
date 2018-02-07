import _ from 'lodash'
import request from '../utils/request';

const url = 'http://127.0.0.1:3000/news'
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
  return request('http://127.0.0.1:3000/news', {
    method: 'GET',
    headers: _.pickBy({
      'Content-Type': 'application/json'
    })
  });
}
export async function deleteNews(id) {
  return request(`http://127.0.0.1:3000/news/${id}`, {
    method: 'DELETE',
    headers: _.pickBy({
      'Content-Type': 'application/json'
    })
  });
}

