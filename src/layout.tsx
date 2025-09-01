import { Outlet } from "react-router-dom";

export default function AppsLayout() {
  return (
    <main
      className={`flex-1 transition-all w-full h-screen duration-300 scale-[1.1] overflow-auto`}
    >
      <div className="pl-5 pr-2 md:pl-10">
        <Outlet />
      </div>
    </main>
  );
}
