# ✅ Render.com Deployment Checklist

Use this checklist to deploy SkillStack step by step.

---

## 📋 Pre-Deployment

- [ ] Code pushed to GitHub
- [ ] Render.com account created
- [ ] 15 minutes available

---

## 🗄️ Step 1: Create Database (3 min)

- [ ] Go to [render.com](https://render.com)
- [ ] Click "New +" → "PostgreSQL"
- [ ] Name: `skillstack-db`
- [ ] Region: Oregon (US West) or closest
- [ ] Plan: Free
- [ ] Click "Create Database"
- [ ] Wait for "Available" status
- [ ] **Copy "Internal Database URL"** and save it

---

## 🚀 Step 2: Create Web Service (8 min)

- [ ] Click "New +" → "Web Service"
- [ ] Connect GitHub repository
- [ ] Select: `Personal-Learning-Tracker`
- [ ] Configure:
  - [ ] Name: `skillstack`
  - [ ] Region: Same as database
  - [ ] Branch: `main`
  - [ ] Build Command: `npm install && npx prisma generate && npm run build`
  - [ ] Start Command: `npm start`
  - [ ] Plan: Free

---

## 🔐 Step 3: Environment Variables

- [ ] Click "Advanced" → "Add Environment Variable"

### Variable 1: DATABASE_URL
- [ ] Key: `DATABASE_URL`
- [ ] Value: Paste Internal Database URL from Step 1

### Variable 2: NEXTAUTH_SECRET
- [ ] Run locally: `openssl rand -base64 32`
- [ ] Key: `NEXTAUTH_SECRET`
- [ ] Value: Paste generated secret

### Variable 3: NEXTAUTH_URL
- [ ] Key: `NEXTAUTH_URL`
- [ ] Value: `https://skillstack.onrender.com`

---

## 🏗️ Step 4: Deploy

- [ ] Click "Create Web Service"
- [ ] Wait for build (~5-10 minutes)
- [ ] Check logs for "Build successful"
- [ ] Wait for "Deploy live"

---

## 🗃️ Step 5: Initialize Database

- [ ] Go to Web Service dashboard
- [ ] Click "Shell" tab
- [ ] Wait for shell to connect
- [ ] Run: `npx prisma db push`
- [ ] Wait for "Your database is now in sync"

---

## 🎭 Step 6: Add Demo Data (Optional)

- [ ] In Shell, run: `npx tsx scripts/seed-demo-data.ts`
- [ ] Wait for "Demo data seeded successfully"
- [ ] Note credentials: `demo@skillstack.com` / `demo123`

---

## ✅ Step 7: Test Deployment

- [ ] Copy your app URL (top of dashboard)
- [ ] Open in browser
- [ ] See login page with blue gradient
- [ ] Create account or use demo account
- [ ] Test features:
  - [ ] Dashboard loads
  - [ ] Can add skills
  - [ ] Can log learning
  - [ ] Charts display
  - [ ] Progress page works
  - [ ] Settings accessible

---

## 🎉 Deployment Complete!

- [ ] App is live
- [ ] Database connected
- [ ] All features working
- [ ] URL shared with others

---

## 📝 Post-Deployment

- [ ] Bookmark your app URL
- [ ] Save database credentials
- [ ] Test on mobile device
- [ ] Share with friends
- [ ] Add to portfolio

---

## 🔄 Optional Enhancements

- [ ] Set up custom domain
- [ ] Configure UptimeRobot (keep awake)
- [ ] Enable deploy notifications
- [ ] Add error tracking
- [ ] Set up monitoring

---

## 📊 Your Deployment Info

Fill this in after deployment:

```
App URL:          https://_____________________.onrender.com
Database Name:    skillstack-db
Service Name:     skillstack
Region:           _____________________
Plan:             Free / Paid
Deployed Date:    _____________________
```

---

## 🐛 If Something Goes Wrong

### Build Failed
- [ ] Check build logs
- [ ] Verify build command
- [ ] Test `npm run build` locally

### Database Connection Error
- [ ] Verify DATABASE_URL is Internal URL
- [ ] Check database is in same region
- [ ] Ensure database is "Available"

### App Not Loading
- [ ] Check deployment status
- [ ] Review logs for errors
- [ ] Verify start command is `npm start`

### Environment Variable Issues
- [ ] Check all 3 variables are set
- [ ] No typos in variable names
- [ ] Values are not empty
- [ ] Redeploy after changes

---

## 💡 Quick Tips

✅ **Use Internal Database URL** (faster, more secure)
✅ **Same region** for database and web service
✅ **Strong NEXTAUTH_SECRET** (use openssl)
✅ **Test locally first** before deploying
✅ **Check logs** if issues occur

---

## 📞 Need Help?

- 📖 Read: RENDER_DEPLOYMENT_GUIDE.md (detailed guide)
- 🌐 Visit: [Render Docs](https://render.com/docs)
- 💬 Ask: [Render Community](https://community.render.com)
- 🐛 Check: Troubleshooting section in guide

---

## ✨ Success Criteria

Your deployment is successful when:

- ✅ App loads at your Render URL
- ✅ Can create account and login
- ✅ Dashboard shows correctly
- ✅ Can add and manage skills
- ✅ Can log learning sessions
- ✅ Charts display data
- ✅ All pages accessible
- ✅ Mobile responsive

---

**Time to Complete**: ~15 minutes
**Difficulty**: Easy
**Cost**: Free (with limitations)

**Let's deploy!** 🚀
