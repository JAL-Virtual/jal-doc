import React from "react";
import {
  MdInfo,
  MdListAlt,
  MdShield,
  MdEdit,
  MdPin,
  MdLightbulb,
} from "react-icons/md";

const rankRows = [
  {
    emoji: "🛫",
    rank: "Ramp Agent",
    min: 0,
    max: 5,
    aircraft: "B738, A320, A20N",
  },
  {
    emoji: "🎓",
    rank: "Second Officer",
    min: 5,
    max: 25,
    aircraft: "B738, A320, A21N, EMB190, EMB170",
  },
  {
    emoji: "🪂",
    rank: "First Officer",
    min: 25,
    max: 75,
    aircraft: "B738, A320, A20N, EMB190, EMB170, DH8D, AT76",
  },
  {
    emoji: "✈️",
    rank: "Senior First Officer",
    min: 75,
    max: 150,
    aircraft:
      "B738, A320, A20N, EMB190, EMB170, DH8D, AT76, B763, B77W, B788, B789, A359, A35K",
  },
  {
    emoji: "👨‍✈️",
    rank: "Captain",
    min: 150,
    max: 300,
    aircraft:
      "B738, A320, A20N, EMB190, EMB170, DH8D, AT76, B763, B77W, B788, B789, A359, A35K, B722, B772",
  },
  {
    emoji: "🥇",
    rank: "Senior Captain",
    min: 300,
    max: 700,
    aircraft:
      "B738, A320, A20N, EMB190, EMB170, DH8D, AT76, B763, B77W, B788, B789, A359, A35K, MD-11, B722, DC-3, B772, B742-4, DC-6, BN2P",
  },
  {
    emoji: "🏆",
    rank: "Chief Pilot",
    min: 700,
    max: 5000,
    aircraft: <b>Whole fleet including historic aircraft</b>,
  },
];

export default function Rankings() {
  return (
    <div>
      {/* Page Title */}
      <div
        style={{
          background: "linear-gradient(90deg, #e2e6fb 60%, #fce8c4 100%)",
          borderRadius: "15px",
          padding: "24px 20px 18px 22px",
          margin: "20px 0 35px 0",
          color: "#6b470d",
          border: "1px solid #e4cd9a",
          boxShadow: "0 2px 18px #0001",
          display: "flex",
          alignItems: "center",
          gap: 16,
        }}
      >
        <MdListAlt size={35} color="#9b6a23" />
        <span style={{ fontWeight: 800, fontSize: 27 }}>
          🏅 Rankings
        </span>
      </div>

      {/* Ranks Table */}
      <div
        style={{
          background: "linear-gradient(90deg, #f7fafc 60%, #dde3fa 100%)",
          borderRadius: 12,
          padding: "20px 20px 14px 20px",
          marginBottom: 28,
          color: "#2e3550",
          border: "1px solid #d6daf5",
          overflowX: "auto",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 9, marginBottom: 10 }}>
          <span style={{ fontWeight: 700, fontSize: 17, color: "#245ac2" }}>👨‍✈️ Pilot Ranks & Aircraft Access</span>
        </div>
        <table style={{
          borderCollapse: "collapse",
          width: "100%",
          minWidth: 360,
          fontSize: 14.9,
          background: "transparent",
        }}>
          <thead>
            <tr style={{ background: "#ebf3fc", color: "#384564" }}>
              <th style={{ padding: "10px 12px", border: 0, fontWeight: 700 }}>Rank</th>
              <th style={{ padding: "10px 10px", border: 0, fontWeight: 700 }}>Min Hours</th>
              <th style={{ padding: "10px 10px", border: 0, fontWeight: 700 }}>Max Hours</th>
              <th style={{ padding: "10px 12px", border: 0, fontWeight: 700, textAlign: "left" }}>Aircraft Available to Fly</th>
            </tr>
          </thead>
          <tbody>
            {rankRows.map((row, idx) => (
              <tr key={row.rank} style={{
                background: idx % 2 === 0 ? "#f6f9fe" : "#f2f5fa",
                borderRadius: 7,
              }}>
                <td style={{ padding: "8px 12px", fontWeight: 700, fontSize: 15 }}>{row.emoji} {row.rank}</td>
                <td style={{ padding: "8px 10px", textAlign: "center", color: "#35679a", fontWeight: 600 }}>{row.min}</td>
                <td style={{ padding: "8px 10px", textAlign: "center", color: "#35679a", fontWeight: 600 }}>{row.max}</td>
                <td style={{ padding: "8px 12px", color: "#34375b" }}>{row.aircraft}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Info Card */}
      <div
        style={{
          background: "linear-gradient(90deg, #c9e6ff 60%, #fff7be 100%)",
          borderRadius: "12px",
          padding: "15px 20px 10px 18px",
          marginBottom: 26,
          color: "#384664",
          border: "1px solid #f3e5ae",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 11, marginBottom: 3 }}>
          <MdInfo size={23} color="#1f96e8" />
          <span style={{ fontWeight: 700, fontSize: 16 }}>How Ranking Works</span>
        </div>
        <ul style={{ margin: "7px 0 0 23px", fontSize: 15 }}>
          <li>Your <b>Rank</b> is determined by your total logged hours (PIREP time).</li>
          <li>Higher ranks <b>unlock access to more aircraft types</b> and historic aircraft.</li>
          <li>Progression is automatic as you accumulate hours.</li>
        </ul>
      </div>

      {/* Rank Progression Overview */}
      <div
        style={{
          background: "linear-gradient(90deg, #f5fafd 60%, #c4f6f8 100%)",
          borderRadius: "12px",
          padding: "15px 20px 11px 18px",
          marginBottom: 26,
          color: "#2c4648",
          border: "1px solid #c9e8eb",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 11, marginBottom: 2 }}>
          <MdShield size={22} color="#37cbc4" />
          <span style={{ fontWeight: 700, fontSize: 16 }}>Rank Progression Overview</span>
        </div>
        <ul style={{ margin: "7px 0 0 23px", fontSize: 15 }}>
          <li>⏳ <b>Hours are cumulative</b> and increase with each approved PIREP.</li>
          <li>🚀 <b>Unlock new aircraft</b> as you move up the ranks.</li>
          <li>🕰️ <b>Historic aircraft</b> (e.g., DC-3, MD-11, BN2P, B742-4, DC-6) are reserved for <b>Chief Pilots</b> and Senior Captains.</li>
          <li>🏅 <b>Your rank displays on the roster and your pilot profile.</b></li>
        </ul>
      </div>

      {/* Example Card */}
      <div
        style={{
          background: "linear-gradient(90deg, #f5e8ff 60%, #c6f2ef 100%)",
          borderRadius: 12,
          padding: "14px 20px 9px 18px",
          marginBottom: 25,
          color: "#644c6e",
          border: "1px solid #e5c8fa",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 1 }}>
          <MdEdit size={22} color="#985de7" />
          <span style={{ fontWeight: 700, fontSize: 16, color: "#985de7" }}>Example</span>
        </div>
        <span style={{ fontSize: 15.3 }}>
          <b>If you have 180 hours</b>, you are a <b style={{ color: "#ffb347" }}>Captain</b> and can fly all Captain-level aircraft and those below.
        </span>
      </div>

      {/* Tip Banner */}
      <div
        style={{
          background: "linear-gradient(90deg, #fff3c7 60%, #f4fabe 100%)",
          borderRadius: 10,
          padding: "13px 18px 10px 18px",
          marginBottom: 25,
          color: "#70660b",
          border: "1px solid #f5e8ae",
        }}
      >
        <MdLightbulb size={18} color="#ffe33d" style={{ marginRight: 6, verticalAlign: "middle" }} />
        <b>Want to rank up faster?</b> Fly regularly, file complete PIREPs, and explore new routes to build hours and unlock more of the fleet!
      </div>

      {/* Notes Card */}
      <div
        style={{
          background: "linear-gradient(90deg, #e2e6fb 60%, #fce8c4 100%)",
          borderRadius: 10,
          padding: "12px 18px 10px 18px",
          marginBottom: 7,
          color: "#385784",
          border: "1px solid #e4cd9a",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 7, marginBottom: 2 }}>
          <MdPin size={18} color="#a8915f" />
          <span style={{ fontWeight: 700, fontSize: 15.5 }}>Notes</span>
        </div>
        <ul style={{ margin: "6px 0 0 21px", fontSize: 14.9 }}>
          <li>Rank progression is automatic; no manual application needed.</li>
          <li>Aircraft access is always subject to current PIREP and substitution policies.</li>
          <li>For any rank or fleet questions, contact staff.</li>
        </ul>
      </div>
    </div>
  );
}
