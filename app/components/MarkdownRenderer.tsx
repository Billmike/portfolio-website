import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

interface MarkdownRendererProps {
  content: string;
}

export function MarkdownRenderer({ content }: MarkdownRendererProps) {
  // Remove the metadata lines from the content
  const cleanContent = content
    .replace(/^# .+$/gm, '') // Remove the main title
    .replace(/^Author: .+$/gm, '') // Remove author line
    .replace(/^Updated: .+$/gm, '') // Remove updated line
    .trim();

  return (
    <div className="prose prose-invert prose-lg max-w-none">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
        h1: ({ children }) => (
          <h1 className="text-3xl font-bold text-white mb-6">{children}</h1>
        ),
        h3: ({ children }) => (
          <h3 className="text-xl font-semibold text-white mb-4 mt-8">{children}</h3>
        ),
        p: ({ children }) => (
          <p className="text-white mb-4 leading-relaxed text-lg">{children}</p>
        ),
        strong: ({ children }) => (
          <strong className="font-semibold text-white">{children}</strong>
        ),
        em: ({ children }) => (
          <em className="text-gray-200">{children}</em>
        ),
        code: ({ children, className }) => {
          const isInline = !className;
          if (isInline) {
            return (
              <code className="bg-gray-800 text-blue-300 px-1 py-0.5 rounded text-sm">
                {children}
              </code>
            );
          }
          return (
            <code className="bg-gray-800 text-blue-300 px-2 py-1 rounded block text-sm">
              {children}
            </code>
          );
        },
        blockquote: ({ children }) => (
          <blockquote className="border-l-4 border-blue-500 pl-4 italic text-white mb-4">
            {children}
          </blockquote>
        ),
        ul: ({ children }) => (
          <ul className="list-disc list-outside text-white mb-4 space-y-2">
            {children}
          </ul>
        ),
        ol: ({ children }) => (
          <ol className="list-disc list-outside text-white mb-4 space-y-2">
            {children}
          </ol>
        ),
        li: ({ children }) => (
          <li className="text-white">{children}</li>
        ),
      }}
    >
      {cleanContent}
    </ReactMarkdown>
    </div>
  );
} 