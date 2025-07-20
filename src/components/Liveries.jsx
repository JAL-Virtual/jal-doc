import React, { useState } from "react";
import { MdFlight } from "react-icons/md";

// JAL color variables
const JAL_RED = "#d10c2f";
const JAL_LIGHT = "#f8f9fa";

const liveriesData = [
  {
    aircraft: "A320-200",
    developer: "Fenix",
    title: "Fenix A320 | Japan Airlines - First Livery | JA01JJ",
    site: "flightsim.to",
    author: "jaldesign",
    badge: "MSFS2020",
    link: "#"
  },
  {
    aircraft: "A350-900",
    developer: "iniBuilds",
    title: "JAL A350-900 | JA03XJ",
    site: "flightsim.to",
    author: "jalpro",
    badge: "MSFS2024",
    link: "#"
  },
  {
    aircraft: "B777-300ER",
    developer: "PMDG",
    title: "JAL B777-300ER | JA734J",
    site: "flightsim.to",
    author: "samurai",
    badge: "P3D",
    link: "#"
  },
  {
    aircraft: "B737-800",
    developer: "iFly",
    title: "JAL B737-800 | JA329J",
    site: "flightsim.to",
    author: "nipponflyer",
    badge: "FSX",
    link: "#"
  },
  {
    aircraft: "E190",
    developer: "Feelthere",
    title: "J-AIR E190 | JA248J",
    site: "flightsim.to",
    author: "redwing",
    badge: "X-plane",
    link: "#"
  },
  {
    aircraft: "MD-11",
    developer: "Rotate",
    title: "JAL Cargo MD-11F | JA8580",
    site: "flightsim.to",
    author: "tokyo777",
    badge: "X-plane",
    link: "#"
  },
];

const simulators = [
  "All Simulators", "MSFS2024", "MSFS2020", "X-plane", "P3D", "FSX"
];
const aircraftList = [
  "All Aircraft", "A320-200", "A350-900", "B777-300ER", "B737-800", "E190", "MD-11"
];

export default function Liveries() {
  const [simulator, setSimulator] = useState("All Simulators");
  const [aircraft, setAircraft] = useState("All Aircraft");

  const filtered = liveriesData.filter((livery) => {
    const simMatch = simulator === "All Simulators" || livery.badge === simulator;
    const aircraftMatch = aircraft === "All Aircraft" || livery.aircraft === aircraft;
    return simMatch && aircraftMatch;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#fff9f9] via-[#f2f3f6] to-[#e8e6e7] px-2 py-10">
      {/* Dropdowns */}
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-3 mb-8">
        <select
          value={simulator}
          onChange={e => setSimulator(e.target.value)}
          className="bg-white border border-[#e2e3ea] rounded-lg py-2 px-4 text-[#d10c2f] font-bold shadow focus:outline-none focus:ring-2 focus:ring-[#d10c2f]/30 transition"
        >
          {simulators.map(sim => (
            <option key={sim} value={sim}>{sim}</option>
          ))}
        </select>
        <select
          value={aircraft}
          onChange={e => setAircraft(e.target.value)}
          className="bg-white border border-[#e2e3ea] rounded-lg py-2 px-4 text-[#d10c2f] font-bold shadow focus:outline-none focus:ring-2 focus:ring-[#d10c2f]/30 transition"
        >
          {aircraftList.map(ac => (
            <option key={ac} value={ac}>{ac}</option>
          ))}
        </select>
      </div>

      {/* Livery Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
        {filtered.length === 0 && (
          <div className="col-span-full text-center text-gray-400 py-16">
            No liveries found.
          </div>
        )}
        {filtered.map((livery, idx) => (
          <div
            key={idx}
            className={`
              group relative rounded-2xl shadow-lg border border-[#f6d8dc] bg-white/80
              transition-all duration-200 hover:scale-[1.025] hover:shadow-[0_8px_38px_0_rgba(209,12,47,0.08)]
              hover:border-[#d10c2f] flex flex-col justify-between min-h-[150px]
            `}
          >
            {/* JAL logo badge */}
            <div className="absolute top-4 right-5 z-10 flex flex-row items-center gap-2">
              <a
                href={livery.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`
                  flex items-center gap-2 px-4 py-1.5 rounded-full font-bold text-xs shadow
                  bg-gradient-to-tr from-[#fff] via-[#fff0f0] to-[#ffe3e6]
                  border border-[#f6bfc8] text-[#d10c2f]
                  hover:from-[#d10c2f] hover:to-[#fce7ea] hover:text-white hover:scale-105
                  transition
                `}
                style={{ boxShadow: "0 1px 8px #d10c2f15" }}
              >
                <svg width="16" height="16" viewBox="0 0 34 34" fill="none">
                  <circle cx="17" cy="17" r="16" fill="#fff"/>
                  <path d="M16.7 6.5c2.67 0 7.4 2.05 8.47 7.22 0.18 0.9-0.53 1.7-1.43 1.6-2.13-0.26-4.15-1.12-5.75-2.44-1.65 1.25-3.7 2.19-5.87 2.45-0.9 0.1-1.62-0.71-1.43-1.6C9.32 8.55 14 6.5 16.7 6.5Z" fill="#d10c2f"/>
                </svg>
                {livery.badge}
              </a>
            </div>
            {/* Card content */}
            <div className="flex-1 flex flex-col px-7 pt-7 pb-6">
              {/* Aircraft + Developer */}
              <div className="flex items-center gap-2 text-[#d10c2f] text-[13.3px] font-semibold mb-1.5">
                <MdFlight size={17} className="opacity-90" />
                <span>{livery.aircraft}</span>
                <span className="text-xs font-semibold text-[#c46678]">- {livery.developer}</span>
              </div>
              {/* Title */}
              <div className="font-extrabold text-[17.7px] text-[#222034] leading-tight mb-2 group-hover:text-[#d10c2f] transition line-clamp-2">
                {livery.title}
              </div>
              {/* Site + Author */}
              <div className="flex items-center gap-2 text-[13.2px] text-[#a48a90] font-medium mt-auto">
                <span>{livery.site}</span>
                <span className="mx-1 text-[10px]">•</span>
                <span>{livery.author}</span>
              </div>
            </div>
            {/* Card bottom accent */}
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-2 rounded-b-2xl bg-gradient-to-r from-[#f9c7d2] via-[#e9dde7] to-[#ffeef3] opacity-90 group-hover:opacity-100 transition" />
          </div>
        ))}
      </div>
    </div>
  );
}
