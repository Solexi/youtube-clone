"use client";

import { usePathname, useSearchParams, useRouter } from "next/navigation";
import { categoryTags } from "../../constants/constants";
import { titleToSlug } from "@/utils/utils";
import { Button } from "@/components/ui/button";
import { format } from "util";
import { useState, useRef, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const CategoryHeader = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathName = usePathname();
  const [showLeftIcon, setShowLeftIcon] = useState(false);
  const [showRightIcon, setShowRightIcon] = useState(true);
  const tagRef = useRef<HTMLDivElement>(null);

  const scrollRight = () => {
    if (tagRef.current) {
      tagRef.current.scrollBy({ left: 200, behavior: "smooth" });
      setShowLeftIcon(true);
    }
  };

  const scrollLeft = () => {
    if (tagRef.current) {
      tagRef.current.scrollBy({ left: -200, behavior: "smooth" });
      if (tagRef.current.scrollLeft <= 200) {
        setShowLeftIcon(false);
      }
    }
  };

  const handleScroll = () => {
    if (tagRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = tagRef.current;
      setShowLeftIcon(scrollLeft > 0);
      setShowRightIcon(scrollLeft + clientWidth < scrollWidth);
    }
  };

  useEffect(() => {
    const ref = tagRef.current;
    if (ref) {
      ref.addEventListener("scroll", handleScroll);
      handleScroll(); // Initial check
    }
    return () => {
      if (ref) {
        ref.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  const handleTagSelect = (param: string, value: string) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set(format(param), format(value.toString()));

    router.push(`${pathName}?${params.toString()}`);
  };

  return (
    <div  className="flex bg-background px-4 md:pl-6 py-3 scrollbar-hide w-full sticky z-20">
      {showLeftIcon && (
        <Button
          variant={"ghost"}
          className="hidden md:flex p-5 rounded-none h-full hover:bg-[#212121E5] hover:text-whitecolor absolute left-0 bottom-0 right-auto bg-[#212121E5]"
          onClick={scrollLeft}
        >
          <ChevronLeft />
        </Button>
      )}
      <div ref={tagRef} className="flex gap-3 overflow-auto scrollbar-hide">
        {categoryTags.map((category) => {
          const isActive = titleToSlug(category) === searchParams.get("tag");
          const slugTag = titleToSlug(category);
          return (
            <Button
              key={category}
              variant="secondary"
              onClick={() => handleTagSelect("tag", slugTag)}
              className={`rounded-[32px] font-[400] text-whitecolor hover:text-background-3 bg-border border-[0.3px] border-accent-foreground ${
                isActive ? "bg-white text-background-3" : ""
              }`}
            >
              {category}
            </Button>
          );
        })}
      </div>
      {showRightIcon && (
        <Button
          variant={"ghost"}
          className="hidden md:flex p-5 rounded-none h-full hover:bg-[#212121E5] hover:text-whitecolor absolute right-0 bottom-0 left-auto bg-[#212121E5]"
          onClick={scrollRight}
        >
          <ChevronRight />
        </Button>
      )}
    </div>
  );
};

export default CategoryHeader;
