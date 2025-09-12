"use client";

import type React from "react";

import { Sidebar2 } from "./Sidebar2";
import Header from "./Header";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="h-screen flex flex-col bg-background">
      <Sidebar2 />
      <Header />
      <main className="flex-1 overflow-auto bg-background">{children}</main>
    </div>
  );
};

export default Layout;
