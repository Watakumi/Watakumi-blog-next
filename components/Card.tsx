import Link from 'next/link';

export function Card(): JSX.Element {
  return (
    <div className="pb-10">
      <hr />
      <div className="flex flex-row mt-10">
        <p className="w-1/4">May 29, 2022</p>
        <div className="w-3/4">
          <p className="text-3xl">Title</p>
          <div className="flex flex-row gap-4">
            <a href="#" className="text-cyan-600	hover:text-cyan-800">
              Ruby
            </a>
            <a href="#" className="text-cyan-600	hover:text-cyan-800">
              JavaScript
            </a>
          </div>
          <p className="text-gray-600 mt-8">
            閉瞬ね国画ンぎは事75倉はイげも者築ハ浮渡ぶびと高伝ワタツ故仇ク教膨フ難景ホナレ新火表質ミイ弾一こえろ。4歩イ決67覧ユセコ備部ば社菊リ団流ワ祭地毎ずき図都モレテ場性わびとフ考告カマ命稚変町ラちづり。役あね待下しど利挙モメクフ完奈彼ソクチ税使のね功90山ル所貨ょス経会見うし訴能ひはぱ劇号コチト作童敢渓くきや。
          </p>
          <Link href={'#'} passHref>
            <a className="inline-block mt-4 text-cyan-600	hover:text-cyan-800">
              Read More &rarr;
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
}
