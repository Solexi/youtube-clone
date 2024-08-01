"use client";

import { FC, useState } from "react";
import { SidebarSectionProps } from "../../types/types";
import { usePathname } from "next/navigation";
import { titleToSlug } from "@/utils/slug";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const SidebarSection: FC<SidebarSectionProps> = ({
  title,
  items,
  showNumber,
}) => {
  const itemsLength = items.length;
  const [defaultShow, setDefaultShow] = useState(showNumber || itemsLength);
  const pathName = usePathname();
  const showMore = itemsLength > defaultShow;

  return (
    <div className="border-b border-border bg-[#212121] py-3 transition-all mr-2">
      {title && (
        <p className="text-[14px] text-[#AAAAAA] px-6 py-2 font-bold uppercase">
          {title}
        </p>
      )}

      {items.slice(0, defaultShow).map((item) => {
        let url = titleToSlug(item.text);
        if (title) {
          url = `${titleToSlug(title)}/${url}`;
        } else {
          url = `/${url}`;
        }
        const isActive = pathName.includes(url);
        return (
          <Link
            key={item.text}
            href={url}
            className={`flex items-center p-2 pl-6 gap-6 transition-all ${
              isActive ? "bg-[#303030]" : ""
            }`}
          >
            <Image
              src={isActive ? item.icon[1] || item.icon[0] : item.icon[0]}
              alt={item.text}
              height={24}
              width={24}
            />
            <p className="font-[400] text-sm">{item.text}</p>
          </Link>
        );
      })}

      {showMore && (
        <Button
          variant="ghost"
          // size="sm"
          className="flex justify-start gap-6 p-2 pl-6 w-full hover:bg-transparent hover:text-white"
          onClick={() => setDefaultShow(itemsLength)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="8"
            viewBox="0 0 14 8"
            fill="none"
          >
            <path
              d="M6.99998 7.7L0.599976 1.4L1.29998 0.699997L6.89998 6.3L12.5 0.699997L13.2 1.4L6.99998 7.7Z"
              fill="white"
            />
            <path
              d="M6.99998 7.7L0.599976 1.4L1.29998 0.699997L6.89998 6.3L12.5 0.699997L13.2 1.4L6.99998 7.7Z"
              fill="black"
              fill-opacity="0.2"
            />
            <path
              d="M6.99998 7.7L0.599976 1.4L1.29998 0.699997L6.89998 6.3L12.5 0.699997L13.2 1.4L6.99998 7.7Z"
              fill="black"
              fill-opacity="0.2"
            />
          </svg>
          <span>Show {itemsLength - defaultShow} More</span>
        </Button>
      )}
    </div>
  );
};

export default SidebarSection;
