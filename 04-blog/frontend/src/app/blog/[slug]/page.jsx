import { getPostBySlug } from "@/services/postServices";
import Image from "next/image";
import { notFound } from "next/navigation";

export async function generateMetadata({ params }) {
    const slug = (await params).slug
    const post = await getPostBySlug(slug)

    return {
        title: post.title,
    }
}
export default async function SinglePost({ params }) {
    const slug = (await params).slug
    const post = await getPostBySlug(slug)
    if (!post) notFound()
    return (
        <div className="text-secondary-600 max-w-screen-md mx-auto">
            <h1 className="text-secondary-700 text-2xl font-bold mb-8">
                {post.title}
            </h1>
            <p className="mb-4">{post.briefText}</p>
            <p className="mb-8">{post.text}</p>
            <div className="relative aspect-[16/9] overflow-hidden rounded-lg mb-10">
                <Image
                    className="object-cover object-center hover:scale-110 transition-all ease-out duration-300"
                    fill
                    src={post.coverImageUrl}
                    alt={post.title}
                />
            </div>
            {/* {post.related.length > 0 && <RelatedPost posts={post.related} />}
            <PostComment post={post} /> */}
        </div>
    )
}