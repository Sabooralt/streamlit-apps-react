"use client"
import { useState, useEffect, useRef } from "react"

interface StreamlitIframeProps {
  src: string
  title: string
  isActive: boolean
  preload?: boolean
  className?: string
}

export default function StreamlitIframe({
  src,
  title,
  isActive,
  preload = false,
  className = "w-full h-screen border-0 overflow-hidden",
}: StreamlitIframeProps) {
  const [shouldMount, setShouldMount] = useState(false)
  const [isLoaded, setIsLoaded] = useState(false)
  const iframeRef = useRef<HTMLIFrameElement>(null)

  // Mount iframe immediately if preload=true, or when active
  useEffect(() => {
    if (isActive || preload) {
      setShouldMount(true)
    }
  }, [isActive, preload])

  return (
    <div className="relative">
      {/* Loading overlay */}
      {!isLoaded && shouldMount && (
        <div className="absolute inset-0 bg-[#0E1117] flex items-center justify-center z-10">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto mb-4"></div>
            <p className="text-gray-400">Loading {title}...</p>
          </div>
        </div>
      )}

      {/* Always render iframe when mounted (preload or active) */}
      {shouldMount && (
        <iframe
          ref={iframeRef}
          src={src}
          title={title}
          className={className}
          onLoad={() => setIsLoaded(true)}
          style={{
            visibility: isActive ? "visible" : "hidden",
            position: isActive ? "relative" : "absolute",
            zIndex: isActive ? 1 : -1,
          }}
        />
      )}
    </div>
  )
}
