import React from 'react'

function ProductDetailsPage({ params }) {
    return (
        <h1>Product Details Page - {params.productId}</h1>
    )
}

export default ProductDetailsPage