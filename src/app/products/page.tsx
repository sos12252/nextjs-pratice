import Link from 'next/link';
import React from 'react'
import { getProducts } from '../service/products';

export default async function ProductsPage() {
  const products = await getProducts();
  return (
    <>
    <h1>제품 소개 페이지</h1>
    <ul>
    { products.map(({id, name}, index) =>  (
    <li key={index}>
      <Link href={`products/${id}`}>{name}</Link>
    </li>
      ))}
    </ul>
    </>
  );
}
