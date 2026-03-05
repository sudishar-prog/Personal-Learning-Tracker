# Testing Guide

Manual testing checklist for SkillStack application.

## Pre-Testing Setup

1. Ensure app is running: `npm run dev`
2. Clear browser cache and cookies
3. Open browser DevTools (F12)
4. Check Console for errors

## 1. Authentication Tests

### Registration Flow
- [ ] Navigate to http://localhost:3000
- [ ] Should redirect to /login
- [ ] Click "Don't have an account? Sign up"
- [ ] Fill in registration form:
  - Name: Test User
  - Email: test@example.com
  - Password: password123
- [ ] Click "Sign Up"
- [ ] Should show success toast
- [ ] Should switch to sign in form

### Login Flow
- [ ] Enter email: test@example.com
- [ ] Enter password: password123
- [ ] Click "Sign In"
- [ ] Should redirect to /dashboard
- [ ] Should see "Test User" or email in navbar

### Protected Routes
- [ ] Sign out
- [ ] Try to access /dashboard directly
- [ ] Should redirect to /login
- [ ] Try to access /skills directly
- [ ] Should redirect to /login

### Sign Out
- [ ] Sign in
- [ ] Click "Sign Out" button
- [ ] Should redirect to /login
- [ ] Try to go back to /dashboard
- [ ] Should redirect to /login

## 2. Skills Management Tests

### Create Skill
- [ ] Sign in
- [ ] Navigate to /skills
- [ ] Should see empty state
- [ ] Click "Add First Skill" or "Add Skill"
- [ ] Fill in form:
  - Name: React Development
  - Category: Development
  - Status: Learning
  - Target Hours: 100
  - Color: Blue
- [ ] Click "Create"
- [ ] Should show success toast
- [ ] Should see skill card in grid
- [ ] Verify all details are correct

### Create Multiple Skills
- [ ] Create 3-4 more skills with different:
  - Categories (Design, Product, Other)
  - Statuses (Comfortable, Proficient)
  - Colors
  - Some with target hours, some without

### Edit Skill
- [ ] Click edit button on a skill card
- [ ] Change name to "Advanced React"
- [ ] Change status to "Comfortable"
- [ ] Click "Update"
- [ ] Should show success toast
- [ ] Verify changes are reflected

### Delete Skill
- [ ] Click delete button on a skill
- [ ] Should show confirmation dialog
- [ ] Click "Cancel"
- [ ] Dialog should close, skill still there
- [ ] Click delete again
- [ ] Click "Delete"
- [ ] Should show success toast
- [ ] Skill should be removed from list

## 3. Learning Log Tests

### Access Log Page
- [ ] Click "Log Learning" from navbar
- [ ] Should navigate to /log
- [ ] Form should be visible
- [ ] Skill dropdown should have your skills

### Create Log Entry
- [ ] Select skill: React Development
- [ ] Date: Today (default)
- [ ] Duration: 120 (minutes)
- [ ] Type: Tutorial
- [ ] Note: "Learned React hooks"
- [ ] Click "Log Learning"
- [ ] Should show success toast
- [ ] Should redirect to /dashboard

### Create Multiple Logs
- [ ] Log 5-10 entries with:
  - Different skills
  - Different dates (today, yesterday, last week)
  - Different durations
  - Different types
  - Some with notes, some without

### Log Without Skills
- [ ] Delete all skills
- [ ] Navigate to /log
- [ ] Should see message about needing skills
- [ ] Should have button to go to skills page

## 4. Dashboard Tests

### Statistics Cards
- [ ] Navigate to /dashboard
- [ ] Verify "Total Skills" shows correct count
- [ ] Verify "Total Hours" shows sum of all logs
- [ ] Verify "This Week" shows current week hours
- [ ] Verify "Current Streak" shows consecutive days

### Weekly Activity Chart
- [ ] Should see bar chart with 7 days (Mon-Sun)
- [ ] Bars should be stacked by skill
- [ ] Colors should match skill colors
- [ ] Hover over bars to see tooltip
- [ ] Verify data matches your logs

### Recent Activity
- [ ] Should see last 5 log entries
- [ ] Each entry should show:
  - Skill name and color
  - Activity type and date
  - Duration in hours
  - Notes (if any)
- [ ] Entries should be sorted by date (newest first)

### Quick Actions
- [ ] Click "Log Learning" button
- [ ] Should navigate to /log page

## 5. Progress Analytics Tests

### Time Filters
- [ ] Navigate to /progress
- [ ] Default filter should be "All Time"
- [ ] Change to "This Week"
- [ ] Charts should update
- [ ] Change to "This Month"
- [ ] Charts should update
- [ ] Change to "Last 3 Months"
- [ ] Charts should update

### Hours Over Time Chart
- [ ] Should see line chart
- [ ] One line per skill
- [ ] Lines should be colored by skill
- [ ] X-axis shows weeks
- [ ] Y-axis shows hours
- [ ] Hover to see tooltip

### Distribution Chart
- [ ] Should see donut/pie chart
- [ ] Sections colored by skill
- [ ] Labels show skill name and percentage
- [ ] Hover to see tooltip

### Category Breakdown
- [ ] Should see grid of category cards
- [ ] Each card shows category name and hours
- [ ] Verify totals are correct

### Skills Overview Table
- [ ] Should see table with all skills
- [ ] Columns: Skill, Category, Status, Hours, Target, Progress
- [ ] Color indicators for each skill
- [ ] Progress percentages for skills with targets
- [ ] "-" for skills without targets

## 6. Settings Tests

### Profile Information
- [ ] Navigate to /settings
- [ ] Email field should be disabled
- [ ] Name field should show current name
- [ ] Change name to "Updated Name"
- [ ] Click "Update Profile"
- [ ] Should show info toast (not implemented)

### Change Password
- [ ] Fill in current password
- [ ] Fill in new password
- [ ] Fill in confirm password (different)
- [ ] Click "Change Password"
- [ ] Should show error about mismatch
- [ ] Make passwords match
- [ ] Click "Change Password"
- [ ] Should show info toast (not implemented)

### Delete Account
- [ ] Click "Delete Account"
- [ ] Should show confirmation dialog
- [ ] Click "Cancel"
- [ ] Dialog should close
- [ ] Click "Delete Account" again
- [ ] Click "Delete"
- [ ] Should show info toast (not implemented)

## 7. UI/UX Tests

### Responsive Design
- [ ] Resize browser to mobile width (< 640px)
- [ ] All pages should be readable
- [ ] Navigation should work
- [ ] Forms should be usable
- [ ] Charts should resize
- [ ] Resize to tablet (640-1024px)
- [ ] Verify layout adapts
- [ ] Resize to desktop (> 1024px)
- [ ] Verify full layout

### Navigation
- [ ] Click each nav item
- [ ] Active page should be highlighted
- [ ] All pages should load
- [ ] Back button should work

### Loading States
- [ ] Refresh dashboard
- [ ] Should see loading skeleton briefly
- [ ] Refresh skills page
- [ ] Should see loading skeleton
- [ ] Refresh progress page
- [ ] Should see loading skeleton

### Empty States
- [ ] Delete all skills
- [ ] Dashboard should show empty state
- [ ] Skills page should show empty state
- [ ] Progress page should show "No data"

### Toast Notifications
- [ ] Create a skill
- [ ] Should see success toast (top-right)
- [ ] Toast should auto-dismiss
- [ ] Try invalid login
- [ ] Should see error toast

## 8. Data Integrity Tests

### Cascade Delete
- [ ] Create a skill
- [ ] Add 3 logs for that skill
- [ ] Note the total hours on dashboard
- [ ] Delete the skill
- [ ] Verify logs are deleted (check dashboard hours)
- [ ] Verify weekly chart updated

### Hours Calculation
- [ ] Create a skill
- [ ] Add log: 60 minutes
- [ ] Skill card should show 1.0h
- [ ] Add log: 90 minutes
- [ ] Skill card should show 2.5h
- [ ] Dashboard should reflect total

### Streak Calculation
- [ ] Create logs for today
- [ ] Streak should be 1
- [ ] Create logs for yesterday
- [ ] Streak should be 2
- [ ] Create logs for day before yesterday
- [ ] Streak should be 3
- [ ] Skip a day in between
- [ ] Streak should reset

### Progress Calculation
- [ ] Create skill with target: 10 hours
- [ ] Add log: 300 minutes (5 hours)
- [ ] Progress should show 50%
- [ ] Add log: 300 minutes (5 hours)
- [ ] Progress should show 100%
- [ ] Add more logs
- [ ] Progress should stay at 100%

## 9. Error Handling Tests

### Invalid Login
- [ ] Try to login with wrong password
- [ ] Should show error toast
- [ ] Try to login with non-existent email
- [ ] Should show error toast

### Duplicate Email
- [ ] Register with existing email
- [ ] Should show error toast

### Form Validation
- [ ] Try to create skill without name
- [ ] Should prevent submission
- [ ] Try to log with 0 minutes
- [ ] Should prevent submission
- [ ] Try to log without selecting skill
- [ ] Should prevent submission

### Network Errors
- [ ] Stop the dev server
- [ ] Try to create a skill
- [ ] Should show error toast
- [ ] Restart server

## 10. Browser Compatibility

Test in multiple browsers:

### Chrome
- [ ] All features work
- [ ] Charts render correctly
- [ ] No console errors

### Firefox
- [ ] All features work
- [ ] Charts render correctly
- [ ] No console errors

### Safari
- [ ] All features work
- [ ] Charts render correctly
- [ ] No console errors

### Edge
- [ ] All features work
- [ ] Charts render correctly
- [ ] No console errors

## 11. Performance Tests

### Page Load Times
- [ ] Dashboard loads in < 2 seconds
- [ ] Skills page loads in < 2 seconds
- [ ] Progress page loads in < 2 seconds

### Chart Rendering
- [ ] Charts render smoothly
- [ ] No lag when hovering
- [ ] Animations are smooth

### Large Data Sets
- [ ] Create 20+ skills
- [ ] Create 100+ log entries
- [ ] Verify pages still load quickly
- [ ] Verify charts still render well

## 12. Security Tests

### Session Management
- [ ] Sign in
- [ ] Close browser
- [ ] Reopen browser
- [ ] Navigate to app
- [ ] Should still be signed in (session persists)

### Protected Routes
- [ ] Sign out
- [ ] Try to access API routes directly:
  - GET /api/skills
  - POST /api/logs
- [ ] Should return 401 Unauthorized

### SQL Injection
- [ ] Try to create skill with name: `'; DROP TABLE skills; --`
- [ ] Should be safely escaped
- [ ] Skill should be created with that name

## Bug Report Template

If you find a bug, document it:

```
**Bug Title**: Brief description

**Steps to Reproduce**:
1. Step one
2. Step two
3. Step three

**Expected Behavior**:
What should happen

**Actual Behavior**:
What actually happens

**Screenshots**:
If applicable

**Browser**: Chrome 120
**OS**: macOS
**Console Errors**: Any errors from DevTools
```

## Test Results Summary

After completing all tests, fill in:

- Total Tests: ___
- Passed: ___
- Failed: ___
- Blocked: ___

**Critical Issues**: List any critical bugs
**Minor Issues**: List any minor bugs
**Suggestions**: List any improvements

---

**Testing Complete!** ✅
