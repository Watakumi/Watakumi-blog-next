export function TagsContent(): JSX.Element {
  return (
    <div className="flex flex-row gap-4 justify-center items-center">
      <h1 className="text-4xl border-r-2 border-gray-400 pr-8">Tags</h1>
      <div>
        <div>
          <a href="#">JavaScript</a>
          <a href="#">(5)</a>
        </div>
        <div>
          <a href="#">Ruby</a>
          <a href="#">(1)</a>
        </div>
        <div>
          <a href="#">NestJS</a>
          <a href="#">(5)</a>
        </div>
        <div>
          <a href="#">Python</a>
          <a href="#">(5)</a>
        </div>
      </div>
    </div>
  );
}
