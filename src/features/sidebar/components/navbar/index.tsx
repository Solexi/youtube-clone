"use client"

import { usePathname } from "next/navigation";
import { navbarItems } from "../../constants/constants";
import { titleToSlug } from "@/utils/slug";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
    const pathName = usePathname();

    return (
        <div className="md:hidden flex flex-row justify-between px-5 absolute bottom-0 right-0 left-0 bg-background z-30">
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
    )
}

export default Navbar;