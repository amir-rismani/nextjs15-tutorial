import React, { Suspense } from 'react'
import PostList from '../_components/PostList'
import { cookies } from 'next/headers';
import { getPostsApi } from '@/services/postServices';
import { setCookieOnReq } from '@/utils/setCookieOnReq';
import queryString from 'query-string';
import SearchResult from '../_components/SearchResult';
// export const experimental_ppr = true  //static and dynamic rendering

async function BlogPage({ searchParams }) {
    const cookieStore = cookies();
    const queries = queryString.stringify(searchParams);
    const options = setCookieOnReq(cookieStore);
    const posts = await getPostsApi(queries, options);
    return (
        <>
            <SearchResult posts={posts} />
            <PostList posts={posts} />
        </>
    )
}

export default BlogPage