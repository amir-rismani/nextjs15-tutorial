"use client"
import { toPersianDigits } from '@/utils/numberFormatter';
import { useSearchParams } from 'next/navigation';
import React from 'react'

export default function SearchResult({ posts }) {
    const searchParams = useSearchParams();
    const search = searchParams.get('search')

    return (
        <>
            {search
                ? (
                    <p className='mb-4 text-secondary-700'>
                        {
                            posts.length === 0
                                ? `نتیجه ای برای "${search}" یافت نشد.`
                                : `نمایش ${toPersianDigits(posts.length)} مقاله برای "${search}"`
                        }
                    </p>
                )
                :
                posts.length === 0 && <p className='mb-4 text-secondary-700'>مقاله ای یافت نشد.</p>
            }
        </>
    )
}
