import Navbar from "./components/navbar/navbar";
import SidebarSection from "./components/sections/sections";
import { sidebarFooter, sidebarSections } from "./constants/constants";
import Link from "next/link";

// [calc(100vh-56px)]
const Sidebar = () => {
  return (
    <>
      <div className="bg-background-3 max-h-[calc(100vh-56px)] hidden md:block w-64 overflow-auto custom-scrollbar shrink-0">
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
      </div>
    
    {/* MOBILE VIEW */}
      <Navbar />
    </>
  );
};

export default Sidebar;
