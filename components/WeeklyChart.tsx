"use client";

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from "recharts";

interface WeeklyChartProps {
  data: Array<{
    day: string;
    [key: string]: number | string;
  }>;
  skills: Array<{ name: string; color: string }>;
}

export function WeeklyChart({ data, skills }: WeeklyChartProps) {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={data}>
        <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
        <XAxis dataKey="day" stroke="#64748b" fontSize={12} />
        <YAxis stroke="#64748b" fontSize={12} />
        <Tooltip
          contentStyle={{
            backgroundColor: "white",
            border: "1px solid #e2e8f0",
            borderRadius: "8px",
          }}
        />
        <Legend />
        {skills.map((skill) => (
          <Bar
            key={skill.name}
            dataKey={skill.name}
            stackId="a"
            fill={skill.color}
          />
        ))}
      </BarChart>
    </ResponsiveContainer>
  );
}
