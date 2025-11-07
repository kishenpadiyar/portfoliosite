"use client";

/**
 * AI Chat Assistant Placeholder Component
 * 
 * This component is a placeholder for future AI chat integration.
 * 
 * INTEGRATION INSTRUCTIONS:
 * 
 * 1. Install OpenAI SDK:
 *    npm install openai
 * 
 * 2. Create API route: /app/api/chat/route.ts
 *    - Use OpenAI API to handle chat messages
 *    - Store conversation context
 *    - Return responses based on portfolio content
 * 
 * 3. Update this component to:
 *    - Connect to the API route
 *    - Handle user input and messages
 *    - Display chat history
 *    - Show loading states
 * 
 * 4. Example prompt engineering:
 *    - "What's Kishen's experience with AI projects?"
 *    - "Show me Kishen's top 3 projects"
 *    - "What technologies does Kishen use?"
 * 
 * 5. Consider using:
 *    - OpenAI GPT-4 or GPT-3.5-turbo
 *    - Vector embeddings for semantic search
 *    - RAG (Retrieval Augmented Generation) for portfolio content
 * 
 * 6. Security:
 *    - Add rate limiting
 *    - Validate user input
 *    - Sanitize responses
 *    - Consider authentication for production
 */

export default function AIChatPlaceholder() {
  return (
    <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-900 rounded-lg border border-blue-200 dark:border-gray-700 p-8 text-center">
      <div className="max-w-md mx-auto">
        <div className="mb-4">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 dark:bg-blue-900/20 rounded-full mb-4">
            <svg
              className="w-8 h-8 text-blue-600 dark:text-blue-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
              />
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
            AI Chat Assistant
          </h3>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            Ask me anything about my experience, projects, or skills!
          </p>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-4 mb-4">
          <div className="text-left space-y-2">
            <div className="flex items-start space-x-2">
              <div className="w-6 h-6 rounded-full bg-blue-100 dark:bg-blue-900/20 flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-xs">AI</span>
              </div>
              <div className="flex-1">
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Hi! I'm an AI assistant that can answer questions about this portfolio. 
                  This feature is coming soon!
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-yellow-50 dark:bg-yellow-900/10 border border-yellow-200 dark:border-yellow-900/20 rounded-lg p-4">
          <p className="text-sm text-yellow-800 dark:text-yellow-300">
            <strong>Coming Soon:</strong> This feature will be integrated with OpenAI API 
            to provide interactive Q&A about the portfolio content.
          </p>
        </div>

        <div className="mt-6 text-xs text-gray-500 dark:text-gray-400">
          <p>See component code for integration instructions</p>
        </div>
      </div>
    </div>
  );
}

