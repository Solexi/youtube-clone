import { CommentProps } from "@/types/types";
import { FC } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { thumbDown, thumbUp, userAvatar } from "@/assets";

const CommentCard: FC<CommentProps> = ({
  name,
  avatar,
  content,
  timestamp,
  likes,
  dislikes,
  replies,
}) => {
  return (
    <div className="flex gap-4">
      <Button variant="ghost" size="fit" className="shrink-0">
        <Image
          src={avatar}
          alt="thumbnail"
          className="w-8 h-8 md:w-10 md:h-10 object-contain"
        />
      </Button>
      <div>
        <p className="text-xs mb-1">
          <span className="font-bold mr-1">{name}</span>
          <span className="font-normal text-muted-foreground">{timestamp}</span>
        </p>
        <p className="font-normal text-sm mb-3">{content}</p>
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="fit" className="gap-2">
            <Image src={thumbUp} alt="liked" width={16} height={16} />
            <span>{likes}</span>
          </Button>
          <Button variant="ghost" size="fit" className="gap-2">
            <Image src={thumbDown} alt="disliked" width={16} height={16} />
            <span>{dislikes}</span>
          </Button>
          <Button
            variant="ghost"
            size="fit"
            className="text-muted-foreground ml-2 hover:bg-transparent hover:text-muted-foreground"
          >
            REPLY
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CommentCard;
