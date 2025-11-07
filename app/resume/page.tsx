import { content } from "@/data/content";
import Timeline from "@/components/Timeline";
import SkillBadge from "@/components/SkillBadge";

// Force dynamic rendering to ensure fresh data
export const dynamic = 'force-dynamic';

export default function ResumePage() {
  // Category display labels mapping
  const categoryLabels: Record<string, string> = {
    language: "Language",
    technology: "Technology",
    "project management": "Project Management",
    framework: "Project Management", // Legacy support
    tool: "Tools",
    other: "Other",
  };

  // Group skills by category - order: Technology, Tools, Project Management, Language
  const categoryOrder = ["technology", "tool", "project management", "language"];
  const skillsByCategory = content.skills.reduce(
    (acc, skill) => {
      if (!acc[skill.category]) {
        acc[skill.category] = [];
      }
      acc[skill.category].push(skill);
      return acc;
    },
    {} as Record<string, typeof content.skills>
  );

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-800">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            {content.personal.name}
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-2">
            {content.personal.title}
          </p>
          {content.personal.location && (
            <p className="text-gray-500 dark:text-gray-500">
              {content.personal.location}
            </p>
          )}
        </div>

        {/* Summary Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Summary
          </h2>
          <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-6">
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              {content.personal.bio}
            </p>
          </div>
        </section>

        {/* Skills Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            Skills
          </h2>
          {/* Debug: Total skills count */}
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
            Total skills: {content.skills.length} | Categories: {Object.keys(skillsByCategory).join(", ")}
          </p>
          <div className="space-y-6">
            {categoryOrder
              .filter(category => skillsByCategory[category] && skillsByCategory[category].length > 0)
              .map((category) => {
                const skills = skillsByCategory[category];
                return (
                  <div key={category}>
                    <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-3">
                      {categoryLabels[category] || category.charAt(0).toUpperCase() + category.slice(1)}
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                      {skills.map((skill, index) => (
                        <SkillBadge key={index} skill={skill} />
                      ))}
                    </div>
                  </div>
                );
              })}
            {/* Display any remaining categories not in the order list */}
            {Object.entries(skillsByCategory)
              .filter(([category]) => !categoryOrder.includes(category))
              .map(([category, skills]) => (
                <div key={category}>
                  <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-3">
                    {categoryLabels[category] || category.charAt(0).toUpperCase() + category.slice(1)}
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                    {skills.map((skill, index) => (
                      <SkillBadge key={index} skill={skill} />
                    ))}
                  </div>
                </div>
              ))}
          </div>
        </section>

        {/* Experience Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            Experience
          </h2>
          <Timeline items={content.experience} type="experience" />
        </section>

        {/* Education Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            Education
          </h2>
          <Timeline items={content.education} type="education" />
        </section>

        {/* Download Resume Button (Optional) */}
        <div className="text-center mt-12">
          <a
            href="/resume.pdf"
            download
            className="inline-block px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors"
          >
            Download Resume (PDF)
          </a>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
            {/* TODO: Add your resume PDF to /public/resume.pdf */}
            Note: Add your resume PDF to /public/resume.pdf to enable download
          </p>
        </div>
      </div>
    </div>
  );
}

