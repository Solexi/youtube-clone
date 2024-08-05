"use client";
import { menu, search, userAvatar, voice, youtubeLogo } from "@/assets";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import Link from "next/link";
import { headerRightSectionIcons } from "../../constants/constants";
import { Avatar } from "@radix-ui/react-avatar";
import { useSidebarContext } from "@/features/sidebar/hooks/context/SidebarContext";
import { FC } from "react";
import { useSearchContext } from "@/hooks/contexts/SearchContext";
import { useSearchParams } from "next/navigation";

const Header: FC = () => {
  const searchParams = useSearchParams();
  const { isCollapsed, toggleSidebar } = useSidebarContext();
  const searchQuery = searchParams.get("search") || "";
  const {onSearch} = useSearchContext();

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value
    // onSearch(searchQuery);
    // console.log("Search Query Called")

    value ? onSearch(value) : onSearch("");
    console.log("Search Query", value)
  };

  return (
    <div className="flex py-2 flex-row bg-background-3 z-30 sticky justify-between items-center px-6">
      {/* LEFT SECTION */}
      <div className="flex items-center gap-6">
        <Button
          variant={"ghost"}
          size={"default"}
          className="hidden md:block hover:bg-transparent"
          onClick={() => {
            toggleSidebar();
            console.log(isCollapsed);
          }}
        >
          <Image src={menu} alt="menu" width={24} height={24} />
        </Button>
        <Link href={"/"}>
          <Image src={youtubeLogo} alt="logo" width={90} height={20} />
        </Link>
      </div>

      {/* MIDDLE: SEARCH */}
      <div className="hidden md:flex gap-1">
        {/* <form onSubmit={handleSearchSubmit} className="flex"> */}
          <Input
            placeholder={"Search"}
            value={searchQuery}
            className="w-[23rem] peer focus:outline-none"
            onChange={handleSearchChange}
          />
          <Button
            type="submit"
            className="mr-1 rounded-none rounded-e-sm bg-accent px-5 py-3"
          >
            <Image
              src={search}
              alt="search"
              width={24}
              height={24}
              className="object-contain"
            />
          </Button>
        {/* </form> */}
        <Button className="p-2 rounded-full bg-background hover:bg-transparent">
          <Image
            src={voice}
            alt="voice"
            width={24}
            height={24}
            className="object-contain"
          />
        </Button>
      </div>

      {/* RIGHT SECTION */}
      <div className="flex gap-0 md:gap-2">
        {headerRightSectionIcons.map((icon, i) => (
          <Button
            key={i}
            variant="ghost"
            className="hidden md:block p-2 hover:bg-transparent"
          >
            <Image
              src={icon}
              alt={`${icon}`}
              width={24}
              height={24}
              className="object-contain"
            />
          </Button>
        ))}
        <Button variant={"ghost"} className="md:hidden hover:bg-transparent">
          <Image src={search} alt="search" width={24} height={24} />
        </Button>
        <Button variant={"ghost"} className="px-3 hover:bg-transparent">
          <Avatar className="rounded-full h-8 w-8">
            <Image
              src={userAvatar}
              alt={`${userAvatar}`}
              className="object-contain rounded-full"
            />
          </Avatar>
        </Button>
      </div>
    </div>
  );
};

export default Header;
