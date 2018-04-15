//  Import configured and routed express object
const app = require('./express')

//  NPM Node modules
const config = require('config')
const socketIO = require('socket.io')

//  Native Node modules
const http = require('http')
const https = require('https')

//  HTTPS options for the server
//TODO: setup ssl
const httpsOptions = {}

const httpServer = http.createServer(app)
const httpsServer = https.createServer(httpsOptions, app)

let io = socketIO(httpsServer)

io.on('connection', (socket) => {
	socket.emit('/hello', { 'test': true })
})

httpServer.listen(config.get('webserver.http.port'), () => {
	console.log(`HTTP server listening to port ${config.get('webserver.http.port')}`)
})

if(config.get('webserver.secure.enable')) {
	httpsServer.listen(config.get('webserver.https.port'), () => {
		console.log(`HTTP server listening to port ${config.get('webserver.https.port')}`)
	})
}