"use client";

import { useEffect, useState } from "react";
import { Navbar } from "@/components/Navbar";
import { ProgressLineChart } from "@/components/ProgressLineChart";
import { DistributionChart } from "@/components/DistributionChart";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { format } from "date-fns";
import { minutesToHours } from "@/lib/utils";

export default function ProgressPage() {
  const [filter, setFilter] = useState("all");
  const [data, setData] = useState<any>(null);
  const [skills, setSkills] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filter]);

  const fetchData = async () => {
    try {
      const [progressRes, skillsRes] = await Promise.all([
        fetch(`/api/progress?filter=${filter}`),
        fetch("/api/skills"),
      ]);

      const progressData = await progressRes.json();
      const skillsData = await skillsRes.json();

      setData(progressData);
      setSkills(skillsData);
    } catch (error) {
      console.error("Failed to fetch progress data:", error);
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
            <div className="animate-pulse space-y-6">
              <div className="h-96 bg-slate-200 rounded-lg" />
              <div className="h-96 bg-slate-200 rounded-lg" />
            </div>
          </div>
        </div>
      </div>
    );
  }

  const categoryLabels: Record<string, string> = {
    design: "Design",
    development: "Development",
    product: "Product",
    other: "Other",
  };

  const statusLabels: Record<string, string> = {
    learning: "Learning",
    comfortable: "Comfortable",
    proficient: "Proficient",
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="page-content min-h-[calc(100vh-70px)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">Progress</h1>
          <div className="w-48">
            <Label htmlFor="filter">Time Range</Label>
            <Select
              id="filter"
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              className="mt-1"
            >
              <option value="week">This Week</option>
              <option value="month">This Month</option>
              <option value="3months">Last 3 Months</option>
              <option value="all">All Time</option>
            </Select>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          <Card>
            <CardHeader>
              <CardTitle>Hours Over Time</CardTitle>
            </CardHeader>
            <CardContent>
              {data?.weeklyChartData?.length > 0 ? (
                <ProgressLineChart
                  data={data.weeklyChartData}
                  skills={skills.map((s) => ({ name: s.name, color: s.color }))}
                />
              ) : (
                <p className="text-center text-slate-600 py-12">No data available</p>
              )}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Distribution by Skill</CardTitle>
            </CardHeader>
            <CardContent>
              {data?.distributionData?.length > 0 ? (
                <DistributionChart data={data.distributionData} />
              ) : (
                <p className="text-center text-slate-600 py-12">No data available</p>
              )}
            </CardContent>
          </Card>
        </div>

        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Category Breakdown</CardTitle>
          </CardHeader>
          <CardContent>
            {data?.categoryData?.length > 0 ? (
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {data.categoryData.map((cat: any) => (
                  <div key={cat.category} className="text-center p-4 bg-slate-50 rounded-lg">
                    <p className="text-sm text-slate-600 mb-1">
                      {categoryLabels[cat.category] || cat.category}
                    </p>
                    <p className="text-2xl font-bold">{cat.hours}h</p>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-center text-slate-600 py-8">No data available</p>
            )}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Skills Overview</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-slate-200">
                    <th className="text-left py-3 px-4 font-medium text-slate-600">Skill</th>
                    <th className="text-left py-3 px-4 font-medium text-slate-600">Category</th>
                    <th className="text-left py-3 px-4 font-medium text-slate-600">Status</th>
                    <th className="text-right py-3 px-4 font-medium text-slate-600">Hours</th>
                    <th className="text-right py-3 px-4 font-medium text-slate-600">Target</th>
                    <th className="text-right py-3 px-4 font-medium text-slate-600">Progress</th>
                  </tr>
                </thead>
                <tbody>
                  {skills.map((skill) => {
                    const hours = minutesToHours(skill.totalMinutes);
                    const progress = skill.targetHours
                      ? Math.min((hours / skill.targetHours) * 100, 100)
                      : null;

                    return (
                      <tr key={skill.id} className="border-b border-slate-100">
                        <td className="py-3 px-4">
                          <div className="flex items-center gap-2">
                            <div
                              className="h-4 w-4 rounded"
                              style={{ backgroundColor: skill.color }}
                            />
                            <span className="font-medium">{skill.name}</span>
                          </div>
                        </td>
                        <td className="py-3 px-4 text-slate-600">
                          {categoryLabels[skill.category]}
                        </td>
                        <td className="py-3 px-4 text-slate-600">
                          {statusLabels[skill.status]}
                        </td>
                        <td className="py-3 px-4 text-right font-medium">{hours}h</td>
                        <td className="py-3 px-4 text-right text-slate-600">
                          {skill.targetHours ? `${skill.targetHours}h` : "-"}
                        </td>
                        <td className="py-3 px-4 text-right">
                          {progress !== null ? (
                            <span className="text-slate-600">{Math.round(progress)}%</span>
                          ) : (
                            <span className="text-slate-400">-</span>
                          )}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
        </div>
      </div>
    </div>
  );
}
