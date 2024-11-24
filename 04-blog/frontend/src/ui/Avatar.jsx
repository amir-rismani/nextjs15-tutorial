import Image from "next/image";

export default function Avatar({ src, width = 24 }) {
    return (
        <Image
            src={src || "/images/avatar.png"}
            width={width}
            height={width}
            className="rounded-full ring-1 ring-secondary-200"
            alt={src}
        />
    )
}