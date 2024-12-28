import { getPostsOfCategoryApi } from "@/services/postServices";
import PostList from "app/blog/_components/PostList";

async function Category({ params }) {
    const { slug } = (await params);
    const searchParams = `?categorySlug=${slug}`
    const posts = await getPostsOfCategoryApi(searchParams)
    return (
        <div>
            {posts.length === 0
                ? <p className="text-lg text-secondary-600 text-center">مقاله ای در این دسته بندی یافت نشد.</p>
                : <PostList posts={posts} />
            }

        </div>
    )
}

export default Category