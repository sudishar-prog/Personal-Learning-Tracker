# Quick Setup Guide

Follow these steps to get SkillStack running locally:

## 1. Install Dependencies

```bash
npm install
```

## 2. Set Up Environment Variables

Create a `.env` file in the root directory:

```bash
cp .env.example .env
```

Edit `.env` with your values:

```env
# Database - Get from Supabase or your PostgreSQL instance
DATABASE_URL="postgresql://user:password@localhost:5432/skillstack"

# NextAuth - Generate with: openssl rand -base64 32
NEXTAUTH_SECRET="your-generated-secret-here"

# App URL
NEXTAUTH_URL="http://localhost:3000"
```

## 3. Set Up Database

### Option A: Using Supabase (Recommended)

1. Go to [supabase.com](https://supabase.com) and create a free account
2. Create a new project
3. Go to Settings > Database
4. Copy the "Connection string" (URI format)
5. Replace `[YOUR-PASSWORD]` with your actual database password
6. Paste into `.env` as `DATABASE_URL`

### Option B: Local PostgreSQL

1. Install PostgreSQL locally
2. Create a database: `createdb skillstack`
3. Update `DATABASE_URL` in `.env` with your local credentials

## 4. Initialize Database

```bash
# Generate Prisma Client
npx prisma generate

# Push schema to database
npx prisma db push
```

## 5. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## 6. Create Your First Account

1. Click "Sign up" on the login page
2. Enter your name, email, and password
3. Sign in with your credentials
4. Start tracking your learning!

## Troubleshooting

### Database Connection Issues

- Verify `DATABASE_URL` is correct
- Check if PostgreSQL is running
- Ensure database exists and is accessible

### NextAuth Errors

- Make sure `NEXTAUTH_SECRET` is set
- Verify `NEXTAUTH_URL` matches your app URL
- Clear browser cookies and try again

### Build Errors

- Delete `node_modules` and `.next` folders
- Run `npm install` again
- Run `npx prisma generate`

## Optional: View Database

Use Prisma Studio to view and edit data:

```bash
npx prisma studio
```

Opens at [http://localhost:5555](http://localhost:5555)

## Production Deployment

See README.md for detailed Render.com deployment instructions.
