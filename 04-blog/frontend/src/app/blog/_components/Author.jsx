import Avatar from "@/ui/Avatar";

export default function Author({ avatarUrl, name }) {
    return (
        <div className="flex items-center gap-x-2">
            <Avatar src={avatarUrl} />
            <span className="text-sm text-secondary-500">{name}</span>
        </div>
    )
}
