import React from 'react'

function ReviewDetailsPage({ params }) {
    console.log(params);

    return (
        <h1>Review # {params.reviewId} of Product # {params.productId}</h1>
    )
}

export default ReviewDetailsPage