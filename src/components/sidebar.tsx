"use client"
import { Link, useLocation } from "react-router-dom"
import { Menu, X, Home, Layers, BarChart3, Database, Settings } from "lucide-react"

interface SidebarProps {
  collapsed: boolean
  onToggle: () => void
}

const applications = [
  {
    name: "Pitch Analysis",
    path: "/apps/pitch-analysis",
    icon: BarChart3,
    description: "Pitch Analysis",
  },
  
]

export default function Sidebar({ collapsed, onToggle }: SidebarProps) {
  const location = useLocation()

  return (
    <div
      className={`fixed left-0 top-0 h-full bg-gray-900 border-r border-gray-800 transition-all duration-300 z-50 `}
    >
      {/* Header */}
      <div className="hidden md:flex items-center justify-between p-2 border-b border-gray-800">
        {!collapsed && <h1 className="text-lg font-semibold text-white text-nowrap">App Hub</h1>}
        <button
          className="inline-flex items-center justify-center h-9 p-2 text-sm rounded-md text-gray-300 hover:bg-gray-800 hover:text-white transition-colors"
        >
          {collapsed ? <Menu className="h-4 w-4" /> : <X className="h-4 w-4" />}
        </button>
      </div>

      {/* Navigation */}
      <nav className="p-2 space-y-2">
        {/* Dashboard Link */}
        <Link
          to="/"
          className={`flex flex-row items-center  gap-3 px-2 py-2 rounded-lg transition-colors hover:bg-gray-800 hover:text-white ${
            location.pathname === "/" ? "bg-blue-600 text-white" : "text-gray-300"
          }`}
        >
          <Home className="h-5 w-5 flex-shrink-0" />
          {!collapsed && <span>Dashboard</span>}
        </Link>

        {/* Applications Section */}
        <div className="pt-4 grid gap-2">
          {!collapsed && (
            <h2 className="px-3 text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Applications</h2>
          )}

          {applications.map((app) => {
            const Icon = app.icon
            const isActive = location.pathname === app.path

            return (
              <Link
                key={app.path}
                to={app.path}
                className={`flex justify-center items-center gap-3 px-2  py-2 rounded-lg transition-colors group hover:bg-gray-800 hover:text-white ${
                  isActive ? "bg-blue-600 text-white" : "text-gray-300"
                }`}
                title={collapsed ? app.name : undefined}
              >
                <Icon className="h-5 w-5 flex-shrink-0" />
                {!collapsed && (
                  <div className="flex-1 min-w-0">
                    <div className="font-medium truncate">{app.name}</div>
                    <div className="text-xs opacity-70 truncate">{app.description}</div>
                  </div>
                )}
              </Link>
            )
          })}
        </div>

        {/* Settings */}
        <div className="pt-4 border-t border-gray-800">
          <Link
            to="/"
            className="flex gap-3 flex-row  items-center px-2 py-2 rounded-lg transition-colors hover:bg-gray-800 hover:text-white text-gray-300"
            title={collapsed ? "Settings" : undefined}
          >
            <Settings className="h-5 w-5 flex-shrink-0" />
            {!collapsed && <span>Settings</span>}
          </Link>
        </div>
      </nav>
    </div>
  )
}
