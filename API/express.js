//  NPM Node modules
const express = require('express')
const bodyParser = require('body-parser')
const helmet = require('helmet')
const morgan = require('morgan')
const compression = require('compression')
//const cors = require("cors")
//const httpErrors = require("http-errors")

//	Import Routers
const authRouter = require('./routes/auth')

let app = express()

app.use(bodyParser.urlencoded({ extended: false }))
app.use(helmet())
app.use(morgan('dev'))
app.use(compression({filter: shouldCompress}))
app.use('/public', express.static('public'))
app.use('/auth', authRouter)

function shouldCompress(req, res) {
	if (req.headers['x-no-compression']) {
		//	Don't compress responses with this request header
		return false
	}
	
	//	Fallback to standard filter function
	return compression.filter(req, res)
}

module.exports = app