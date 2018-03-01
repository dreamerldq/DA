import _ from 'lodash'
import request from '../utils/request';

const url = `${window.host}/users`
export default async function getUser(id) {
  return request(`${url}/detail/${id}`, {
    method: 'GET',
    headers: _.pickBy({
      'Content-Type': 'application/json'
    })
  });
}
