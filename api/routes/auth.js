//	NPM Modules modules
const express = require('express')
const mongoose = require('mongoose')
const User = require('../models/User')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const router = express.Router()
mongoose.connect('mongodb://192.168.2.150/VoidChat', { connectTimeoutMS: 1000 })
	.then(() => {
		console.log('Mongo connected!')
	})
	.catch((reason) => {
		console.error.bind(reason, 'connection error:')
	})

router.post('/login', (req, res) => {
	var db = mongoose.connection
	db.on('error', console.error.bind(console, 'connection error:'))
	db.collection('users').findOne({ handle: req.body.handle }, (err, docs) => {
		if(err) {
			res.send(false)
		} else {
			if(!docs) {
				res.send(false)
			} else {
				bcrypt.compare(req.body.password, docs.password, (err, result) => {
					if(err || !result) {
						res.send(false)
					} else {
						let token = jwt.sign({
							handle: docs.handle,
							name: docs.name,
							exp: Date.now() + 1000 * 60 * 60 * 12, //	Token valid for 12 hours
							iat: Date.now()
						}, 'kitties') //	todo: Change before release
						res.send(token)
					}
				})
			}
		}
	})
})

module.exports = router