import _ from 'lodash'
import request from '../utils/request';


// const url = 'http://127.0.0.1:3000/login'
const url = `${window.host}/login`
export default async function createSession(params) {
  return request(url, {
    method: 'POST',
    headers: _.pickBy({
      'Content-Type': 'application/json'
    }),
    body: JSON.stringify(params)
  });
}
