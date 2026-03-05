import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { startOfWeek, format, subWeeks, isWithinInterval } from "date-fns";

export async function GET(request: Request) {
  try {
    const session = await getServerSession(authOptions);
    if (!session?.user?.id) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { searchParams } = new URL(request.url);
    const filter = searchParams.get("filter") || "all";

    const logs = await prisma.logEntry.findMany({
      where: { userId: session.user.id },
      include: {
        skill: {
          select: {
            name: true,
            color: true,
            category: true,
          },
        },
      },
      orderBy: { date: "asc" },
    });

    // Filter logs based on time range
    let filteredLogs = logs;
    const now = new Date();

    if (filter === "week") {
      const weekStart = startOfWeek(now, { weekStartsOn: 1 });
      filteredLogs = logs.filter((log) =>
        new Date(log.date) >= weekStart
      );
    } else if (filter === "month") {
      const monthStart = new Date(now.getFullYear(), now.getMonth(), 1);
      filteredLogs = logs.filter((log) =>
        new Date(log.date) >= monthStart
      );
    } else if (filter === "3months") {
      const threeMonthsAgo = subWeeks(now, 12);
      filteredLogs = logs.filter((log) =>
        new Date(log.date) >= threeMonthsAgo
      );
    }

    // Group by week
    const weeklyData: Record<string, Record<string, number>> = {};
    filteredLogs.forEach((log) => {
      const weekStart = startOfWeek(new Date(log.date), { weekStartsOn: 1 });
      const weekKey = format(weekStart, "MMM d");
      
      if (!weeklyData[weekKey]) {
        weeklyData[weekKey] = {};
      }
      
      const skillName = log.skill.name;
      weeklyData[weekKey][skillName] = 
        (weeklyData[weekKey][skillName] || 0) + log.durationMinutes / 60;
    });

    const weeklyChartData = Object.entries(weeklyData).map(([week, skills]) => ({
      week,
      ...skills,
    }));

    // Distribution by skill
    const skillTotals: Record<string, { minutes: number; color: string }> = {};
    filteredLogs.forEach((log) => {
      const skillName = log.skill.name;
      if (!skillTotals[skillName]) {
        skillTotals[skillName] = { minutes: 0, color: log.skill.color };
      }
      skillTotals[skillName].minutes += log.durationMinutes;
    });

    const distributionData = Object.entries(skillTotals).map(([name, data]) => ({
      name,
      value: Math.round((data.minutes / 60) * 10) / 10,
      color: data.color,
    }));

    // Category breakdown
    const categoryTotals: Record<string, number> = {};
    filteredLogs.forEach((log) => {
      const category = log.skill.category;
      categoryTotals[category] = (categoryTotals[category] || 0) + log.durationMinutes;
    });

    const categoryData = Object.entries(categoryTotals).map(([category, minutes]) => ({
      category,
      hours: Math.round((minutes / 60) * 10) / 10,
    }));

    return NextResponse.json({
      weeklyChartData,
      distributionData,
      categoryData,
    });
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch progress data" }, { status: 500 });
  }
}
