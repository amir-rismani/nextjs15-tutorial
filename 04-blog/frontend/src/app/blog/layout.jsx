import React from 'react'

function BlogLayout({ children }) {
    return (
        <div>
            <h1 className='text-xl font-bold mb-12'>لیست مقالات</h1>
            <div class="grid grid-cols-12 gap-8">
                <div className='col-span-12 lg:col-span-4 xl:col-span-3'>دسته بندی</div>
                <div className='col-span-12 lg:col-span-8 xl:col-span-9'>{children}</div>
            </div>
        </div>
    )
}

export default BlogLayout