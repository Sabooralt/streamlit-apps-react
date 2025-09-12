import { useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  Menu,
  X,
  Home,
  BarChart3,
  Activity,
  TrendingUp,
  ChevronRight,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { applications } from "@/lib/applications";

interface SidebarProps {
  className?: string;
}

interface ExpandedSections {
  applications: boolean;
}

export default function Sidebar({ className }: SidebarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const [expandedSections, setExpandedSections] = useState<ExpandedSections>({
    applications: true,
  });

  const toggleSection = (section: keyof ExpandedSections) => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  const getAppIcon = (category: string) => {
    switch (category) {
      case "Sports Analytics":
        return BarChart3;
      case "Health Analytics":
        return Activity;
      default:
        return TrendingUp;
    }
  };
  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={cn(
          "fixed left-0 top-0 z-50 h-full w-64 bg-sidebar border-r border-sidebar-border transform transition-transform duration-300 ease-in-out",
          isOpen ? "translate-x-0" : "-translate-x-full",
          className
        )}
      >
        {/* Sidebar Header */}
        <div className="flex items-center justify-between p-4 border-b border-sidebar-border">
          <h2 className="text-lg font-semibold text-sidebar-foreground font-sans">
            Dashboard
          </h2>

          <Button
            variant="ghost"
            size="sm"
            onClick={() => {
              setIsOpen(false);
            }}
            className="text-sidebar-foreground hover:bg-sidebar-accent"
          >
            <X className="h-4 w-4" />
          </Button>
        </div>

        {/* Navigation */}
        <nav className="p-4 space-y-2">
          <Button
            variant="ghost"
            onClick={() => {
              setIsOpen(false);
              navigate("/");
            }}
            className="w-full justify-start text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground transition-colors"
          >
            <Home className="mr-3 h-4 w-4" />
            Dashboard
          </Button>

          <Button
            variant="ghost"
            className="w-full justify-between text-sidebar-foreground hover:bg-sidebar-accent"
            onClick={() => toggleSection("applications")}
          >
            <span className={cn("font-medium", !isOpen && "lg:hidden")}>
              Applications
            </span>
            <ChevronRight
              className={cn(
                "w-4 h-4 transition-transform",
                expandedSections.applications && "rotate-90",
                !isOpen && "lg:hidden"
              )}
            />
          </Button>

          {expandedSections.applications && (
            <div className="mt-1 space-y-1">
              {applications.map((app) => {
                const Icon = getAppIcon(app.category);
                return (
                  <Button
                    variant="ghost"
                    key={app.id}
                    className={cn(
                      "w-full justify-start text-left text-sidebar-foreground hover:bg-sidebar-accent"
                    )}
                    onClick={() => {
                      setIsOpen(false);
                      navigate(`/apps${app.url}`);
                    }}
                  >
                    <Icon className="w-4 h-4 mr-2 flex-shrink-0" />
                    <span className={cn("truncate", !isOpen && "lg:hidden")}>
                      {app.name}
                    </span>
                    {!app.isActive && (
                      <span
                        className={cn(
                          "ml-auto text-xs bg-muted text-muted-foreground px-1.5 py-0.5 rounded",
                          !isOpen && "lg:hidden"
                        )}
                      >
                        Beta
                      </span>
                    )}
                  </Button>
                );
              })}
            </div>
          )}
        </nav>

        {/* Sidebar Footer */}
        <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-sidebar-border">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-sidebar-primary rounded-full flex items-center justify-center">
              <span className="text-xs font-medium text-sidebar-primary-foreground">
                JD
              </span>
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-sidebar-foreground truncate">
                John Doe
              </p>
              <p className="text-xs text-sidebar-foreground/70 truncate">
                john@example.com
              </p>
            </div>
          </div>
        </div>
      </aside>

      {/* Mobile Menu Button */}
      <Button
        variant="ghost"
        size="sm"
        onClick={() => setIsOpen(true)}
        className="fixed top-3 left-4 z-40 bg-accent shadow-lg hover:bg-card"
      >
        <Menu className="h-4 w-4" />
      </Button>
    </>
  );
}
