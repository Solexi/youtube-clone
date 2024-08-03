import { CommentProps, VideoProps } from "@/types/types";
import CommentCard from "./components/commentCard/commentCard";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { dropDown, userAvatar } from "@/assets";
import { Input } from "@/components/ui/input";

const Comment = ({ comment }: { comment: CommentProps[] }) => {
  return (
    <div className="flex flex-col">
      <div className="hidden md:flex mb-6 items-center gap-8 font-normal">
        <span>{comment.length} Comments </span>
        <Button
          variant="ghost"
          size="fit"
          className="gap-2 hover:bg-transparent hover:text-whitecolor"
        >
          <Image src={dropDown} alt="sort-icon" width={22} height={22} />
          <span>Sort by</span>
        </Button>
      </div>
      <div className={"hidden items-center gap-4 md:flex mb-8"}>
        <Button
          variant="ghost"
          size="fit"
          className="shrink-0 hover:bg-transparent"
        >
          <Image
            src={userAvatar}
            alt="thumbnail"
            className="w-8 h-8 md:w-10 md:h-10 object-contain rounded-full"
          />
        </Button>
        <Input
          placeholder="Add a public comment..."
          className="border-b border-border focus-visible:ring-0 p-0 bg-background"
        />
      </div>
      <div className="flex flex-col gap-4">
        {comment.map((c, i) => (
          <CommentCard
            key={i}
            name={c.name}
            avatar={c.avatar}
            content={c.content}
            timestamp={c.timestamp}
            likes={c.likes}
            dislikes={c.dislikes}
          />
        ))}
      </div>
    </div>
  );
};

export default Comment;
