import { useState } from "react";
import { Button } from "../components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../components/ui/select";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { RadioGroup, RadioGroupItem } from "../components/ui/radio-group";

import { pitchAnalysisCardData } from "../data/pitch-analysis-card-data";
import { Loader2 } from "lucide-react";

interface FormData {
  year: string;
  player: string;
  pitchType: string;
  chartStyle: string;
  startDate: string;
  endDate: string;
}
const PitcherListDashboard = () => {
  const { season, years, players, pitchTypes, chartStyles, metricDefinitions } =
    pitchAnalysisCardData;

  const [formData, setFormData] = useState<FormData>({
    year: years[0],
    player: players[0],
    pitchType: pitchTypes[0],
    chartStyle: chartStyles[0],
    startDate: season.start,
    endDate: season.end,
  });
  const [loading, setLoading] = useState(false);
  const [showImage, setShowImage] = useState(false);

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleGenerateViz = () => {
    setLoading(true);
    setShowImage(false);

    setTimeout(() => {
      setLoading(false);
      setShowImage(true);
    }, 1500);

    /**
     * Later you can replace this timeout with an API call:
     * try {
     *   const res = await axios.post("/api/generate-viz",formData);
     *   const data = await res.json();
     *   // set image/data from response
     *   setShowImage(true);
     * } catch (error) {
     *   console.error("Failed to fetch viz", error);
     * }
     */
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      {/* Header */}
      <div className="flex items-center gap-3 mb-8">
        <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
          <span className="text-gray-900 font-bold text-lg">P</span>
        </div>
        <h1 className="text-2xl font-bold">PITCHERLIST</h1>
      </div>

      {/* Main Title */}
      <h2 className="text-4xl font-bold mb-8">MiLB Pitchtype Cards</h2>

      {/* Form Controls */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {/* Year Selection */}
        <div className="space-y-3">
          <Label className="text-white font-medium">Choose a year:</Label>
          <RadioGroup
            value={formData.year}
            onValueChange={(value) => handleInputChange("year", value)}
            className="space-y-2"
          >
            {years.map((year) => (
              <div key={year} className="flex items-center space-x-2">
                <RadioGroupItem
                  value={year}
                  id={`year-${year}`}
                  className="border-gray-400 data-[state=checked]:bg-red-500"
                />
                <Label htmlFor={`year-${year}`} className="text-white">
                  {year}
                </Label>
              </div>
            ))}
          </RadioGroup>
        </div>

        {/* Player Selection */}
        <div className="space-y-3">
          <Label className="text-white font-medium">Choose a player:</Label>
          <Select
            value={formData.player}
            onValueChange={(value) => handleInputChange("player", value)}
          >
            <SelectTrigger className="bg-gray-800 border-gray-600 text-white">
              <SelectValue />
            </SelectTrigger>
            <SelectContent className="bg-gray-800 border-gray-600 text-white">
              {players.map((player) => (
                <SelectItem key={player} value={player}>
                  {player}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Pitch Type Selection */}
        <div className="space-y-3">
          <Label className="text-white font-medium">
            Choose a pitch (season usage):
          </Label>
          <Select
            value={formData.pitchType}
            onValueChange={(value) => handleInputChange("pitchType", value)}
          >
            <SelectTrigger className="bg-gray-800 border-gray-600 text-white">
              <SelectValue />
            </SelectTrigger>
            <SelectContent className="bg-gray-800 border-gray-600 text-white">
              {pitchTypes.map((pitch) => (
                <SelectItem key={pitch} value={pitch}>
                  {pitch}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Chart Style */}
        <div className="space-y-3">
          <Label className="text-white font-medium">Chart style:</Label>
          <Select
            value={formData.chartStyle}
            onValueChange={(value) => handleInputChange("chartStyle", value)}
          >
            <SelectTrigger className="bg-gray-800 border-gray-600 text-white">
              <SelectValue />
            </SelectTrigger>
            <SelectContent className="bg-gray-800 border-gray-600 text-white">
              {chartStyles.map((style) => (
                <SelectItem key={style} value={style}>
                  {style}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Date Range */}
        <div className="space-y-3">
          <Label className="text-white font-medium">
            Start Date (Season started: Mar 30)
          </Label>
          <Input
            type="date"
            value={formData.startDate}
            min={season.start}
            max={season.end}
            onChange={(e) => handleInputChange("startDate", e.target.value)}
            className="bg-gray-800 border-gray-600 text-white"
          />
        </div>

        <div className="space-y-3">
          <Label className="text-white font-medium">
            End Date (Season ended: Jun 07)
          </Label>
          <Input
            type="date"
            value={formData.endDate}
            min={season.start}
            max={season.end}
            onChange={(e) => handleInputChange("endDate", e.target.value)}
            className="bg-gray-800 border-gray-600 text-white"
          />
        </div>
      </div>

      {/* Generate Button */}
      <Button
        onClick={handleGenerateViz}
        className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-2 mb-10"
        disabled={loading}
      >
        {loading ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Generating...
          </>
        ) : (
          "Generate Data Viz"
        )}
      </Button>

      {loading && (
        <div className="flex justify-center items-center py-10">
          <Loader2 className="h-8 w-8 animate-spin text-gray-400" />
        </div>
      )}

      {showImage && (
        <div className="grid mb-10 items-center gap-2 justify-center">
          <img
            src="/pitch-analysis/pitch-analysis-1.png"
            alt="Pitch Analysis Visualization"
            className="rounded-xl w-xl shadow-lg"
          />
          <img
            src="/pitch-analysis/pitch-analysis-2.png"
            alt="Pitch Analysis Visualization"
            className="rounded-xl w-xl shadow-lg"
          />
        </div>
      )}

      {/* Metric Definitions */}
      <div className="space-y-6">
        <h3 className="text-3xl font-bold">Metric Definitions</h3>
        <div className="space-y-4">
          {metricDefinitions.map((metric, index) => (
            <div key={index} className="space-y-2">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-white rounded-full"></div>
                <span className="font-semibold text-white">{metric.term}:</span>
              </div>
              <p className="text-gray-300 ml-4 leading-relaxed">
                {metric.definition}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PitcherListDashboard;
