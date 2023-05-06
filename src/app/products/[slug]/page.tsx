import { getProduct, getProducts } from '../../service/products';
import { notFound } from 'next/navigation';
import Image from 'next/image';

export const revalidate = 3;

type Props = {
  params: {
    slug: string;
  };
};

export function generateMetadata({ params }: Props) {
  return {
    title: `Product Name : ${params.slug}`,
  };
}

export default async function ProductPage({ params: { slug } }: Props) {
  const product = await getProduct(slug);

  if (!product) {
    notFound();
  }

  return (
    <>
    <h1>{product.name} Product Details </h1>
    <Image 
        src = { `/images/${product.image}`}
        alt = {product.name}
        width = '300'
        height = '300'
    />
    </>
  );
}

export async function generateStaticParams() {
  // pre-create pages for all products (SSG)
  const products = await getProducts();
  return products.map((product) => ({
    slug: product.id,
  }));
}
