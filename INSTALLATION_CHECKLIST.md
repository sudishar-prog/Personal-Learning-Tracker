# Installation Checklist

Use this checklist to verify your SkillStack installation is complete and working.

## ✅ Pre-Installation

- [ ] Node.js 18+ installed
  ```bash
  node --version  # Should show v18.x.x or higher
  ```
- [ ] npm installed
  ```bash
  npm --version  # Should show 9.x.x or higher
  ```
- [ ] PostgreSQL database available (Supabase or local)
- [ ] Git installed (optional, for version control)

## ✅ File Structure

Verify all essential files exist:

### Configuration Files
- [ ] package.json
- [ ] tsconfig.json
- [ ] tailwind.config.ts
- [ ] next.config.js
- [ ] postcss.config.js
- [ ] .eslintrc.json
- [ ] .env.example
- [ ] .gitignore
- [ ] middleware.ts

### Database
- [ ] prisma/schema.prisma

### Core Application
- [ ] app/layout.tsx
- [ ] app/page.tsx
- [ ] app/providers.tsx
- [ ] app/globals.css

### Pages
- [ ] app/login/page.tsx
- [ ] app/dashboard/page.tsx
- [ ] app/skills/page.tsx
- [ ] app/log/page.tsx
- [ ] app/progress/page.tsx
- [ ] app/settings/page.tsx

### API Routes
- [ ] app/api/auth/[...nextauth]/route.ts
- [ ] app/api/register/route.ts
- [ ] app/api/skills/route.ts
- [ ] app/api/skills/[id]/route.ts
- [ ] app/api/logs/route.ts
- [ ] app/api/stats/route.ts
- [ ] app/api/progress/route.ts

### Components
- [ ] components/Navbar.tsx
- [ ] components/StatCard.tsx
- [ ] components/SkillCard.tsx
- [ ] components/LogEntryRow.tsx
- [ ] components/WeeklyChart.tsx
- [ ] components/ProgressLineChart.tsx
- [ ] components/DistributionChart.tsx
- [ ] components/EmptyState.tsx
- [ ] components/ConfirmDialog.tsx

### UI Components
- [ ] components/ui/button.tsx
- [ ] components/ui/card.tsx
- [ ] components/ui/dialog.tsx
- [ ] components/ui/input.tsx
- [ ] components/ui/label.tsx
- [ ] components/ui/select.tsx
- [ ] components/ui/textarea.tsx

### Utilities
- [ ] lib/auth.ts
- [ ] lib/prisma.ts
- [ ] lib/utils.ts

### Documentation
- [ ] README.md
- [ ] START_HERE.md
- [ ] QUICKSTART.md
- [ ] SETUP.md
- [ ] DEPLOYMENT.md
- [ ] FEATURES.md
- [ ] TESTING_GUIDE.md
- [ ] PROJECT_SUMMARY.md

## ✅ Dependencies Installation

```bash
npm install
```

Verify installation:
- [ ] node_modules/ directory created
- [ ] No error messages during installation
- [ ] package-lock.json created

Check for critical dependencies:
```bash
npm list next react next-auth @prisma/client
```

Expected output should show:
- [ ] next@14.x.x
- [ ] react@18.x.x
- [ ] next-auth@4.x.x
- [ ] @prisma/client@5.x.x

## ✅ Environment Configuration

- [ ] .env file created (copy from .env.example)
- [ ] DATABASE_URL set
- [ ] NEXTAUTH_SECRET set (generate with `openssl rand -base64 32`)
- [ ] NEXTAUTH_URL set (http://localhost:3000 for local)

Verify .env format:
```env
DATABASE_URL="postgresql://..."
NEXTAUTH_SECRET="your-secret-here"
NEXTAUTH_URL="http://localhost:3000"
```

## ✅ Database Setup

### Generate Prisma Client
```bash
npx prisma generate
```

Verify:
- [ ] No errors during generation
- [ ] node_modules/.prisma/client/ directory created

### Push Database Schema
```bash
npx prisma db push
```

Verify:
- [ ] Database connection successful
- [ ] Tables created (User, Skill, LogEntry)
- [ ] No error messages

### Optional: Open Prisma Studio
```bash
npx prisma studio
```

Verify:
- [ ] Opens at http://localhost:5555
- [ ] Shows User, Skill, LogEntry tables
- [ ] Tables are empty (no data yet)

## ✅ Build Verification

### Development Build
```bash
npm run dev
```

Verify:
- [ ] Server starts without errors
- [ ] Shows "Ready" message
- [ ] Listening on http://localhost:3000
- [ ] No TypeScript errors
- [ ] No compilation errors

### Production Build (Optional)
```bash
npm run build
```

Verify:
- [ ] Build completes successfully
- [ ] .next/ directory created
- [ ] No build errors
- [ ] Shows build statistics

## ✅ Application Access

With dev server running:

### Homepage
- [ ] Navigate to http://localhost:3000
- [ ] Redirects to /login
- [ ] Login page loads

### Login Page
- [ ] Form displays correctly
- [ ] Email and password fields visible
- [ ] "Sign In" button visible
- [ ] "Sign up" toggle link visible
- [ ] No console errors (F12)

## ✅ Basic Functionality

### Registration
- [ ] Click "Sign up"
- [ ] Fill in name, email, password
- [ ] Click "Sign Up"
- [ ] Success toast appears
- [ ] Switches to sign in form

### Login
- [ ] Enter registered email
- [ ] Enter password
- [ ] Click "Sign In"
- [ ] Redirects to /dashboard
- [ ] Dashboard loads successfully

### Dashboard
- [ ] Stat cards display (all showing 0)
- [ ] Navigation bar visible
- [ ] User name/email in navbar
- [ ] "Log Learning" button visible
- [ ] Empty state for charts
- [ ] Empty state for recent logs

### Navigation
- [ ] Click "Skills" - navigates to /skills
- [ ] Click "Log Learning" - navigates to /log
- [ ] Click "Progress" - navigates to /progress
- [ ] Click "Settings" - navigates to /settings
- [ ] Click "Dashboard" - returns to /dashboard
- [ ] Active page highlighted in navbar

### Sign Out
- [ ] Click "Sign Out"
- [ ] Redirects to /login
- [ ] Session cleared
- [ ] Cannot access protected routes

## ✅ Browser Console

Open DevTools (F12) and check:

### Console Tab
- [ ] No red errors
- [ ] No warnings about missing dependencies
- [ ] No authentication errors

### Network Tab
- [ ] API calls succeed (200 status)
- [ ] No 404 errors
- [ ] No 500 errors

### Application Tab
- [ ] Cookies set (next-auth.session-token)
- [ ] LocalStorage accessible

## ✅ Database Verification

Using Prisma Studio (`npx prisma studio`):

- [ ] User table has your registered user
- [ ] Password is hashed (not plain text)
- [ ] Email is correct
- [ ] Skill table is empty (initially)
- [ ] LogEntry table is empty (initially)

## ✅ File Permissions (Unix/Mac)

```bash
chmod +x scripts/*.sh
```

Verify:
- [ ] scripts/setup.sh is executable
- [ ] scripts/reset-db.sh is executable

## ✅ TypeScript Compilation

```bash
npx tsc --noEmit
```

Verify:
- [ ] No TypeScript errors
- [ ] All types resolve correctly

## ✅ Linting

```bash
npm run lint
```

Verify:
- [ ] No linting errors
- [ ] Only warnings (if any)

## ✅ Documentation

Verify you can access:
- [ ] README.md renders correctly
- [ ] All markdown files are readable
- [ ] Links between docs work
- [ ] Code blocks are formatted

## 🎯 Final Verification

Complete this quick workflow:

1. **Create Account**
   - [ ] Register new user
   - [ ] Sign in successfully

2. **Add Skill**
   - [ ] Navigate to Skills
   - [ ] Click "Add Skill"
   - [ ] Fill form and submit
   - [ ] Skill appears in list

3. **Log Learning**
   - [ ] Navigate to Log Learning
   - [ ] Select skill
   - [ ] Enter duration
   - [ ] Submit form
   - [ ] Redirects to dashboard

4. **View Dashboard**
   - [ ] Stats updated (1 skill, hours logged)
   - [ ] Recent log appears
   - [ ] Chart shows data

5. **Check Progress**
   - [ ] Navigate to Progress
   - [ ] Charts display data
   - [ ] Skills table shows skill

## 🐛 Common Issues

### Issue: "Cannot connect to database"
**Solution**: Check DATABASE_URL in .env

### Issue: "NEXTAUTH_SECRET is not defined"
**Solution**: Add NEXTAUTH_SECRET to .env

### Issue: "Module not found"
**Solution**: Run `npm install` again

### Issue: "Port 3000 already in use"
**Solution**: Use `PORT=3001 npm run dev`

### Issue: "Prisma Client not generated"
**Solution**: Run `npx prisma generate`

### Issue: "Table does not exist"
**Solution**: Run `npx prisma db push`

## ✅ Installation Complete!

If all items are checked, your installation is complete and working!

### Next Steps:
1. Read [FEATURES.md](FEATURES.md) to learn about all features
2. Follow [TESTING_GUIDE.md](TESTING_GUIDE.md) for comprehensive testing
3. Check [DEPLOYMENT.md](DEPLOYMENT.md) when ready to deploy

### Quick Commands Reference:
```bash
# Start development
npm run dev

# View database
npx prisma studio

# Reset database
./scripts/reset-db.sh

# Build for production
npm run build

# Start production
npm start
```

---

**Installation Status**: ✅ Complete

**Date**: _______________

**Notes**: _______________________________________________
