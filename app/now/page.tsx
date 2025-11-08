import { content } from "@/data/content";

const getCategoryIcon = (category: string) => {
  switch (category) {
    case "learning":
      return "📚";
    case "building":
      return "🔨";
    case "exploring":
      return "🔍";
    case "online certifications":
      return "📖";
    default:
      return "✨";
  }
};

const getCategoryColor = (category: string) => {
  switch (category) {
    case "learning":
      return "bg-blue-100 dark:bg-blue-900/20 text-blue-800 dark:text-blue-300";
    case "building":
      return "bg-green-100 dark:bg-green-900/20 text-green-800 dark:text-green-300";
    case "exploring":
      return "bg-purple-100 dark:bg-purple-900/20 text-purple-800 dark:text-purple-300";
    case " online certifications":
      return "bg-orange-100 dark:bg-orange-900/20 text-orange-800 dark:text-orange-300";
    default:
      return "bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-300";
  }
};

export default function NowPage() {
  // Group items by category
  const itemsByCategory = content.now.reduce(
    (acc, item) => {
      if (!acc[item.category]) {
        acc[item.category] = [];
      }
      acc[item.category].push(item);
      return acc;
    },
    {} as Record<string, typeof content.now>
  );

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-800">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            What I'm Doing Now
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            This page shows what I'm currently learning, building, exploring, and reading.
            It's inspired by{" "}
            <a
              href="https://nownownow.com/about"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              the /now movement
            </a>
            . Last updated: {new Date().toLocaleDateString()}
          </p>
        </div>

        {/* Now Items by Category */}
        <div className="space-y-8">
          {Object.entries(itemsByCategory).map(([category, items]) => (
            <section key={category} className="mb-8">
              <div className="flex items-center mb-4">
                <span className="text-2xl mr-2">{getCategoryIcon(category)}</span>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white capitalize">
                  {category}
                </h2>
              </div>
              <div className="space-y-4">
                {items.map((item, index) => (
                  <div
                    key={index}
                    className="bg-gray-50 dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-700 p-6 hover:shadow-md transition-shadow"
                  >
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                        {item.title}
                      </h3>
                      <span
                        className={`px-2 py-1 text-xs font-semibold rounded ${getCategoryColor(
                          item.category
                        )}`}
                      >
                        {item.category}
                      </span>
                    </div>
                    <p className="text-gray-600 dark:text-gray-400 mb-2">
                      {item.description}
                    </p>
                    {item.date && (
                      <p className="text-sm text-gray-500 dark:text-gray-500">
                        Started: {item.date}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>

        {/* Update Note */}
        <div className="mt-12 bg-blue-50 dark:bg-blue-900/10 border border-blue-200 dark:border-blue-900/20 rounded-lg p-6">
          <p className="text-sm text-blue-800 dark:text-blue-300">
            <strong>Note:</strong> This page is updated regularly. To edit the content,
            update the <code className="bg-blue-100 dark:bg-blue-900/20 px-1 rounded">/data/content.ts</code> file.
          </p>
        </div>
      </div>
    </div>
  );
}

