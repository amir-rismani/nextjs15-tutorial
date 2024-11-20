"use client";

import ButtonIcon from "@/ui/ButtonIcon";
import { toPersianDigits } from "@/utils/numberFormatter";

import {
    BookmarkIcon,
    ChatBubbleOvalLeftEllipsisIcon,
    HeartIcon,
} from "@heroicons/react/24/outline";

import {
    HeartIcon as SolidHeartIcon,
    BookmarkIcon as SolidBookmarkIcon,
} from "@heroicons/react/24/solid";
import { useRouter } from "next/navigation";

function PostInteraction({ post }) {
    const router = useRouter();

    return (
        <div className="flex items-center gap-x-1">
            <ButtonIcon variant="secondary">
                <ChatBubbleOvalLeftEllipsisIcon />
                <span>{toPersianDigits(post.commentsCount)}</span>
            </ButtonIcon>
            <ButtonIcon variant="red">
                {post.isLiked ? <SolidHeartIcon /> : <HeartIcon />}
            </ButtonIcon>
            <ButtonIcon variant="primary">
                {post.isBookmarked ? <SolidBookmarkIcon /> : <BookmarkIcon />}
            </ButtonIcon>
        </div>
    );
}
export default PostInteraction;
