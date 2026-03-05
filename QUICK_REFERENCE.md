# Quick Reference Card

Essential commands and information for SkillStack.

## 🚀 Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Setup environment
cp .env.example .env
# Edit .env with your values

# 3. Setup database
npx prisma generate
npx prisma db push

# 4. Start development
npm run dev
```

## 📝 Environment Variables

```env
DATABASE_URL="postgresql://user:pass@host:5432/db"
NEXTAUTH_SECRET="openssl rand -base64 32"
NEXTAUTH_URL="http://localhost:3000"
```

## 🔧 Common Commands

### Development
```bash
npm run dev          # Start dev server
npm run build        # Build for production
npm start            # Start production server
npm run lint         # Run ESLint
```

### Database
```bash
npx prisma generate  # Generate Prisma Client
npx prisma db push   # Push schema to database
npx prisma studio    # Open database GUI
npx prisma db pull   # Pull schema from database
```

### Scripts
```bash
./scripts/setup.sh     # Automated setup
./scripts/reset-db.sh  # Reset database
```

## 🗂️ Project Structure

```
app/
├── api/              # API routes
├── dashboard/        # Dashboard page
├── skills/           # Skills page
├── log/              # Log page
├── progress/         # Progress page
├── settings/         # Settings page
└── login/            # Login page

components/
├── ui/               # Base components
└── [features]        # Feature components

lib/
├── auth.ts           # Auth config
├── prisma.ts         # DB client
└── utils.ts          # Utilities

prisma/
└── schema.prisma     # DB schema
```

## 🌐 Routes

| Route | Purpose | Protected |
|-------|---------|-----------|
| / | Redirect to dashboard | Yes |
| /login | Authentication | No |
| /dashboard | Main overview | Yes |
| /skills | Manage skills | Yes |
| /log | Log learning | Yes |
| /progress | Analytics | Yes |
| /settings | User settings | Yes |

## 🔌 API Endpoints

| Method | Endpoint | Purpose |
|--------|----------|---------|
| POST | /api/register | Create account |
| GET | /api/skills | List skills |
| POST | /api/skills | Create skill |
| PUT | /api/skills/[id] | Update skill |
| DELETE | /api/skills/[id] | Delete skill |
| GET | /api/logs | List logs |
| POST | /api/logs | Create log |
| GET | /api/stats | Dashboard stats |
| GET | /api/progress | Analytics data |

## 🗄️ Database Models

### User
- id, name, email, password, image, createdAt

### Skill
- id, userId, name, category, status, targetHours, color, createdAt, updatedAt

### LogEntry
- id, skillId, userId, date, durationMinutes, note, type, createdAt

## 🎨 Component Library

### UI Components
- Button, Card, Dialog, Input, Label, Select, Textarea

### Feature Components
- Navbar, StatCard, SkillCard, LogEntryRow
- WeeklyChart, ProgressLineChart, DistributionChart
- EmptyState, ConfirmDialog

## 📊 Data Types

### Categories
- design, development, product, other

### Statuses
- learning, comfortable, proficient

### Log Types
- tutorial, project, reading, course, practice, other

## 🔐 Authentication

### Sign Up
```typescript
POST /api/register
{
  name: string,
  email: string,
  password: string
}
```

### Sign In
```typescript
signIn("credentials", {
  email: string,
  password: string
})
```

### Sign Out
```typescript
signOut({ callbackUrl: "/login" })
```

## 🛠️ Utility Functions

```typescript
// Convert minutes to hours
minutesToHours(minutes: number): number

// Convert hours to minutes
hoursToMinutes(hours: number): number

// Merge class names
cn(...inputs: ClassValue[]): string
```

## 📱 Responsive Breakpoints

```css
sm: 640px   /* Tablet */
md: 768px   /* Desktop */
lg: 1024px  /* Large desktop */
xl: 1280px  /* Extra large */
```

## 🎨 Color Palette

```typescript
const COLORS = [
  "#3b82f6", // Blue
  "#8b5cf6", // Purple
  "#ec4899", // Pink
  "#f59e0b", // Orange
  "#10b981", // Green
  "#06b6d4", // Cyan
  "#6366f1", // Indigo
  "#f43f5e", // Red
];
```

## 🐛 Troubleshooting

### Database Connection
```bash
# Test connection
npx prisma db pull

# Check DATABASE_URL
echo $DATABASE_URL
```

### Build Errors
```bash
# Clean install
rm -rf node_modules .next
npm install
npx prisma generate
```

### Port Issues
```bash
# Use different port
PORT=3001 npm run dev
```

### Auth Issues
```bash
# Clear cookies
# Check NEXTAUTH_SECRET
# Verify NEXTAUTH_URL
```

## 📚 Documentation

| File | Purpose |
|------|---------|
| START_HERE.md | Entry point |
| QUICKSTART.md | 5-min setup |
| README.md | Full docs |
| DEPLOYMENT.md | Deploy guide |
| FEATURES.md | Feature list |
| TESTING_GUIDE.md | Test guide |

## 🔍 Debugging

### Browser Console
```javascript
// Check session
console.log(session)

// Check API response
fetch('/api/skills').then(r => r.json()).then(console.log)
```

### Server Logs
```bash
# Watch logs
npm run dev | grep ERROR
```

### Database
```bash
# Open Prisma Studio
npx prisma studio

# Check tables
npx prisma db pull
```

## 📦 Dependencies

### Core
- next@14.2.0
- react@18.3.0
- typescript@5.4.0

### Auth
- next-auth@4.24.0
- bcrypt@5.1.1

### Database
- @prisma/client@5.12.0
- prisma@5.12.0

### UI
- tailwindcss@3.4.0
- recharts@2.12.0
- sonner@1.4.0

## 🚀 Deployment

### Render.com
```bash
# Build command
npm install && npx prisma generate && npm run build

# Start command
npm start

# Environment variables
DATABASE_URL, NEXTAUTH_SECRET, NEXTAUTH_URL
```

### Vercel
```bash
# Auto-detected
# Add environment variables in dashboard
```

## 📊 Performance

### Optimization
- Server components by default
- Client components only when needed
- Prisma connection pooling
- Efficient queries

### Monitoring
```bash
# Build analysis
npm run build

# Check bundle size
ls -lh .next/static/chunks
```

## 🔒 Security

### Best Practices
- ✅ Password hashing (bcrypt)
- ✅ JWT sessions
- ✅ Protected routes
- ✅ User-scoped queries
- ✅ SQL injection prevention
- ✅ XSS prevention

## 📞 Quick Links

- [Next.js Docs](https://nextjs.org/docs)
- [Prisma Docs](https://www.prisma.io/docs)
- [NextAuth Docs](https://next-auth.js.org)
- [Tailwind Docs](https://tailwindcss.com/docs)
- [Recharts Docs](https://recharts.org)

## 💡 Tips

- Use Prisma Studio to view data
- Check browser console for errors
- Use TypeScript for type safety
- Follow the testing guide
- Read error messages carefully

---

**Keep this card handy for quick reference!**
