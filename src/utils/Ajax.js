/* eslint-disable class-methods-use-this */
const fetch = require('isomorphic-unfetch');
const qs = require('qs');

/**
 * Ajax util
 */
export default class Ajax {
  async request(options) {
    try {
      const {
        url, method = 'get', headers = {}, data: body = {}, params = {},
      } = options;
      let res;
      let endpoint = url;

      if (Object.keys(params).length) {
        endpoint = `${endpoint}?${qs.stringify(params)}`;
      }

      switch (method.toLowerCase()) {
        case 'get':
        default:
          res = await fetch(endpoint, { method, headers });
          break;
        case 'post':
          res = await fetch(endpoint, { method, headers, body });
          break;
      }

      const { ok, status } = res;
      const data = await res.json();
      return { ok, status, data };
    } catch (err) {
      return { data: null, err };
    }
  }
}
