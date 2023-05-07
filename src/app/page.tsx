import Image from 'next/image';
import { Inter } from 'next/font/google';
import styles from './page.module.css';
import os from 'os'; // node APIs
import Counter from './components/Counter';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  console.log('Hello! - server');
  console.log(os.hostname());

  return (
    <>
      <h1>Next.js Practice Page</h1>
      <Counter />
      <Image
        src='https://images.unsplash.com/photo-1441986300917-64674bd600d8'
        alt='shop'
        width={400}
        height={400}
      />
    </>
  );
}
