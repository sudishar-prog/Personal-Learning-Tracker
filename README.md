# SkillStack - Personal Learning Tracker

A production-ready web application for tracking skills, logging learning time, and visualizing progress.

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Authentication**: NextAuth.js
- **Database**: PostgreSQL (Supabase)
- **ORM**: Prisma
- **Charts**: Recharts
- **Deployment**: Render.com

## Features

- 🔐 Email/password authentication with bcrypt
- 📊 Track multiple skills with categories and status
- ⏱️ Log learning sessions with duration and notes
- 📈 Visualize progress with interactive charts
- 🎯 Set target hours for skills
- 🔥 Track learning streaks
- 📱 Fully responsive mobile design
- 🎨 Clean, minimal UI with light theme

## Getting Started

### Prerequisites

- Node.js 18+ installed
- PostgreSQL database (Supabase recommended)
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd skillstack
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp .env.example .env
```

Edit `.env` and add your configuration:
```env
DATABASE_URL="postgresql://user:password@host:5432/skillstack"
NEXTAUTH_SECRET="your-secret-key-here"
NEXTAUTH_URL="http://localhost:3000"
```

To generate a secure `NEXTAUTH_SECRET`:
```bash
openssl rand -base64 32
```

4. Set up the database:
```bash
npx prisma generate
npx prisma db push
```

5. Run the development server:
```bash
npm run dev
```

6. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Database Setup with Supabase

1. Create a free account at [supabase.com](https://supabase.com)
2. Create a new project
3. Go to Project Settings > Database
4. Copy the connection string (URI format)
5. Replace `[YOUR-PASSWORD]` with your database password
6. Add to `.env` as `DATABASE_URL`

## Project Structure

```
skillstack/
├── app/
│   ├── api/              # API routes
│   │   ├── auth/         # NextAuth endpoints
│   │   ├── skills/       # Skills CRUD
│   │   ├── logs/         # Log entries CRUD
│   │   ├── stats/        # Dashboard statistics
│   │   ├── progress/     # Progress analytics
│   │   └── register/     # User registration
│   ├── dashboard/        # Main dashboard page
│   ├── skills/           # Skills management
│   ├── log/              # Log learning page
│   ├── progress/         # Analytics page
│   ├── settings/         # User settings
│   ├── login/            # Authentication page
│   ├── layout.tsx        # Root layout
│   └── globals.css       # Global styles
├── components/
│   ├── ui/               # Base UI components
│   ├── Navbar.tsx        # Navigation bar
│   ├── StatCard.tsx      # Dashboard stat cards
│   ├── SkillCard.tsx     # Skill display card
│   ├── LogEntryRow.tsx   # Log entry display
│   ├── WeeklyChart.tsx   # Weekly activity chart
│   ├── ProgressLineChart.tsx
│   ├── DistributionChart.tsx
│   ├── EmptyState.tsx    # Empty state component
│   └── ConfirmDialog.tsx # Confirmation dialog
├── lib/
│   ├── auth.ts           # NextAuth configuration
│   ├── prisma.ts         # Prisma client
│   └── utils.ts          # Utility functions
├── prisma/
│   └── schema.prisma     # Database schema
└── types/
    └── next-auth.d.ts    # TypeScript definitions
```

## Key Features Explained

### Authentication
- Email/password authentication using NextAuth.js
- Passwords hashed with bcrypt (12 rounds)
- JWT session strategy
- Protected routes with middleware

### Skills Management
- Create, edit, and delete skills
- Categorize skills (Design, Development, Product, Other)
- Track status (Learning, Comfortable, Proficient)
- Set target hours with progress tracking
- Custom color coding

### Learning Logs
- Log learning sessions with duration in minutes
- Multiple activity types (Tutorial, Project, Reading, Course, Practice, Other)
- Add notes to track what you learned
- Date selection for backdating entries

### Dashboard
- Overview statistics (total skills, hours, weekly hours, streak)
- Weekly activity bar chart
- Recent learning entries
- Quick access to log learning

### Progress Analytics
- Time-filtered views (week, month, 3 months, all time)
- Line chart showing hours over time per skill
- Donut chart for skill distribution
- Category breakdown
- Detailed skills table with progress percentages

### Streak Calculation
- Counts consecutive days with at least one log entry
- Includes today or yesterday as valid streak start
- Automatically calculated on dashboard

## API Routes

### Authentication
- `POST /api/register` - Create new user account
- `POST /api/auth/signin` - Sign in (NextAuth)

### Skills
- `GET /api/skills` - List all user skills
- `POST /api/skills` - Create new skill
- `PUT /api/skills/[id]` - Update skill
- `DELETE /api/skills/[id]` - Delete skill (cascades to logs)

### Logs
- `GET /api/logs` - List log entries (with optional limit)
- `POST /api/logs` - Create log entry

### Analytics
- `GET /api/stats` - Dashboard statistics
- `GET /api/progress` - Progress data with time filters

## Deployment to Render.com

1. Push your code to GitHub

2. Create a new PostgreSQL database on Render:
   - Go to Render Dashboard
   - Click "New +" > "PostgreSQL"
   - Copy the Internal Database URL

3. Create a new Web Service:
   - Click "New +" > "Web Service"
   - Connect your GitHub repository
   - Configure:
     - **Build Command**: `npm install && npx prisma generate && npm run build`
     - **Start Command**: `npm start`
     - **Environment Variables**:
       - `DATABASE_URL`: Your Render PostgreSQL URL
       - `NEXTAUTH_SECRET`: Generate with `openssl rand -base64 32`
       - `NEXTAUTH_URL`: Your Render app URL (e.g., https://skillstack.onrender.com)

4. Deploy and run migrations:
```bash
npx prisma db push
```

## Development Tips

- Use `npm run dev` for hot-reload development
- Check `prisma/schema.prisma` for database schema
- All durations stored in minutes, converted to hours in UI
- Server components used where possible for better performance
- Client components marked with `"use client"` directive

## License

MIT

## Support

For issues or questions, please open an issue on GitHub.
