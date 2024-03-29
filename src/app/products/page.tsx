import MeowArticle from './../components/MeowArticle';
import { getProducts } from './../service/products';
import Image from 'next/image';
import Link from 'next/link';
import clothesImage from '../../../public/images/clothes.jpg';

// export const revalidate = 3;

export default async function ProductsPage() {
  const products = await getProducts();

  return (
    <>
      <h1>Product Introduction Page</h1>
      <Image src={clothesImage} alt='Clothes' priority />
      <ul>
        {products.map(({ id, name }, index) => (
          <li key={index}>
            <Link href={`/products/${id}`}>{name}</Link>
          </li>
        ))}
      </ul>
      <MeowArticle />
    </>
  );
}
