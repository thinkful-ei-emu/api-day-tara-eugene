'use strict';

/* global api */

const api = (function() {

  function listApiFetch(...args) {
    let error;
    return fetch(...args)
      .then(res => {
        if (!res.ok) {
          // Valid HTTP response but non-2xx status - let's create an error!
          error = { code: res.status };
        }
   
        // In either case, parse the JSON stream:
        return res.json();
      })
   
      .then(data => {
        // If error was flagged, reject the Promise with the error object
        if (error) {
          error.message = data.message;
          return Promise.reject(error);
        }
   
        // Otherwise give back the data as resolved Promise
        return data;
      });
  }

  const BASE_URL = 'https://thinkful-list-api.herokuapp.com/tara';

  const getItems = function() {
    return listApiFetch(`${BASE_URL}/items`);
    //    return Promise.resolve('A successful response!');
  };

  const createItem = function(name) {
    let newItem = JSON.stringify({name: name});
    return listApiFetch(`${BASE_URL}/items`, {
      method: 'POST',
      headers: new Headers({
        'Content-Type': 'application/json'
      }),
      body: newItem
    });
  };

  const updateItem = function(id, updateData) {
    return listApiFetch(`${BASE_URL}/items/${id}`, {
      method: 'PATCH',
      headers: new Headers({
        'Content-Type': 'application/json'
      }),
      body: JSON.stringify(updateData)
    });
  };

  const deleteItem = function(id) {
    return listApiFetch(`${BASE_URL}/items/${id}`, {
      method: 'DELETE'
    });
  };
  

  return {
    getItems,
    createItem,
    updateItem,
    deleteItem
  };

}());