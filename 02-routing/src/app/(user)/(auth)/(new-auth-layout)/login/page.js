"use client"
import { useRouter } from 'next/navigation'
import React from 'react'

export default function LoginPage() {
    const router = useRouter();
    return (
        <>
            <div>Login Page</div>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 my-3 rounded" onClick={() => router.push('/dashboard')}>Login and redirect</button>
        </>
    )
}
