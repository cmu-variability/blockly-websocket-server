# WebSocket Server Deployment Instructions

## Step 1: Create a new GitHub repository

Create a new GitHub repository called `blockly-websocket-server` (or any name you prefer).

## Step 2: Copy these files to the root of the repository

Make sure these files are at the ROOT of your repository:
- `server.js`
- `package.json`

Do NOT create any subdirectories.

## Step 3: Deploy to Render.com

1. Go to [Render.com](https://render.com)
2. Click "New" and select "Web Service"
3. Connect to your new GitHub repository
4. Configure as follows:
   - Name: `blockly-websocket-server` (or any name you prefer)
   - Environment: `Node`
   - Build Command: `npm install`
   - Start Command: `node server.js`
   - Plan: Free
   
5. Click "Create Web Service"
6. Wait for deployment to complete

## Step 4: Update your Vercel environment variables

1. After successful deployment, copy the Render.com URL
2. Convert it from `https://` to `wss://`
3. Add it to your Vercel project as `NEXT_PUBLIC_WEBSOCKET_URL`

For example:
- Render URL: `https://blockly-websocket-server.onrender.com`
- WebSocket URL: `wss://blockly-websocket-server.onrender.com`

## Step 5: Redeploy your Vercel project

Run `vercel --prod` from your Next.js project directory to update with the new WebSocket URL.
