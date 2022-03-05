type Props = {
  name: string;
};
export function Tag({ name }: Props): JSX.Element {
  return (
    <a href="#" className="text-cyan-600	hover:text-cyan-800">
      {name}
    </a>
  );
}
