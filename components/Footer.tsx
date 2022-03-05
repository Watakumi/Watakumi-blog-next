import Link from 'next/link';
import { AiOutlineGithub, AiOutlineTwitter } from 'react-icons/ai';
export function Footer(): JSX.Element {
  return (
    <footer className="py-4 flex justify-center">
      <div className="flex flex-col items-center">
        <div className="flex flex-row gap-4 text-gray-600">
          <div>
            <Link href={'https://github.com/Watakumi'} passHref>
              <a target={'_blank'} rel={'noopener noreferrer'}>
                <AiOutlineGithub size={32} />
              </a>
            </Link>
          </div>
          <div>
            <Link href={'https://twitter.com/Watadayooo__'} passHref>
              <a target={'_blank'} rel={'noopener noreferrer'}>
                <AiOutlineTwitter size={32} />
              </a>
            </Link>
          </div>
        </div>
        <div>
          <p className="text-gray-600">&copy; 2022 WatakumiBlog</p>
        </div>
      </div>
    </footer>
  );
}
