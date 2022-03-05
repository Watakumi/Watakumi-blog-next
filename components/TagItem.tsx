type Props = {
  title: string;
  count: number;
};

export function TagItem({ title, count }: Props): JSX.Element {
  return (
    <div>
      <a href="#" className="mr-2">
        {title}
      </a>
      <a href="#">({count})</a>
    </div>
  );
}
