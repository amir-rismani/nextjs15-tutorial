"use client";

import { bookmarkPostApi, likePostApi } from "@/services/postServices";
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
import toast from "react-hot-toast";

function PostInteraction({ post }) {
    const router = useRouter();
    const likeHandle = async (postId) => {
        try {
            const { message } = await likePostApi(postId);
            toast.success(message)
            router.refresh()
        } catch (error) {
            toast.error(error?.response?.data?.message)
        }
    }

    const bookmarkHandle = async (postId) => {
        try {
            const { message } = await bookmarkPostApi(postId);
            toast.success(message)
            router.refresh()

        } catch (error) {
            toast.error(error?.response?.data?.message)
        }
    }
    return (
        <div className="flex items-center gap-x-1">
            <ButtonIcon variant="secondary">
                <ChatBubbleOvalLeftEllipsisIcon />
                <span>{toPersianDigits(post.commentsCount)}</span>
            </ButtonIcon>
            <ButtonIcon variant="red" onClick={() => likeHandle(post.id)}>
                {post.isLiked ? <SolidHeartIcon /> : <HeartIcon />}
            </ButtonIcon>
            <ButtonIcon variant="primary" onClick={() => bookmarkHandle(post.id)}>
                {post.isBookmarked ? <SolidBookmarkIcon /> : <BookmarkIcon />}
            </ButtonIcon>
        </div>
    );
}
export default PostInteraction;
