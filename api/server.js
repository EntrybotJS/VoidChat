//  Import configured and routed express object
const app = require('./express')

//  NPM Node modules
const config = require('config')
const socketIO = require('socket.io')

//  Native Node modules
const http = require('http')
const https = require('https')
const fs = require('fs')
const path = require('path')

//  HTTPS options for the server
const httpsOptions = {
	key: fs.readFileSync(path.resolve(config.get('webserver.ssl.key')), 'utf8'), //  Set key path
	cert: fs.readFileSync(path.resolve(config.get('webserver.ssl.cert')), 'utf8') //  Set cert path
}

const httpServer = http.createServer(app)
const httpsServer = https.createServer(httpsOptions, app)

let io = socketIO(httpsServer)

//			WebSockets
io.on('connection', (socket) => {
	//	On connect
	socket.on('disconnect', () => {
		//	On disconnect
	})
})

httpServer.listen(config.get('webserver.http.port'), () => {
	console.log(`HTTP server listening to port ${config.get('webserver.http.port')}`)
})

if(config.get('webserver.secure.enable')) {
	httpsServer.listen(config.get('webserver.https.port'), () => {
		console.log(`HTTP server listening to port ${config.get('webserver.https.port')}`)
	})
}