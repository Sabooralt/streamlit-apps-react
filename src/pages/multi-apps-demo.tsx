"use client"
import { useState } from "react"
import { Button } from "../components/ui/button"
import IframeManager from "../components/iframe-manager"


const streamlitApps = [
  {
    id: "pitch-analysis",
    name: "Pitch Analysis",
    src: "https://milb-pitch-analysis-card.streamlit.app/?embed=true",
    preload: true,
  },
  {
    id: "data-dashboard",
    name: "Data Dashboard",
    src: "https://your-streamlit-app-2.streamlit.app/?embed=true",
    preload: true,
  },
  {
    id: "ml-models",
    name: "ML Models",
    src: "https://your-streamlit-app-3.streamlit.app/?embed=true",
    preload: false,
  },
]

export default function MultiAppDemo() {
  const [activeApp, setActiveApp] = useState("pitch-analysis")

  return (
    <div className="h-screen flex flex-col">
      {/* App switcher */}
      <div className="flex gap-2 p-4 bg-gray-800 border-b border-gray-700">
        {streamlitApps.map((app) => (
          <Button
            key={app.id}
            onClick={() => setActiveApp(app.id)}
            variant={activeApp === app.id ? "default" : "outline"}
            size="sm"
          >
            {app.name}
          </Button>
        ))}
      </div>

      {/* Iframe container */}
      <div className="flex-1 relative">
        <IframeManager apps={streamlitApps} activeAppId={activeApp} className="h-full" />
      </div>
    </div>
  )
}
