"use client"
import ThumbnailCard from "@/components/thumbnailCard/thumbnailCard";
import { videos } from "@/constants/dummyVideoData";
import { CategoryHeader } from "@/features/header";
import { VideoProps } from "@/types/types";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

// [repeat(auto-fit,minmax(276px,1fr))]
const Home = () => {
  const [filteredVideos, setFilteredVideos] = useState<VideoProps[]>()
  const searchParams = useSearchParams();
  const tag = searchParams.get("tag");

  useEffect(() => {
    if (tag) {
      const filtered = videos.filter((v) => {
        return v.tags.some((t) => t.toLowerCase().includes(tag));
      });
      setFilteredVideos(filtered);
      if (tag === 'all') {
        setFilteredVideos(videos);
      }
    } else {
      setFilteredVideos(videos);
    }
  }, [tag]);

  return (
    <div className="flex flex-col scrollbar-hide scrollbar-hidden overflow-auto h-full">
      <CategoryHeader />
      <div className="grid grid-cols-[repeat(auto-fit,minmax(276px,1fr))] px-6 pt-6 pb-14 md:pb-16 gap-x-4 gap-y-10">
        {filteredVideos?.map((video) => (
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
