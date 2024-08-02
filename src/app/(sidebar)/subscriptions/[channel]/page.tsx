"use client";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { videos } from "@/constants/dummyVideoData";
import { ChannelNavigationProps, VideoProps } from "@/types/types";
import { titleToSlug } from "@/utils/slug";
import React from "react";
import { numberFormater } from "@/utils/numberFormater";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import Link from "next/link";
import { search } from "@/assets";
import { ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import VideoPlayer from "@/components/videoPlayer/videoPlayer";

const Subscription = ({ params }: { params: { channel: string } }) => {
  // const [videoData, setVideoData] = useState<VideoProps | any>();
  const pathName = usePathname();
  const channel = params.channel;

  const foundVideoData = videos.find((video) => {
    // console.log(titleToSlug(video.channelName) === channel);
    return titleToSlug(video.channelName) === channel;
  }) as VideoProps;

  console.log("Video Data: ", foundVideoData);

  // useEffect(() => {
  //   const channel = params.channel;
  //   console.log("Channel parameter:", channel);

  //   const foundVideoData = videos.find((video) => {
  //     // console.log(titleToSlug(video.channelName) === channel);
  //     return titleToSlug(video.channelName) === channel;
  //   }) as VideoProps;

  //   setVideoData(foundVideoData);
  //   console.log("Video Data: ", videoData);
  // }, [params.channel]);

  const channelNavItem: ChannelNavigationProps[] = [
    {
      name: "Home",
      path: `/subscriptions/${params.channel}`,
    },
    {
      name: "Videos",
      path: `/subscriptions/${params.channel}/videos`,
    },
    {
      name: "Playlists",
      path: `/subscriptions/${params.channel}/playlists`,
    },
    {
      name: "Community",
      path: `/subscriptions/${params.channel}/community`,
    },
    {
      name: "Channels",
      path: `/subscriptions/${params.channel}/channels`,
    },
    {
      name: "About",
      path: `/subscriptions/${params.channel}/about`,
    },
  ];

  // console.log("Video data:", videoData);
  return (
    <div className="flex flex-col gap-6 w-full">
      {/* CHANNEL HEADER */}
      <div className="flex bg-[#181818] flex-col md:gap-1 pt-4 px-4 md:px-16">
        {/* CHANNEL PROFILE */}
        <div className="flex items-center justify-between gap-6">
          <div className="flex flex-row gap-6 items-center">
            {foundVideoData && (
              <Avatar className="h-16 w-16 md:h-20 md:w-20 object-fill shrink-0">
                <AvatarImage src={foundVideoData?.channelAvatar.src} />
                <AvatarFallback>YT</AvatarFallback>
              </Avatar>
            )}
            <div className="font-normal">
              <p className="font-normal text-xl md:text-2xl">
                {foundVideoData?.channelName}
              </p>
              <p className="text-accent-foreground text-sm">
                {numberFormater(foundVideoData?.subscribers ?? 0)} subscribers
              </p>
            </div>
          </div>
          <Button className="bg-primary text-foreground rounded-sm hover:bg-primary/80">
            SUBSCRIBE
          </Button>
        </div>
        <div className="flex items-center flex-row gap-6">
          <NavigationMenu>
            <NavigationMenuList>
              {channelNavItem.map((item) => {
                // const isActive = pathName === `/subscriptions/${params.channel}`
                const isActive =
                  pathName === `/subscriptions/${params.channel}` &&
                  item.name === "Home"
                    ? true
                    : pathName.includes(titleToSlug(item.name));
                console.log(isActive);
                return (
                  <NavigationMenuItem key={item.name}>
                    <Link href={item.path} legacyBehavior passHref>
                      <NavigationMenuLink
                        className={`${navigationMenuTriggerStyle()} ${
                          isActive ? "border-whitecolor" : ""
                        } uppercase`}
                      >
                        {item.name}
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>
                );
              })}
            </NavigationMenuList>
          </NavigationMenu>
          <div className="hidden md:flex w-full justify-between">
            <Button variant={"ghost"} className="hover:bg-transparent">
              <Image src={search} alt="search" width={24} height={24} />
            </Button>
            <Button
              variant={"ghost"}
              className="hover:bg-transparent hover:text-whitecolor"
            >
              <ChevronRight className="h-6 w-6" width={24} height={24} />
            </Button>
          </div>
        </div>
      </div>

      {/* SMALL VIDEO PLAYER */}
      <div className="flex gap-6 px-4 md:px-16 pb-6 border-b border-border">
        <div className="flex-1 w-1/3 md:max-w-[424px]">
          <VideoPlayer title={foundVideoData?.title} />
        </div>
      </div>

      {/* PLAYLIST */}
    </div>
  );
};

export default Subscription;
