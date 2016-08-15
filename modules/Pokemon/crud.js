'use strict';

const Model = require('./model');



const CRUD = {

  create: function(data,callback) {
    const model = new Model(data);
    model.save(callback);

  },
  retrieve: function(query,callback) {

    Model.find(query,callback);

  },
  update: function(query, mod, options) {

    options = options || {};

    Model.update(query, mod, options, function (err, data) {

      if (err) {

        return console.log('ERROR: ', err);

      }
      return console.log('ALTERADO:', data);
    });

  },

  delete: function(query) {

    Model.remove(query, function (err, data) {

      if (err)  { 

        return console.log('error: ', err);
      }
      
      return console.log('APAGOU:', data);
    });
  },
};

module.exports = CRUD;