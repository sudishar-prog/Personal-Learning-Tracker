# 🚀 Complete Render.com Deployment Guide

## Overview

This guide will help you deploy SkillStack on Render.com using their PostgreSQL database. Total time: ~15 minutes.

**Cost**: FREE (with limitations) or $14/month for production

---

## 📋 Prerequisites

- [x] GitHub account with your code pushed
- [x] Render.com account (create at [render.com](https://render.com))
- [x] 15 minutes of your time

---

## 🎯 Deployment Steps

### Step 1: Create Render.com Account

1. Go to [render.com](https://render.com)
2. Click "Get Started" or "Sign Up"
3. Sign up with GitHub (recommended) or email
4. Verify your email if needed

**Time**: 2 minutes

---

### Step 2: Create PostgreSQL Database

1. **Click "New +"** (top right)
2. Select **"PostgreSQL"**

3. **Configure Database**:
   ```
   Name:           skillstack-db
   Database:       skillstack
   User:           (auto-generated)
   Region:         Oregon (US West) or closest to you
   PostgreSQL:     Version 16 (latest)
   Plan:           Free
   ```

4. **Click "Create Database"**

5. **Wait for provisioning** (~1-2 minutes)
   - Status will change from "Creating" to "Available"

6. **Copy Connection Strings**:
   - Scroll down to "Connections"
   - **Copy "Internal Database URL"** (starts with `postgresql://`)
   - Save it somewhere - you'll need it in Step 4

   Example format:
   ```
   postgresql://skillstack_db_user:xxxxx@dpg-xxxxx-a/skillstack_db
   ```

**Time**: 3 minutes

---

### Step 3: Push Code to GitHub

If you haven't already:

```bash
# In your project directory
git add .
git commit -m "Ready for deployment"
git push origin main
```

**Time**: 1 minute

---

### Step 4: Create Web Service

1. **Click "New +"** (top right)
2. Select **"Web Service"**

3. **Connect Repository**:
   - Click "Connect account" if needed
   - Select your GitHub account
   - Find and select: `Personal-Learning-Tracker`
   - Click "Connect"

4. **Configure Service**:
   ```
   Name:              skillstack
   Region:            Oregon (US West) - SAME as database
   Branch:            main
   Root Directory:    (leave empty)
   Runtime:           Node
   Build Command:     npm install && npx prisma generate && npm run build
   Start Command:     npm start
   Plan:              Free
   ```

5. **Add Environment Variables**:
   
   Click "Advanced" → "Add Environment Variable"
   
   Add these THREE variables:

   **Variable 1: DATABASE_URL**
   ```
   Key:   DATABASE_URL
   Value: <paste-internal-database-url-from-step-2>
   ```
   
   **Variable 2: NEXTAUTH_SECRET**
   
   First, generate a secret on your computer:
   ```bash
   openssl rand -base64 32
   ```
   
   Copy the output, then:
   ```
   Key:   NEXTAUTH_SECRET
   Value: <paste-generated-secret>
   ```
   
   **Variable 3: NEXTAUTH_URL**
   ```
   Key:   NEXTAUTH_URL
   Value: https://skillstack.onrender.com
   ```
   
   (Replace `skillstack` with your actual service name if different)

6. **Click "Create Web Service"**

7. **Wait for Deployment** (~5-10 minutes)
   - You'll see logs in real-time
   - Wait for "Build successful" and "Deploy live"

**Time**: 8 minutes (including build time)

---

### Step 5: Initialize Database Schema

After deployment is complete:

1. **Go to your Web Service** dashboard
2. **Click "Shell"** tab (top menu)
3. **Wait for shell to connect** (~10 seconds)
4. **Run this command**:
   ```bash
   npx prisma db push
   ```
5. **Wait for completion** (~5 seconds)
6. You should see: "Your database is now in sync with your Prisma schema"

**Time**: 1 minute

---

### Step 6: (Optional) Add Demo Data

Still in the Shell:

```bash
npx tsx scripts/seed-demo-data.ts
```

This creates:
- Demo user: `demo@skillstack.com` / `demo123`
- 4 sample skills
- 29 log entries

**Time**: 30 seconds

---

### Step 7: Test Your Deployment

1. **Get Your URL**:
   - Look at the top of your service dashboard
   - You'll see: `https://skillstack.onrender.com` (or similar)

2. **Open in Browser**:
   - Click the URL or copy/paste it
   - You should see the login page with blue gradient!

3. **Test Login**:
   - If you added demo data: `demo@skillstack.com` / `demo123`
   - Or create a new account

4. **Verify Features**:
   - Dashboard loads
   - Can add skills
   - Can log learning
   - Charts display

**Time**: 2 minutes

---

## ✅ Deployment Complete!

Your app is now live at: `https://skillstack.onrender.com`

---

## 🎨 What You've Deployed

```
✅ Full-stack Next.js application
✅ PostgreSQL database
✅ Authentication system
✅ Beautiful blue gradient UI
✅ Interactive charts
✅ Responsive design
✅ All features working
```

---

## 📊 Free Tier Details

### What You Get (FREE):
- ✅ 750 hours/month web service
- ✅ 1GB PostgreSQL storage
- ✅ Automatic HTTPS
- ✅ Custom domain support
- ✅ Automatic deployments from GitHub

### Limitations:
- ⚠️ Service spins down after 15 minutes of inactivity
- ⚠️ First request after spin-down takes 30-60 seconds
- ⚠️ Database limited to 1GB
- ⚠️ 90-day data retention for free databases

### When to Upgrade ($14/month):
- ✅ No spin-down (always fast)
- ✅ 10GB database storage
- ✅ Better performance
- ✅ Longer data retention
- ✅ Priority support

---

## 🔄 Automatic Deployments

Good news! Your app will auto-deploy when you push to GitHub:

```bash
# Make changes locally
git add .
git commit -m "Update feature"
git push origin main

# Render automatically:
# 1. Detects the push
# 2. Builds your app
# 3. Deploys new version
# 4. Takes ~5 minutes
```

---

## 🛠️ Managing Your Deployment

### View Logs
1. Go to your Web Service dashboard
2. Click "Logs" tab
3. See real-time application logs

### View Database
1. Go to your PostgreSQL dashboard
2. Click "Connect" → "External Connection"
3. Use these credentials with a PostgreSQL client

Or use Prisma Studio locally:
```bash
# In your local project
DATABASE_URL="<your-render-database-url>" npx prisma studio
```

### Restart Service
1. Go to Web Service dashboard
2. Click "Manual Deploy" → "Deploy latest commit"

### Update Environment Variables
1. Go to Web Service dashboard
2. Click "Environment"
3. Edit variables
4. Service will automatically redeploy

---

## 🔒 Security Checklist

- [x] DATABASE_URL uses internal connection (faster & secure)
- [x] NEXTAUTH_SECRET is strong and unique
- [x] NEXTAUTH_URL matches your actual URL
- [x] .env file NOT in GitHub (correct!)
- [x] Passwords hashed with bcrypt
- [x] HTTPS enabled automatically

---

## 🌐 Custom Domain (Optional)

To use your own domain:

1. **Buy a domain** (e.g., from Namecheap, Google Domains)

2. **In Render**:
   - Go to Web Service → Settings
   - Scroll to "Custom Domain"
   - Click "Add Custom Domain"
   - Enter: `skillstack.yourdomain.com`

3. **In your domain registrar**:
   - Add CNAME record:
     ```
     Type:  CNAME
     Name:  skillstack
     Value: skillstack.onrender.com
     ```

4. **Wait for DNS** (~5-60 minutes)

5. **Render auto-provisions SSL** (HTTPS)

---

## 📈 Monitoring

### Check Service Health
- Dashboard shows: CPU, Memory, Response time
- Set up notifications for downtime

### Database Usage
- PostgreSQL dashboard shows storage used
- Monitor to stay under 1GB (free tier)

### Logs
- Check logs for errors
- Filter by date/time
- Download logs if needed

---

## 🐛 Troubleshooting

### Issue: "Build Failed"

**Check**:
- Build logs for specific error
- Ensure all dependencies in package.json
- Verify build command is correct

**Fix**:
```bash
# Test build locally first
npm run build
```

### Issue: "Database Connection Failed"

**Check**:
- DATABASE_URL is correct
- Using INTERNAL database URL (not external)
- Database is in same region as web service

**Fix**:
- Copy Internal Database URL again
- Update environment variable
- Redeploy

### Issue: "NEXTAUTH_SECRET not defined"

**Check**:
- Environment variable is set
- No typos in variable name
- Value is not empty

**Fix**:
- Generate new secret: `openssl rand -base64 32`
- Add to environment variables
- Redeploy

### Issue: "Page not found" or "404"

**Check**:
- Deployment completed successfully
- Start command is `npm start`
- Build created .next folder

**Fix**:
- Check logs for errors
- Verify build command
- Redeploy

### Issue: "Slow first load"

**Cause**: Free tier spins down after 15 minutes

**Solutions**:
- Upgrade to paid plan ($7/month)
- Use a service like UptimeRobot to ping every 14 minutes
- Accept the limitation for free tier

### Issue: "Database full"

**Check**: PostgreSQL dashboard for storage usage

**Fix**:
- Delete old log entries
- Upgrade to paid plan (10GB)
- Optimize data storage

---

## 💡 Pro Tips

### 1. Keep Service Awake (Free Tier)
Use [UptimeRobot](https://uptimerobot.com) (free):
- Monitor your URL
- Ping every 5 minutes
- Prevents spin-down

### 2. Monitor Costs
- Check Render dashboard monthly
- Set up billing alerts
- Review usage patterns

### 3. Backup Database
Free tier has 90-day retention. For important data:
```bash
# Export data locally
DATABASE_URL="<render-url>" npx prisma db pull
```

### 4. Use Environment Groups
For multiple environments (staging, production):
- Create environment groups in Render
- Share common variables
- Override specific ones

### 5. Enable Deploy Notifications
- Settings → Notifications
- Get notified on Slack/Discord/Email
- Know when deployments succeed/fail

---

## 🎯 Next Steps

### 1. Test Everything
- [ ] Create account
- [ ] Add skills
- [ ] Log learning
- [ ] Check dashboard
- [ ] View progress
- [ ] Test on mobile

### 2. Share Your App
- [ ] Share URL with friends
- [ ] Add to portfolio
- [ ] Post on social media
- [ ] Add to resume

### 3. Monitor Performance
- [ ] Check logs daily (first week)
- [ ] Monitor database usage
- [ ] Test from different locations
- [ ] Get user feedback

### 4. Consider Upgrades
- [ ] Custom domain ($0 extra)
- [ ] Paid plan if needed ($14/month)
- [ ] CDN for static assets
- [ ] Error tracking (Sentry)

---

## 📞 Support Resources

### Render Documentation
- [Render Docs](https://render.com/docs)
- [PostgreSQL Guide](https://render.com/docs/databases)
- [Node.js Guide](https://render.com/docs/deploy-node-express-app)

### Community
- [Render Community](https://community.render.com)
- [Discord](https://discord.gg/render)
- [Status Page](https://status.render.com)

### Your Documentation
- README.md - Project overview
- FEATURES.md - Feature list
- TESTING_GUIDE.md - Testing instructions

---

## 🎉 Congratulations!

You've successfully deployed SkillStack to production!

```
🌐 Live URL:     https://skillstack.onrender.com
🗄️ Database:     PostgreSQL on Render
🔐 Auth:         NextAuth.js
🎨 Design:       Blue gradient theme
✅ Status:       Production ready
```

**Your app is now accessible to anyone in the world!** 🚀

---

## 📝 Quick Reference

### Important URLs
```
Dashboard:    https://dashboard.render.com
Your App:     https://skillstack.onrender.com
Database:     (in Render dashboard)
GitHub:       https://github.com/sudishar-prog/Personal-Learning-Tracker
```

### Important Commands
```bash
# Initialize database
npx prisma db push

# Add demo data
npx tsx scripts/seed-demo-data.ts

# View database locally
DATABASE_URL="<render-url>" npx prisma studio

# Generate secret
openssl rand -base64 32
```

### Environment Variables
```
DATABASE_URL      = Internal Database URL from Render
NEXTAUTH_SECRET   = Generated with openssl
NEXTAUTH_URL      = https://skillstack.onrender.com
```

---

**Need help?** Check the troubleshooting section or open an issue on GitHub!

**Enjoy your deployed app!** 🎓
