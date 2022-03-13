import { TagItem } from './TagItem';

export function TagsContent(): JSX.Element {
  return (
    <div className="flex flex-col items-center justify-center gap-4 md:flex-row">
      <h1 className="border-b-2 border-gray-400 pb-2 text-3xl sm:text-4xl md:border-b-0 md:border-r-2 md:pb-0 md:pr-8 md:text-5xl">
        Tags
      </h1>
      <div className="flex max-w-lg flex-wrap gap-4">
        <TagItem title="JavaScript" count={5} />
        <TagItem title="Ruby" count={1} />
        <TagItem title="NestJS" count={3} />
        <TagItem title="Python" count={2} />
      </div>
    </div>
  );
}
