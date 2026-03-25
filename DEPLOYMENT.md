# Deployment Guide

## Deploy to Render (Recommended - FREE)

### Steps:

1. **Push code to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin <your-github-repo-url>
   git push -u origin main
   ```

2. **Go to Render**
   - Visit: https://render.com
   - Sign up with GitHub

3. **Create New Web Service**
   - Click "New +" → "Web Service"
   - Connect your GitHub repository
   - Configure:
     - **Name**: user-management-api
     - **Environment**: Node
     - **Build Command**: `npm install`
     - **Start Command**: `npm start`
     - **Plan**: Free

4. **Deploy**
   - Click "Create Web Service"
   - Wait 2-3 minutes for deployment
   - Your API will be live at: `https://your-app-name.onrender.com`

### Test Deployed API:
```
GET https://your-app-name.onrender.com/users
POST https://your-app-name.onrender.com/users
```

---

## Deploy to Railway (Alternative - FREE $5 credit)

### Steps:

1. **Push to GitHub** (same as above)

2. **Go to Railway**
   - Visit: https://railway.app
   - Sign up with GitHub

3. **Deploy**
   - Click "New Project" → "Deploy from GitHub repo"
   - Select your repository
   - Railway auto-detects Node.js and deploys
   - Click "Generate Domain" to get public URL

---

## Deploy to Vercel (Serverless)

### Steps:

1. **Install Vercel CLI**
   ```bash
   npm i -g vercel
   ```

2. **Deploy**
   ```bash
   vercel
   ```

3. **Follow prompts** and your API will be live

---

## Important Notes:

- **Free tier limitations**: 
  - Render: App sleeps after 15 min of inactivity (takes 30s to wake up)
  - Railway: $5 credit per month
  
- **Environment Variables**: Set `PORT` in platform settings (usually auto-configured)

- **In-memory data**: Will reset on each deployment/restart. For persistent data, add a database later.

---

## Recommended for Assignment: RENDER

Why? 
- Completely free
- Easy setup
- Auto-deploys on git push
- Provides HTTPS URL
- Perfect for demos
