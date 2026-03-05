"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Navbar } from "@/components/Navbar";
import { StatCard } from "@/components/StatCard";
import { WeeklyChart } from "@/components/WeeklyChart";
import { LogEntryRow } from "@/components/LogEntryRow";
import { EmptyState } from "@/components/EmptyState";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookOpen, Clock, TrendingUp, Flame, Plus, Activity } from "lucide-react";
import { startOfWeek, format, addDays } from "date-fns";

export default function DashboardPage() {
  const router = useRouter();
  const [stats, setStats] = useState<any>(null);
  const [recentLogs, setRecentLogs] = useState<any[]>([]);
  const [weeklyData, setWeeklyData] = useState<any[]>([]);
  const [skills, setSkills] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const [statsRes, logsRes, skillsRes] = await Promise.all([
        fetch("/api/stats"),
        fetch("/api/logs?limit=5"),
        fetch("/api/skills"),
      ]);

      const statsData = await statsRes.json();
      const logsData = await logsRes.json();
      const skillsData = await skillsRes.json();

      setStats(statsData);
      setRecentLogs(logsData);
      setSkills(skillsData);

      // Prepare weekly chart data
      const weekStart = startOfWeek(new Date(), { weekStartsOn: 1 });
      const days = Array.from({ length: 7 }, (_, i) => {
        const day = addDays(weekStart, i);
        return {
          day: format(day, "EEE"),
          date: format(day, "yyyy-MM-dd"),
        };
      });

      const chartData = days.map((day) => {
        const dayData: any = { day: day.day };
        
        skillsData.forEach((skill: any) => {
          const skillLogs = logsData.filter(
            (log: any) =>
              log.skillId === skill.id &&
              format(new Date(log.date), "yyyy-MM-dd") === day.date
          );
          const totalHours = skillLogs.reduce(
            (sum: number, log: any) => sum + log.durationMinutes / 60,
            0
          );
          if (totalHours > 0) {
            dayData[skill.name] = Math.round(totalHours * 10) / 10;
          }
        });

        return dayData;
      });

      setWeeklyData(chartData);
    } catch (error) {
      console.error("Failed to fetch data:", error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen">
        <Navbar />
        <div className="page-content min-h-[calc(100vh-70px)]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="animate-pulse space-y-4">
              <div className="h-32 bg-slate-200 rounded-lg" />
              <div className="h-64 bg-slate-200 rounded-lg" />
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="page-content min-h-[calc(100vh-70px)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex justify-between items-center mb-2">
            <h1 className="text-3xl font-bold text-black">Dashboard</h1>
            <Button onClick={() => router.push("/log")} className="bg-white hover:bg-white/90">
              <Plus className="h-4 w-4 mr-2" />
              Log Learning
            </Button>
          </div>
          <p className="text-sm text-slate-500 mb-8">Track your skills, log learning time, and visualize your growth.</p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <StatCard
              title="Total Skills"
              value={stats?.totalSkills || 0}
              icon={BookOpen}
            />
            <StatCard
              title="Total Hours"
              value={`${stats?.totalHours || 0}h`}
              icon={Clock}
            />
            <StatCard
              title="This Week"
              value={`${stats?.weeklyHours || 0}h`}
              icon={TrendingUp}
            />
            <StatCard
              title="Current Streak"
              value={`${stats?.streak || 0} days`}
              icon={Flame}
            />
          </div>

          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Weekly Activity</CardTitle>
            </CardHeader>
            <CardContent>
              {skills.length > 0 ? (
                <WeeklyChart
                  data={weeklyData}
                  skills={skills.map((s) => ({ name: s.name, color: s.color }))}
                />
              ) : (
                <EmptyState
                  icon={Activity}
                  title="No activity yet"
                  description="Start logging your learning to see your weekly progress"
                />
              )}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Recent Activity</CardTitle>
            </CardHeader>
            <CardContent>
              {recentLogs.length > 0 ? (
                <div className="space-y-2">
                  {recentLogs.map((log) => (
                    <LogEntryRow key={log.id} log={log} />
                  ))}
                </div>
              ) : (
                <EmptyState
                  icon={Clock}
                  title="No logs yet"
                  description="Start tracking your learning journey"
                  action={
                    <Button onClick={() => router.push("/log")}>
                      <Plus className="h-4 w-4 mr-2" />
                      Add First Log
                    </Button>
                  }
                />
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
