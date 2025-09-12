
export const pitchAnalysisCardData: {
  season: { start: string; end: string };
  years: string[];
  players: string[];
  pitchTypes: string[];
  chartStyles: string[];
  metricDefinitions: { term: string; definition: string }[];
} = {
  season: {
    start: "2025-03-30",
    end: "2025-06-07",
  },

  years: ["2025", "2024"],

  players: ["Jacob Misiorowski", "Player 2", "Player 3"],

  pitchTypes: [
    "Four-Seamer (65.3%)",
    "Slider (15.4%)",
    "Curveball (14.3%)",
    "Changeup (5.0%)",
  ],

  chartStyles: ["Bar", "Violin"],

  metricDefinitions: [
    {
      term: "Velocity",
      definition:
        "Release speed of the pitch, out of the pitcher's hand (in miles per hour).",
    },
    {
      term: "Release Extension",
      definition:
        "Distance towards the plate when the pitcher releases the pitch (in feet).",
    },
    {
      term: "Induced Vertical Break (IVB)",
      definition:
        "Vertical break of the pitch, controlling for the effect of gravity (in inches).",
    },
    {
      term: "Arm-Side Break",
      definition:
        "Horizontal break of the pitch, relative to the pitcher's handedness (in inches).",
    },
    {
      term: "Adjusted Vertical Approach Angle (VAA)",
      definition:
        "Vertical angle at which the pitch approaches home plate, controlling for its vertical location at the plate (in degrees).",
    },
    {
      term: "xZone%",
      definition:
        "Predicted likelihood of the pitch being in the strike zone (as is called), assuming a swing isn't made.",
    },
    {
      term: "Pitch Level Value (PLV)",
      definition:
        "Estimated value of the pitch, based on the predicted outcomes of the pitch (0-10 scale. 5 is league average pitch value. PLV is not adjusted for pitch type.).",
    },
  ],
};
