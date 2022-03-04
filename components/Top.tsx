import { Card } from './Card';

export default function Top() {
  return (
    <div>
      <h1 className="text-4xl">Latest</h1>
      <p className="mb-4 text-gray-800">
        RubyやJavaScriptに関する記事を公開しています。
      </p>
      <Card />
    </div>
  );
}
