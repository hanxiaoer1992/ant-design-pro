import request from '../utils/request';

export async function test() {
  return request('/api/test');
}
