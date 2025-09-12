
import type React from "react";

import Header from "./Header";
import Sidebar from "./Sidebar";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="h-screen flex flex-col bg-background">
      <Sidebar />
      <Header />
      <main className="flex-1 overflow-auto bg-background">{children}</main>
    </div>
  );
};

export default Layout;
