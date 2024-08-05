"use client";
import ThumbnailCard from "@/components/thumbnailCard/thumbnailCard";
import ThumbnailCardFallback from "@/components/thumbnailFallback/thumbnailFallback";
import { videos } from "@/constants/dummyVideoData";
import { CategoryHeader } from "@/features/header";
import { VideoProps } from "@/types/types";
import { useRouter, useSearchParams } from "next/navigation";
import { Suspense, useEffect, useState } from "react";

const HomeContent = () => {
  const [filteredVideos, setFilteredVideos] = useState<VideoProps[]>();
  const searchParams = useSearchParams();
  const tag = searchParams.get("tag");
  const search = searchParams.get("search")
  console.log(search)

  useEffect(() => {
    if (tag) {
      const filtered = videos.filter((v) => {
        return v.tags.some((t) => t.toLowerCase().includes(tag));
      });
      setFilteredVideos(filtered);
      if (tag === "all") {
        setFilteredVideos(videos);
      }
    } else {
      setFilteredVideos(videos);
    }

    if (search) {
      const filtered = videos.filter((v) => {
        return v.title.toLowerCase().includes(search);
      });
      setFilteredVideos(filtered);
    }
  }, [tag, search]);

  return (
    <div className="flex flex-col scrollbar-hide custom-scrollbar overflow-auto h-screen md:h-auto">
      <CategoryHeader />
      <div className="grid grid-cols-[repeat(auto-fit,minmax(276px,1fr))] px-6 pt-6 pb-20 md:pb-16 gap-x-4 gap-y-10">
        {filteredVideos?.map((video, i) => (
          <Suspense key={i} fallback={<ThumbnailCardFallback />}>
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
          </Suspense>
        ))}
      </div>
    </div>
  );
};

export default HomeContent;
