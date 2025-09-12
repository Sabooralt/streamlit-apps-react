
import type React from "react";

const Header: React.FC = () => {
  return (
    <header className="bg-background border-b border-border z-10 px-10 py-3 gap-2">
      <div className="flex items-center justify-end gap-3">
        <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
          <span className="text-primary-foreground font-bold text-sm">P</span>
        </div>
        <h1 className="text-xl font-semibold text-foreground">PitcherList</h1>
      </div>

      {/* Right side actions - placeholder for future features */}
      <div className="hidden lg:flex items-center gap-2 ml-auto">
        {/* TODO: Add user menu, notifications, etc. */}
      </div>
    </header>
  );
};

export default Header;
