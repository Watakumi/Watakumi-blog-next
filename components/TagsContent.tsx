import { TagItem } from './TagItem';

export function TagsContent(): JSX.Element {
  return (
    <div className="flex flex-row gap-4 justify-center items-center">
      <h1 className="text-5xl border-r-2 border-gray-400 pr-8">Tags</h1>
      <div className="flex max-w-lg flex-wrap gap-4">
        <TagItem title="JavaScript" count={5} />
        <TagItem title="Ruby" count={1} />
        <TagItem title="NestJS" count={3} />
        <TagItem title="Python" count={2} />
      </div>
    </div>
  );
}
