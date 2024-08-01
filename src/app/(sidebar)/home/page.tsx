import ThumbnailCard from "@/components/thumbnailCard/thumbnailCard";
import { videos } from "@/constants/dummyVideoData";
import { CategoryHeader } from "@/features/header";

// [repeat(auto-fit,minmax(276px,1fr))]
const Home = () => {
  return (
    <div className="flex flex-col scrollbar-hide scrollbar-hidden overflow-auto h-full">
      <CategoryHeader />
      <div className="grid grid-cols-[repeat(auto-fit,minmax(276px,1fr))] px-6 pt-6 pb-14 md:pb-16 gap-x-4 gap-y-10">
        {videos.map((video) => (
          <ThumbnailCard
            key={video.title}
            title={video.title}
            thumbnail={video.thumbnail}
            avatar={video.channelAvatar}
            channelName={video.channelName}
            datePosted={video.datePosted}
            views={video.views}
            duration={video.duration}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
