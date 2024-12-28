import { getPostsApi } from "@/services/postServices";
import { setCookieOnReq } from "@/utils/setCookieOnReq";
import PostList from "app/blog/_components/PostList";
import SearchResult from "app/blog/_components/SearchResult";
import { cookies } from "next/headers";
import queryString from "query-string";

async function Category({ params, searchParams }) {
    const { slug } = (await params);
    const cookieStore = cookies();
    const queries = `${queryString.stringify(searchParams)}&categorySlug=${slug}`;
    const options = setCookieOnReq(cookieStore);
    const posts = await getPostsApi(queries, options);

    return (
        <div>
            <SearchResult posts={posts} />
            <PostList posts={posts} />
        </div>
    )
}

export default Category