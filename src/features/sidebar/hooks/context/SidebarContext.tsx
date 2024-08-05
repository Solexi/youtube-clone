"use client"
import React, { createContext, useContext, useState, ReactNode } from "react";

interface SidebarContextProps {
  isCollapsed: boolean;
  toggleSidebar: () => void;
}

const SidebarContext = createContext<SidebarContextProps | undefined>(undefined);

export const SidebarProvider = ({ children }: { children: ReactNode }) => {
    const [isCollapsed, setIsCollapsed] = useState(false);
  
    const toggleSidebar = () => {
      console.log("Toggle Sidebar called"); // Check if this log appears
      setIsCollapsed(!isCollapsed);
    };
  
    return (
      <SidebarContext.Provider value={{ isCollapsed, toggleSidebar }}>
        {children}
      </SidebarContext.Provider>
    );
};

export const useSidebarContext = () => {
  const context = useContext(SidebarContext);
  if (!context) {
    throw new Error("useSidebarContext must be used within a SidebarProvider");
  }
  return context;
};