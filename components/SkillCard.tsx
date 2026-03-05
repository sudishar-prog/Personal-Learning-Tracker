import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { Edit, Trash2, Palette, Code, Briefcase, MoreHorizontal } from "lucide-react";
import { minutesToHours } from "@/lib/utils";

interface SkillCardProps {
  skill: {
    id: string;
    name: string;
    category: string;
    status: string;
    targetHours: number | null;
    color: string;
    totalMinutes: number;
  };
  onEdit: (skill: any) => void;
  onDelete: (id: string) => void;
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

const categoryIcons: Record<string, any> = {
  design: Palette,
  development: Code,
  product: Briefcase,
  other: MoreHorizontal,
};

export function SkillCard({ skill, onEdit, onDelete }: SkillCardProps) {
  const totalHours = minutesToHours(skill.totalMinutes);
  const progress = skill.targetHours
    ? Math.min((totalHours / skill.targetHours) * 100, 100)
    : 0;
  const Icon = categoryIcons[skill.category] || MoreHorizontal;

  return (
    <Card>
      <CardContent className="p-6">
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center gap-3">
            <div
              className="h-10 w-10 rounded-lg flex items-center justify-center"
              style={{ backgroundColor: skill.color }}
            >
              <Icon className="h-5 w-5 text-white" />
            </div>
            <div>
              <h3 className="font-semibold text-lg">{skill.name}</h3>
              <span className="text-xs text-slate-600 bg-slate-100 px-2 py-1 rounded">
                {categoryLabels[skill.category]}
              </span>
            </div>
          </div>
          <div className="flex gap-2">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => onEdit(skill)}
            >
              <Edit className="h-4 w-4" />
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => onDelete(skill.id)}
            >
              <Trash2 className="h-4 w-4 text-red-600" />
            </Button>
          </div>
        </div>
        
        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span className="text-slate-600">Status</span>
            <span className="font-medium">{statusLabels[skill.status]}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-slate-600">Hours Logged</span>
            <span className="font-medium">{totalHours}h</span>
          </div>
          {skill.targetHours && (
            <>
              <div className="flex justify-between text-sm">
                <span className="text-slate-600">Target</span>
                <span className="font-medium">{skill.targetHours}h</span>
              </div>
              <div className="mt-3">
                <div className="w-full bg-slate-200 rounded-full h-2">
                  <div
                    className="h-2 rounded-full transition-all"
                    style={{
                      width: `${progress}%`,
                      backgroundColor: skill.color,
                    }}
                  />
                </div>
                <p className="text-xs text-slate-600 mt-1">{Math.round(progress)}% complete</p>
              </div>
            </>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
