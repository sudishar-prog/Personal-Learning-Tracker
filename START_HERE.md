# 🚀 Start Here - SkillStack

Welcome to SkillStack! This guide will help you get started quickly.

## What is SkillStack?

SkillStack is a personal learning tracker that helps you:
- 📚 Track skills you're learning
- ⏱️ Log time spent learning
- 📊 Visualize your progress with charts
- 🎯 Set and achieve learning goals
- 🔥 Maintain learning streaks

## Quick Navigation

Choose your path:

### 🏃 I want to run it NOW
→ Read [QUICKSTART.md](QUICKSTART.md) (5 minutes)

### 📖 I want detailed setup instructions
→ Read [SETUP.md](SETUP.md) (15 minutes)

### 🚀 I want to deploy to production
→ Read [DEPLOYMENT.md](DEPLOYMENT.md) (30 minutes)

### 🧪 I want to test the application
→ Read [TESTING_GUIDE.md](TESTING_GUIDE.md)

### 📋 I want to see all features
→ Read [FEATURES.md](FEATURES.md)

### 🏗️ I want to understand the architecture
→ Read [PROJECT_SUMMARY.md](PROJECT_SUMMARY.md)

### 📚 I want complete documentation
→ Read [README.md](README.md)

## Fastest Way to Get Started

```bash
# 1. Install dependencies
npm install

# 2. Copy environment template
cp .env.example .env

# 3. Edit .env with your database URL and secrets
# (See QUICKSTART.md for getting a free database)

# 4. Setup database
npx prisma generate
npx prisma db push

# 5. Start development server
npm run dev

# 6. Open http://localhost:3000
```

## What You Need

- ✅ Node.js 18+ installed
- ✅ PostgreSQL database (free tier on Supabase works great)
- ✅ 10 minutes of your time

## Project Structure at a Glance

```
skillstack/
├── app/              # Next.js pages and API routes
├── components/       # React components
├── lib/              # Utilities and configurations
├── prisma/           # Database schema
├── scripts/          # Helper scripts
└── [docs]            # Documentation files
```

## Key Technologies

- **Next.js 14** - React framework with App Router
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS** - Utility-first CSS
- **NextAuth.js** - Authentication
- **Prisma** - Database ORM
- **PostgreSQL** - Database
- **Recharts** - Data visualization

## First Time Setup Checklist

- [ ] Clone/download the repository
- [ ] Install Node.js 18+ if not installed
- [ ] Run `npm install`
- [ ] Get a PostgreSQL database (Supabase recommended)
- [ ] Create `.env` file with your configuration
- [ ] Run `npx prisma generate`
- [ ] Run `npx prisma db push`
- [ ] Run `npm run dev`
- [ ] Open http://localhost:3000
- [ ] Create your first account
- [ ] Add your first skill
- [ ] Log your first learning session

## Common Issues & Solutions

### "Cannot connect to database"
→ Check your `DATABASE_URL` in `.env` file

### "NEXTAUTH_SECRET is not defined"
→ Generate one with: `openssl rand -base64 32`

### "Port 3000 already in use"
→ Use different port: `PORT=3001 npm run dev`

### "Module not found"
→ Delete `node_modules` and run `npm install` again

## Getting Help

1. Check the relevant documentation file
2. Look for error messages in:
   - Browser console (F12)
   - Terminal where dev server is running
3. Review [TESTING_GUIDE.md](TESTING_GUIDE.md) for common scenarios
4. Check [FEATURES.md](FEATURES.md) to verify feature availability

## Documentation Files

| File | Purpose | Time to Read |
|------|---------|--------------|
| START_HERE.md | This file - your starting point | 2 min |
| QUICKSTART.md | Get running in 5 minutes | 5 min |
| README.md | Complete documentation | 15 min |
| SETUP.md | Detailed setup guide | 10 min |
| DEPLOYMENT.md | Production deployment | 20 min |
| FEATURES.md | Feature checklist | 10 min |
| TESTING_GUIDE.md | Manual testing guide | 30 min |
| PROJECT_SUMMARY.md | Technical overview | 10 min |

## What to Do After Setup

1. **Create an account** - Sign up on the login page
2. **Add skills** - Go to Skills page and add what you're learning
3. **Log learning** - Track your study sessions
4. **Check dashboard** - See your stats and progress
5. **View analytics** - Explore the Progress page

## Development Workflow

```bash
# Start development
npm run dev

# View database
npx prisma studio

# Reset database (⚠️ deletes all data)
./scripts/reset-db.sh

# Build for production
npm run build

# Start production server
npm start
```

## Key Features to Try

1. **Skills Management**
   - Create skills with categories
   - Set target hours
   - Choose custom colors

2. **Learning Logs**
   - Log time in minutes
   - Add notes about what you learned
   - Choose activity type

3. **Dashboard**
   - View your stats
   - See weekly activity chart
   - Check recent logs

4. **Progress Analytics**
   - Filter by time range
   - View hours over time
   - See skill distribution
   - Check progress percentages

5. **Streak Tracking**
   - Maintain daily learning streaks
   - See consecutive days

## Production Deployment

When ready to deploy:

1. Push code to GitHub
2. Create account on Render.com
3. Follow [DEPLOYMENT.md](DEPLOYMENT.md)
4. Your app will be live in ~15 minutes

## Tech Stack Highlights

- ✅ Production-ready code
- ✅ Type-safe with TypeScript
- ✅ Secure authentication
- ✅ Responsive design
- ✅ Interactive charts
- ✅ Clean architecture
- ✅ Well documented

## Support & Resources

- 📖 Documentation in this repository
- 🐛 Report issues on GitHub
- 💡 Feature requests welcome
- 🤝 Contributions appreciated

## Next Steps

1. Choose your path from the navigation above
2. Follow the relevant guide
3. Start tracking your learning journey!

---

**Ready to level up your learning?** Let's go! 🎓

Start with [QUICKSTART.md](QUICKSTART.md) →
