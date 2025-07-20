import React from "react";
import {
  MdSpeed,
  MdReplay,
  MdReportProblem,
  MdInfo,
} from "react-icons/md";

export default function SimulationSettings() {
  return (
    <div>
      {/* Info Banner */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 15,
          background: "linear-gradient(90deg, #45a8e5 60%, #76e5e5 100%)",
          borderRadius: "11px",
          padding: "18px 18px 15px 18px",
          margin: "18px 0 34px 0",
          color: "#fff",
          border: "1px solid #6dc7f7",
          boxShadow: "0 2px 18px #0001",
        }}
      >
        <MdSpeed size={32} color="#fff" />
        <div>
          <div style={{ fontWeight: 700, fontSize: 18, marginBottom: 4 }}>
            Simulation Settings
          </div>
          <div>
            All flights must be conducted at <b style={{ color: "#fff68d" }}>1x simulation speed</b>.
          </div>
        </div>
      </div>

      {/* Exception Card */}
      <div
        style={{
          background: "linear-gradient(90deg, #23294a 60%, #275177 100%)",
          borderRadius: 12,
          padding: "22px 22px 15px 22px",
          marginBottom: 24,
          color: "#e6f7fa",
          border: "1px solid #356fa7",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 8 }}>
          <MdReplay size={23} color="#fff1c1" />
          <span style={{ fontWeight: 700, fontSize: 17, color: "#ffef8f" }}>
            Exception: Crash Recovery
          </span>
        </div>
        <div style={{ fontSize: 15, marginBottom: 12 }}>
          <b style={{ color: "#91ecfc" }}>Following a game or WASM crash,</b> you may reload from a saved state and use increased simulation rate <b>only</b> to return to the original position/time.
        </div>
      </div>

      {/* ASR Requirement */}
      <div
        style={{
          background: "linear-gradient(90deg, #fffbb0 0%, #f3ffc5 100%)",
          borderRadius: "11px",
          padding: "15px 20px 11px 20px",
          marginBottom: 28,
          color: "#37343a",
          border: "1px solid #e7e3ae",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 11, marginBottom: 5 }}>
          <MdReportProblem size={21} color="#f0bc3c" />
          <span style={{ fontWeight: 700, fontSize: 16, color: "#8e7900" }}>
            Air Safety Report (ASR) Requirement
          </span>
        </div>
        <div style={{ marginLeft: 4, fontSize: 15.2 }}>
          You <b>must submit an Air Safety Report (ASR)</b> with <b>verifiable proof</b> in any case of crash recovery or fast-forwarding to the original position.
        </div>
      </div>

      {/* FAQ */}
      <div
        style={{
          background: "linear-gradient(90deg, #294068 60%, #42a3e3 100%)",
          borderRadius: 11,
          padding: "20px 19px 10px 19px",
          marginBottom: 18,
          color: "#e2f7ff",
          border: "1px solid #6dc7f7",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 7 }}>
          <MdInfo size={22} color="#b9e4ff" />
          <span style={{ fontWeight: 700, fontSize: 16.5, color: "#c2eaff" }}>
            FAQ & Key Notes
          </span>
        </div>
        <details style={{ marginBottom: 10 }}>
          <summary style={{ cursor: "pointer", fontWeight: 700, fontSize: 15, color: "#fff" }}>
            Can I use time acceleration after a crash?
          </summary>
          <div style={{ marginTop: 5, marginLeft: 9, color: "#d9f5ff", fontSize: 14.4 }}>
            Only to return to your original location/time following a <b>documented</b> sim crash.
          </div>
        </details>
        <details>
          <summary style={{ cursor: "pointer", fontWeight: 700, fontSize: 15, color: "#fff" }}>
            What proof is needed for the ASR?
          </summary>
          <div style={{ marginTop: 5, marginLeft: 9, color: "#d9f5ff", fontSize: 14.4 }}>
            A screenshot or log showing the crash and the restored position/time, or a brief explanation. The staff must be able to verify the legitimacy of the event.
          </div>
        </details>
      </div>

      <div style={{ color: "#88ccfc", fontSize: 15.2, margin: "7px 0 7px 3px" }}>
        <i>
          Have questions? Ask staff <b>before</b> using fast-forward after a crash.
        </i>
      </div>
    </div>
  );
}
