import Image from "next/image";
import Link from "next/link";

function CoverImage({ coverImageUrl, title, slug }) {
    return (
        <div className="relative aspect-[16/9] overflow-hidden rounded-md mb-4">
            <Link href={`blog/${slug}`}>
                <Image
                    src={coverImageUrl}
                    alt={title}
                    fill
                    className="object-cover object-center hover:scale-110 transition-all duration-300 ease-out"
                    quality={80}
                />
            </Link>
        </div>)
}

export default CoverImage