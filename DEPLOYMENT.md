# Deployment Guide for Render.com

This guide walks you through deploying SkillStack to Render.com.

## Prerequisites

- GitHub account with your code pushed
- Render.com account (free tier available)

## Step 1: Create PostgreSQL Database

1. Log in to [Render.com](https://render.com)
2. Click **"New +"** → **"PostgreSQL"**
3. Configure database:
   - **Name**: `skillstack-db`
   - **Database**: `skillstack`
   - **User**: (auto-generated)
   - **Region**: Choose closest to your users
   - **Plan**: Free
4. Click **"Create Database"**
5. Wait for database to provision (1-2 minutes)
6. Copy the **"Internal Database URL"** (starts with `postgresql://`)

## Step 2: Create Web Service

1. Click **"New +"** → **"Web Service"**
2. Connect your GitHub repository
3. Configure service:
   - **Name**: `skillstack`
   - **Region**: Same as database
   - **Branch**: `main`
   - **Root Directory**: (leave empty)
   - **Runtime**: Node
   - **Build Command**: 
     ```
     npm install && npx prisma generate && npm run build
     ```
   - **Start Command**: 
     ```
     npm start
     ```
   - **Plan**: Free

## Step 3: Add Environment Variables

In the "Environment" section, add these variables:

### DATABASE_URL
- **Key**: `DATABASE_URL`
- **Value**: Paste the Internal Database URL from Step 1

### NEXTAUTH_SECRET
Generate a secure secret:
```bash
openssl rand -base64 32
```
- **Key**: `NEXTAUTH_SECRET`
- **Value**: Paste the generated secret

### NEXTAUTH_URL
- **Key**: `NEXTAUTH_URL`
- **Value**: Your Render app URL (e.g., `https://skillstack.onrender.com`)
  - You can find this in the service settings after creation
  - Or use the format: `https://[your-service-name].onrender.com`

### NODE_VERSION (Optional)
- **Key**: `NODE_VERSION`
- **Value**: `18.17.0`

## Step 4: Deploy

1. Click **"Create Web Service"**
2. Render will automatically:
   - Clone your repository
   - Install dependencies
   - Generate Prisma client
   - Build Next.js app
   - Start the server
3. Wait for deployment (5-10 minutes for first deploy)

## Step 5: Initialize Database

After first deployment, you need to push the database schema:

### Option A: Using Render Shell

1. Go to your web service dashboard
2. Click **"Shell"** tab
3. Run:
   ```bash
   npx prisma db push
   ```

### Option B: Using Local Terminal

1. Temporarily add the database URL to your local `.env`:
   ```env
   DATABASE_URL="[your-render-database-url]"
   ```
2. Run:
   ```bash
   npx prisma db push
   ```
3. Remove the production URL from your local `.env`

## Step 6: Test Your App

1. Visit your app URL: `https://[your-service-name].onrender.com`
2. Create a test account
3. Add a skill
4. Log some learning time
5. Check the dashboard and progress pages

## Troubleshooting

### Build Fails

**Error**: "Cannot find module '@prisma/client'"
- **Solution**: Ensure `npx prisma generate` is in build command

**Error**: "Database connection failed"
- **Solution**: Verify `DATABASE_URL` is correct and database is running

### Runtime Errors

**Error**: "NEXTAUTH_URL is not defined"
- **Solution**: Add `NEXTAUTH_URL` environment variable

**Error**: "Invalid session"
- **Solution**: Clear browser cookies and sign in again

### Database Issues

**Error**: "Table does not exist"
- **Solution**: Run `npx prisma db push` to create tables

**Error**: "Connection timeout"
- **Solution**: Use Internal Database URL, not External

## Updating Your App

1. Push changes to GitHub
2. Render automatically detects and redeploys
3. Monitor deployment in Render dashboard

## Custom Domain (Optional)

1. Go to service **"Settings"**
2. Scroll to **"Custom Domain"**
3. Click **"Add Custom Domain"**
4. Follow DNS configuration instructions

## Monitoring

### View Logs
- Go to **"Logs"** tab in service dashboard
- Real-time logs show requests and errors

### Database Management
- Use Prisma Studio locally:
  ```bash
  DATABASE_URL="[render-db-url]" npx prisma studio
  ```

## Performance Tips

### Free Tier Limitations
- Service spins down after 15 minutes of inactivity
- First request after spin-down takes 30-60 seconds
- Database has 1GB storage limit

### Upgrade Options
- **Starter Plan** ($7/month): No spin-down, better performance
- **Database Plan** ($7/month): 10GB storage, better performance

## Security Checklist

- ✅ `NEXTAUTH_SECRET` is strong and unique
- ✅ Database URL uses internal connection
- ✅ Environment variables are not committed to Git
- ✅ `.env` is in `.gitignore`

## Backup Strategy

### Database Backups

Render automatically backs up PostgreSQL databases:
- Free tier: Daily backups, 7-day retention
- Paid tier: Configurable backup schedule

### Manual Backup

```bash
# Export data
DATABASE_URL="[render-db-url]" npx prisma db pull
DATABASE_URL="[render-db-url]" npx prisma db seed
```

## Cost Estimate

### Free Tier (Recommended for Testing)
- Web Service: Free
- PostgreSQL: Free
- **Total**: $0/month

### Production Tier
- Web Service Starter: $7/month
- PostgreSQL Starter: $7/month
- **Total**: $14/month

## Support

- [Render Documentation](https://render.com/docs)
- [Render Community](https://community.render.com)
- [Next.js Deployment Docs](https://nextjs.org/docs/deployment)

## Next Steps

After successful deployment:
1. Set up monitoring and alerts
2. Configure custom domain
3. Enable HTTPS (automatic on Render)
4. Set up CI/CD pipeline
5. Add error tracking (e.g., Sentry)
