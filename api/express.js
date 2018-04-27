//  NPM Node modules
const express = require('express')
const bodyParser = require('body-parser')
const helmet = require('helmet')
const morgan = require('morgan')
const compression = require('compression')
const cors = require('cors')
const config = require('config')
//const httpErrors = require("http-errors")

//	Import Routers
const authRouter = require('./routes/auth')

let app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(helmet({}))
app.use(morgan('dev'))
app.use(compression({filter: shouldCompress}))
app.use(cors({
	origin: config.get('webserver.cors.origin'),
	optionsSuccessStatus: 200,
	methods: 'POST, GET, PUT, DELETE, OPTIONS',
	credentials: false,
	maxAge: 86400,
	allowedHeaders: 'X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept'
}))
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