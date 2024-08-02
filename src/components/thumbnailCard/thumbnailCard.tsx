import { ThumbnailCardProps } from "@/types/types";
import { titleToSlug } from "@/utils/slug";
import { Avatar } from "@radix-ui/react-avatar";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import { AvatarFallback, AvatarImage } from "../ui/avatar";
import { numberFormater } from "@/utils/numberFormater";

const ThumbnailCard: FC<ThumbnailCardProps> = ({
  thumbnail,
  avatar,
  channelName,
  datePosted,
  duration,
  title,
  views,
  mobileView,
  hideAvatar,
  small,
}) => {
  return (
    <Link
      href={`/videos/${titleToSlug(title)}`}
      className={`${mobileView ? "flex gap-2" : ""} group`}
    >
      {/* THUMBNAIL */}
      <div className="relative mb-3 group-hover:scale-[1.001] group-hover:ring-1 transition-all duration-300 group-hover:ring-border ">
        <Image
          src={thumbnail}
          alt={"video.thumbnail"}
          className={`${mobileView ? "w-40 md:min-w-40" : ""} ${
            small ? "md:min-w-[52px]" : ""
          } w-full h-auto md:min-w-[276px]`}
        />
        <p className="bg-background px-1 py-[3px] text-foreground font-normal text-[10px] absolute right-1 bottom-1">
          {duration}
        </p>
      </div>

      {/* DETAILS */}
      <div className="flex gap-3">
        <Avatar
          className={`h-9 w-9 ${mobileView || hideAvatar ? "hidden" : ""}`}
        >
          <AvatarImage src={avatar.src} />
          <AvatarFallback>YT</AvatarFallback>
        </Avatar>
        <div className="text-whitecolor text-xs">
          <p className="font-bold mb-1.5">{title}</p>
          <p className="font-[400] text-accent-foreground">{channelName}</p>
          <p className="text-accent-foreground font-[400]">
            <span>{numberFormater(views)} Views</span>
            <span className="mx-1">•</span>
            <span>{datePosted}</span>
          </p>
        </div>
      </div>
    </Link>
  );
};

export default ThumbnailCard;
