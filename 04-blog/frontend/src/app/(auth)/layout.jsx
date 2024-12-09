import React from 'react'

function Layout({ children }) {
    return (
        <div className='flex justify-center items-center'>
            <div className='w-full max-w-sm p-2'>
                {children}
            </div>
        </div>
    )
}

export default Layout