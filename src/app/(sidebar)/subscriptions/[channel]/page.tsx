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
import ChannelVideos from "@/components/channelVideos/channelVideos";

const Subscription = ({ params }: { params: { channel: string } }) => {
  const pathName = usePathname();
  const channel = params.channel;

  const foundVideoData = videos.find((video) => {
    // console.log(titleToSlug(video.channelName) === channel);
    return titleToSlug(video.channelName) === channel;
  }) as VideoProps;

  console.log("Video Data: ", foundVideoData);

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

  return (
    <div className="flex flex-col gap-4 w-full scrollbar-hide">
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
          <Button className="bg-primary font-bold text-white rounded-sm hover:bg-primary/80">
            SUBSCRIBE
          </Button>
        </div>
        <div className="flex items-center flex-row gap-6">
          <NavigationMenu>
            <NavigationMenuList>
              {channelNavItem.map((item) => {
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
      <div className="px-4 md:px-16">
        <div className="flex gap-6 pb-6 border-b border-border">
          <div className="flex-1 w-[33%] md:max-w-[424px]">
            <VideoPlayer title={foundVideoData?.title} />
          </div>
          <div className="hidden lg:flex flex-col gap-5 lg:max-w-[40%]">
            <h2 className="font-normal text-base md:text-lg">
              {foundVideoData.title}
            </h2>
            <div className="flex items-center gap-1 text-muted-foreground text-sm font-bold">
              <span>{foundVideoData.views.toLocaleString()} views</span>
              {" . "}
              <span>{foundVideoData.datePosted}</span>
            </div>
            <p className="text-sm font-normal">{foundVideoData.description}</p>
          </div>
        </div>
      </div>

      {/* PLAYLIST */}
      <div className="flex flex-col gap-4 px-4 md:px-16 mb-12">
        <ChannelVideos title={"For you"} videos={videos.slice(0, 8)}/>
        <ChannelVideos title={"Videos"} videos={videos.slice(9, 17)}/>
      </div>
    </div>
  );
};

export default Subscription;
