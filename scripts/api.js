'use strict';

/* global api */

const api = (function() {

  const BASE_URL = 'https://thinkful-list-api.herokuapp.com/tara';

  const getItems = function() {
    return Promise.resolve('A successful response!');
  };

  return {
    getItems
  };

}());