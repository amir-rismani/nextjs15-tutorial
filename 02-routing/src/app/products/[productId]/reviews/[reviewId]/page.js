import { notFound } from 'next/navigation'
import React from 'react'

function ReviewDetailsPage({ params }) {
    if (parseInt(params.reviewId) > 100) notFound();

    return (
        <h1>Review # {params.reviewId} of Product # {params.productId}</h1>
    )
}

export default ReviewDetailsPage