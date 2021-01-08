'use strict';
const pets = [
  {
    "name": "Scout",
    "type" : "cat",
    "age": "2",
    "sex": "male",
    "status": "available",
    "description": "lorem ipsum lorem ipsum lorem ipsum",
    "imageUrl": "https://pet-uploads.adoptapet.com/5/8/7/352561196.jpg"
  },
  {
    "name": "Starlet",
    "type" : "cat",
    "age": "3",
    "sex": "female",
    "status": "available",
    "description": "lorem ipsum lorem ipsum lorem ipsum",
    "imageUrl": "https://pet-uploads.adoptapet.com/2/7/5/352566761.jpg"
  },
  {
    "name": "Hula",
    "type" : "dog",
    "age": "2",
    "sex": "male",
    "status": "available",
    "description": "lorem ipsum lorem ipsum lorem ipsum",
    "imageUrl": "https://pet-uploads.adoptapet.com/b/1/c/491948405.jpg"
  },
  {
    "name": "Scout",
    "type" : "dog",
    "age": "1",
    "sex": "male",
    "status": "available",
    "description": "lorem ipsum lorem ipsum lorem ipsum",
    "imageUrl": "https://pet-uploads.adoptapet.com/3/f/6/491945943.jpg"
  },
]
pets.forEach(el => {
  el.createdAt = new Date ()
  el.updatedAt = new Date ()
}) 
module.exports = {
  up:  (queryInterface, Sequelize) => {
   return queryInterface.bulkInsert ('Pets', pets, {}) 
  },

  down:(queryInterface, Sequelize) => {
    return queryInterface.bulkDelete ('Pets', null, {})
  }
};
