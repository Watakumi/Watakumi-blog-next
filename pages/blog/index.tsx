import { Card } from '../../components/Card';
import { TitleContent } from '../../components/TitleContent';

export default function Blog(): JSX.Element {
  return (
    <div>
      <TitleContent title="All Posts" />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
  );
}
