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

// CORS headers for HTTP responses
const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type'
}

// Create a server
const server = http.createServer((request, response) => {
  // Add CORS headers
  Object.keys(corsHeaders).forEach(key => {
    response.setHeader(key, corsHeaders[key])
  })
  
  // Handle OPTIONS preflight requests
  if (request.method === 'OPTIONS') {
    response.writeHead(204)
    response.end()
    return
  }

  response.writeHead(200, { 'Content-Type': 'text/plain' })
  response.end('Blockly Collaboration WebSocket Server Running\n')
})

// Create a websocket server
const wss = new WebSocket.Server({ server })

// Custom connection handler that extracts room from URL
wss.on('connection', (conn, req) => {
  // Extract the room name from the URL path
  const pathname = req.url || '/'
  let roomName = pathname.slice(1) // Remove leading slash
  
  // Handle /yjs/:roomName format
  if (roomName.startsWith('yjs/')) {
    roomName = roomName.substring(4) // Remove 'yjs/' prefix
  }
  
  // Get the first path segment if there are multiple
  roomName = roomName.split('/')[0]
  
  console.log(`New WebSocket connection for room: ${roomName}`)
  
  // Set up the WebSocket connection with the extracted room name
  setupWSConnection(conn, req, { roomName })
})

// Error handling
wss.on('error', (error) => {
  console.error('WebSocket server error:', error)
})

// Start the server
server.listen(port, host, () => {
  console.log(`Blockly WebSocket server running at http://${host}:${port}`)
  console.log('WebSocket connections are accepted at ws://<host>:<port>/:roomName')
})

// Handle termination gracefully
process.on('SIGINT', () => {
  console.log('Shutting down WebSocket server...')
  wss.close(() => {
    console.log('WebSocket server closed')
    process.exit(0)
  })
})

// For health checks
process.on('SIGTERM', () => {
  console.log('SIGTERM received, shutting down')
  process.exit(0)
})
