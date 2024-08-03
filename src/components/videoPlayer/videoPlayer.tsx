import { videos } from "@/constants/dummyVideoData";
import { Button } from "../ui/button";
import Image from "next/image";
import { titleToSlug } from "@/utils/slug";
import { VideoProps } from "@/types/types";
import {
  cast,
  closedCaption,
  fullScreen,
  hd,
  info,
  next,
  play,
  theater,
  volume,
} from "@/assets";

const VideoPlayer = ({
  title,
  width,
  height,
}: {
  title: string;
  width?: number;
  height?: number;
}) => {
  const videoData = videos.find((video) => {
    return titleToSlug(video.title) === titleToSlug(title);
  }) as VideoProps;

  const videoIcons = [
    {
      src: closedCaption,
      alt: "closed caption",
    },
    {
      src: hd,
      alt: "hd",
    },
    {
      src: theater,
      alt: "theater",
    },
    {
      src: cast,
      alt: "cast",
    },
    {
      src: fullScreen,
      alt: "full screen",
    },
  ];

  console.log("Video Data: ", title);
  return (
    <div>
      <div className="relative cursor-pointer">
        <div className="flex justify-between items-center px-4 py-3 absolute top-0 left-0 right-0 z-10">
          <span className="font-normal text-[14px] leading-normal">
            {videoData?.title}
          </span>
          <Button variant="ghost">
            <Image src={info} alt="info" width={20} height={20} />
          </Button>
        </div>
        <Image
          src={videoData?.thumbnail}
          alt="thumbnail"
          className="w-full h-auto md:min-w-[276px]"
          // width={width}
          // height={height}
        />
        <div className="absolute px-1 bottom-0 left-0 right-0 z-10">
          <div className="flex w-full">
            <div className="flex-[1.5] bg-primary h-[3px]" />
            <div className="flex-[0.5] bg-[#EAEAEA80] h-[3px]" />
            <div className="flex-[2] bg-[#EAEAEA33] h-[3px]" />
          </div>
          <div className="flex flex-row justify-between">
            <div className="flex items-center md:gap-2">
              <Button
                className="hover:bg-transparent"
                variant="ghost"
                size={"icon"}
              >
                <Image src={play} alt="play" width={20} height={20} />
              </Button>
              <Button
                className="hover:bg-transparent"
                variant="ghost"
                size={"icon"}
              >
                <Image src={next} alt="next" width={16} height={16} />
              </Button>
              <Button
                className="hover:bg-transparent"
                variant="ghost"
                size={"icon"}
              >
                <Image src={volume} alt="volume" width={16} height={16} />
              </Button>
            </div>

            <div className="flex items-center md:gap-2">
              {videoIcons?.map((icon, index) => (
                <Button
                  className="hover:bg-transparent"
                  key={index}
                  variant="ghost"
                  size={"icon"}
                >
                  <Image src={icon.src} alt={icon.alt} width={20} height={20} />
                </Button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoPlayer;
