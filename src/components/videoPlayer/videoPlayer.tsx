import { videos } from "@/constants/dummyVideoData";
import { Button } from "../ui/button";
import Image from "next/image";
import { titleToSlug } from "@/utils/slug";
import { VideoProps } from "@/types/types";
import { info } from "@/assets";

const VideoPlayer = (
  { title }: { title: string },
  width?: number,
  height?: number
) => {
  const videoData = videos.find((video) => {
    return titleToSlug(video.title) === titleToSlug(title);
  }) as VideoProps;

  console.log("Video Data: ", title);
  return (
    <div>
      <div className="relative cursor-pointer">
        <div className="flex justify-between items-center px-4 py-3 absolute top-0 left-0 right-0 z-10">
          <span className="font-normal text-[14px] leading-normal">{videoData?.title}</span>
          <Button variant="ghost">
            <Image src={info} alt="info" width={20} height={20} />
          </Button>
        </div>
        <Image
          src={videoData?.thumbnail}
          alt="thumbnail"
          className="w-full h-auto md:min-w-[276px]"
          width={width}
          height={height}
        />
        <div className="absolute px-1 bottom-0 left-0 right-0 z-10">
          <div className="flex w-full mb-8">
            <div className="flex-[1.5] bg-primary h-[3px]" />
            <div className="flex-[0.5] bg-[#EAEAEA80] h-[3px]" />
            <div className="flex-[2] bg-[#EAEAEA33] h-[3px]" />
          </div>
          {/* <IconsSection /> */}
        </div>
      </div>
    </div>
  );
};

export default VideoPlayer;
