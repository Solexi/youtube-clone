import { videos } from "@/constants/dummyVideoData";
import ThumbnailCard from "../thumbnailCard/thumbnailCard";
import { VideoProps } from "@/types/types";
import Image from "next/image";
import { play } from "@/assets";
import Link from "next/link";

const ChannelVideos = ({
  title,
  videos,
}: {
  title: string;
  videos: VideoProps[];
}) => {
  return (
    <div>
      <div className="flex py-2 gap-4 items-center">
        <h2 className="text-base font-bold">{title}</h2>
        <Link href={"#"} className="flex gap-2 px-[6px] py-1">
          <Image
            src={play}
            alt="play-icon"
            width={24}
            height={24}
            className="h-6 w-6 object-cover"
          />
          <p className="font-bold text-muted-foreground">PLAY ALL</p>
        </Link>
      </div>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(214px,1fr))] gap-x-1 gap-y-6 border-border pb-8 border-b-[1px]">
        {videos.map((video) => (
          <ThumbnailCard
            key={video.title}
            title={video.title}
            thumbnail={video.thumbnail}
            avatar={video.channelAvatar}
            channelName={video.channelName}
            views={video.views}
            datePosted={video.datePosted}
            duration={video.duration}
            hideAvatar
            small
          />
        ))}
      </div>
    </div>
  );
};

export default ChannelVideos;
