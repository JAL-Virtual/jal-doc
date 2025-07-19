import React, { useState, useMemo, useEffect } from "react";
import Select from "react-select";

// --- DATA ---
const AIRCRAFT_REGISTRATIONS = [
  // --- Japan Airlines ---
  // -- A350-900 --
  { airline: "Japan Airlines", code: "JL", type: "A350-900", reg: "JA01XJ", ddrmi: true, standby: "DIGITAL", metricStbyAlt: false, cabinReady: true, brakeFans: true, dcdu: false, satcom: true, fls: false, tcap: true, ldev: true, acEssAuto: true, yHydSteering: true, navInGa: true, daid: true },
  { airline: "Japan Airlines", code: "JL", type: "A350-900", reg: "JA02XJ", ddrmi: true, standby: "DIGITAL", metricStbyAlt: false, cabinReady: true, brakeFans: true, dcdu: false, satcom: true, fls: false, tcap: true, ldev: true, acEssAuto: true, yHydSteering: true, navInGa: true, daid: true },
  { airline: "Japan Airlines", code: "JL", type: "A350-900", reg: "JA03XJ", ddrmi: true, standby: "DIGITAL", metricStbyAlt: false, cabinReady: true, brakeFans: true, dcdu: false, satcom: true, fls: false, tcap: true, ldev: true, acEssAuto: true, yHydSteering: true, navInGa: true, daid: true },
  { airline: "Japan Airlines", code: "JL", type: "A350-900", reg: "JA04XJ", ddrmi: true, standby: "DIGITAL", metricStbyAlt: false, cabinReady: true, brakeFans: true, dcdu: false, satcom: true, fls: false, tcap: true, ldev: true, acEssAuto: true, yHydSteering: true, navInGa: true, daid: true },
  { airline: "Japan Airlines", code: "JL", type: "A350-900", reg: "JA05XJ", ddrmi: true, standby: "DIGITAL", metricStbyAlt: false, cabinReady: true, brakeFans: true, dcdu: false, satcom: true, fls: false, tcap: true, ldev: true, acEssAuto: true, yHydSteering: true, navInGa: true, daid: true },
  { airline: "Japan Airlines", code: "JL", type: "A350-900", reg: "JA06XJ", ddrmi: true, standby: "DIGITAL", metricStbyAlt: false, cabinReady: true, brakeFans: true, dcdu: false, satcom: true, fls: false, tcap: true, ldev: true, acEssAuto: true, yHydSteering: true, navInGa: true, daid: true },
  { airline: "Japan Airlines", code: "JL", type: "A350-900", reg: "JA07XJ", ddrmi: true, standby: "DIGITAL", metricStbyAlt: false, cabinReady: true, brakeFans: true, dcdu: false, satcom: true, fls: false, tcap: true, ldev: true, acEssAuto: true, yHydSteering: true, navInGa: true, daid: true },
  { airline: "Japan Airlines", code: "JL", type: "A350-900", reg: "JA08XJ", ddrmi: true, standby: "DIGITAL", metricStbyAlt: false, cabinReady: true, brakeFans: true, dcdu: false, satcom: true, fls: false, tcap: true, ldev: true, acEssAuto: true, yHydSteering: true, navInGa: true, daid: true },
  { airline: "Japan Airlines", code: "JL", type: "A350-900", reg: "JA09XJ", ddrmi: true, standby: "DIGITAL", metricStbyAlt: false, cabinReady: true, brakeFans: true, dcdu: false, satcom: true, fls: false, tcap: true, ldev: true, acEssAuto: true, yHydSteering: true, navInGa: true, daid: true },
  { airline: "Japan Airlines", code: "JL", type: "A350-900", reg: "JA10XJ", ddrmi: true, standby: "DIGITAL", metricStbyAlt: false, cabinReady: true, brakeFans: true, dcdu: false, satcom: true, fls: false, tcap: true, ldev: true, acEssAuto: true, yHydSteering: true, navInGa: true, daid: true },
  { airline: "Japan Airlines", code: "JL", type: "A350-900", reg: "JA11XJ", ddrmi: true, standby: "DIGITAL", metricStbyAlt: false, cabinReady: true, brakeFans: true, dcdu: false, satcom: true, fls: false, tcap: true, ldev: true, acEssAuto: true, yHydSteering: true, navInGa: true, daid: true },
  { airline: "Japan Airlines", code: "JL", type: "A350-900", reg: "JA12XJ", ddrmi: true, standby: "DIGITAL", metricStbyAlt: false, cabinReady: true, brakeFans: true, dcdu: false, satcom: true, fls: false, tcap: true, ldev: true, acEssAuto: true, yHydSteering: true, navInGa: true, daid: true },
  { airline: "Japan Airlines", code: "JL", type: "A350-900", reg: "JA13XJ", ddrmi: true, standby: "DIGITAL", metricStbyAlt: false, cabinReady: true, brakeFans: true, dcdu: false, satcom: true, fls: false, tcap: true, ldev: true, acEssAuto: true, yHydSteering: true, navInGa: true, daid: true },
  { airline: "Japan Airlines", code: "JL", type: "A350-900", reg: "JA14XJ", ddrmi: true, standby: "DIGITAL", metricStbyAlt: false, cabinReady: true, brakeFans: true, dcdu: false, satcom: true, fls: false, tcap: true, ldev: true, acEssAuto: true, yHydSteering: true, navInGa: true, daid: true },
  { airline: "Japan Airlines", code: "JL", type: "A350-900", reg: "JA15XJ", ddrmi: true, standby: "DIGITAL", metricStbyAlt: false, cabinReady: true, brakeFans: true, dcdu: false, satcom: true, fls: false, tcap: true, ldev: true, acEssAuto: true, yHydSteering: true, navInGa: true, daid: true },
  { airline: "Japan Airlines", code: "JL", type: "A350-900", reg: "JA16XJ", ddrmi: true, standby: "DIGITAL", metricStbyAlt: false, cabinReady: true, brakeFans: true, dcdu: false, satcom: true, fls: false, tcap: true, ldev: true, acEssAuto: true, yHydSteering: true, navInGa: true, daid: true },

  // -- A350-1000 --
  { airline: "Japan Airlines", code: "JL", type: "A350-1000", reg: "JA01WJ", ddrmi: true, standby: "DIGITAL", metricStbyAlt: false, cabinReady: true, brakeFans: true, dcdu: false, satcom: true, fls: false, tcap: true, ldev: true, acEssAuto: true, yHydSteering: true, navInGa: true, daid: true },
  { airline: "Japan Airlines", code: "JL", type: "A350-1000", reg: "JA02WJ", ddrmi: true, standby: "DIGITAL", metricStbyAlt: false, cabinReady: true, brakeFans: true, dcdu: false, satcom: true, fls: false, tcap: true, ldev: true, acEssAuto: true, yHydSteering: true, navInGa: true, daid: true },
  { airline: "Japan Airlines", code: "JL", type: "A350-1000", reg: "JA03WJ", ddrmi: true, standby: "DIGITAL", metricStbyAlt: false, cabinReady: true, brakeFans: true, dcdu: false, satcom: true, fls: false, tcap: true, ldev: true, acEssAuto: true, yHydSteering: true, navInGa: true, daid: true },
  { airline: "Japan Airlines", code: "JL", type: "A350-1000", reg: "JA04WJ", ddrmi: true, standby: "DIGITAL", metricStbyAlt: false, cabinReady: true, brakeFans: true, dcdu: false, satcom: true, fls: false, tcap: true, ldev: true, acEssAuto: true, yHydSteering: true, navInGa: true, daid: true },
  { airline: "Japan Airlines", code: "JL", type: "A350-1000", reg: "JA05WJ", ddrmi: true, standby: "DIGITAL", metricStbyAlt: false, cabinReady: true, brakeFans: true, dcdu: false, satcom: true, fls: false, tcap: true, ldev: true, acEssAuto: true, yHydSteering: true, navInGa: true, daid: true },
  { airline: "Japan Airlines", code: "JL", type: "A350-1000", reg: "JA06WJ", ddrmi: true, standby: "DIGITAL", metricStbyAlt: false, cabinReady: true, brakeFans: true, dcdu: false, satcom: true, fls: false, tcap: true, ldev: true, acEssAuto: true, yHydSteering: true, navInGa: true, daid: true },
  { airline: "Japan Airlines", code: "JL", type: "A350-1000", reg: "JA07WJ", ddrmi: true, standby: "DIGITAL", metricStbyAlt: false, cabinReady: true, brakeFans: true, dcdu: false, satcom: true, fls: false, tcap: true, ldev: true, acEssAuto: true, yHydSteering: true, navInGa: true, daid: true },
  { airline: "Japan Airlines", code: "JL", type: "A350-1000", reg: "JA08WJ", ddrmi: true, standby: "DIGITAL", metricStbyAlt: false, cabinReady: true, brakeFans: true, dcdu: false, satcom: true, fls: false, tcap: true, ldev: true, acEssAuto: true, yHydSteering: true, navInGa: true, daid: true },
  { airline: "Japan Airlines", code: "JL", type: "A350-1000", reg: "JA09WJ", ddrmi: true, standby: "DIGITAL", metricStbyAlt: false, cabinReady: true, brakeFans: true, dcdu: false, satcom: true, fls: false, tcap: true, ldev: true, acEssAuto: true, yHydSteering: true, navInGa: true, daid: true },
  { airline: "Japan Airlines", code: "JL", type: "A350-1000", reg: "JA10WJ", ddrmi: true, standby: "DIGITAL", metricStbyAlt: false, cabinReady: true, brakeFans: true, dcdu: false, satcom: true, fls: false, tcap: true, ldev: true, acEssAuto: true, yHydSteering: true, navInGa: true, daid: true },

  // -- B737-8 --
  { airline: "Japan Airlines", code: "JL", type: "B737-8", reg: "JA301J", ddrmi: false, standby: "DIGITAL", metricStbyAlt: false, cabinReady: true, brakeFans: false, dcdu: false, satcom: false, fls: false, tcap: false, ldev: false, acEssAuto: true, yHydSteering: true, navInGa: false, daid: false },
  { airline: "Japan Airlines", code: "JL", type: "B737-8", reg: "JA302J", ddrmi: false, standby: "DIGITAL", metricStbyAlt: false, cabinReady: true, brakeFans: false, dcdu: false, satcom: false, fls: false, tcap: false, ldev: false, acEssAuto: true, yHydSteering: true, navInGa: false, daid: false },
  { airline: "Japan Airlines", code: "JL", type: "B737-8", reg: "JA304J", ddrmi: false, standby: "DIGITAL", metricStbyAlt: false, cabinReady: true, brakeFans: false, dcdu: false, satcom: false, fls: false, tcap: false, ldev: false, acEssAuto: true, yHydSteering: true, navInGa: false, daid: false },
  { airline: "Japan Airlines", code: "JL", type: "B737-8", reg: "JA305J", ddrmi: false, standby: "DIGITAL", metricStbyAlt: false, cabinReady: true, brakeFans: false, dcdu: false, satcom: false, fls: false, tcap: false, ldev: false, acEssAuto: true, yHydSteering: true, navInGa: false, daid: false },
  { airline: "Japan Airlines", code: "JL", type: "B737-8", reg: "JA307J", ddrmi: false, standby: "DIGITAL", metricStbyAlt: false, cabinReady: true, brakeFans: false, dcdu: false, satcom: false, fls: false, tcap: false, ldev: false, acEssAuto: true, yHydSteering: true, navInGa: false, daid: false },
  { airline: "Japan Airlines", code: "JL", type: "B737-8", reg: "JA308J", ddrmi: false, standby: "DIGITAL", metricStbyAlt: false, cabinReady: true, brakeFans: false, dcdu: false, satcom: false, fls: false, tcap: false, ldev: false, acEssAuto: true, yHydSteering: true, navInGa: false, daid: false },
  { airline: "Japan Airlines", code: "JL", type: "B737-8", reg: "JA309J", ddrmi: false, standby: "DIGITAL", metricStbyAlt: false, cabinReady: true, brakeFans: false, dcdu: false, satcom: false, fls: false, tcap: false, ldev: false, acEssAuto: true, yHydSteering: true, navInGa: false, daid: false },
  { airline: "Japan Airlines", code: "JL", type: "B737-8", reg: "JA311J", ddrmi: false, standby: "DIGITAL", metricStbyAlt: false, cabinReady: true, brakeFans: false, dcdu: false, satcom: false, fls: false, tcap: false, ldev: false, acEssAuto: true, yHydSteering: true, navInGa: false, daid: false },
  { airline: "Japan Airlines", code: "JL", type: "B737-8", reg: "JA312J", ddrmi: false, standby: "DIGITAL", metricStbyAlt: false, cabinReady: true, brakeFans: false, dcdu: false, satcom: false, fls: false, tcap: false, ldev: false, acEssAuto: true, yHydSteering: true, navInGa: false, daid: false },
  { airline: "Japan Airlines", code: "JL", type: "B737-8", reg: "JA314J", ddrmi: false, standby: "DIGITAL", metricStbyAlt: false, cabinReady: true, brakeFans: false, dcdu: false, satcom: false, fls: false, tcap: false, ldev: false, acEssAuto: true, yHydSteering: true, navInGa: false, daid: false },
  { airline: "Japan Airlines", code: "JL", type: "B737-8", reg: "JA315J", ddrmi: false, standby: "DIGITAL", metricStbyAlt: false, cabinReady: true, brakeFans: false, dcdu: false, satcom: false, fls: false, tcap: false, ldev: false, acEssAuto: true, yHydSteering: true, navInGa: false, daid: false },
  { airline: "Japan Airlines", code: "JL", type: "B737-8", reg: "JA316J", ddrmi: false, standby: "DIGITAL", metricStbyAlt: false, cabinReady: true, brakeFans: false, dcdu: false, satcom: false, fls: false, tcap: false, ldev: false, acEssAuto: true, yHydSteering: true, navInGa: false, daid: false },
  { airline: "Japan Airlines", code: "JL", type: "B737-8", reg: "JA317J", ddrmi: false, standby: "DIGITAL", metricStbyAlt: false, cabinReady: true, brakeFans: false, dcdu: false, satcom: false, fls: false, tcap: false, ldev: false, acEssAuto: true, yHydSteering: true, navInGa: false, daid: false },
  { airline: "Japan Airlines", code: "JL", type: "B737-8", reg: "JA319J", ddrmi: false, standby: "DIGITAL", metricStbyAlt: false, cabinReady: true, brakeFans: false, dcdu: false, satcom: false, fls: false, tcap: false, ldev: false, acEssAuto: true, yHydSteering: true, navInGa: false, daid: false },
  { airline: "Japan Airlines", code: "JL", type: "B737-8", reg: "JA320J", ddrmi: false, standby: "DIGITAL", metricStbyAlt: false, cabinReady: true, brakeFans: false, dcdu: false, satcom: false, fls: false, tcap: false, ldev: false, acEssAuto: true, yHydSteering: true, navInGa: false, daid: false },
  { airline: "Japan Airlines", code: "JL", type: "B737-8", reg: "JA321J", ddrmi: false, standby: "DIGITAL", metricStbyAlt: false, cabinReady: true, brakeFans: false, dcdu: false, satcom: false, fls: false, tcap: false, ldev: false, acEssAuto: true, yHydSteering: true, navInGa: false, daid: false },
  { airline: "Japan Airlines", code: "JL", type: "B737-8", reg: "JA323J", ddrmi: false, standby: "DIGITAL", metricStbyAlt: false, cabinReady: true, brakeFans: false, dcdu: false, satcom: false, fls: false, tcap: false, ldev: false, acEssAuto: true, yHydSteering: true, navInGa: false, daid: false },
  { airline: "Japan Airlines", code: "JL", type: "B737-8", reg: "JA324J", ddrmi: false, standby: "DIGITAL", metricStbyAlt: false, cabinReady: true, brakeFans: false, dcdu: false, satcom: false, fls: false, tcap: false, ldev: false, acEssAuto: true, yHydSteering: true, navInGa: false, daid: false },
  { airline: "Japan Airlines", code: "JL", type: "B737-8", reg: "JA325J", ddrmi: false, standby: "DIGITAL", metricStbyAlt: false, cabinReady: true, brakeFans: false, dcdu: false, satcom: false, fls: false, tcap: false, ldev: false, acEssAuto: true, yHydSteering: true, navInGa: false, daid: false },
  { airline: "Japan Airlines", code: "JL", type: "B737-8", reg: "JA326J", ddrmi: false, standby: "DIGITAL", metricStbyAlt: false, cabinReady: true, brakeFans: false, dcdu: false, satcom: false, fls: false, tcap: false, ldev: false, acEssAuto: true, yHydSteering: true, navInGa: false, daid: false },
  { airline: "Japan Airlines", code: "JL", type: "B737-8", reg: "JA327J", ddrmi: false, standby: "DIGITAL", metricStbyAlt: false, cabinReady: true, brakeFans: false, dcdu: false, satcom: false, fls: false, tcap: false, ldev: false, acEssAuto: true, yHydSteering: true, navInGa: false, daid: false },
  { airline: "Japan Airlines", code: "JL", type: "B737-8", reg: "JA328J", ddrmi: false, standby: "DIGITAL", metricStbyAlt: false, cabinReady: true, brakeFans: false, dcdu: false, satcom: false, fls: false, tcap: false, ldev: false, acEssAuto: true, yHydSteering: true, navInGa: false, daid: false },
  { airline: "Japan Airlines", code: "JL", type: "B737-8", reg: "JA329J", ddrmi: false, standby: "DIGITAL", metricStbyAlt: false, cabinReady: true, brakeFans: false, dcdu: false, satcom: false, fls: false, tcap: false, ldev: false, acEssAuto: true, yHydSteering: true, navInGa: false, daid: false },
  { airline: "Japan Airlines", code: "JL", type: "B737-8", reg: "JA330J", ddrmi: false, standby: "DIGITAL", metricStbyAlt: false, cabinReady: true, brakeFans: false, dcdu: false, satcom: false, fls: false, tcap: false, ldev: false, acEssAuto: true, yHydSteering: true, navInGa: false, daid: false },
  { airline: "Japan Airlines", code: "JL", type: "B737-8", reg: "JA331J", ddrmi: false, standby: "DIGITAL", metricStbyAlt: false, cabinReady: true, brakeFans: false, dcdu: false, satcom: false, fls: false, tcap: false, ldev: false, acEssAuto: true, yHydSteering: true, navInGa: false, daid: false },
  { airline: "Japan Airlines", code: "JL", type: "B737-8", reg: "JA332J", ddrmi: false, standby: "DIGITAL", metricStbyAlt: false, cabinReady: true, brakeFans: false, dcdu: false, satcom: false, fls: false, tcap: false, ldev: false, acEssAuto: true, yHydSteering: true, navInGa: false, daid: false },
  { airline: "Japan Airlines", code: "JL", type: "B737-8", reg: "JA333J", ddrmi: false, standby: "DIGITAL", metricStbyAlt: false, cabinReady: true, brakeFans: false, dcdu: false, satcom: false, fls: false, tcap: false, ldev: false, acEssAuto: true, yHydSteering: true, navInGa: false, daid: false },
  { airline: "Japan Airlines", code: "JL", type: "B737-8", reg: "JA334J", ddrmi: false, standby: "DIGITAL", metricStbyAlt: false, cabinReady: true, brakeFans: false, dcdu: false, satcom: false, fls: false, tcap: false, ldev: false, acEssAuto: true, yHydSteering: true, navInGa: false, daid: false },
  { airline: "Japan Airlines", code: "JL", type: "B737-8", reg: "JA335J", ddrmi: false, standby: "DIGITAL", metricStbyAlt: false, cabinReady: true, brakeFans: false, dcdu: false, satcom: false, fls: false, tcap: false, ldev: false, acEssAuto: true, yHydSteering: true, navInGa: false, daid: false },
  { airline: "Japan Airlines", code: "JL", type: "B737-8", reg: "JA337J", ddrmi: false, standby: "DIGITAL", metricStbyAlt: false, cabinReady: true, brakeFans: false, dcdu: false, satcom: false, fls: false, tcap: false, ldev: false, acEssAuto: true, yHydSteering: true, navInGa: false, daid: false },
  { airline: "Japan Airlines", code: "JL", type: "B737-8", reg: "JA338J", ddrmi: false, standby: "DIGITAL", metricStbyAlt: false, cabinReady: true, brakeFans: false, dcdu: false, satcom: false, fls: false, tcap: false, ldev: false, acEssAuto: true, yHydSteering: true, navInGa: false, daid: false },
  { airline: "Japan Airlines", code: "JL", type: "B737-8", reg: "JA339J", ddrmi: false, standby: "DIGITAL", metricStbyAlt: false, cabinReady: true, brakeFans: false, dcdu: false, satcom: false, fls: false, tcap: false, ldev: false, acEssAuto: true, yHydSteering: true, navInGa: false, daid: false },
  { airline: "Japan Airlines", code: "JL", type: "B737-8", reg: "JA340J", ddrmi: false, standby: "DIGITAL", metricStbyAlt: false, cabinReady: true, brakeFans: false, dcdu: false, satcom: false, fls: false, tcap: false, ldev: false, acEssAuto: true, yHydSteering: true, navInGa: false, daid: false },
  { airline: "Japan Airlines", code: "JL", type: "B737-8", reg: "JA341J", ddrmi: false, standby: "DIGITAL", metricStbyAlt: false, cabinReady: true, brakeFans: false, dcdu: false, satcom: false, fls: false, tcap: false, ldev: false, acEssAuto: true, yHydSteering: true, navInGa: false, daid: false },
  { airline: "Japan Airlines", code: "JL", type: "B737-8", reg: "JA342J", ddrmi: false, standby: "DIGITAL", metricStbyAlt: false, cabinReady: true, brakeFans: false, dcdu: false, satcom: false, fls: false, tcap: false, ldev: false, acEssAuto: true, yHydSteering: true, navInGa: false, daid: false },
  { airline: "Japan Airlines", code: "JL", type: "B737-8", reg: "JA343J", ddrmi: false, standby: "DIGITAL", metricStbyAlt: false, cabinReady: true, brakeFans: false, dcdu: false, satcom: false, fls: false, tcap: false, ldev: false, acEssAuto: true, yHydSteering: true, navInGa: false, daid: false },
  { airline: "Japan Airlines", code: "JL", type: "B737-8", reg: "JA344J", ddrmi: false, standby: "DIGITAL", metricStbyAlt: false, cabinReady: true, brakeFans: false, dcdu: false, satcom: false, fls: false, tcap: false, ldev: false, acEssAuto: true, yHydSteering: true, navInGa: false, daid: false },
  { airline: "Japan Airlines", code: "JL", type: "B737-8", reg: "JA346J", ddrmi: false, standby: "DIGITAL", metricStbyAlt: false, cabinReady: true, brakeFans: false, dcdu: false, satcom: false, fls: false, tcap: false, ldev: false, acEssAuto: true, yHydSteering: true, navInGa: false, daid: false },
  { airline: "Japan Airlines", code: "JL", type: "B737-8", reg: "JA347J", ddrmi: false, standby: "DIGITAL", metricStbyAlt: false, cabinReady: true, brakeFans: false, dcdu: false, satcom: false, fls: false, tcap: false, ldev: false, acEssAuto: true, yHydSteering: true, navInGa: false, daid: false },
  { airline: "Japan Airlines", code: "JL", type: "B737-8", reg: "JA348J", ddrmi: false, standby: "DIGITAL", metricStbyAlt: false, cabinReady: true, brakeFans: false, dcdu: false, satcom: false, fls: false, tcap: false, ldev: false, acEssAuto: true, yHydSteering: true, navInGa: false, daid: false },
  { airline: "Japan Airlines", code: "JL", type: "B737-8", reg: "JA349J", ddrmi: false, standby: "DIGITAL", metricStbyAlt: false, cabinReady: true, brakeFans: false, dcdu: false, satcom: false, fls: false, tcap: false, ldev: false, acEssAuto: true, yHydSteering: true, navInGa: false, daid: false },

  // -- B767-300ER --
  { airline: "Japan Airlines", code: "JL", type: "B767-300ER", reg: "JA602J", ddrmi: true, standby: "DIGITAL", metricStbyAlt: false, cabinReady: true, brakeFans: true, dcdu: true, satcom: true, fls: true, tcap: true, ldev: true, acEssAuto: false, yHydSteering: false, navInGa: false, daid: false },
  { airline: "Japan Airlines", code: "JL", type: "B767-300ER", reg: "JA604J", ddrmi: true, standby: "DIGITAL", metricStbyAlt: false, cabinReady: true, brakeFans: true, dcdu: true, satcom: true, fls: true, tcap: true, ldev: true, acEssAuto: false, yHydSteering: false, navInGa: false, daid: false },
  { airline: "Japan Airlines", code: "JL", type: "B767-300ER", reg: "JA606J", ddrmi: true, standby: "DIGITAL", metricStbyAlt: false, cabinReady: true, brakeFans: true, dcdu: true, satcom: true, fls: true, tcap: true, ldev: true, acEssAuto: false, yHydSteering: false, navInGa: false, daid: false },
  { airline: "Japan Airlines", code: "JL", type: "B767-300ER", reg: "JA607J", ddrmi: true, standby: "DIGITAL", metricStbyAlt: false, cabinReady: true, brakeFans: true, dcdu: true, satcom: true, fls: true, tcap: true, ldev: true, acEssAuto: false, yHydSteering: false, navInGa: false, daid: false },
  { airline: "Japan Airlines", code: "JL", type: "B767-300ER", reg: "JA608J", ddrmi: true, standby: "DIGITAL", metricStbyAlt: false, cabinReady: true, brakeFans: true, dcdu: true, satcom: true, fls: true, tcap: true, ldev: true, acEssAuto: false, yHydSteering: false, navInGa: false, daid: false },
  { airline: "Japan Airlines", code: "JL", type: "B767-300ER", reg: "JA610J", ddrmi: true, standby: "DIGITAL", metricStbyAlt: false, cabinReady: true, brakeFans: true, dcdu: true, satcom: true, fls: true, tcap: true, ldev: true, acEssAuto: false, yHydSteering: false, navInGa: false, daid: false },
  { airline: "Japan Airlines", code: "JL", type: "B767-300ER", reg: "JA612J", ddrmi: true, standby: "DIGITAL", metricStbyAlt: false, cabinReady: true, brakeFans: true, dcdu: true, satcom: true, fls: true, tcap: true, ldev: true, acEssAuto: false, yHydSteering: false, navInGa: false, daid: false },
  { airline: "Japan Airlines", code: "JL", type: "B767-300ER", reg: "JA613J", ddrmi: true, standby: "DIGITAL", metricStbyAlt: false, cabinReady: true, brakeFans: true, dcdu: true, satcom: true, fls: true, tcap: true, ldev: true, acEssAuto: false, yHydSteering: false, navInGa: false, daid: false },
  { airline: "Japan Airlines", code: "JL", type: "B767-300ER", reg: "JA614J", ddrmi: true, standby: "DIGITAL", metricStbyAlt: false, cabinReady: true, brakeFans: true, dcdu: true, satcom: true, fls: true, tcap: true, ldev: true, acEssAuto: false, yHydSteering: false, navInGa: false, daid: false },
  { airline: "Japan Airlines", code: "JL", type: "B767-300ER", reg: "JA615J", ddrmi: true, standby: "DIGITAL", metricStbyAlt: false, cabinReady: true, brakeFans: true, dcdu: true, satcom: true, fls: true, tcap: true, ldev: true, acEssAuto: false, yHydSteering: false, navInGa: false, daid: false },
  { airline: "Japan Airlines", code: "JL", type: "B767-300ER", reg: "JA616J", ddrmi: true, standby: "DIGITAL", metricStbyAlt: false, cabinReady: true, brakeFans: true, dcdu: true, satcom: true, fls: true, tcap: true, ldev: true, acEssAuto: false, yHydSteering: false, navInGa: false, daid: false },
  { airline: "Japan Airlines", code: "JL", type: "B767-300ER", reg: "JA617J", ddrmi: true, standby: "DIGITAL", metricStbyAlt: false, cabinReady: true, brakeFans: true, dcdu: true, satcom: true, fls: true, tcap: true, ldev: true, acEssAuto: false, yHydSteering: false, navInGa: false, daid: false },
  { airline: "Japan Airlines", code: "JL", type: "B767-300ER", reg: "JA619J", ddrmi: true, standby: "DIGITAL", metricStbyAlt: false, cabinReady: true, brakeFans: true, dcdu: true, satcom: true, fls: true, tcap: true, ldev: true, acEssAuto: false, yHydSteering: false, navInGa: false, daid: false },
  { airline: "Japan Airlines", code: "JL", type: "B767-300ER", reg: "JA620J", ddrmi: true, standby: "DIGITAL", metricStbyAlt: false, cabinReady: true, brakeFans: true, dcdu: true, satcom: true, fls: true, tcap: true, ldev: true, acEssAuto: false, yHydSteering: false, navInGa: false, daid: false },
  { airline: "Japan Airlines", code: "JL", type: "B767-300ER", reg: "JA621J", ddrmi: true, standby: "DIGITAL", metricStbyAlt: false, cabinReady: true, brakeFans: true, dcdu: true, satcom: true, fls: true, tcap: true, ldev: true, acEssAuto: false, yHydSteering: false, navInGa: false, daid: false },
  { airline: "Japan Airlines", code: "JL", type: "B767-300ER", reg: "JA622J", ddrmi: true, standby: "DIGITAL", metricStbyAlt: false, cabinReady: true, brakeFans: true, dcdu: true, satcom: true, fls: true, tcap: true, ldev: true, acEssAuto: false, yHydSteering: false, navInGa: false, daid: false },
  { airline: "Japan Airlines", code: "JL", type: "B767-300ER", reg: "JA652J", ddrmi: true, standby: "DIGITAL", metricStbyAlt: false, cabinReady: true, brakeFans: true, dcdu: true, satcom: true, fls: true, tcap: true, ldev: true, acEssAuto: false, yHydSteering: false, navInGa: false, daid: false },
  { airline: "Japan Airlines", code: "JL", type: "B767-300ER", reg: "JA653J", ddrmi: true, standby: "DIGITAL", metricStbyAlt: false, cabinReady: true, brakeFans: true, dcdu: true, satcom: true, fls: true, tcap: true, ldev: true, acEssAuto: false, yHydSteering: false, navInGa: false, daid: false },
  { airline: "Japan Airlines", code: "JL", type: "B767-300ER", reg: "JA654J", ddrmi: true, standby: "DIGITAL", metricStbyAlt: false, cabinReady: true, brakeFans: true, dcdu: true, satcom: true, fls: true, tcap: true, ldev: true, acEssAuto: false, yHydSteering: false, navInGa: false, daid: false },
  { airline: "Japan Airlines", code: "JL", type: "B767-300ER", reg: "JA655J", ddrmi: true, standby: "DIGITAL", metricStbyAlt: false, cabinReady: true, brakeFans: true, dcdu: true, satcom: true, fls: true, tcap: true, ldev: true, acEssAuto: false, yHydSteering: false, navInGa: false, daid: false },
  { airline: "Japan Airlines", code: "JL", type: "B767-300ER", reg: "JA656J", ddrmi: true, standby: "DIGITAL", metricStbyAlt: false, cabinReady: true, brakeFans: true, dcdu: true, satcom: true, fls: true, tcap: true, ldev: true, acEssAuto: false, yHydSteering: false, navInGa: false, daid: false },
  { airline: "Japan Airlines", code: "JL", type: "B767-300ER", reg: "JA657J", ddrmi: true, standby: "DIGITAL", metricStbyAlt: false, cabinReady: true, brakeFans: true, dcdu: true, satcom: true, fls: true, tcap: true, ldev: true, acEssAuto: false, yHydSteering: false, navInGa: false, daid: false },
  { airline: "Japan Airlines", code: "JL", type: "B767-300ER", reg: "JA659J", ddrmi: true, standby: "DIGITAL", metricStbyAlt: false, cabinReady: true, brakeFans: true, dcdu: true, satcom: true, fls: true, tcap: true, ldev: true, acEssAuto: false, yHydSteering: false, navInGa: false, daid: false },
  { airline: "Japan Airlines", code: "JL", type: "B767-300ER", reg: "JA897J", ddrmi: true, standby: "DIGITAL", metricStbyAlt: false, cabinReady: true, brakeFans: true, dcdu: true, satcom: true, fls: true, tcap: true, ldev: true, acEssAuto: false, yHydSteering: false, navInGa: false, daid: false },
  { airline: "Japan Airlines", code: "JL", type: "B767-300ER", reg: "JA898J", ddrmi: true, standby: "DIGITAL", metricStbyAlt: false, cabinReady: true, brakeFans: true, dcdu: true, satcom: true, fls: true, tcap: true, ldev: true, acEssAuto: false, yHydSteering: false, navInGa: false, daid: false },

  // -- B777-300ER --
  { airline: "Japan Airlines", code: "JL", type: "B777-300ER", reg: "JA733J", ddrmi: true, standby: "DIGITAL", metricStbyAlt: true, cabinReady: true, brakeFans: true, dcdu: true, satcom: true, fls: false, tcap: false, ldev: false, acEssAuto: true, yHydSteering: false, navInGa: true, daid: false },
  { airline: "Japan Airlines", code: "JL", type: "B777-300ER", reg: "JA736J", ddrmi: true, standby: "DIGITAL", metricStbyAlt: true, cabinReady: true, brakeFans: true, dcdu: true, satcom: true, fls: false, tcap: false, ldev: false, acEssAuto: true, yHydSteering: false, navInGa: true, daid: false },
  { airline: "Japan Airlines", code: "JL", type: "B777-300ER", reg: "JA737J", ddrmi: true, standby: "DIGITAL", metricStbyAlt: true, cabinReady: true, brakeFans: true, dcdu: true, satcom: true, fls: false, tcap: false, ldev: false, acEssAuto: true, yHydSteering: false, navInGa: true, daid: false },
  { airline: "Japan Airlines", code: "JL", type: "B777-300ER", reg: "JA738J", ddrmi: true, standby: "DIGITAL", metricStbyAlt: true, cabinReady: true, brakeFans: true, dcdu: true, satcom: true, fls: false, tcap: false, ldev: false, acEssAuto: true, yHydSteering: false, navInGa: true, daid: false },
  { airline: "Japan Airlines", code: "JL", type: "B777-300ER", reg: "JA741J", ddrmi: true, standby: "DIGITAL", metricStbyAlt: true, cabinReady: true, brakeFans: true, dcdu: true, satcom: true, fls: false, tcap: false, ldev: false, acEssAuto: true, yHydSteering: false, navInGa: true, daid: false },
  { airline: "Japan Airlines", code: "JL", type: "B777-300ER", reg: "JA742J", ddrmi: true, standby: "DIGITAL", metricStbyAlt: true, cabinReady: true, brakeFans: true, dcdu: true, satcom: true, fls: false, tcap: false, ldev: false, acEssAuto: true, yHydSteering: false, navInGa: true, daid: false },
  { airline: "Japan Airlines", code: "JL", type: "B777-300ER", reg: "JA743J", ddrmi: true, standby: "DIGITAL", metricStbyAlt: true, cabinReady: true, brakeFans: true, dcdu: true, satcom: true, fls: false, tcap: false, ldev: false, acEssAuto: true, yHydSteering: false, navInGa: true, daid: false },
  { airline: "Japan Airlines", code: "JL", type: "B777-300ER", reg: "JA751J", ddrmi: true, standby: "DIGITAL", metricStbyAlt: true, cabinReady: true, brakeFans: true, dcdu: true, satcom: true, fls: false, tcap: false, ldev: false, acEssAuto: true, yHydSteering: false, navInGa: true, daid: false },
  { airline: "Japan Airlines", code: "JL", type: "B777-300ER", reg: "JA752J", ddrmi: true, standby: "DIGITAL", metricStbyAlt: true, cabinReady: true, brakeFans: true, dcdu: true, satcom: true, fls: false, tcap: false, ldev: false, acEssAuto: true, yHydSteering: false, navInGa: true, daid: false },
  { airline: "Japan Airlines", code: "JL", type: "B777-300ER", reg: "JA8944", ddrmi: true, standby: "DIGITAL", metricStbyAlt: true, cabinReady: true, brakeFans: true, dcdu: true, satcom: true, fls: false, tcap: false, ldev: false, acEssAuto: true, yHydSteering: false, navInGa: true, daid: false },

  // -- B787-8 --
  { airline: "Japan Airlines", code: "JL", type: "B787-8", reg: "JA821J", ddrmi: true, standby: "DIGITAL", metricStbyAlt: true, cabinReady: true, brakeFans: true, dcdu: true, satcom: true, fls: true, tcap: true, ldev: true, acEssAuto: true, yHydSteering: true, navInGa: true, daid: true },
  { airline: "Japan Airlines", code: "JL", type: "B787-8", reg: "JA829J", ddrmi: true, standby: "DIGITAL", metricStbyAlt: true, cabinReady: true, brakeFans: true, dcdu: true, satcom: true, fls: true, tcap: true, ldev: true, acEssAuto: true, yHydSteering: true, navInGa: true, daid: true },
  { airline: "Japan Airlines", code: "JL", type: "B787-8", reg: "JA832J", ddrmi: true, standby: "DIGITAL", metricStbyAlt: true, cabinReady: true, brakeFans: true, dcdu: true, satcom: true, fls: true, tcap: true, ldev: true, acEssAuto: true, yHydSteering: true, navInGa: true, daid: true },
  { airline: "Japan Airlines", code: "JL", type: "B787-8", reg: "JA833J", ddrmi: true, standby: "DIGITAL", metricStbyAlt: true, cabinReady: true, brakeFans: true, dcdu: true, satcom: true, fls: true, tcap: true, ldev: true, acEssAuto: true, yHydSteering: true, navInGa: true, daid: true },
  { airline: "Japan Airlines", code: "JL", type: "B787-8", reg: "JA835J", ddrmi: true, standby: "DIGITAL", metricStbyAlt: true, cabinReady: true, brakeFans: true, dcdu: true, satcom: true, fls: true, tcap: true, ldev: true, acEssAuto: true, yHydSteering: true, navInGa: true, daid: true },
  { airline: "Japan Airlines", code: "JL", type: "B787-8", reg: "JA836J", ddrmi: true, standby: "DIGITAL", metricStbyAlt: true, cabinReady: true, brakeFans: true, dcdu: true, satcom: true, fls: true, tcap: true, ldev: true, acEssAuto: true, yHydSteering: true, navInGa: true, daid: true },
  { airline: "Japan Airlines", code: "JL", type: "B787-8", reg: "JA837J", ddrmi: true, standby: "DIGITAL", metricStbyAlt: true, cabinReady: true, brakeFans: true, dcdu: true, satcom: true, fls: true, tcap: true, ldev: true, acEssAuto: true, yHydSteering: true, navInGa: true, daid: true },
  { airline: "Japan Airlines", code: "JL", type: "B787-8", reg: "JA839J", ddrmi: true, standby: "DIGITAL", metricStbyAlt: true, cabinReady: true, brakeFans: true, dcdu: true, satcom: true, fls: true, tcap: true, ldev: true, acEssAuto: true, yHydSteering: true, navInGa: true, daid: true },
  { airline: "Japan Airlines", code: "JL", type: "B787-8", reg: "JA840J", ddrmi: true, standby: "DIGITAL", metricStbyAlt: true, cabinReady: true, brakeFans: true, dcdu: true, satcom: true, fls: true, tcap: true, ldev: true, acEssAuto: true, yHydSteering: true, navInGa: true, daid: true },
  { airline: "Japan Airlines", code: "JL", type: "B787-8", reg: "JA843J", ddrmi: true, standby: "DIGITAL", metricStbyAlt: true, cabinReady: true, brakeFans: true, dcdu: true, satcom: true, fls: true, tcap: true, ldev: true, acEssAuto: true, yHydSteering: true, navInGa: true, daid: true },
  { airline: "Japan Airlines", code: "JL", type: "B787-8", reg: "JA844J", ddrmi: true, standby: "DIGITAL", metricStbyAlt: true, cabinReady: true, brakeFans: true, dcdu: true, satcom: true, fls: true, tcap: true, ldev: true, acEssAuto: true, yHydSteering: true, navInGa: true, daid: true },
  { airline: "Japan Airlines", code: "JL", type: "B787-8", reg: "JA845J", ddrmi: true, standby: "DIGITAL", metricStbyAlt: true, cabinReady: true, brakeFans: true, dcdu: true, satcom: true, fls: true, tcap: true, ldev: true, acEssAuto: true, yHydSteering: true, navInGa: true, daid: true },

  // -- B787-9 --
  { airline: "Japan Airlines", code: "JL", type: "B787-9", reg: "JA861J", ddrmi: true, standby: "DIGITAL", metricStbyAlt: false, cabinReady: true, brakeFans: false, dcdu: false, satcom: true, fls: false, tcap: true, ldev: false, acEssAuto: false, yHydSteering: false, navInGa: false, daid: false },
  { airline: "Japan Airlines", code: "JL", type: "B787-9", reg: "JA862J", ddrmi: true, standby: "DIGITAL", metricStbyAlt: false, cabinReady: true, brakeFans: false, dcdu: false, satcom: true, fls: false, tcap: true, ldev: false, acEssAuto: false, yHydSteering: false, navInGa: false, daid: false },
  { airline: "Japan Airlines", code: "JL", type: "B787-9", reg: "JA863J", ddrmi: true, standby: "DIGITAL", metricStbyAlt: false, cabinReady: true, brakeFans: false, dcdu: false, satcom: true, fls: false, tcap: true, ldev: false, acEssAuto: false, yHydSteering: false, navInGa: false, daid: false },
  { airline: "Japan Airlines", code: "JL", type: "B787-9", reg: "JA864J", ddrmi: true, standby: "DIGITAL", metricStbyAlt: false, cabinReady: true, brakeFans: false, dcdu: false, satcom: true, fls: false, tcap: true, ldev: false, acEssAuto: false, yHydSteering: false, navInGa: false, daid: false },
  { airline: "Japan Airlines", code: "JL", type: "B787-9", reg: "JA865J", ddrmi: true, standby: "DIGITAL", metricStbyAlt: false, cabinReady: true, brakeFans: false, dcdu: false, satcom: true, fls: false, tcap: true, ldev: false, acEssAuto: false, yHydSteering: false, navInGa: false, daid: false },
  { airline: "Japan Airlines", code: "JL", type: "B787-9", reg: "JA866J", ddrmi: true, standby: "DIGITAL", metricStbyAlt: false, cabinReady: true, brakeFans: false, dcdu: false, satcom: true, fls: false, tcap: true, ldev: false, acEssAuto: false, yHydSteering: false, navInGa: false, daid: false },
  { airline: "Japan Airlines", code: "JL", type: "B787-9", reg: "JA867J", ddrmi: true, standby: "DIGITAL", metricStbyAlt: false, cabinReady: true, brakeFans: false, dcdu: false, satcom: true, fls: false, tcap: true, ldev: false, acEssAuto: false, yHydSteering: false, navInGa: false, daid: false },
  { airline: "Japan Airlines", code: "JL", type: "B787-9", reg: "JA868J", ddrmi: true, standby: "DIGITAL", metricStbyAlt: false, cabinReady: true, brakeFans: false, dcdu: false, satcom: true, fls: false, tcap: true, ldev: false, acEssAuto: false, yHydSteering: false, navInGa: false, daid: false },
  { airline: "Japan Airlines", code: "JL", type: "B787-9", reg: "JA869J", ddrmi: true, standby: "DIGITAL", metricStbyAlt: false, cabinReady: true, brakeFans: false, dcdu: false, satcom: true, fls: false, tcap: true, ldev: false, acEssAuto: false, yHydSteering: false, navInGa: false, daid: false },
  { airline: "Japan Airlines", code: "JL", type: "B787-9", reg: "JA870J", ddrmi: true, standby: "DIGITAL", metricStbyAlt: false, cabinReady: true, brakeFans: false, dcdu: false, satcom: true, fls: false, tcap: true, ldev: false, acEssAuto: false, yHydSteering: false, navInGa: false, daid: false },
  { airline: "Japan Airlines", code: "JL", type: "B787-9", reg: "JA871J", ddrmi: true, standby: "DIGITAL", metricStbyAlt: false, cabinReady: true, brakeFans: false, dcdu: false, satcom: true, fls: false, tcap: true, ldev: false, acEssAuto: false, yHydSteering: false, navInGa: false, daid: false },
  { airline: "Japan Airlines", code: "JL", type: "B787-9", reg: "JA872J", ddrmi: true, standby: "DIGITAL", metricStbyAlt: false, cabinReady: true, brakeFans: false, dcdu: false, satcom: true, fls: false, tcap: true, ldev: false, acEssAuto: false, yHydSteering: false, navInGa: false, daid: false },
  { airline: "Japan Airlines", code: "JL", type: "B787-9", reg: "JA874J", ddrmi: true, standby: "DIGITAL", metricStbyAlt: false, cabinReady: true, brakeFans: false, dcdu: false, satcom: true, fls: false, tcap: true, ldev: false, acEssAuto: false, yHydSteering: false, navInGa: false, daid: false },
  { airline: "Japan Airlines", code: "JL", type: "B787-9", reg: "JA876J", ddrmi: true, standby: "DIGITAL", metricStbyAlt: false, cabinReady: true, brakeFans: false, dcdu: false, satcom: true, fls: false, tcap: true, ldev: false, acEssAuto: false, yHydSteering: false, navInGa: false, daid: false },
  { airline: "Japan Airlines", code: "JL", type: "B787-9", reg: "JA877J", ddrmi: true, standby: "DIGITAL", metricStbyAlt: false, cabinReady: true, brakeFans: false, dcdu: false, satcom: true, fls: false, tcap: true, ldev: false, acEssAuto: false, yHydSteering: false, navInGa: false, daid: false },
  { airline: "Japan Airlines", code: "JL", type: "B787-9", reg: "JA878J", ddrmi: true, standby: "DIGITAL", metricStbyAlt: false, cabinReady: true, brakeFans: false, dcdu: false, satcom: true, fls: false, tcap: true, ldev: false, acEssAuto: false, yHydSteering: false, navInGa: false, daid: false },
  { airline: "Japan Airlines", code: "JL", type: "B787-9", reg: "JA879J", ddrmi: true, standby: "DIGITAL", metricStbyAlt: false, cabinReady: true, brakeFans: false, dcdu: false, satcom: true, fls: false, tcap: true, ldev: false, acEssAuto: false, yHydSteering: false, navInGa: false, daid: false },
  { airline: "Japan Airlines", code: "JL", type: "B787-9", reg: "JA880J", ddrmi: true, standby: "DIGITAL", metricStbyAlt: false, cabinReady: true, brakeFans: false, dcdu: false, satcom: true, fls: false, tcap: true, ldev: false, acEssAuto: false, yHydSteering: false, navInGa: false, daid: false },
  { airline: "Japan Airlines", code: "JL", type: "B787-9", reg: "JA881J", ddrmi: true, standby: "DIGITAL", metricStbyAlt: false, cabinReady: true, brakeFans: false, dcdu: false, satcom: true, fls: false, tcap: true, ldev: false, acEssAuto: false, yHydSteering: false, navInGa: false, daid: false },
  { airline: "Japan Airlines", code: "JL", type: "B787-9", reg: "JA882J", ddrmi: true, standby: "DIGITAL", metricStbyAlt: false, cabinReady: true, brakeFans: false, dcdu: false, satcom: true, fls: false, tcap: true, ldev: false, acEssAuto: false, yHydSteering: false, navInGa: false, daid: false },

  // --- J-Air ---
  // -- E170 --
  { airline: "J-Air", code: "XM", type: "Embraer E170", reg: "JA211J", ddrmi: false, standby: "DIGITAL", metricStbyAlt: false, cabinReady: true, brakeFans: false, dcdu: false, satcom: false, fls: false, tcap: false, ldev: false, acEssAuto: false, yHydSteering: false, navInGa: false, daid: false },
  { airline: "J-Air", code: "XM", type: "Embraer E170", reg: "JA212J", ddrmi: false, standby: "DIGITAL", metricStbyAlt: false, cabinReady: true, brakeFans: false, dcdu: false, satcom: false, fls: false, tcap: false, ldev: false, acEssAuto: false, yHydSteering: false, navInGa: false, daid: false },
  { airline: "J-Air", code: "XM", type: "Embraer E170", reg: "JA213J", ddrmi: false, standby: "DIGITAL", metricStbyAlt: false, cabinReady: true, brakeFans: false, dcdu: false, satcom: false, fls: false, tcap: false, ldev: false, acEssAuto: false, yHydSteering: false, navInGa: false, daid: false },
  { airline: "J-Air", code: "XM", type: "Embraer E170", reg: "JA214J", ddrmi: false, standby: "DIGITAL", metricStbyAlt: false, cabinReady: true, brakeFans: false, dcdu: false, satcom: false, fls: false, tcap: false, ldev: false, acEssAuto: false, yHydSteering: false, navInGa: false, daid: false },
  { airline: "J-Air", code: "XM", type: "Embraer E170", reg: "JA215J", ddrmi: false, standby: "DIGITAL", metricStbyAlt: false, cabinReady: true, brakeFans: false, dcdu: false, satcom: false, fls: false, tcap: false, ldev: false, acEssAuto: false, yHydSteering: false, navInGa: false, daid: false },
  { airline: "J-Air", code: "XM", type: "Embraer E170", reg: "JA216J", ddrmi: false, standby: "DIGITAL", metricStbyAlt: false, cabinReady: true, brakeFans: false, dcdu: false, satcom: false, fls: false, tcap: false, ldev: false, acEssAuto: false, yHydSteering: false, navInGa: false, daid: false },
  { airline: "J-Air", code: "XM", type: "Embraer E170", reg: "JA217J", ddrmi: false, standby: "DIGITAL", metricStbyAlt: false, cabinReady: true, brakeFans: false, dcdu: false, satcom: false, fls: false, tcap: false, ldev: false, acEssAuto: false, yHydSteering: false, navInGa: false, daid: false },
  { airline: "J-Air", code: "XM", type: "Embraer E170", reg: "JA218J", ddrmi: false, standby: "DIGITAL", metricStbyAlt: false, cabinReady: true, brakeFans: false, dcdu: false, satcom: false, fls: false, tcap: false, ldev: false, acEssAuto: false, yHydSteering: false, navInGa: false, daid: false },
  { airline: "J-Air", code: "XM", type: "Embraer E170", reg: "JA219J", ddrmi: false, standby: "DIGITAL", metricStbyAlt: false, cabinReady: true, brakeFans: false, dcdu: false, satcom: false, fls: false, tcap: false, ldev: false, acEssAuto: false, yHydSteering: false, navInGa: false, daid: false },
  { airline: "J-Air", code: "XM", type: "Embraer E170", reg: "JA220J", ddrmi: false, standby: "DIGITAL", metricStbyAlt: false, cabinReady: true, brakeFans: false, dcdu: false, satcom: false, fls: false, tcap: false, ldev: false, acEssAuto: false, yHydSteering: false, navInGa: false, daid: false },
  { airline: "J-Air", code: "XM", type: "Embraer E170", reg: "JA221J", ddrmi: false, standby: "DIGITAL", metricStbyAlt: false, cabinReady: true, brakeFans: false, dcdu: false, satcom: false, fls: false, tcap: false, ldev: false, acEssAuto: false, yHydSteering: false, navInGa: false, daid: false },
  { airline: "J-Air", code: "XM", type: "Embraer E170", reg: "JA222J", ddrmi: false, standby: "DIGITAL", metricStbyAlt: false, cabinReady: true, brakeFans: false, dcdu: false, satcom: false, fls: false, tcap: false, ldev: false, acEssAuto: false, yHydSteering: false, navInGa: false, daid: false },
  { airline: "J-Air", code: "XM", type: "Embraer E170", reg: "JA224J", ddrmi: false, standby: "DIGITAL", metricStbyAlt: false, cabinReady: true, brakeFans: false, dcdu: false, satcom: false, fls: false, tcap: false, ldev: false, acEssAuto: false, yHydSteering: false, navInGa: false, daid: false },
  { airline: "J-Air", code: "XM", type: "Embraer E170", reg: "JA225J", ddrmi: false, standby: "DIGITAL", metricStbyAlt: false, cabinReady: true, brakeFans: false, dcdu: false, satcom: false, fls: false, tcap: false, ldev: false, acEssAuto: false, yHydSteering: false, navInGa: false, daid: false },
  { airline: "J-Air", code: "XM", type: "Embraer E170", reg: "JA226J", ddrmi: false, standby: "DIGITAL", metricStbyAlt: false, cabinReady: true, brakeFans: false, dcdu: false, satcom: false, fls: false, tcap: false, ldev: false, acEssAuto: false, yHydSteering: false, navInGa: false, daid: false },
  { airline: "J-Air", code: "XM", type: "Embraer E170", reg: "JA228J", ddrmi: false, standby: "DIGITAL", metricStbyAlt: false, cabinReady: true, brakeFans: false, dcdu: false, satcom: false, fls: false, tcap: false, ldev: false, acEssAuto: false, yHydSteering: false, navInGa: false, daid: false },

  // -- E190 --
  { airline: "J-Air", code: "XM", type: "Embraer E190", reg: "JA241J", ddrmi: false, standby: "DIGITAL", metricStbyAlt: false, cabinReady: true, brakeFans: false, dcdu: false, satcom: false, fls: false, tcap: false, ldev: false, acEssAuto: false, yHydSteering: false, navInGa: false, daid: false },
  { airline: "J-Air", code: "XM", type: "Embraer E190", reg: "JA242J", ddrmi: false, standby: "DIGITAL", metricStbyAlt: false, cabinReady: true, brakeFans: false, dcdu: false, satcom: false, fls: false, tcap: false, ldev: false, acEssAuto: false, yHydSteering: false, navInGa: false, daid: false },
  { airline: "J-Air", code: "XM", type: "Embraer E190", reg: "JA243J", ddrmi: false, standby: "DIGITAL", metricStbyAlt: false, cabinReady: true, brakeFans: false, dcdu: false, satcom: false, fls: false, tcap: false, ldev: false, acEssAuto: false, yHydSteering: false, navInGa: false, daid: false },
  { airline: "J-Air", code: "XM", type: "Embraer E190", reg: "JA244J", ddrmi: false, standby: "DIGITAL", metricStbyAlt: false, cabinReady: true, brakeFans: false, dcdu: false, satcom: false, fls: false, tcap: false, ldev: false, acEssAuto: false, yHydSteering: false, navInGa: false, daid: false },
  { airline: "J-Air", code: "XM", type: "Embraer E190", reg: "JA245J", ddrmi: false, standby: "DIGITAL", metricStbyAlt: false, cabinReady: true, brakeFans: false, dcdu: false, satcom: false, fls: false, tcap: false, ldev: false, acEssAuto: false, yHydSteering: false, navInGa: false, daid: false },
  { airline: "J-Air", code: "XM", type: "Embraer E190", reg: "JA246J", ddrmi: false, standby: "DIGITAL", metricStbyAlt: false, cabinReady: true, brakeFans: false, dcdu: false, satcom: false, fls: false, tcap: false, ldev: false, acEssAuto: false, yHydSteering: false, navInGa: false, daid: false },
  { airline: "J-Air", code: "XM", type: "Embraer E190", reg: "JA247J", ddrmi: false, standby: "DIGITAL", metricStbyAlt: false, cabinReady: true, brakeFans: false, dcdu: false, satcom: false, fls: false, tcap: false, ldev: false, acEssAuto: false, yHydSteering: false, navInGa: false, daid: false },
  { airline: "J-Air", code: "XM", type: "Embraer E190", reg: "JA248J", ddrmi: false, standby: "DIGITAL", metricStbyAlt: false, cabinReady: true, brakeFans: false, dcdu: false, satcom: false, fls: false, tcap: false, ldev: false, acEssAuto: false, yHydSteering: false, navInGa: false, daid: false },
  { airline: "J-Air", code: "XM", type: "Embraer E190", reg: "JA249J", ddrmi: false, standby: "DIGITAL", metricStbyAlt: false, cabinReady: true, brakeFans: false, dcdu: false, satcom: false, fls: false, tcap: false, ldev: false, acEssAuto: false, yHydSteering: false, navInGa: false, daid: false },
  { airline: "J-Air", code: "XM", type: "Embraer E190", reg: "JA250J", ddrmi: false, standby: "DIGITAL", metricStbyAlt: false, cabinReady: true, brakeFans: false, dcdu: false, satcom: false, fls: false, tcap: false, ldev: false, acEssAuto: false, yHydSteering: false, navInGa: false, daid: false },
  { airline: "J-Air", code: "XM", type: "Embraer E190", reg: "JA251J", ddrmi: false, standby: "DIGITAL", metricStbyAlt: false, cabinReady: true, brakeFans: false, dcdu: false, satcom: false, fls: false, tcap: false, ldev: false, acEssAuto: false, yHydSteering: false, navInGa: false, daid: false },
  { airline: "J-Air", code: "XM", type: "Embraer E190", reg: "JA253J", ddrmi: false, standby: "DIGITAL", metricStbyAlt: false, cabinReady: true, brakeFans: false, dcdu: false, satcom: false, fls: false, tcap: false, ldev: false, acEssAuto: false, yHydSteering: false, navInGa: false, daid: false },
  { airline: "J-Air", code: "XM", type: "Embraer E190", reg: "JA254J", ddrmi: false, standby: "DIGITAL", metricStbyAlt: false, cabinReady: true, brakeFans: false, dcdu: false, satcom: false, fls: false, tcap: false, ldev: false, acEssAuto: false, yHydSteering: false, navInGa: false, daid: false },

  // --- Japan Transocean Air ---
  // -- B737-8 --
  { airline: "Japan Transocean Air", code: "NU", type: "B737-8", reg: "JA01RK", ddrmi: false, standby: "DIGITAL", metricStbyAlt: false, cabinReady: true, brakeFans: false, dcdu: false, satcom: false, fls: false, tcap: false, ldev: false, acEssAuto: true, yHydSteering: false, navInGa: false, daid: false },
  { airline: "Japan Transocean Air", code: "NU", type: "B737-8", reg: "JA02RK", ddrmi: false, standby: "DIGITAL", metricStbyAlt: false, cabinReady: true, brakeFans: false, dcdu: false, satcom: false, fls: false, tcap: false, ldev: false, acEssAuto: true, yHydSteering: false, navInGa: false, daid: false },
  { airline: "Japan Transocean Air", code: "NU", type: "B737-8", reg: "JA04RK", ddrmi: false, standby: "DIGITAL", metricStbyAlt: false, cabinReady: true, brakeFans: false, dcdu: false, satcom: false, fls: false, tcap: false, ldev: false, acEssAuto: true, yHydSteering: false, navInGa: false, daid: false },
  { airline: "Japan Transocean Air", code: "NU", type: "B737-8", reg: "JA05RK", ddrmi: false, standby: "DIGITAL", metricStbyAlt: false, cabinReady: true, brakeFans: false, dcdu: false, satcom: false, fls: false, tcap: false, ldev: false, acEssAuto: true, yHydSteering: false, navInGa: false, daid: false },
  { airline: "Japan Transocean Air", code: "NU", type: "B737-8", reg: "JA06RK", ddrmi: false, standby: "DIGITAL", metricStbyAlt: false, cabinReady: true, brakeFans: false, dcdu: false, satcom: false, fls: false, tcap: false, ldev: false, acEssAuto: true, yHydSteering: false, navInGa: false, daid: false },
  { airline: "Japan Transocean Air", code: "NU", type: "B737-8", reg: "JA07RK", ddrmi: false, standby: "DIGITAL", metricStbyAlt: false, cabinReady: true, brakeFans: false, dcdu: false, satcom: false, fls: false, tcap: false, ldev: false, acEssAuto: true, yHydSteering: false, navInGa: false, daid: false },
  { airline: "Japan Transocean Air", code: "NU", type: "B737-8", reg: "JA08RK", ddrmi: false, standby: "DIGITAL", metricStbyAlt: false, cabinReady: true, brakeFans: false, dcdu: false, satcom: false, fls: false, tcap: false, ldev: false, acEssAuto: true, yHydSteering: false, navInGa: false, daid: false },
  { airline: "Japan Transocean Air", code: "NU", type: "B737-8", reg: "JA09RK", ddrmi: false, standby: "DIGITAL", metricStbyAlt: false, cabinReady: true, brakeFans: false, dcdu: false, satcom: false, fls: false, tcap: false, ldev: false, acEssAuto: true, yHydSteering: false, navInGa: false, daid: false },
  { airline: "Japan Transocean Air", code: "NU", type: "B737-8", reg: "JA10RK", ddrmi: false, standby: "DIGITAL", metricStbyAlt: false, cabinReady: true, brakeFans: false, dcdu: false, satcom: false, fls: false, tcap: false, ldev: false, acEssAuto: true, yHydSteering: false, navInGa: false, daid: false },
  { airline: "Japan Transocean Air", code: "NU", type: "B737-8", reg: "JA11RK", ddrmi: false, standby: "DIGITAL", metricStbyAlt: false, cabinReady: true, brakeFans: false, dcdu: false, satcom: false, fls: false, tcap: false, ldev: false, acEssAuto: true, yHydSteering: false, navInGa: false, daid: false },
  { airline: "Japan Transocean Air", code: "NU", type: "B737-8", reg: "JA12RK", ddrmi: false, standby: "DIGITAL", metricStbyAlt: false, cabinReady: true, brakeFans: false, dcdu: false, satcom: false, fls: false, tcap: false, ldev: false, acEssAuto: true, yHydSteering: false, navInGa: false, daid: false },
  { airline: "Japan Transocean Air", code: "NU", type: "B737-8", reg: "JA348J", ddrmi: false, standby: "DIGITAL", metricStbyAlt: false, cabinReady: true, brakeFans: false, dcdu: false, satcom: false, fls: false, tcap: false, ldev: false, acEssAuto: true, yHydSteering: false, navInGa: false, daid: false },
  { airline: "Japan Transocean Air", code: "NU", type: "B737-8", reg: "JA350J", ddrmi: false, standby: "DIGITAL", metricStbyAlt: false, cabinReady: true, brakeFans: false, dcdu: false, satcom: false, fls: false, tcap: false, ldev: false, acEssAuto: true, yHydSteering: false, navInGa: false, daid: false },

  // --- Japan Air Commuter ---
  // -- ATR 42 --
  { airline: "Japan Air Commuter", code: "JC", type: "ATR 42", reg: "JA01JC", ddrmi: false, standby: "DIGITAL", metricStbyAlt: false, cabinReady: true, brakeFans: false, dcdu: false, satcom: false, fls: false, tcap: false, ldev: false, acEssAuto: false, yHydSteering: false, navInGa: false, daid: false },
  { airline: "Japan Air Commuter", code: "JC", type: "ATR 42", reg: "JA02JC", ddrmi: false, standby: "DIGITAL", metricStbyAlt: false, cabinReady: true, brakeFans: false, dcdu: false, satcom: false, fls: false, tcap: false, ldev: false, acEssAuto: false, yHydSteering: false, navInGa: false, daid: false },
  { airline: "Japan Air Commuter", code: "JC", type: "ATR 42", reg: "JA03JC", ddrmi: false, standby: "DIGITAL", metricStbyAlt: false, cabinReady: true, brakeFans: false, dcdu: false, satcom: false, fls: false, tcap: false, ldev: false, acEssAuto: false, yHydSteering: false, navInGa: false, daid: false },
  { airline: "Japan Air Commuter", code: "JC", type: "ATR 42", reg: "JA04JC", ddrmi: false, standby: "DIGITAL", metricStbyAlt: false, cabinReady: true, brakeFans: false, dcdu: false, satcom: false, fls: false, tcap: false, ldev: false, acEssAuto: false, yHydSteering: false, navInGa: false, daid: false },
  { airline: "Japan Air Commuter", code: "JC", type: "ATR 42", reg: "JA05JC", ddrmi: false, standby: "DIGITAL", metricStbyAlt: false, cabinReady: true, brakeFans: false, dcdu: false, satcom: false, fls: false, tcap: false, ldev: false, acEssAuto: false, yHydSteering: false, navInGa: false, daid: false },
  { airline: "Japan Air Commuter", code: "JC", type: "ATR 42", reg: "JA07JC", ddrmi: false, standby: "DIGITAL", metricStbyAlt: false, cabinReady: true, brakeFans: false, dcdu: false, satcom: false, fls: false, tcap: false, ldev: false, acEssAuto: false, yHydSteering: false, navInGa: false, daid: false },
  { airline: "Japan Air Commuter", code: "JC", type: "ATR 42", reg: "JA09JC", ddrmi: false, standby: "DIGITAL", metricStbyAlt: false, cabinReady: true, brakeFans: false, dcdu: false, satcom: false, fls: false, tcap: false, ldev: false, acEssAuto: false, yHydSteering: false, navInGa: false, daid: false },
  { airline: "Japan Air Commuter", code: "JC", type: "ATR 42", reg: "JA10JC", ddrmi: false, standby: "DIGITAL", metricStbyAlt: false, cabinReady: true, brakeFans: false, dcdu: false, satcom: false, fls: false, tcap: false, ldev: false, acEssAuto: false, yHydSteering: false, navInGa: false, daid: false },
  { airline: "Japan Air Commuter", code: "JC", type: "ATR 42", reg: "JA11JC", ddrmi: false, standby: "DIGITAL", metricStbyAlt: false, cabinReady: true, brakeFans: false, dcdu: false, satcom: false, fls: false, tcap: false, ldev: false, acEssAuto: false, yHydSteering: false, navInGa: false, daid: false },

  // -- ATR 72-600 --
  { airline: "Japan Air Commuter", code: "JC", type: "ATR 72-600", reg: "JA06JC", ddrmi: false, standby: "DIGITAL", metricStbyAlt: false, cabinReady: true, brakeFans: false, dcdu: false, satcom: false, fls: false, tcap: false, ldev: false, acEssAuto: false, yHydSteering: false, navInGa: false, daid: false },
  { airline: "Japan Air Commuter", code: "JC", type: "ATR 72-600", reg: "JA08JC", ddrmi: false, standby: "DIGITAL", metricStbyAlt: false, cabinReady: true, brakeFans: false, dcdu: false, satcom: false, fls: false, tcap: false, ldev: false, acEssAuto: false, yHydSteering: false, navInGa: false, daid: false },

  // --- Jetstar Japan ---
  // -- A320-200 --
  { airline: "Jetstar Japan", code: "GK", type: "A320-200", reg: "JA01JJ", ddrmi: false, standby: "DIGITAL", metricStbyAlt: false, cabinReady: true, brakeFans: false, dcdu: false, satcom: false, fls: false, tcap: false, ldev: false, acEssAuto: false, yHydSteering: false, navInGa: false, daid: false },
  { airline: "Jetstar Japan", code: "GK", type: "A320-200", reg: "JA03JJ", ddrmi: false, standby: "DIGITAL", metricStbyAlt: false, cabinReady: true, brakeFans: false, dcdu: false, satcom: false, fls: false, tcap: false, ldev: false, acEssAuto: false, yHydSteering: false, navInGa: false, daid: false },
  { airline: "Jetstar Japan", code: "GK", type: "A320-200", reg: "JA04JJ", ddrmi: false, standby: "DIGITAL", metricStbyAlt: false, cabinReady: true, brakeFans: false, dcdu: false, satcom: false, fls: false, tcap: false, ldev: false, acEssAuto: false, yHydSteering: false, navInGa: false, daid: false },
  { airline: "Jetstar Japan", code: "GK", type: "A320-200", reg: "JA05JJ", ddrmi: false, standby: "DIGITAL", metricStbyAlt: false, cabinReady: true, brakeFans: false, dcdu: false, satcom: false, fls: false, tcap: false, ldev: false, acEssAuto: false, yHydSteering: false, navInGa: false, daid: false },
  { airline: "Jetstar Japan", code: "GK", type: "A320-200", reg: "JA06JJ", ddrmi: false, standby: "DIGITAL", metricStbyAlt: false, cabinReady: true, brakeFans: false, dcdu: false, satcom: false, fls: false, tcap: false, ldev: false, acEssAuto: false, yHydSteering: false, navInGa: false, daid: false },
  { airline: "Jetstar Japan", code: "GK", type: "A320-200", reg: "JA07JJ", ddrmi: false, standby: "DIGITAL", metricStbyAlt: false, cabinReady: true, brakeFans: false, dcdu: false, satcom: false, fls: false, tcap: false, ldev: false, acEssAuto: false, yHydSteering: false, navInGa: false, daid: false },
  { airline: "Jetstar Japan", code: "GK", type: "A320-200", reg: "JA08JJ", ddrmi: false, standby: "DIGITAL", metricStbyAlt: false, cabinReady: true, brakeFans: false, dcdu: false, satcom: false, fls: false, tcap: false, ldev: false, acEssAuto: false, yHydSteering: false, navInGa: false, daid: false },
  { airline: "Jetstar Japan", code: "GK", type: "A320-200", reg: "JA09JJ", ddrmi: false, standby: "DIGITAL", metricStbyAlt: false, cabinReady: true, brakeFans: false, dcdu: false, satcom: false, fls: false, tcap: false, ldev: false, acEssAuto: false, yHydSteering: false, navInGa: false, daid: false },
  { airline: "Jetstar Japan", code: "GK", type: "A320-200", reg: "JA10JJ", ddrmi: false, standby: "DIGITAL", metricStbyAlt: false, cabinReady: true, brakeFans: false, dcdu: false, satcom: false, fls: false, tcap: false, ldev: false, acEssAuto: false, yHydSteering: false, navInGa: false, daid: false },
  { airline: "Jetstar Japan", code: "GK", type: "A320-200", reg: "JA11JJ", ddrmi: false, standby: "DIGITAL", metricStbyAlt: false, cabinReady: true, brakeFans: false, dcdu: false, satcom: false, fls: false, tcap: false, ldev: false, acEssAuto: false, yHydSteering: false, navInGa: false, daid: false },
  { airline: "Jetstar Japan", code: "GK", type: "A320-200", reg: "JA12JJ", ddrmi: false, standby: "DIGITAL", metricStbyAlt: false, cabinReady: true, brakeFans: false, dcdu: false, satcom: false, fls: false, tcap: false, ldev: false, acEssAuto: false, yHydSteering: false, navInGa: false, daid: false },
  { airline: "Jetstar Japan", code: "GK", type: "A320-200", reg: "JA13JJ", ddrmi: false, standby: "DIGITAL", metricStbyAlt: false, cabinReady: true, brakeFans: false, dcdu: false, satcom: false, fls: false, tcap: false, ldev: false, acEssAuto: false, yHydSteering: false, navInGa: false, daid: false },
  { airline: "Jetstar Japan", code: "GK", type: "A320-200", reg: "JA14JJ", ddrmi: false, standby: "DIGITAL", metricStbyAlt: false, cabinReady: true, brakeFans: false, dcdu: false, satcom: false, fls: false, tcap: false, ldev: false, acEssAuto: false, yHydSteering: false, navInGa: false, daid: false },
  { airline: "Jetstar Japan", code: "GK", type: "A320-200", reg: "JA15JJ", ddrmi: false, standby: "DIGITAL", metricStbyAlt: false, cabinReady: true, brakeFans: false, dcdu: false, satcom: false, fls: false, tcap: false, ldev: false, acEssAuto: false, yHydSteering: false, navInGa: false, daid: false },
  { airline: "Jetstar Japan", code: "GK", type: "A320-200", reg: "JA16JJ", ddrmi: false, standby: "DIGITAL", metricStbyAlt: false, cabinReady: true, brakeFans: false, dcdu: false, satcom: false, fls: false, tcap: false, ldev: false, acEssAuto: false, yHydSteering: false, navInGa: false, daid: false },
  { airline: "Jetstar Japan", code: "GK", type: "A320-200", reg: "JA18JJ", ddrmi: false, standby: "DIGITAL", metricStbyAlt: false, cabinReady: true, brakeFans: false, dcdu: false, satcom: false, fls: false, tcap: false, ldev: false, acEssAuto: false, yHydSteering: false, navInGa: false, daid: false },
  { airline: "Jetstar Japan", code: "GK", type: "A320-200", reg: "JA19JJ", ddrmi: false, standby: "DIGITAL", metricStbyAlt: false, cabinReady: true, brakeFans: false, dcdu: false, satcom: false, fls: false, tcap: false, ldev: false, acEssAuto: false, yHydSteering: false, navInGa: false, daid: false },
  { airline: "Jetstar Japan", code: "GK", type: "A320-200", reg: "JA20JJ", ddrmi: false, standby: "DIGITAL", metricStbyAlt: false, cabinReady: true, brakeFans: false, dcdu: false, satcom: false, fls: false, tcap: false, ldev: false, acEssAuto: false, yHydSteering: false, navInGa: false, daid: false },
  { airline: "Jetstar Japan", code: "GK", type: "A320-200", reg: "JA21JJ", ddrmi: false, standby: "DIGITAL", metricStbyAlt: false, cabinReady: true, brakeFans: false, dcdu: false, satcom: false, fls: false, tcap: false, ldev: false, acEssAuto: false, yHydSteering: false, navInGa: false, daid: false },
  { airline: "Jetstar Japan", code: "GK", type: "A320-200", reg: "JA22JJ", ddrmi: false, standby: "DIGITAL", metricStbyAlt: false, cabinReady: true, brakeFans: false, dcdu: false, satcom: false, fls: false, tcap: false, ldev: false, acEssAuto: false, yHydSteering: false, navInGa: false, daid: false },
  { airline: "Jetstar Japan", code: "GK", type: "A320-200", reg: "JA23JJ", ddrmi: false, standby: "DIGITAL", metricStbyAlt: false, cabinReady: true, brakeFans: false, dcdu: false, satcom: false, fls: false, tcap: false, ldev: false, acEssAuto: false, yHydSteering: false, navInGa: false, daid: false },

  // --- Hokkaido Air System ---
  // -- ATR 42-600 --
  { airline: "Hokkaido Air System", code: "NH", type: "ATR 42-600", reg: "JA11HC", ddrmi: false, standby: "DIGITAL", metricStbyAlt: false, cabinReady: false, brakeFans: false, dcdu: false, satcom: false, fls: false, tcap: false, ldev: false, acEssAuto: false, yHydSteering: false, navInGa: false, daid: false },
  { airline: "Hokkaido Air System", code: "NH", type: "ATR 42-600", reg: "JA12HC", ddrmi: false, standby: "DIGITAL", metricStbyAlt: false, cabinReady: false, brakeFans: false, dcdu: false, satcom: false, fls: false, tcap: false, ldev: false, acEssAuto: false, yHydSteering: false, navInGa: false, daid: false },
  { airline: "Hokkaido Air System", code: "NH", type: "ATR 42-600", reg: "JA13HC", ddrmi: false, standby: "DIGITAL", metricStbyAlt: false, cabinReady: false, brakeFans: false, dcdu: false, satcom: false, fls: false, tcap: false, ldev: false, acEssAuto: false, yHydSteering: false, navInGa: false, daid: false },
  { airline: "Hokkaido Air System", code: "NH", type: "ATR 42-600", reg: "JA14HC", ddrmi: false, standby: "DIGITAL", metricStbyAlt: false, cabinReady: false, brakeFans: false, dcdu: false, satcom: false, fls: false, tcap: false, ldev: false, acEssAuto: false, yHydSteering: false, navInGa: false, daid: false },

  // --- Ryukyu Air Commuter ---
  // -- Dash 8 --
  { airline: "Ryukyu Air Commuter", code: "RAC", type: "De Havilland Canada DHC-8 Dash 8", reg: "JA81RC", ddrmi: false, standby: "DIGITAL", metricStbyAlt: false, cabinReady: true, brakeFans: false, dcdu: false, satcom: false, fls: false, tcap: false, ldev: false, acEssAuto: false, yHydSteering: false, navInGa: false, daid: false },
  { airline: "Ryukyu Air Commuter", code: "RAC", type: "De Havilland Canada DHC-8 Dash 8", reg: "JA82RC", ddrmi: false, standby: "DIGITAL", metricStbyAlt: false, cabinReady: true, brakeFans: false, dcdu: false, satcom: false, fls: false, tcap: false, ldev: false, acEssAuto: false, yHydSteering: false, navInGa: false, daid: false },
  { airline: "Ryukyu Air Commuter", code: "RAC", type: "De Havilland Canada DHC-8 Dash 8", reg: "JA83RC", ddrmi: false, standby: "DIGITAL", metricStbyAlt: false, cabinReady: true, brakeFans: false, dcdu: false, satcom: false, fls: false, tcap: false, ldev: false, acEssAuto: false, yHydSteering: false, navInGa: false, daid: false },
  { airline: "Ryukyu Air Commuter", code: "RAC", type: "De Havilland Canada DHC-8 Dash 8", reg: "JA84RC", ddrmi: false, standby: "DIGITAL", metricStbyAlt: false, cabinReady: true, brakeFans: false, dcdu: false, satcom: false, fls: false, tcap: false, ldev: false, acEssAuto: false, yHydSteering: false, navInGa: false, daid: false },
  { airline: "Ryukyu Air Commuter", code: "RAC", type: "De Havilland Canada DHC-8 Dash 8", reg: "JA85RC", ddrmi: false, standby: "DIGITAL", metricStbyAlt: false, cabinReady: true, brakeFans: false, dcdu: false, satcom: false, fls: false, tcap: false, ldev: false, acEssAuto: false, yHydSteering: false, navInGa: false, daid: false },

  // --- Spring Japan ---
  // -- B737-8 --
  { airline: "Spring Japan", code: "IJ", type: "B737-8", reg: "JA01GR", ddrmi: false, standby: "DIGITAL", metricStbyAlt: false, cabinReady: true, brakeFans: false, dcdu: false, satcom: false, fls: false, tcap: false, ldev: false, acEssAuto: false, yHydSteering: false, navInGa: false, daid: false },
  { airline: "Spring Japan", code: "IJ", type: "B737-8", reg: "JA02GR", ddrmi: false, standby: "DIGITAL", metricStbyAlt: false, cabinReady: true, brakeFans: false, dcdu: false, satcom: false, fls: false, tcap: false, ldev: false, acEssAuto: false, yHydSteering: false, navInGa: false, daid: false },
  { airline: "Spring Japan", code: "IJ", type: "B737-8", reg: "JA03GR", ddrmi: false, standby: "DIGITAL", metricStbyAlt: false, cabinReady: true, brakeFans: false, dcdu: false, satcom: false, fls: false, tcap: false, ldev: false, acEssAuto: false, yHydSteering: false, navInGa: false, daid: false },
  { airline: "Spring Japan", code: "IJ", type: "B737-8", reg: "JA04GR", ddrmi: false, standby: "DIGITAL", metricStbyAlt: false, cabinReady: true, brakeFans: false, dcdu: false, satcom: false, fls: false, tcap: false, ldev: false, acEssAuto: false, yHydSteering: false, navInGa: false, daid: false },
  { airline: "Spring Japan", code: "IJ", type: "B737-8", reg: "JA05GR", ddrmi: false, standby: "DIGITAL", metricStbyAlt: false, cabinReady: true, brakeFans: false, dcdu: false, satcom: false, fls: false, tcap: false, ldev: false, acEssAuto: false, yHydSteering: false, navInGa: false, daid: false },
  { airline: "Spring Japan", code: "IJ", type: "B737-8", reg: "JA06GR", ddrmi: false, standby: "DIGITAL", metricStbyAlt: false, cabinReady: true, brakeFans: false, dcdu: false, satcom: false, fls: false, tcap: false, ldev: false, acEssAuto: false, yHydSteering: false, navInGa: false, daid: false },

  // -- A321-200F --
  { airline: "Spring Japan", code: "IJ", type: "A321-200F", reg: "JA81YA", ddrmi: false, standby: "DIGITAL", metricStbyAlt: false, cabinReady: true, brakeFans: false, dcdu: false, satcom: false, fls: false, tcap: false, ldev: false, acEssAuto: false, yHydSteering: false, navInGa: false, daid: false },
  { airline: "Spring Japan", code: "IJ", type: "A321-200F", reg: "JA82YA", ddrmi: false, standby: "DIGITAL", metricStbyAlt: false, cabinReady: true, brakeFans: false, dcdu: false, satcom: false, fls: false, tcap: false, ldev: false, acEssAuto: false, yHydSteering: false, navInGa: false, daid: false },
  { airline: "Spring Japan", code: "IJ", type: "A321-200F", reg: "JA83YA", ddrmi: false, standby: "DIGITAL", metricStbyAlt: false, cabinReady: true, brakeFans: false, dcdu: false, satcom: false, fls: false, tcap: false, ldev: false, acEssAuto: false, yHydSteering: false, navInGa: false, daid: false },

  // --- Zipair Tokyo ---
  // -- B787-8 --
  { airline: "Zipair Tokyo", code: "ZG", type: "B787-8", reg: "JA822J", ddrmi: false, standby: "DIGITAL", metricStbyAlt: false, cabinReady: true, brakeFans: false, dcdu: false, satcom: false, fls: false, tcap: false, ldev: false, acEssAuto: false, yHydSteering: false, navInGa: false, daid: false },
  { airline: "Zipair Tokyo", code: "ZG", type: "B787-8", reg: "JA824J", ddrmi: false, standby: "DIGITAL", metricStbyAlt: false, cabinReady: true, brakeFans: false, dcdu: false, satcom: false, fls: false, tcap: false, ldev: false, acEssAuto: false, yHydSteering: false, navInGa: false, daid: false },
  { airline: "Zipair Tokyo", code: "ZG", type: "B787-8", reg: "JA825J", ddrmi: false, standby: "DIGITAL", metricStbyAlt: false, cabinReady: true, brakeFans: false, dcdu: false, satcom: false, fls: false, tcap: false, ldev: false, acEssAuto: false, yHydSteering: false, navInGa: false, daid: false },
  { airline: "Zipair Tokyo", code: "ZG", type: "B787-8", reg: "JA826J", ddrmi: false, standby: "DIGITAL", metricStbyAlt: false, cabinReady: true, brakeFans: false, dcdu: false, satcom: false, fls: false, tcap: false, ldev: false, acEssAuto: false, yHydSteering: false, navInGa: false, daid: false },
  { airline: "Zipair Tokyo", code: "ZG", type: "B787-8", reg: "JA827J", ddrmi: false, standby: "DIGITAL", metricStbyAlt: false, cabinReady: true, brakeFans: false, dcdu: false, satcom: false, fls: false, tcap: false, ldev: false, acEssAuto: false, yHydSteering: false, navInGa: false, daid: false },
  { airline: "Zipair Tokyo", code: "ZG", type: "B787-8", reg: "JA828J", ddrmi: false, standby: "DIGITAL", metricStbyAlt: false, cabinReady: true, brakeFans: false, dcdu: false, satcom: false, fls: false, tcap: false, ldev: false, acEssAuto: false, yHydSteering: false, navInGa: false, daid: false },
  { airline: "Zipair Tokyo", code: "ZG", type: "B787-8", reg: "JA850J", ddrmi: false, standby: "DIGITAL", metricStbyAlt: false, cabinReady: true, brakeFans: false, dcdu: false, satcom: false, fls: false, tcap: false, ldev: false, acEssAuto: false, yHydSteering: false, navInGa: false, daid: false },
  { airline: "Zipair Tokyo", code: "ZG", type: "B787-8", reg: "JA851J", ddrmi: false, standby: "DIGITAL", metricStbyAlt: false, cabinReady: true, brakeFans: false, dcdu: false, satcom: false, fls: false, tcap: false, ldev: false, acEssAuto: false, yHydSteering: false, navInGa: false, daid: false },
];

// --- Table Columns ---
const CONFIG_COLUMNS = [
  { key: "reg", label: "REG" },
  { key: "type", label: "Type" },
  { key: "ddrmi", label: "DDRMI" },
  { key: "standby", label: "STANDBY" },
  { key: "metricStbyAlt", label: "METRIC STBY ALT" },
  { key: "cabinReady", label: "CABIN READY" },
  { key: "brakeFans", label: "BRAKE FANS" },
  { key: "dcdu", label: "DCDU" },
  { key: "satcom", label: "SATCOM" },
  { key: "fls", label: "FLS" },
  { key: "tcap", label: "TCAP" },
  { key: "ldev", label: "L/DEV" },
  { key: "acEssAuto", label: "AC ESS AUTO" },
  { key: "yHydSteering", label: "Y HYD STEERING" },
  { key: "navInGa", label: "NAV IN GA" },
  { key: "daid", label: "DAID" }
];

const CheckIcon = ({ active }) => (
  <span
    className={`icon-check ${active ? "active" : ""}`}
    style={{
      color: active ? "#4ade80" : "#ef4444",
      fontWeight: 700,
      fontSize: "0.9rem"
    }}
  >
    {active ? "●" : "×"}
  </span>
);

export default function AdvancedConfigsTable() {
  const airlineOptions = useMemo(() =>
    Array.from(new Set(AIRCRAFT_REGISTRATIONS.map(a => a.airline))).map(airline => ({
      value: airline,
      label: airline
    })), []
  );
  const [selectedAirline, setSelectedAirline] = useState(airlineOptions[0]);

  const typeOptions = useMemo(() =>
    Array.from(
      new Set(
        AIRCRAFT_REGISTRATIONS
          .filter(a => a.airline === selectedAirline.value)
          .map(a => a.type)
      )
    ).map(type => ({
      value: type,
      label: type
    })), [selectedAirline]
  );
  const [selectedType, setSelectedType] = useState(typeOptions[0]);

  useEffect(() => {
    setSelectedType(typeOptions[0]);
  }, [selectedAirline, typeOptions]);

  const configs = AIRCRAFT_REGISTRATIONS.filter(
    a => a.airline === selectedAirline.value && a.type === selectedType?.value
  );

  return (
    <div className="jal-top-left-table">
      <div className="jal-table-box">
        <h2 className="jal-table-heading">Aircraft Configurations</h2>
        <div className="jal-table-dropdowns">
          <div>
            <label className="jal-table-label">Airline</label>
            <Select
              options={airlineOptions}
              value={selectedAirline}
              onChange={setSelectedAirline}
              isSearchable
              styles={{
                control: styles => ({ ...styles, backgroundColor: "#232326", color: "#fff", minHeight: 28, height: 28, fontSize: "0.90rem" }),
                dropdownIndicator: styles => ({ ...styles, padding: 2 }),
                clearIndicator: styles => ({ ...styles, padding: 2 }),
                menu: styles => ({ ...styles, backgroundColor: "#232326", color: "#fff", fontSize: "0.92rem" }),
                singleValue: styles => ({ ...styles, color: "#fff", fontSize: "0.92rem" }),
                option: (styles, { isFocused }) => ({
                  ...styles,
                  backgroundColor: isFocused ? "#33334d" : "#232326",
                  color: "#fff",
                  fontSize: "0.92rem",
                  paddingTop: 4, paddingBottom: 4, paddingLeft: 10, paddingRight: 10,
                }),
                valueContainer: styles => ({ ...styles, paddingTop: 0, paddingBottom: 0, height: 22 }),
                input: styles => ({ ...styles, margin: 0, padding: 0 }),
              }}
              theme={theme => ({
                ...theme,
                borderRadius: 4,
                colors: {
                  ...theme.colors,
                  primary25: "#33334d",
                  primary: "#6366f1",
                  neutral0: "#232326",
                  neutral80: "#fff",
                },
              })}
            />
          </div>
          <div>
            <label className="jal-table-label">Aircraft Type</label>
            <Select
              options={typeOptions}
              value={selectedType}
              onChange={setSelectedType}
              isSearchable
              styles={{
                control: styles => ({ ...styles, backgroundColor: "#232326", color: "#fff", minHeight: 28, height: 28, fontSize: "0.90rem" }),
                dropdownIndicator: styles => ({ ...styles, padding: 2 }),
                clearIndicator: styles => ({ ...styles, padding: 2 }),
                menu: styles => ({ ...styles, backgroundColor: "#232326", color: "#fff", fontSize: "0.92rem" }),
                singleValue: styles => ({ ...styles, color: "#fff", fontSize: "0.92rem" }),
                option: (styles, { isFocused }) => ({
                  ...styles,
                  backgroundColor: isFocused ? "#33334d" : "#232326",
                  color: "#fff",
                  fontSize: "0.92rem",
                  paddingTop: 4, paddingBottom: 4, paddingLeft: 10, paddingRight: 10,
                }),
                valueContainer: styles => ({ ...styles, paddingTop: 0, paddingBottom: 0, height: 22 }),
                input: styles => ({ ...styles, margin: 0, padding: 0 }),
              }}
              theme={theme => ({
                ...theme,
                borderRadius: 4,
                colors: {
                  ...theme.colors,
                  primary25: "#33334d",
                  primary: "#6366f1",
                  neutral0: "#232326",
                  neutral80: "#fff",
                },
              })}
            />
          </div>
        </div>
        <table className="jal-config-table-compact">
          <thead>
            <tr>
              {CONFIG_COLUMNS.map(col => (
                <th key={col.key}>{col.label}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {configs.map((row, i) => (
              <tr key={row.reg} className={i % 2 ? "jal-row-alt" : ""}>
                {CONFIG_COLUMNS.map(col => (
                  <td
                    key={col.key}
                    className={col.key !== "reg" && col.key !== "type" && col.key !== "standby" ? "icon-hover" : ""}
                  >
                    {col.key === "reg" || col.key === "type" || col.key === "standby"
                      ? row[col.key]
                      : <CheckIcon active={row[col.key]} />}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <style>{`
        .jal-top-left-table {
          background: none;
          min-height: unset;
          width: unset;
          padding: 0;
          margin: 0;
          /* No full-page background */
        }
        .jal-table-box {
          margin: 36px 0 0 36px;
          box-shadow: 0 2px 18px 0 #000c, 0 0 0 2px #353cd6;
          border-radius: 20px;
          background: #232326;
          padding: 26px 18px 18px 18px;
          max-width: 95vw;
          min-width: 800px;
          display: inline-block;
        }
        .jal-table-heading {
          font-weight: 700;
          font-size: 1.18rem;
          margin-bottom: 0.8rem;
          padding-left: 0;
          padding-top: 0;
          letter-spacing: 0.03em;
        }
        .jal-table-dropdowns {
          display: flex;
          gap: 14px;
          margin-bottom: 10px;
          font-size: 0.93rem;
        }
        .jal-table-label {
          font-weight: 500;
          font-size: 0.92rem;
          margin-bottom: 1px;
          display: block;
          letter-spacing: 0.02em;
        }
        .jal-config-table-compact {
          width: 100%;
          border-radius: 10px;
          background: #18181b;
          border-collapse: separate;
          border-spacing: 0;
          border: 1px solid #353cd6;
        }
        .jal-config-table-compact th, .jal-config-table-compact td {
          min-width: 78px;
          padding: 4px 4px;
          text-align: center;
          font-size: 0.89rem;
          font-weight: 500;
          border: 1px solid #353cd6;
        }
        .jal-config-table-compact th {
          color: #a5b4fc;
          font-weight: 700;
          background: #1e1e22;
          font-size: 0.87rem;
          padding: 7px 2px;
          letter-spacing: 0.03em;
        }
        .jal-row-alt {
          background: #232326;
        }
        .icon-hover {
          cursor: pointer;
          transition: background 0.2s;
        }
        .icon-hover:hover {
          background: #292524;
        }
        .icon-hover:hover .icon-check.active {
          color: #22c55e !important;
          text-shadow: 0 0 8px #22c55e;
        }
        .icon-hover:hover .icon-check:not(.active) {
          color: #ef4444 !important;
          text-shadow: 0 0 8px #ef4444;
        }
        .icon-check {
          transition: color 0.2s, text-shadow 0.2s;
          display: inline-block;
        }
        @media (max-width: 1000px) {
          .jal-config-table-compact th, .jal-config-table-compact td {
            min-width: 62px;
            font-size: 0.81rem;
            padding: 2px 1px;
          }
          .jal-table-heading {
            font-size: 1rem;
          }
        }
      `}</style>
    </div>
  );
}
