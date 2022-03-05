import Image from 'next/image';
import Link from 'next/link';
export function ProjectCard(): JSX.Element {
  return (
    <div className="p-4 w-1/2">
      <Link href={'#'} passHref>
        <a>
          <Image
            alt={'title'}
            src={'https://placehold.jp/800x450.png'}
            width={506}
            height={344}
          />
        </a>
      </Link>
      <div className="p-6 space-y-4 w-auto">
        <h2 className="text-2xl">FirstProject</h2>
        <p className="text-gray-600">
          閉瞬ね国画ンぎは事75倉はイげも者築ハ浮渡ぶびと高伝ワタツ故仇ク教膨フ難景ホナレ新火表質ミイ弾一こえろ。4歩イ決67覧ユセコ備部ば社菊リ団流ワ祭地毎ずき図都モレテ場性わびとフ考告カマ命稚変町ラちづり。役あね待下しど利挙モメクフ完奈彼ソクチ税使のね功90山ル所貨ょス経会見うし訴能ひはぱ劇号コチト作童敢渓くきや。
        </p>
        <Link href={'#'} passHref>
          <a className="py-2 inline-block text-cyan-600	hover:text-cyan-800">
            Learn More &rarr;
          </a>
        </Link>
      </div>
    </div>
  );
}
