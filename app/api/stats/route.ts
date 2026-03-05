import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { startOfWeek, endOfWeek, isWithinInterval, differenceInDays } from "date-fns";

export async function GET() {
  try {
    const session = await getServerSession(authOptions);
    if (!session?.user?.id) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const skills = await prisma.skill.count({
      where: { userId: session.user.id },
    });

    const allLogs = await prisma.logEntry.findMany({
      where: { userId: session.user.id },
      select: {
        durationMinutes: true,
        date: true,
      },
      orderBy: { date: "asc" },
    });

    const totalMinutes = allLogs.reduce((sum, log) => sum + log.durationMinutes, 0);
    const totalHours = Math.round((totalMinutes / 60) * 10) / 10;

    const now = new Date();
    const weekStart = startOfWeek(now, { weekStartsOn: 1 });
    const weekEnd = endOfWeek(now, { weekStartsOn: 1 });

    const weeklyMinutes = allLogs
      .filter((log) =>
        isWithinInterval(new Date(log.date), { start: weekStart, end: weekEnd })
      )
      .reduce((sum, log) => sum + log.durationMinutes, 0);
    const weeklyHours = Math.round((weeklyMinutes / 60) * 10) / 10;

    // Calculate streak
    let streak = 0;
    if (allLogs.length > 0) {
      const logDates = [...new Set(allLogs.map((log) => 
        new Date(log.date).toDateString()
      ))].sort((a, b) => new Date(b).getTime() - new Date(a).getTime());

      const today = new Date().toDateString();
      const yesterday = new Date(Date.now() - 86400000).toDateString();

      if (logDates[0] === today || logDates[0] === yesterday) {
        streak = 1;
        let currentDate = new Date(logDates[0]);

        for (let i = 1; i < logDates.length; i++) {
          const prevDate = new Date(logDates[i]);
          const daysDiff = differenceInDays(currentDate, prevDate);

          if (daysDiff === 1) {
            streak++;
            currentDate = prevDate;
          } else {
            break;
          }
        }
      }
    }

    return NextResponse.json({
      totalSkills: skills,
      totalHours,
      weeklyHours,
      streak,
    });
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch stats" }, { status: 500 });
  }
}
