import React from 'react'
import { notFound } from 'next/navigation';
import { getProduct, getProducts } from '@/app/service/products';

type Props = {
  params:{
    slug: string;
  };
}
export function generateMetadata( { params }: Props ){
  return{
    title: `제품 이름: ${ params.slug }`,
  };
}

export default async function ProductPage({params: {slug}} : Props ) {
  const product = await getProduct(slug);
  // url에nothing을 입력하면 not-found.tsx의 
  if( !product ){
    notFound();
  }
  return (
    <h1>{product.name}</h1>
  )
}
// 미리만들어두고싶은페이지 설정
// export async function generateStaticParams(){
//   const products = await getProducts();
//   return products.map((product) => ({
//     slug : product.id
//   }))
// }