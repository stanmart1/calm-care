# Coolify Deployment Guide

## Quick Deploy to Coolify

1. **Push to Git Repository**
   ```bash
   git add .
   git commit -m "Prepare for Coolify deployment"
   git push origin main
   ```

2. **Coolify Configuration**
   - Repository: Your Git repository URL
   - Build Pack: Nixpacks (auto-detected)
   - Port: 3000
   - Environment: production

3. **Environment Variables** (Optional)
   ```
   NODE_ENV=production
   PORT=3000
   ```

## Files Added for Deployment

- `nixpacks.toml` - Nixpacks configuration
- `Dockerfile` - Fallback container configuration  
- `public/_redirects` - SPA routing support
- `.coolify` - Coolify environment config

## Build Process

The app will:
1. Install dependencies with `npm ci`
2. Build production bundle with `npm run build`
3. Serve static files with `serve` on port 3000

## Deployment Ready ✅

Your CalmCare Counseling app is now ready for Coolify deployment.