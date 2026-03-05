import { format } from "date-fns";
import { minutesToHours } from "@/lib/utils";

interface LogEntryRowProps {
  log: {
    id: string;
    date: Date;
    durationMinutes: number;
    type: string;
    note: string | null;
    skill: {
      name: string;
      color: string;
    };
  };
}

const typeLabels: Record<string, string> = {
  tutorial: "Tutorial",
  project: "Project",
  reading: "Reading",
  course: "Course",
  practice: "Practice",
  other: "Other",
};

export function LogEntryRow({ log }: LogEntryRowProps) {
  return (
    <div className="flex items-center justify-between py-3 border-b border-slate-100 last:border-0">
      <div className="flex items-center gap-3 flex-1">
        <div
          className="h-8 w-8 rounded"
          style={{ backgroundColor: log.skill.color }}
        />
        <div className="flex-1">
          <p className="font-medium text-sm">{log.skill.name}</p>
          <p className="text-xs text-slate-600">
            {typeLabels[log.type]} • {format(new Date(log.date), "MMM d, yyyy")}
          </p>
          {log.note && (
            <p className="text-xs text-slate-500 mt-1 line-clamp-1">{log.note}</p>
          )}
        </div>
      </div>
      <div className="text-right">
        <p className="font-semibold text-sm">{minutesToHours(log.durationMinutes)}h</p>
      </div>
    </div>
  );
}
