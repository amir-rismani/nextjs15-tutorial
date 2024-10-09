import React from 'react'

export default function NestedLayout({ children }) {
    return (
        <div>
            <h1 className='bg-green-100'>Nested Layout</h1>
            {children}
        </div>
    )
}
