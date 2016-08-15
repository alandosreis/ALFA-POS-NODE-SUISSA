'use strict';
var PokemonModel = require('./model')
var CRUD = require('./crud')


const Controller = {
	create: (req, res) => {
		let mod = req.body
		let cb = (err, data) => {
			if (err) throw new Error(err)
				res.json(data)
			}

			CRUD.create(mod, cb)
	},
	find: (req, res) => {
		let query = {}

		let cb = (err, data) => {
			if (err) throw new Error(err)
				res.json(data)
			}

			CRUD.find(query, cb)
	},
	findOne: (req, res) => {
		let query = {_id: req.params.id}
		let cb = (err, data) => {
			if (err) throw new Error(err)
				res.json(data)
			}

			CRUD.findOne(query, cb)
	},

	remove: (req, res) => {
		let query = {_id: req.params.id}
		let cb = (err, data) => {
			if (err) throw new Error(err)
				res.json(data)
			}

			CRUD.delete(query, cb)
	},
	update: (req, res) => {
		let query = {_id: req.params.id}
		let cb = (err, data) => {
			if (err) throw new Error(err)
				res.json(data)
			}

			CRUD.update(query, cb)
	}
}

module.exports = Controller;
