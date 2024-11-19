import Image from "next/image";

async function PostList() {
    await new Promise((res) => setTimeout(res, 3000))
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/post/list`);
    const { data: { posts } } = await res.json();

    return (
        <div className="grid grid-cols-12 gap-8">
            {
                posts.map(post => (
                    <div key={post._id} className="col-span-12 sm:col-span-6 lg:col-span-4 border border-secondary-100 p-2 rounded-lg">

                    </div>
                ))
            }
        </div>
    )
}

export default PostList