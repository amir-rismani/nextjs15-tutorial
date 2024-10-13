import Link from 'next/link';
import React, { Suspense } from 'react'
import Loading from './loading';

const products = [
    { id: 1, title: 'Mobile', slug: "/mobile" },
    { id: 2, title: 'Watch', slug: "/watch" },
    { id: 3, title: 'Laptop', slug: "/laptop" },
]

function ShopPage({ params }) {
    throw Error('Loading error...')
    return (
        <>
            <h1>Shop Page</h1>
            <Suspense fallback={<Loading />}>
                <Products />
            </Suspense>
        </>

    )
}

export default ShopPage

export async function Products() {
    await new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('loading...')
        }, 3000);
    })

    return (
        <ul>
            {products.map(product => <li key={product.id}><Link href={`/products${product.slug}`}>{product.title}</Link></li>)}
        </ul>
    )
}
