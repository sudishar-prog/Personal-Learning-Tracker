# 🎭 Demo Account Credentials

## Login Information

```
📧 Email:    demo@skillstack.com
🔑 Password: demo123
🌐 URL:      http://localhost:3001/login
```

## What's Included

### ✅ Demo User Account
- Name: Demo User
- Email: demo@skillstack.com
- Password: demo123 (hashed with bcrypt)

### ✅ 4 Sample Skills

1. **React Development**
   - Category: Development
   - Status: Learning
   - Target: 100 hours
   - Color: Blue

2. **UI/UX Design**
   - Category: Design
   - Status: Comfortable
   - Target: 80 hours
   - Color: Purple

3. **TypeScript**
   - Category: Development
   - Status: Proficient
   - Target: 60 hours
   - Color: Green

4. **Product Management**
   - Category: Product
   - Status: Learning
   - Target: 50 hours
   - Color: Orange

### ✅ 29 Learning Log Entries
- Spread across the last 14 days
- Various durations (30-120 minutes)
- Different activity types (tutorial, project, reading, course, practice)
- Some with notes, some without
- Creates a realistic learning streak

## 🎯 What You'll See

### Dashboard
- Total skills: 4
- Total hours: ~25-30 hours
- Weekly hours: ~10-15 hours
- Learning streak: Multiple days
- Weekly activity chart with data
- Recent log entries

### Skills Page
- 4 skill cards with progress bars
- Different categories and statuses
- Progress toward target hours

### Progress Page
- Line chart showing hours over time
- Donut chart with skill distribution
- Category breakdown
- Skills overview table

### Log Page
- Form to add new learning sessions
- Dropdown with all 4 skills

## 🚀 Quick Start

1. **Open Browser**
   ```
   http://localhost:3001
   ```

2. **Login**
   - Email: `demo@skillstack.com`
   - Password: `demo123`
   - Click "Sign In"

3. **Explore**
   - Check Dashboard for overview
   - Visit Skills to see all skills
   - Go to Progress for analytics
   - Try Log Learning to add new entry

## 🎨 Features to Test

### Dashboard
- View stat cards
- See weekly activity chart (stacked bars)
- Check recent log entries
- Click "Log Learning" button

### Skills Page
- View skill cards with progress
- Click "Edit" on a skill
- Try "Add Skill" to create new one
- Delete a skill (with confirmation)

### Log Learning
- Select a skill
- Enter duration
- Choose activity type
- Add notes
- Submit and see dashboard update

### Progress Page
- Try different time filters
- View line chart (hours over time)
- See donut chart (distribution)
- Check category breakdown
- Review skills table

### Settings
- View profile information
- Try password change form
- See delete account option

## 📊 Sample Data Statistics

```
Users:        1
Skills:       4
Log Entries:  29
Date Range:   Last 14 days
Total Hours:  ~25-30 hours
Categories:   Development (2), Design (1), Product (1)
Statuses:     Learning (2), Comfortable (1), Proficient (1)
```

## 🔄 Reset Demo Data

To reset and recreate demo data:

```bash
# Delete all data
npx prisma db push --force-reset

# Recreate demo data
npx tsx scripts/seed-demo-data.ts
```

## 🎭 Create Additional Test Users

You can create more users by:
1. Going to http://localhost:3001/login
2. Clicking "Sign up"
3. Creating a new account

Or modify the seed script to add more users.

## 💡 Tips

- **Realistic Data**: The demo data includes varied activity to showcase all features
- **Learning Streak**: Multiple consecutive days with logs
- **Progress Tracking**: Skills have different completion percentages
- **Charts**: Enough data to make charts meaningful
- **Notes**: Some logs have notes, some don't (realistic)

## 🔐 Security Note

This is a demo account for local development only. The password is intentionally simple. In production, always use strong passwords.

## 📸 What to Look For

### Visual Design
- Clean, minimal interface
- Responsive layout
- Color-coded skills
- Interactive charts
- Smooth animations
- Loading states
- Empty states (if you delete all data)

### Functionality
- Authentication flow
- CRUD operations
- Data visualization
- Form validation
- Toast notifications
- Confirmation dialogs
- Navigation

### User Experience
- Intuitive navigation
- Clear feedback
- Helpful empty states
- Responsive design
- Fast page loads
- Smooth interactions

---

**Ready to explore!** 🚀

Login at: http://localhost:3001/login

Email: demo@skillstack.com
Password: demo123
