import ThumbnailCard from "@/components/thumbnailCard/thumbnailCard";
import { Button } from "@/components/ui/button";
import { videos } from "@/constants/dummyVideoData";
import { VideoProps } from "@/types/types";

const Playlist = ({
    videoData
}: {
    videoData: VideoProps
}) => {
  return (
    <div className="flex flex-1 flex-col gap-2">
      <div className="py-2">
        <Button variant="secondary" className={"rounded-[32px] mr-2"}>
          All
        </Button>
        <Button variant="ghost" className={"rounded-[32px] snap-start border border-border"}>
          {videoData.channelName}
        </Button>
      </div>
      <div className="hidden md:flex flex-col gap-2">
        {videos.map((video, i) => (
          <ThumbnailCard
            key={i}
            thumbnail={video.thumbnail}
            title={video.title}
            avatar={video.channelAvatar}
            channelName={video.channelName}
            views={video.views}
            datePosted={video.datePosted}
            duration={video.duration}
            mobileView
          />
        ))}
      </div>
      <div className="flex flex-col gap-2 md:hidden">
        {videos.map((video, i) => (
          <ThumbnailCard
            key={i}
            thumbnail={video.thumbnail}
            title={video.title}
            avatar={video.channelAvatar}
            channelName={video.channelName}
            views={video.views}
            datePosted={video.datePosted}
            duration={video.duration}
            small
          />
        ))}
      </div>
    </div>
  );
};

export default Playlist;
