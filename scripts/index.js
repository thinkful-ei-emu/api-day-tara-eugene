'use strict';
/* global shoppingList, store, Item */
// eslint-disable-next-line no-unused-vars
$(document).ready(function() {
  shoppingList.bindEventListeners();
  shoppingList.render();
});

// api.getItems()
//   .then(res => res.json())
//   .then(jsonData=>console.log(jsonData));

/* api.createItem('pears')
  .then(res => res.json())
  .then((newItem) => {
    return api.getItems();
  })
  .then(res => res.json())
  .then((items) => {
    console.log(items);
  }); */

api.getItems()
  .then(res => res.json())
  .then((items) => {
    items.forEach((item) => store.addItem(item));
    shoppingList.render();
  });

// api.getItems()
//   .then(res => res.json())
//   .then((items) => {
//     const item= items[0];
//     return api.updateItem(item.id, {checked: true});
//   })
//   .then(res => res.json())
//   .then(() => console.log('updated!')); */