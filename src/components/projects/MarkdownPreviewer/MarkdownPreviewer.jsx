import { useState, useMemo } from 'react';
import { FormattedMessage, useIntl } from 'react-intl';

const defaultMarkdown = `# Markdown Previewer

## Features
- **Bold text** and *italic text*
- [Links](https://example.com)
- Inline \`code\` blocks

### Code Block
\`\`\`javascript
function hello() {
  console.log("Hello World!");
}
\`\`\`

### Lists
1. First item
2. Second item
3. Third item

- Unordered item
- Another item

> This is a blockquote. It can span multiple lines and contains wisdom.

---

### Image
![Alt text](https://via.placeholder.com/200x100)

That's it! Try editing the markdown on the left.
`;

function parseMarkdown(md) {
  let html = md;
  // Code blocks (must be first)
  html = html.replace(/```(\w*)\n([\s\S]*?)```/g, '<pre class="bg-gray-800 text-green-400 p-4 rounded-xl overflow-x-auto my-4 text-sm"><code>$2</code></pre>');
  // Inline code
  html = html.replace(/`([^`]+)`/g, '<code class="bg-gray-200 dark:bg-slate-700 px-1.5 py-0.5 rounded text-sm text-pink-500 dark:text-pink-400">$1</code>');
  // Images
  html = html.replace(/!\[([^\]]*)\]\(([^)]+)\)/g, '<img src="$2" alt="$1" class="rounded-lg max-w-full my-2" />');
  // Links
  html = html.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" class="text-blue-500 underline hover:text-blue-600" target="_blank" rel="noopener">$1</a>');
  // Headers
  html = html.replace(/^### (.+)$/gm, '<h3 class="text-lg font-bold mt-6 mb-2">$1</h3>');
  html = html.replace(/^## (.+)$/gm, '<h2 class="text-xl font-bold mt-8 mb-3">$1</h2>');
  html = html.replace(/^# (.+)$/gm, '<h1 class="text-2xl font-bold mt-8 mb-4">$1</h1>');
  // Horizontal rule
  html = html.replace(/^---$/gm, '<hr class="border-gray-300 dark:border-slate-600 my-6" />');
  // Bold & italic
  html = html.replace(/\*\*([^*]+)\*\*/g, '<strong class="font-bold">$1</strong>');
  html = html.replace(/\*([^*]+)\*/g, '<em class="italic">$1</em>');
  // Blockquote
  html = html.replace(/^> (.+)$/gm, '<blockquote class="border-l-4 border-blue-500 pl-4 py-2 my-4 text-gray-600 dark:text-gray-400 italic bg-blue-50 dark:bg-blue-900/20 rounded-r-lg">$1</blockquote>');
  // Ordered list
  html = html.replace(/^\d+\. (.+)$/gm, '<li class="ml-6 list-decimal">$1</li>');
  // Unordered list
  html = html.replace(/^- (.+)$/gm, '<li class="ml-6 list-disc">$1</li>');
  // Paragraphs (lines that aren't tags)
  html = html.replace(/^(?!<[a-z]|$)(.+)$/gm, '<p class="my-2 leading-relaxed">$1</p>');
  return html;
}

export default function MarkdownPreviewer() {
  const intl = useIntl();
  const [markdown, setMarkdown] = useState(defaultMarkdown);
  const [copied, setCopied] = useState(false);

  const renderedHtml = useMemo(() => parseMarkdown(markdown), [markdown]);

  const copyHtml = () => {
    navigator.clipboard.writeText(renderedHtml).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <div className="max-w-6xl mx-auto p-4 sm:p-6">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-200"><FormattedMessage id="mdTitle" defaultMessage="Markdown Previewer" /></h1>
        <p className="text-gray-500 dark:text-gray-400 mt-2"><FormattedMessage id="mdSubtitle" defaultMessage="Write markdown on the left, see the preview on the right" /></p>
      </div>

      <div className="flex justify-end mb-4">
        <button
          onClick={copyHtml}
          className="px-4 py-2 rounded-xl bg-gradient-to-r from-blue-500 to-indigo-500 text-white text-sm font-medium transition-all duration-300 hover:scale-105 active:scale-95"
        >
          {copied ? intl.formatMessage({ id: 'mdCopied', defaultMessage: 'Copied!' }) : intl.formatMessage({ id: 'mdCopyHtml', defaultMessage: 'Copy HTML' })}
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 min-h-[60vh]">
        {/* Editor */}
        <div className="rounded-2xl border border-gray-200 dark:border-slate-700 overflow-hidden bg-white dark:bg-slate-800 shadow-lg">
          <div className="px-4 py-2 bg-gray-50 dark:bg-slate-700 border-b border-gray-200 dark:border-slate-600 text-sm font-medium text-gray-600 dark:text-gray-300">
            <FormattedMessage id="mdMarkdown" defaultMessage="Markdown" />
          </div>
          <textarea
            value={markdown}
            onInput={(e) => setMarkdown(e.target.value)}
            className="w-full h-[calc(100%-40px)] p-4 bg-transparent text-gray-800 dark:text-gray-200 font-mono text-sm resize-none focus:outline-none"
            spellCheck={false}
          />
        </div>

        {/* Preview */}
        <div className="rounded-2xl border border-gray-200 dark:border-slate-700 overflow-hidden bg-white dark:bg-slate-800 shadow-lg">
          <div className="px-4 py-2 bg-gray-50 dark:bg-slate-700 border-b border-gray-200 dark:border-slate-600 text-sm font-medium text-gray-600 dark:text-gray-300">
            <FormattedMessage id="mdPreview" defaultMessage="Preview" />
          </div>
          <div
            className="p-4 text-gray-800 dark:text-gray-200 overflow-y-auto h-[calc(100%-40px)] prose-sm"
            dangerouslySetInnerHTML={{ __html: renderedHtml }}
          />
        </div>
      </div>
    </div>
  );
}
