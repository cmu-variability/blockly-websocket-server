# Blockly WebSocket Server

WebSocket server for real-time collaboration with the Blockly editor. This server uses Yjs to synchronize changes between multiple users.

## How it works

- Built with [Yjs](https://yjs.dev/) for conflict-free real-time collaboration
- Uses WebSockets for efficient real-time communication
- Handles multiple rooms for separate collaboration spaces

## Deployment

This server is designed to be deployed on platforms like Render.com that support Node.js applications with persistent connections.

### Setup on Render.com

1. Create a new Web Service in Render
2. Connect to your GitHub repository
3. Use the following settings:
   - Environment: Node
   - Build Command: `npm install`
   - Start Command: `node server.js`
   - Plan: Free or Starter ($7/month)

## Local Development

```bash
npm install
npm start
```

The server will run on port 1234 by default (or the PORT environment variable).
