type Props = {
  title: string;
  description?: string;
};
export function TitleContent({ title, description }: Props): JSX.Element {
  return (
    <div>
      <h1 className="text-3xl leading-10 md:text-4xl md:leading-[3rem]">
        {title}
      </h1>
      {description && <p className="pb-4 text-gray-800">{description}</p>}
    </div>
  );
}
