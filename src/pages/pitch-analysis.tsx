import StreamlitIframe from "../components/streamlit-iframe";

export default function PitchAnalysis() {
  return (
    <div className="relative overflow-hidden">
      <div className="absolute right-0 bottom-0 z-20 w-full h-10 bg-[#0E1117]"></div>

      {/* Embedded Streamlit app with preloading support */}
      <StreamlitIframe
        src="https://milb-pitch-analysis-card.streamlit.app/?embed=true"
        title="Pitch Analysis App"
        isActive={true}
        preload={true}
      />
    </div>
  )
}
