type Props = {
  title: string;
  description: string;
};
export function TitleContent({ title, description }: Props): JSX.Element {
  return (
    <div>
      <h1 className="text-4xl">{title}</h1>
      <p className="pb-4 text-gray-800">{description}</p>
    </div>
  );
}
