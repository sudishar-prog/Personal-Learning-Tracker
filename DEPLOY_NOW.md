# 🚀 Deploy to Render.com - Quick Start

## ⚡ 15-Minute Deployment

Follow these steps to get your app live!

---

## 📍 Step-by-Step

### 1️⃣ Create Database (3 min)

Go to [render.com](https://render.com) → New + → PostgreSQL

```
Name:     skillstack-db
Region:   Oregon (US West)
Plan:     Free
```

**Save the "Internal Database URL"** ⚠️

---

### 2️⃣ Create Web Service (2 min)

New + → Web Service → Connect GitHub → Select repo

```
Name:           skillstack
Build Command:  npm install && npx prisma generate && npm run build
Start Command:  npm start
Plan:           Free
```

---

### 3️⃣ Add Environment Variables (2 min)

Click "Advanced" → Add 3 variables:

**DATABASE_URL**
```
Paste Internal Database URL from Step 1
```

**NEXTAUTH_SECRET**
```bash
# Generate on your computer:
openssl rand -base64 32
# Paste the output
```

**NEXTAUTH_URL**
```
https://skillstack.onrender.com
```

---

### 4️⃣ Deploy (8 min)

Click "Create Web Service" → Wait for build

---

### 5️⃣ Initialize Database (1 min)

Go to Shell tab → Run:
```bash
npx prisma db push
```

---

### 6️⃣ Add Demo Data (Optional)

In Shell:
```bash
npx tsx scripts/seed-demo-data.ts
```

Login: `demo@skillstack.com` / `demo123`

---

## ✅ Done!

Your app is live at: `https://skillstack.onrender.com`

---

## 📚 Detailed Guides

- **RENDER_DEPLOYMENT_GUIDE.md** - Complete walkthrough
- **DEPLOYMENT_CHECKLIST.md** - Step-by-step checklist
- **DEPLOYMENT.md** - Original deployment guide

---

## 🆘 Quick Troubleshooting

**Build failed?**
→ Check build logs, verify commands

**Database error?**
→ Use Internal URL, same region

**App not loading?**
→ Check deployment status, review logs

**Need help?**
→ Read RENDER_DEPLOYMENT_GUIDE.md

---

## 💰 Cost

**Free Tier**: $0/month
- 750 hours web service
- 1GB database
- Spins down after 15 min

**Paid Tier**: $14/month
- Always on
- 10GB database
- Better performance

---

## 🎯 What You Get

```
✅ Live URL
✅ HTTPS enabled
✅ Auto-deploy from GitHub
✅ PostgreSQL database
✅ Beautiful blue gradient UI
✅ All features working
```

---

**Ready? Let's deploy!** 🚀

Start here: [render.com](https://render.com)
