import { Skill } from "@/lib/types";

interface SkillBadgeProps {
  skill: Skill;
}

export default function SkillBadge({ skill }: SkillBadgeProps) {
  const getProficiencyColor = (proficiency?: string) => {
    switch (proficiency) {
      case "expert":
        return "bg-green-100 dark:bg-green-900/20 text-green-800 dark:text-green-300";
      case "advanced":
        return "bg-blue-100 dark:bg-blue-900/20 text-blue-800 dark:text-blue-300";
      case "intermediate":
        return "bg-yellow-100 dark:bg-yellow-900/20 text-yellow-800 dark:text-yellow-300";
      case "beginner":
        return "bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-300";
      default:
        return "bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-300";
    }
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "language":
        return "💻";
      case "technology":
        return "⚡";
      case "project management":
      case "framework": // Legacy support
        return "⚙️";
      case "tool":
        return "🛠️";
      default:
        return "📦";
    }
  };

  return (
    <div className="flex items-center space-x-2 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-4 hover:shadow-md transition-shadow">
      <span className="text-xl">{getCategoryIcon(skill.category)}</span>
      <div className="flex-1">
        <div className="flex items-center justify-between mb-1">
          <span className="font-medium text-gray-900 dark:text-white">
            {skill.name}
          </span>
          {skill.proficiency && (
            <span
              className={`px-2 py-0.5 text-xs font-semibold rounded ${getProficiencyColor(
                skill.proficiency
              )}`}
            >
              {skill.proficiency}
            </span>
          )}
        </div>
        <span className="text-xs text-gray-500 dark:text-gray-400 capitalize">
          {skill.category}
        </span>
      </div>
    </div>
  );
}

