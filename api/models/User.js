const mongoose = require('mongoose')

let userSchema = mongoose.Schema({
	name: String,
	handle: { type: String, index: true, unique: true },
	password: String,
	dateCreated: Date,
	friends: [mongoose.Schema.Types.ObjectId],
	updated: { type: Date, default: Date.now }
})

module.exports = mongoose.model('User', userSchema)