import Image from 'next/image';
import Link from 'next/link';
import { TitleContent } from '../components/TitleContent';

export default function About() {
  return (
    <div>
      <TitleContent title="About" />
      <div className="flex flex-col items-center">
        <div>
          <Image
            src={'/images/watakumi.jpeg'}
            alt="watakumi"
            width={150}
            height={150}
            className="rounded-full"
          />
        </div>
        <h2 className="text-3xl">好きなことを好きなだけ</h2>
        <Link href={'https://github.com/Watakumi'} passHref>
          <a className="text-2xl">
            Github: <span className="border-b-2 border-gray-500">Watakumi</span>
          </a>
        </Link>
      </div>
      <div className="mt-12 text-center text-xl">
        <p>こんにちは。Watakumiです。</p>
        <p>お仕事でWeb開発を始めて2年が経ちました。</p>
        <p>おかげさまで、</p>
        <p>好きなことを好きなだけさせてもらえる日々を過ごしております。</p>
      </div>
      <br />
      <h1 className="mt-12 text-xl sm:text-2xl md:text-3xl lg:text-4xl">
        経歴
      </h1>
      <div className="mt-4">
        <ul className="list-inside list-disc text-lg">
          <li>横浜国立大学を卒業後、横浜国立大学大学院を中退。</li>
          <li>2020/4 Ruby on Railsを主とした自社開発企業に新卒で入社。</li>
        </ul>
      </div>

      <h1 className="mt-12 text-xl sm:text-2xl md:text-3xl lg:text-4xl">
        スキルセット
      </h1>
      <div className="mt-4">
        <ul className="list-inside list-disc text-lg">
          <li>Ruby / Ruby on Rails の経験: 実務2年</li>
          <li>PostgreSQLを使った開発: 実務1年</li>
          <li>JavaScriptを使った開発: 実務1年</li>
          <li>React/TypeScript</li>
          <li>Howwire/Turbo/Stimulus</li>
          <li>AWSを使ったサーバーの構築</li>
          <li>Dockerを使った開発環境の整備・Deploy</li>
          <li>WordPressを使ったサーバーの構築</li>
          <li>静的サイトの作成とデプロイ</li>
        </ul>
      </div>
      <div className="mt-12 text-center">
        <Image
          src={'/images/roomwear.png'}
          width={16 * 50}
          height={9 * 50}
          alt="about"
        />
      </div>
    </div>
  );
}
