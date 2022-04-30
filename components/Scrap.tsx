import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import emoji from 'remark-emoji';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { darcula } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import remarkUnwrapImages from 'remark-unwrap-images';

type Props = {
  markdown: string;
};
export function Scrap({ markdown }: Props): JSX.Element {
  const separater = '\n---\n';
  const scrapedMarkdowns = markdown.split(separater);

  return (
    <div className="flex flex-col gap-8 text-white">
      {scrapedMarkdowns.map((markdown, index) => {
        return (
          <div className="rounded-2xl bg-[#737373] p-6" key={index}>
            <ReactMarkdown
              remarkPlugins={[emoji, remarkGfm, remarkUnwrapImages]}
              components={{
                code({ node, inline, className, children, ...props }) {
                  const match = /language-(\w+)/.exec(className || '');
                  return !inline && match ? (
                    <SyntaxHighlighter
                      language={match[1]}
                      PreTag="div"
                      {...props}
                      style={darcula}
                    >
                      {String(children).replace(/\n$/, '')}
                    </SyntaxHighlighter>
                  ) : (
                    <code
                      className={className}
                      {...props}
                      style={{
                        color: '#dc2626',
                        backgroundColor: '#e2e8f0',
                      }}
                    >
                      {children}
                    </code>
                  );
                },
              }}
            >
              {markdown}
            </ReactMarkdown>
          </div>
        );
      })}
    </div>
  );
}
