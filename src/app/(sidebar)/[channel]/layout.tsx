import { bgCover } from "@/assets";
import Image from "next/image";
import { ReactNode } from "react";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <Image
        src={bgCover}
        alt="cover-img"
        className="object-fill w-full h-auto"
      />
      <div>{children}</div>
    </div>
  );
};

export default Layout;
