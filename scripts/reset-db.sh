#!/bin/bash

echo "⚠️  Database Reset Script"
echo "========================"
echo ""
echo "This will delete all data and recreate the database schema."
echo ""
read -p "Are you sure you want to continue? (yes/no): " confirm

if [ "$confirm" != "yes" ]; then
    echo "Cancelled."
    exit 0
fi

echo ""
echo "🗑️  Resetting database..."

npx prisma db push --force-reset

if [ $? -ne 0 ]; then
    echo "❌ Failed to reset database"
    exit 1
fi

echo "✅ Database reset complete"
echo ""
echo "You can now create a new account and start fresh."
echo ""
