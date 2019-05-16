// import fetch from 'dva/fetch';
import queryString from 'query-string';

function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }

  const error = new Error(response.statusText);
  error.response = response;
  throw error;
}

/**
 * Requests a URL, returning a promise.
 *
 * @param  {string} url       The URL we want to request
 * @param  {object} [options] The options we want to pass to "fetch"
 * @return {object}           An object containing either "data" or "err"
 */
async function request(url, options) {
  const response = await fetch(url, options);
  checkStatus(response);
  const data = await response.json();
  return data;
}

export default request;

export const baseUrl = 'http://localhost:3000';
// export const baseUrl = 'http://47.106.141.90:3000';

export function get(funUrl, queryStrObj = {}) {
  const finalUrl = baseUrl + funUrl;

  const urls = [finalUrl, finalUrl.includes('?') ? '' : '?', queryString.stringify(queryStrObj)];
  return request(urls.join(''), { method: 'GET' });
}

export function post(funUrl, params = {}) {
  const finalUrl = baseUrl + funUrl;
  return request(finalUrl, { method: 'POST', body: JSON.stringify(params) });
}
