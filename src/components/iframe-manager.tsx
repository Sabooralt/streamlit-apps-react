"use client"
import { useState, useEffect } from "react"
import StreamlitIframe from "./streamlit-iframe"

interface StreamlitApp {
  id: string
  name: string
  src: string
  preload?: boolean
}

interface IframeManagerProps {
  apps: StreamlitApp[]
  activeAppId: string
  className?: string
}

export default function IframeManager({ apps, activeAppId, className }: IframeManagerProps) {
  const [preloadedApps, setPreloadedApps] = useState<Set<string>>(new Set())

  useEffect(() => {
    // Preload apps marked for preloading after a short delay
    const timer = setTimeout(() => {
      const appsToPreload = apps.filter((app) => app.preload && !preloadedApps.has(app.id)).map((app) => app.id)

      if (appsToPreload.length > 0) {
        setPreloadedApps((prev) => new Set([...prev, ...appsToPreload]))
      }
    }, 1000) // 1 second delay to avoid blocking initial render

    return () => clearTimeout(timer)
  }, [apps, preloadedApps])

  useEffect(() => {
    // Preload the next app in the list when current app becomes active
    const currentIndex = apps.findIndex((app) => app.id === activeAppId)
    if (currentIndex !== -1 && currentIndex < apps.length - 1) {
      const nextApp = apps[currentIndex + 1]
      if (!preloadedApps.has(nextApp.id)) {
        const timer = setTimeout(() => {
          setPreloadedApps((prev) => new Set([...prev, nextApp.id]))
        }, 2000) // 2 second delay after switching to current app

        return () => clearTimeout(timer)
      }
    }
  }, [activeAppId, apps, preloadedApps])

  return (
    <div className={className}>
      {apps.map((app) => (
        <StreamlitIframe
          key={app.id}
          src={app.src}
          title={app.name}
          isActive={app.id === activeAppId}
          preload={preloadedApps.has(app.id)}
        />
      ))}
    </div>
  )
}
