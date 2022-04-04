import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import emoji from 'remark-emoji';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { darcula } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import remarkImages from 'remark-images';
import remarkUnwrapImages from 'remark-unwrap-images';

type Props = {
  markdown: string;
};
export function Markdown({ markdown }: Props): JSX.Element {
  return (
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
                color: '#ec4899',
                backgroundColor: '#f5f5f5',
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
  );
}
