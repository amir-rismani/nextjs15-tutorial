import Link from 'next/link'
import '../globals.css'

export const metadata = {
  title: 'Next.js',
  description: 'Generated by Next.js',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className='flex flex-col h-screen'>
          <header className='bg-slate-100 w-full p-3'>
            <ul>
              <li><Link href="/shop">Shop</Link></li>
              <li><Link href="/products">Products</Link></li>
            </ul>
          </header>
          <main className='flex-1 w-full p-3'>{children}</main>
          <footer className='bg-blue-100 w-full p-3'>User Root Layout Footer</footer>
        </div>
      </body>
    </html>
  )
}
