#!/usr/bin/env node

/**
 * WebSocket server for Blockly collaboration
 * Based on the y-websocket package
 */

const WebSocket = require('ws')
const http = require('http')
const setupWSConnection = require('y-websocket/bin/utils').setupWSConnection

const port = process.env.PORT || 1234
const host = process.env.HOST || '0.0.0.0' // Use 0.0.0.0 for production deployments

// Create a server
const server = http.createServer((request, response) => {
  response.writeHead(200, { 'Content-Type': 'text/plain' })
  response.end('Blockly Collaboration WebSocket Server Running\n')
})

// Create a websocket server
const wss = new WebSocket.Server({ server })

wss.on('connection', setupWSConnection)

// Start the server
server.listen(port, host, () => {
  console.log(`Blockly WebSocket server running at http://${host}:${port}`)
  console.log('Ready for connections')
})

// For health checks
process.on('SIGTERM', () => {
  console.log('SIGTERM received, shutting down')
  process.exit(0)
})
