import React from 'react'

export async function generateMetadata({ params }) {
    const productId = params.productId;

    // fetch data
    // const product = await fetch(`https://.../${id}`).then((res) => res.json())

    return {
        title: `product #${productId}`,
        description: `product #${productId} description.`
    }
}

function ProductDetailsPage({ params }) {
    return (
        <h1>Product Details Page - {params.productId}</h1>
    )
}

export default ProductDetailsPage