"use client"
import { useEffect } from "react";
import Navbar from "@/features/sidebar/components/navbar/navbar";
import SidebarSection from "@/features/sidebar/components/sections/sections";
import { navbarItems, sidebarFooter, sidebarSections } from "@/features/sidebar/constants/constants";
import Link from "next/link";
import { useSidebarContext } from "@/features/sidebar/hooks/context/SidebarContext";
import Image from "next/image";
import { titleToSlug } from "@/utils/slug";
import { usePathname } from "next/navigation";

const Sidebar = () => {
  const { isCollapsed } = useSidebarContext();
  const pathName = usePathname();
  useEffect(() => {
    console.log(isCollapsed)
  }, [isCollapsed])
  return (
    <>
      <div className={`bg-background-3 hidden md:block overflow-auto custom-scrollbar shrink-0 ${isCollapsed ? 'w-20 h-[calc(100vh-56px)]' : 'w-64 max-h-[calc(100vh-56px)]'}`}>
         {!isCollapsed ? (
          <>
            {sidebarSections.map((sec, i) => (
              <SidebarSection
                key={i}
                items={sec.items}
                title={sec.title}
                showNumber={sec.showNumber}
              />
            ))}
            <div className="flex flex-col gap-4 py-4 px-6 mb-11">
              {sidebarFooter.map((footer, i) => (
                <div key={i} className="flex flex-wrap gap-2">
                  {footer.map((item) => (
                    <Link
                      key={item.text}
                      href={item.link}
                      className="text-xs leading-3 font-bold text-accent-foreground pr-0"
                    >
                      {item.text}
                    </Link>
                  ))}
                </div>
              ))}
              <p className="text-xs font-bold text-accent-foreground">
                © 2021 Google LLC
              </p>
            </div>
          </>
        ) : (
          <div className="flex flex-col gap-5 py-4 px-2 mb-11">
            {navbarItems.map((item, i) => {
              const url = titleToSlug(item.text);
              const isActive = pathName.includes(url);

              return (
                  <Link
                      key={item.text}
                      href={`/${url}`}
                      className="flex flex-col justify-between p-2 transition-all items-center"
                  >
                      <Image
                          src={isActive ? item.icon[1] || item.icon[0] : item.icon[0]}
                          alt={item.text}
                          width={24}
                          height={24}
                      />
                      <p className="text-xs font-normal">{item.text}</p>
                  </Link>
              )
            })}
          </div>
        )}
      </div>
    {/* MOBILE VIEW */}
      <Navbar />
    </>
  );
};

export default Sidebar;
