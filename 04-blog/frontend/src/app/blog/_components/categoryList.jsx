import Link from 'next/link';
import React from 'react'

export default async function CategoryList() {
    await new Promise((res) => setTimeout(res, 3000))

    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/category/list`);
    const { data: { categories } } = await res.json();
    return (
        <ul className='space-y-4'>
            <li>
                <Link href='/blog'>همه</Link>
            </li>
            {categories.map(category => {
                return (
                    <li key={category._id}>
                        <Link href={`/blog/category/${category.slug}`}>{category.title}</Link>
                    </li>
                )
            })}
        </ul>
    )
}
