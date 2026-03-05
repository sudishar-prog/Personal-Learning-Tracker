# ⚡ Quick Start Guide

Get SkillStack running in 5 minutes!

## Prerequisites

- Node.js 18+ ([Download](https://nodejs.org))
- PostgreSQL database (we recommend [Supabase](https://supabase.com) - free tier)

## Option 1: Automated Setup (Recommended)

### 1. Run Setup Script

```bash
chmod +x scripts/setup.sh
./scripts/setup.sh
```

The script will:
- ✅ Check Node.js installation
- ✅ Create .env file from template
- ✅ Install dependencies
- ✅ Generate Prisma Client
- ✅ Set up database schema

### 2. Configure Environment

Edit `.env` file with your values:

```env
DATABASE_URL="postgresql://user:password@host:5432/skillstack"
NEXTAUTH_SECRET="run: openssl rand -base64 32"
NEXTAUTH_URL="http://localhost:3000"
```

### 3. Start Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) 🎉

## Option 2: Manual Setup

### 1. Install Dependencies

```bash
npm install
```

### 2. Configure Environment

```bash
cp .env.example .env
```

Edit `.env` with your configuration.

### 3. Setup Database

```bash
npx prisma generate
npx prisma db push
```

### 4. Start Server

```bash
npm run dev
```

## Getting Your Database URL

### Using Supabase (Free)

1. Go to [supabase.com](https://supabase.com)
2. Create account and new project
3. Go to Settings → Database
4. Copy "Connection string" (URI format)
5. Replace `[YOUR-PASSWORD]` with your password
6. Paste into `.env`

Example:
```
postgresql://postgres.xxx:password@aws-0-us-east-1.pooler.supabase.com:5432/postgres
```

### Using Local PostgreSQL

```bash
# Create database
createdb skillstack

# Use in .env
DATABASE_URL="postgresql://localhost:5432/skillstack"
```

## First Steps

1. **Create Account**
   - Click "Sign up" on login page
   - Enter name, email, password

2. **Add Your First Skill**
   - Go to "Skills" page
   - Click "Add Skill"
   - Fill in details

3. **Log Learning Time**
   - Click "Log Learning"
   - Select skill, duration, date
   - Add notes (optional)

4. **View Progress**
   - Check Dashboard for overview
   - Visit Progress page for analytics

## Useful Commands

```bash
# Development
npm run dev              # Start dev server
npm run build            # Build for production
npm start                # Start production server

# Database
npx prisma studio        # Open database GUI
npx prisma db push       # Update database schema
npx prisma generate      # Regenerate Prisma Client

# Reset database (⚠️ deletes all data)
./scripts/reset-db.sh
```

## Troubleshooting

### "Cannot connect to database"
- Check DATABASE_URL is correct
- Verify database is running
- Test connection with: `npx prisma db pull`

### "NEXTAUTH_SECRET is not defined"
- Generate secret: `openssl rand -base64 32`
- Add to .env file

### "Module not found"
- Delete node_modules and .next
- Run `npm install` again

### Port 3000 already in use
```bash
# Use different port
PORT=3001 npm run dev
```

## Next Steps

- 📖 Read [README.md](README.md) for full documentation
- 🚀 See [DEPLOYMENT.md](DEPLOYMENT.md) for production deployment
- ✅ Check [FEATURES.md](FEATURES.md) for complete feature list

## Need Help?

- Check [SETUP.md](SETUP.md) for detailed setup instructions
- Review [FEATURES.md](FEATURES.md) for feature documentation
- Open an issue on GitHub

## Development Tips

- Use `npx prisma studio` to view/edit database
- Check browser console for client-side errors
- Check terminal for server-side errors
- Clear browser cookies if auth issues occur

---

**Ready to track your learning journey!** 🎓
