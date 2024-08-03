import { thumbUp, thumbDown, share, save, more } from "@/assets";
import { VideoProps } from "@/types/types";
import { numberFormater } from "@/utils/numberFormater";
import { Button } from "../ui/button";
import Image from "next/image";

const VideoInfo = ({ videoData}: { videoData: VideoProps }) => {
  const videoInfoIcons = [
    {
      icon: thumbUp,
      info: videoData.likes,
    },
    {
      icon: thumbDown,
      info: videoData.dislikes,
    },
    {
      icon: share,
      info: "SHARE",
    },
    {
      icon: save,
      info: "SAVE",
    },
  ];
  return (
    <div className="flex gap-1">
      {videoInfoIcons.map((i, index) => (
        <div key={index} className="flex gap-[6px] px-[6px] items-center">
          <Button
            variant={"ghost"}
            className="h-6 w-6 p-[3px] hover:bg-transparent"
          >
            <Image src={i.icon} alt={"info-icon"} />
          </Button>
          <p className="font-bold text-sm">
            {typeof i.info === "number" ? numberFormater(i.info) : i.info}
          </p>
        </div>
      ))}
      <Button variant={"ghost"} className="hover:bg-transparent p-[3px]">
        <Image src={more} alt="more-icon" width={24} height={24} />
      </Button>
    </div>
  );
};

export default VideoInfo;
