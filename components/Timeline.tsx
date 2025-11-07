import { Experience, Education } from "@/lib/types";

interface TimelineProps {
  items: (Experience | Education)[];
  type: "experience" | "education";
}

export default function Timeline({ items, type }: TimelineProps) {
  return (
    <div className="relative">
      {/* Timeline line */}
      <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gray-200 dark:bg-gray-700"></div>

      <div className="space-y-8">
        {items.map((item, index) => (
          <div key={index} className="relative pl-12">
            {/* Timeline dot */}
            <div className="absolute left-0 top-1.5 w-8 h-8 bg-white dark:bg-gray-900 rounded-full border-4 border-blue-600 dark:border-blue-400"></div>

            <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-6">
              {type === "experience" && "company" in item && (
                <>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                      {item.role}
                    </h3>
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      {item.startDate} - {item.endDate}
                    </span>
                  </div>
                  <p className="text-blue-600 dark:text-blue-400 font-medium mb-4">
                    {item.company}
                  </p>
                  
                  {item.achievements && item.achievements.length > 0 && (
                    <ul className="space-y-2 mb-4">
                      {item.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-start text-gray-600 dark:text-gray-400">
                          <span className="mr-2 text-blue-600 dark:text-blue-400">•</span>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  {item.metrics && item.metrics.length > 0 && (
                    <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                      <p className="text-sm font-semibold text-gray-900 dark:text-white mb-2">
                        Key Metrics:
                      </p>
                      <ul className="space-y-1">
                        {item.metrics.map((metric, i) => (
                          <li key={i} className="text-sm text-gray-600 dark:text-gray-400">
                            {metric}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {item.technologies && item.technologies.length > 0 && (
                    <div className="mt-4 flex flex-wrap gap-2">
                      {item.technologies.map((tech, i) => (
                        <span
                          key={i}
                          className="px-2 py-1 text-xs font-medium text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-gray-700 rounded"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}
                </>
              )}

              {type === "education" && "institution" in item && (
                <>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                      {item.degree}
                      {item.field && ` in ${item.field}`}
                    </h3>
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      {item.startDate} - {item.endDate}
                    </span>
                  </div>
                  <p className="text-blue-600 dark:text-blue-400 font-medium mb-2">
                    {item.institution}
                  </p>
                  {item.description && (
                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                      {item.description}
                    </p>
                  )}
                </>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

