'use strict';

/* global api */

const api = (function() {

  const BASE_URL = 'https://thinkful-list-api.herokuapp.com/tara';

  const getItems = function() {
    return fetch(`${BASE_URL}/items`);
    //    return Promise.resolve('A successful response!');
  };

  const createItem = function(name) {
    let newItem = JSON.stringify({name: name});
    return fetch(`${BASE_URL}/items`, {
      method: 'POST',
      headers: new Headers({
        'Content-Type': 'application/json'
      }),
      body: newItem
    });
  };

  const updateItem = function(id, updateData) {
    console.log(`${BASE_URL}/items/${id}`);
    return fetch(`${BASE_URL}/items/${id}`, {
      method: 'PATCH',
      headers: new Headers({
        'Content-Type': 'application/json'
      }),
      body: JSON.stringify(updateData)
    });
  };

  const deleteItem = function(id) {
    console.log(`Deleting item ${id}`);
    return fetch(`${BASE_URL}/items/${id}`, {
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