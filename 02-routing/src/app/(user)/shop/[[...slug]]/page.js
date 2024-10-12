import Link from 'next/link';
import React from 'react'
const products = [
    { id: 1, title: 'Mobile', slug: "/mobile" },
    { id: 2, title: 'Watch', slug: "/watch" },
    { id: 3, title: 'Laptop', slug: "/laptop" },
]

function ShopPage({ params }) {
    console.log(params);

    return (
        <>
            <h1>Shop Page</h1>
            <ul>
                {products.map(product => <li key={product.id}><Link href={`/products${product.slug}`}>{product.title}</Link></li>)}
            </ul>
        </>

    )
}

export default ShopPage