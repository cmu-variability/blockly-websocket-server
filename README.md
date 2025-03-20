# Blockly Collaboration WebSocket Server

This server handles real-time synchronization for the collaborative Blockly editor using Yjs.

## Deployment Options

This WebSocket server needs to be deployed to a service that supports WebSockets and persistent connections. Vercel does not support these, so you'll need to use an alternative service.

### Option 1: Deploy to Render.com (Recommended)

1. Create an account at [Render.com](https://render.com)
2. Create a new Web Service
3. Connect to your GitHub repository
4. Use the following settings:
   - **Environment**: Node
   - **Build Command**: `npm install`
   - **Start Command**: `node server.js`
   - **Plan**: Free or Starter ($7/month for better uptime)

### Option 2: Deploy to Fly.io

1. Install the Fly CLI: `curl -L https://fly.io/install.sh | sh`
2. Login to Fly: `fly auth login`
3. Launch the app: `fly launch`
4. Deploy: `fly deploy`

### Option 3: Deploy to Heroku

1. Install the Heroku CLI and login
2. Create a new app: `heroku create your-app-name`
3. Add the heroku remote: `git remote add heroku https://git.heroku.com/your-app-name.git`
4. Deploy: `git push heroku main`

## Environment Variables

- `PORT`: The port the server will listen on (provided by the hosting service)
- `HOST`: Host address to bind to (default: '0.0.0.0')

## Local Development

```bash
npm install
npm start
```

The server will be available at http://localhost:1234
