"use client";
import { FC, ReactNode, useContext } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React from "react";
import { createContext } from "react";

interface SearchProviderProps {
  onSearch: (query: string) => void;
}

const SearchContext = createContext<SearchProviderProps | undefined>(undefined);

export const SearchProvider = ({ children }: {children: ReactNode}) => {
  const searchParams = useSearchParams();
  const params = new URLSearchParams(searchParams.toString());
  const router = useRouter();
  const pathName = usePathname();
  console.log("")

  const handleSearch = (query: string) => {
    console.log("Handle Search Function Called")
    params.set("search", query.toString().toLowerCase());
    router.push(pathName + "?" + params.toString(), {
      scroll: false,
    });

    if (!query) {
      params.delete("search");
      router.push(pathName + "?" + params.toString(), {
        scroll: false,
      });
    }
  };
  return (
    <SearchContext.Provider value={{ onSearch: handleSearch }}>
      {children}
    </SearchContext.Provider>
  );
};

export const useSearchContext = () => {
  const context = useContext(SearchContext);
  if (!context) {
    throw new Error("useSidebarContext must be used within a SidebarProvider");
  }
  return context;
};
