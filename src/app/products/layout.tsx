import { Metadata } from 'next';
import Link from 'next/link';
import styles from './layout.module.css';

export const metadata: Metadata = {
  title: 'Great Product Site | View All Products',
  description: 'Check out the products',
};

export default function ProductsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <nav className={styles.nav}>
        <Link href='/products/women'>Women</Link>
        <Link href='/products/man'>Men</Link>
      </nav>
      <section className={styles.product}>{children}</section>
    </>
  );
}
