import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcrypt';

const prisma = new PrismaClient();

async function main() {
  console.log('🌱 Seeding demo data...');

  // Create demo user
  const hashedPassword = await bcrypt.hash('demo123', 12);
  
  const user = await prisma.user.upsert({
    where: { email: 'demo@skillstack.com' },
    update: {},
    create: {
      name: 'Demo User',
      email: 'demo@skillstack.com',
      password: hashedPassword,
    },
  });

  console.log('✅ Created user:', user.email);

  // Create skills
  const skills = await Promise.all([
    prisma.skill.create({
      data: {
        userId: user.id,
        name: 'React Development',
        category: 'development',
        status: 'learning',
        targetHours: 100,
        color: '#3b82f6',
      },
    }),
    prisma.skill.create({
      data: {
        userId: user.id,
        name: 'UI/UX Design',
        category: 'design',
        status: 'comfortable',
        targetHours: 80,
        color: '#8b5cf6',
      },
    }),
    prisma.skill.create({
      data: {
        userId: user.id,
        name: 'TypeScript',
        category: 'development',
        status: 'proficient',
        targetHours: 60,
        color: '#10b981',
      },
    }),
    prisma.skill.create({
      data: {
        userId: user.id,
        name: 'Product Management',
        category: 'product',
        status: 'learning',
        targetHours: 50,
        color: '#f59e0b',
      },
    }),
  ]);

  console.log('✅ Created', skills.length, 'skills');

  // Create log entries for the past 2 weeks
  const today = new Date();
  const logEntries = [];

  for (let i = 0; i < 14; i++) {
    const date = new Date(today);
    date.setDate(date.getDate() - i);

    // Add 1-3 logs per day
    const logsPerDay = Math.floor(Math.random() * 3) + 1;
    
    for (let j = 0; j < logsPerDay; j++) {
      const randomSkill = skills[Math.floor(Math.random() * skills.length)];
      const durations = [30, 45, 60, 90, 120];
      const types = ['tutorial', 'project', 'reading', 'course', 'practice'];
      const notes = [
        'Learned about hooks and state management',
        'Built a small project to practice',
        'Read documentation and articles',
        'Completed course module',
        'Practiced with coding exercises',
        'Worked on personal project',
        'Reviewed concepts and took notes',
      ];

      logEntries.push({
        userId: user.id,
        skillId: randomSkill.id,
        date: date,
        durationMinutes: durations[Math.floor(Math.random() * durations.length)],
        type: types[Math.floor(Math.random() * types.length)],
        note: Math.random() > 0.3 ? notes[Math.floor(Math.random() * notes.length)] : null,
      });
    }
  }

  await prisma.logEntry.createMany({
    data: logEntries,
  });

  console.log('✅ Created', logEntries.length, 'log entries');
  console.log('');
  console.log('🎉 Demo data seeded successfully!');
  console.log('');
  console.log('📧 Email: demo@skillstack.com');
  console.log('🔑 Password: demo123');
  console.log('');
  console.log('🌐 Login at: http://localhost:3001/login');
}

main()
  .catch((e) => {
    console.error('Error seeding data:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
