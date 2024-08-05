"use client";
import { Button } from "@/components/ui/button";
import VideoPlayer from "@/components/videoPlayer/videoPlayer";
import { videos } from "@/constants/dummyVideoData";
import { VideoProps } from "@/types/types";
import { titleToSlug } from "@/utils/slug";
import { useSearchParams } from "next/navigation";
import Image from "next/image";
import { numberFormater } from "@/utils/numberFormater";
import VideoInfo from "@/components/videoInfo/videoInfo";
import { Avatar } from "@/components/ui/avatar";
import { AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import { useState } from "react";
import Comment from "@/features/comment";
import { XIcon } from "lucide-react";
import Playlist from "@/features/playlist";
import Link from "next/link";

const WatchContent = () => {
  const searchParams = useSearchParams();
  const title = searchParams.get("v");
  const [showFullDescription, setShowFullDescription] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const videoData = videos.find((video) => {
    return titleToSlug(video.title) === title;
  }) as VideoProps;

  const handleToggleDescription = () => {
    setShowFullDescription(!showFullDescription);
  };

  const handleOpen = () => {
    setIsOpen(true);
  };
  const handleClose = () => {
    setIsOpen(false);
  };

  return (
      <div className="flex flex-col h-screen md:h-auto relative md:mx-auto gap-2 md:gap-6 max-w-5xl">
        {/* VIDEO PLAYER, DESCRIPTION AND COMMENTS */}
        <div className="flex flex-col md:flex-row gap-4 md:gap-6 md:pl-6 md:pt-6">
          <div className="flex flex-col gap-4 md:gap-6">
            <div className="w-[full] md:w-[50vw] lg:w-[40vw] sticky top-0 md:relative z-30">
              <VideoPlayer title={title ?? ""} />
            </div>

            {/* COMMENT DETAILS FOR MOBILE */}
            {isOpen && (
              <div className="flex-col w-full h-screen bg-background fixed top-[40%] bottom-0 z-50">
                <div className="flex flex-row w-full sticky justify-between text-lg font-bold py-2 border-b-2">
                  Comments
                  <Button
                    variant={"ghost"}
                    className="hover:bg-transparent hover:text-whitecolor"
                    size={"fit"}
                    onClick={handleClose}
                  >
                    <XIcon width={32} height={32} className="h-8 w-8" />
                  </Button>
                </div>
                <div className="flex-col h-[75%] py-5 overflow-y-auto">
                  <Comment comment={videoData.comments} />
                </div>
              </div>
            )}

            <div className="px-3 md:px-0">
              <p className="font-normal text-base md:text-lg leading-normal">
                {videoData.title}
              </p>
              <div className="w-full flex items-center justify-between gap-4 py-2">
                <div className="flex gap-1 items-center text-sm text-muted-foreground font-bold">
                  <span>{videoData.views.toLocaleString()} views</span>
                  {" . "}
                  <span>{videoData.datePosted}</span>
                </div>
                <div className="hidden xl:flex">
                  <VideoInfo videoData={videoData} />
                </div>
              </div>

              {/* MOBILE VIDEO INFO */}
              <div className="flex-1 md:hidden">
                <VideoInfo videoData={videoData} />
              </div>

              {/* VIDEO DESCRIPTION */}
              <div className="flex w-full md:w-[50vw] lg:w-[40vw] gap-4 py-2 md:py-4 md:border-y border-border">
                <Avatar className="h-12 w-12">
                  <AvatarImage src={videoData.channelAvatar.src} />
                  <AvatarFallback>YT</AvatarFallback>
                </Avatar>
                <div className=" w-full flex flex-col gap-3">
                  <div className="flex justify-between items-center">
                    <div className="font-normal leading-normal text-muted-foreground">
                      <Link href={`/@${videoData.channelName}`}><p className="text-sm">{videoData.channelName}</p></Link>
                      <p className="text-xs">{`${numberFormater(
                        videoData.subscribers
                      )} subscribers`}</p>
                    </div>
                    <Button className="bg-primary my-2 font-bold text-whitecolor hover:bg-primary/90">
                      SUBSCRIBE
                    </Button>
                  </div>
                  <div>
                    <p
                      className={`${
                        showFullDescription ? "h-auto" : ""
                      } font-normal text-sm`}
                    >
                      {showFullDescription
                        ? videoData.description
                        : `${videoData.description.substring(0, 150)}...`}
                    </p>
                    <Button
                      onClick={handleToggleDescription}
                      variant={"ghost"}
                      size={"fit"}
                      className="hover:bg-transparent hover:text-whitecolor font-bold text-xs"
                    >
                      {showFullDescription ? "SHOW LESS" : "SHOW MORE"}
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            {/* COMMENT BOX FOR MOBILE */}
            <div
              onClick={handleOpen}
              className="md:hidden flex-col mx-3 w-[93%] rounded-sm bg-background-3 px-5 py-3"
            >
              <p className="text-sm font-medium">
                Comments{" "}
                <span className="text-xs">{videoData.comments.length}</span>
              </p>
              <div className="flex items-center gap-2 pt-1">
                <Image
                  src={videoData.comments[0].avatar}
                  alt={videoData.comments[0].name}
                  width={24}
                  height={24}
                  className="object-contain"
                />
                <p className="text-xs font-normal">
                  {videoData.comments[0].content}
                </p>
              </div>
            </div>

            {/* COMMENT FOR LARGER SCREENS */}
            <div className="hidden md:block">
              <Comment comment={videoData?.comments} />
            </div>
          </div>
          {/* PLAYLIST */}
          <div className="flex-1 flex w-full px-3 md:px-0 md:w-[40vw] pt-6 md:pt-0 md:pr-6">
            <Playlist videoData={videoData} />
          </div>
        </div>
      </div>
  );
};

export default WatchContent;
