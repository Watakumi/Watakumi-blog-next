import { Card } from './Card';
import { TitleContent } from './TitleContent';

export default function Top() {
  return (
    <div>
      <TitleContent
        title={'Latest'}
        description={'RubyやJavaScriptに関する記事を公開しています。'}
      />
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
  );
}
