//	NPM Modules modules
const express = require('express')
const mongoose = require('mongoose')
const User = require('../models/User')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const router = express.Router()
mongoose.connect('mongodb://192.168.2.150/VoidChat')

router.post('/login', (req, res) => {
	var db = mongoose.connection
	db.on('error', console.error.bind(console, 'connection error:'))
	db.once('open', function() {
		User.findOne({ handle: req.body.handle }, (err, docs) => {
			if(err) {
				res.status(500)
			} else {
				if(docs === 0) {
					res.send(false)
				} else {
					bcrypt.compare(req.body.password, docs.password, (err, result) => {
						if(err || !result) {
							res.status(false)
						} else {
							let token = jwt.sign({
								handle: docs.handle,
								username: docs.username,
								exp: new Date.now() + 1000 * 60 * 60 * 12, // Token valid for 12 hours
								iat: new Date.now()
							}, 'kitties') //todo: Change before release
							res.send(token)
						}
					})
				}
			}
		})
	})
})

module.exports = router