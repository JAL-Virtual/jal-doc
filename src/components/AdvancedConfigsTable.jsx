import React, { useState, useMemo, useEffect } from "react";
import Select from "react-select";

// --- DATA ---
const AIRCRAFT_REGISTRATIONS = [
  // --- Japan Airlines ---
  // -- A350-900 --
  { airline: "Japan Airlines", code: "JL", type: "A350-900", reg: "JA01XJ", ddrmi: true, standby: "DIGITAL", metricStbyAlt: false, cabinReady: true, brakeFans: true, dcdu: false, satcom: true, fls: false, tcap: true, ldev: true, acEssAuto: true, yHydSteering: true, navInGa: true, daid: true },
  // -- B737-8 --
  { airline: "Japan Airlines", code: "JL", type: "Boeing 737-8", reg: "JA01GR", ddrmi: false, standby: "DIGITAL", metricStbyAlt: false, cabinReady: true, brakeFans: false, dcdu: false, satcom: false, fls: false, tcap: false, ldev: false, acEssAuto: true, yHydSteering: true, navInGa: false, daid: false },
  // -- B767-300ER --
  { airline: "Japan Airlines", code: "JL", type: "Boeing 767-300ER", reg: "JA601J", ddrmi: true, standby: "DIGITAL", metricStbyAlt: false, cabinReady: true, brakeFans: true, dcdu: true, satcom: true, fls: true, tcap: true, ldev: true, acEssAuto: false, yHydSteering: false, navInGa: false, daid: false },
  // -- B777-300ER --
  { airline: "Japan Airlines", code: "JL", type: "Boeing 777-300ER", reg: "JA731J", ddrmi: true, standby: "DIGITAL", metricStbyAlt: true, cabinReady: true, brakeFans: true, dcdu: true, satcom: true, fls: false, tcap: false, ldev: false, acEssAuto: true, yHydSteering: false, navInGa: true, daid: false },
  // -- B787-8 --
  { airline: "Japan Airlines", code: "JL", type: "Boeing 787-8", reg: "JA825J", ddrmi: true, standby: "DIGITAL", metricStbyAlt: true, cabinReady: true, brakeFans: true, dcdu: true, satcom: true, fls: true, tcap: true, ldev: true, acEssAuto: true, yHydSteering: true, navInGa: true, daid: true },
  // -- B787-9 --
  { airline: "Japan Airlines", code: "JL", type: "Boeing 787-9", reg: "JA861J", ddrmi: true, standby: "DIGITAL", metricStbyAlt: false, cabinReady: true, brakeFans: false, dcdu: false, satcom: true, fls: false, tcap: true, ldev: false, acEssAuto: false, yHydSteering: false, navInGa: false, daid: false },

  // --- J-Air ---
  // -- E170 --
  { airline: "J-Air", code: "XM", type: "Embraer E170", reg: "JA211J", ddrmi: false, standby: "DIGITAL", metricStbyAlt: false, cabinReady: true, brakeFans: false, dcdu: false, satcom: false, fls: false, tcap: false, ldev: false, acEssAuto: false, yHydSteering: false, navInGa: false, daid: false },
  // -- E190 --
  { airline: "J-Air", code: "XM", type: "Embraer E190", reg: "JA241J", ddrmi: false, standby: "DIGITAL", metricStbyAlt: false, cabinReady: true, brakeFans: false, dcdu: false, satcom: false, fls: false, tcap: false, ldev: false, acEssAuto: false, yHydSteering: false, navInGa: false, daid: false },

  // --- Japan Transocean Air ---
  // -- B737-8 --
  { airline: "Japan Transocean Air", code: "NU", type: "Boeing 737-8", reg: "JA01RK", ddrmi: false, standby: "DIGITAL", metricStbyAlt: false, cabinReady: true, brakeFans: false, dcdu: false, satcom: false, fls: false, tcap: false, ldev: false, acEssAuto: true, yHydSteering: false, navInGa: false, daid: false },

  // --- Japan Air Commuter ---
  // -- ATR 42 --
  { airline: "Japan Air Commuter", code: "JC", type: "ATR 42", reg: "JA01JC", ddrmi: false, standby: "DIGITAL", metricStbyAlt: false, cabinReady: true, brakeFans: false, dcdu: false, satcom: false, fls: false, tcap: false, ldev: false, acEssAuto: false, yHydSteering: false, navInGa: false, daid: false },
  // -- ATR 72-600 --
  { airline: "Japan Air Commuter", code: "JC", type: "ATR 72-600", reg: "JA06JC", ddrmi: false, standby: "DIGITAL", metricStbyAlt: false, cabinReady: true, brakeFans: false, dcdu: false, satcom: false, fls: false, tcap: false, ldev: false, acEssAuto: false, yHydSteering: false, navInGa: false, daid: false },

  // --- Jetstar Japan ---
  // -- A320-200 --
  { airline: "Jetstar Japan", code: "GK", type: "A320-200", reg: "JA01JJ", ddrmi: false, standby: "DIGITAL", metricStbyAlt: false, cabinReady: true, brakeFans: false, dcdu: false, satcom: false, fls: false, tcap: false, ldev: false, acEssAuto: false, yHydSteering: false, navInGa: false, daid: false },

  // --- Hokkaido Air System ---
  // -- ATR 42-600 --
  { airline: "Hokkaido Air System", code: "NH", type: "ATR 42-600", reg: "JA01HC", ddrmi: false, standby: "DIGITAL", metricStbyAlt: false, cabinReady: true, brakeFans: false, dcdu: false, satcom: false, fls: false, tcap: false, ldev: false, acEssAuto: false, yHydSteering: false, navInGa: false, daid: false },

  // --- Ryukyu Air Commuter ---
  // -- Dash 8 --
  { airline: "Ryukyu Air Commuter", code: "RAC", type: "De Havilland Canada DHC-8 Dash 8", reg: "JA81RC", ddrmi: false, standby: "DIGITAL", metricStbyAlt: false, cabinReady: true, brakeFans: false, dcdu: false, satcom: false, fls: false, tcap: false, ldev: false, acEssAuto: false, yHydSteering: false, navInGa: false, daid: false },

  // --- Spring Japan ---
  // -- B737-8 --
  { airline: "Spring Japan", code: "IJ", type: "Boeing 737-8", reg: "JA01GR", ddrmi: false, standby: "DIGITAL", metricStbyAlt: false, cabinReady: true, brakeFans: false, dcdu: false, satcom: false, fls: false, tcap: false, ldev: false, acEssAuto: false, yHydSteering: false, navInGa: false, daid: false },
  // -- A321-200F --
  { airline: "Spring Japan", code: "IJ", type: "A321-200F", reg: "JA01LJ", ddrmi: false, standby: "DIGITAL", metricStbyAlt: false, cabinReady: true, brakeFans: false, dcdu: false, satcom: false, fls: false, tcap: false, ldev: false, acEssAuto: false, yHydSteering: false, navInGa: false, daid: false },

  // --- Zipair Tokyo ---
  // -- B787-8 --
  { airline: "Zipair Tokyo", code: "ZG", type: "Boeing 787-8", reg: "JA822J", ddrmi: false, standby: "DIGITAL", metricStbyAlt: false, cabinReady: true, brakeFans: false, dcdu: false, satcom: false, fls: false, tcap: false, ldev: false, acEssAuto: false, yHydSteering: false, navInGa: false, daid: false }
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
    <div className="jal-fullpage-table-compact">
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
      {/* TABLE, no scroll-x wrapper */}
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
      <style>{`
        .jal-fullpage-table-compact {
          background: #18181b !important;
          color: #fff !important;
          padding: 0 !important;
          margin: 0 !important;
          width: 100vw !important;
          min-height: 100vh;
          border-radius: 0 !important;
        }
        .jal-table-heading {
          font-weight: 700;
          font-size: 1.15rem;
          margin-bottom: 0.6rem;
          padding-left: 10px;
          padding-top: 16px;
          letter-spacing: 0.03em;
        }
        .jal-table-dropdowns {
          display: flex;
          gap: 10px;
          margin-bottom: 10px;
          padding-left: 10px;
          font-size: 0.94rem;
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
          border-radius: 0 !important;
          background: #232326;
          border-collapse: separate;
          border-spacing: 0;
        }
        .jal-config-table-compact th, .jal-config-table-compact td {
          min-width: 78px;
          padding: 3px 2px;
          text-align: center;
          font-size: 0.90rem;
          font-weight: 500;
        }
        .jal-config-table-compact th {
          color: #a5b4fc;
          font-weight: 700;
          background: #1e1e22;
          font-size: 0.88rem;
          padding: 7px 2px;
          letter-spacing: 0.03em;
        }
        .jal-row-alt {
          background: #18181b;
        }
        .icon-hover {
          cursor: pointer;
          transition: background 0.2s;
        }
        .icon-hover:hover {
          background: #292524;
        }
        .icon-hover:hover .icon-check.active {
          color: #22c55e !important; /* bright green */
          text-shadow: 0 0 8px #22c55e;
        }
        .icon-hover:hover .icon-check:not(.active) {
          color: #ef4444 !important; /* bright red */
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