/* eslint-disable no-unused-vars */
import Ajax from './Ajax';
import { ENDPOINTS } from '../config/constants';

const API_KEY = process.env.MDB_API_KEY;

/**
 * A simple client side caching using session storage.
 * The cache does not persist across browser windows.
 * @param {string} query The query to be cached
 * @returns {boolean} True if key exists false if doesn't
 */
function isSessionStorageQuery(query) {
  return sessionStorage.getItem(query) === null;
}

/**
 * Filter the results retrieved from the Movie DB
 * @param {Object} data The response data to be filtered
 */
function filterContentByMediaType(data) {
  const result = {};
  if (data && data.results) {
    const movies = data.results.filter(content => content.media_type === 'movie');
    const tv = data.results.filter(content => content.media_type === 'tv');
    const person = data.results.filter(content => content.media_type === 'person');
    result.movies = movies;
    result.tv = tv;
    result.person = person;
  }
  return result;
}

/**
 * Make a multi query to the Movie DB given a query string.
 * This object can be later abstracted to handle different types of api calls.
 * @param {string} query The query string
 */
export async function multiQuery(query) {
  const ajax = new Ajax();
  const requestOptions = {};
  requestOptions.url = ENDPOINTS.SEARCH_MULTI;
  requestOptions.method = 'GET';
  requestOptions.headers = {
    'content-type': 'application/json',
  };

  requestOptions.params = {
    api_key: API_KEY,
    query,
    include_adult: false,
  };
  const res = await ajax.request(requestOptions);
  const filteredContent = filterContentByMediaType(res.data);
  return filteredContent;
}
