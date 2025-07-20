import React from "react";
import { MdLocalGasStation, MdAccessTime, MdWarning, MdInfo, MdAssignment } from "react-icons/md";

export default function FuelPlanning() {
  return (
    <div>
      {/* Main Policy */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 16,
          background: "linear-gradient(90deg, #6ed7fa 60%, #a5a9fc 100%)",
          borderRadius: "12px",
          padding: "18px 18px 13px 18px",
          margin: "18px 0 30px 0",
          color: "#234",
          border: "1px solid #86b9e7",
          boxShadow: "0 2px 18px #0002",
        }}
      >
        <MdLocalGasStation size={30} color="#23b5ee" />
        <div>
          <span style={{ fontWeight: 700, fontSize: 19 }}>
            Contingency Fuel is planned at <span style={{ color: "#1770b7" }}>3% of trip fuel</span> or <span style={{ color: "#1770b7" }}>15 minutes</span>, whichever is higher.
          </span>
        </div>
      </div>

      {/* Europe Policy */}
      <div
        style={{
          background: "linear-gradient(90deg, #232c44 60%, #69b3f3 100%)",
          borderRadius: 11,
          padding: "17px 18px 11px 18px",
          marginBottom: 24,
          color: "#e9f8fe",
          border: "1px solid #5d94c3",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 6 }}>
          <MdAccessTime size={20} color="#f2ec82" />
          <span style={{ fontWeight: 700, color: "#e4e99c" }}>
            Europe Ops: Extra Fuel
          </span>
        </div>
        <div style={{ fontSize: 15.4 }}>
          Flights to and from <b>Europe</b> include an additional <b style={{ color: "#d9f072" }}>10 minutes of extra fuel</b>, automatically planned by the system to maintain a <b>15-minute longitudinal separation</b> between aircraft operating on the same airway and flight level.
        </div>
      </div>

      {/* Planning/Dispatch */}
      <div
        style={{
          background: "linear-gradient(90deg, #263259 60%, #97e1fa 100%)",
          borderRadius: 10,
          padding: "16px 17px 12px 17px",
          marginBottom: 23,
          color: "#e8f7ff",
          border: "1px solid #5db0d9",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 6 }}>
          <MdAssignment size={20} color="#71defa" />
          <span style={{ fontWeight: 700, color: "#a3eaff" }}>
            Dispatch & Minimum Fuel
          </span>
        </div>
        <div style={{ fontSize: 15.3 }}>
          Pilots must ensure that the calculated <b style={{ color: "#53e4ff" }}>dispatch fuel</b> is <b>sufficient to reach the destination</b> <span style={{ color: "#ff6b6b" }}>without relying</span> on contingency fuel, alternate fuel, or final reserve fuel.
        </div>
      </div>

      {/* Fuel Emergency */}
      <div
        style={{
          background: "linear-gradient(90deg, #37265c 60%, #ebccae 100%)",
          borderRadius: 10,
          padding: "15px 16px 10px 16px",
          marginBottom: 20,
          color: "#fff6eb",
          border: "1px solid #dfc1aa",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 9, marginBottom: 5 }}>
          <MdWarning size={20} color="#ffe065" />
          <span style={{ fontWeight: 700, color: "#ffe065" }}>
            Fuel Emergency
          </span>
        </div>
        <div style={{ fontSize: 15.2 }}>
          If <b>fuel on board (FOB)</b> drops below <b>Final Reserve Fuel (FINRES)</b>, pilots must declare a <span style={{ color: "#ff7d7d", fontWeight: 700 }}>fuel emergency</span> and divert to the nearest suitable aerodrome.
        </div>
      </div>

      {/* ASR Requirement */}
      <div
        style={{
          background: "linear-gradient(90deg, #234a67 60%, #bff4ff 100%)",
          borderRadius: 10,
          padding: "13px 16px 10px 16px",
          marginBottom: 10,
          color: "#315478",
          border: "1px solid #90def2",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 9 }}>
          <MdInfo size={19} color="#00c7ee" />
          <span>
            <b style={{
              background: "linear-gradient(90deg, #f859b6 40%, #5ec0f3 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              fontWeight: 700,
              margin: "0 2px"
            }}>
              Air Safety Report (ASR)
            </b>
            <span style={{
              color: "#008cc7",
              fontWeight: 500
            }}>
              &nbsp;must be submitted following any fuel emergency, including all relevant details of the event.
            </span>
          </span>
        </div>
      </div>
    </div>
  );
}
