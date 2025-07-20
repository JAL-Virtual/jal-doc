import React from "react";
import { MdBackup, MdVerifiedUser, MdInfo } from "react-icons/md";

export default function ManualPirepsClaims() {
  return (
    <div>
      {/* Header Banner */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 15,
          background: "linear-gradient(90deg, #7d74e0 60%, #5fd8e5 100%)",
          borderRadius: "12px",
          padding: "18px 18px 14px 18px",
          margin: "18px 0 28px 0",
          color: "#fff",
          border: "1px solid #7dd8f2",
          boxShadow: "0 2px 18px #0002",
        }}
      >
        <MdBackup size={30} color="#fff" />
        <div>
          <div style={{ fontWeight: 700, fontSize: 19, marginBottom: 3 }}>
            Manual PIREPs (Claims)
          </div>
        </div>
      </div>

      {/* Claims Requirements */}
      <div
        style={{
          background: "linear-gradient(90deg, #222b46 60%, #2997ae 100%)",
          borderRadius: 10,
          padding: "20px 22px 14px 22px",
          marginBottom: 26,
          color: "#e5f6fd",
          border: "1px solid #38bbde",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 5 }}>
          <MdVerifiedUser size={22} color="#78f4c8" />
          <span style={{ fontWeight: 700, fontSize: 16.5, color: "#89ffd5" }}>
            Claims are only accepted when supported by <span style={{ color: "#fff" }}>verifiable proof</span>
          </span>
        </div>
        <div style={{ fontSize: 15.5, margin: "9px 0 0 3px" }}>
          <ul style={{ margin: 0, paddingLeft: 18 }}>
            <li>
              For example, screenshots from approved tracking tools showing relevant flight data.
            </li>
            <li>
              <b>Accepted claims will receive the <span style={{ color: "#d0ff87" }}>average points for the specific route</span>.</b>
            </li>
          </ul>
        </div>
      </div>

      {/* Note */}
      <div
        style={{
          background: "linear-gradient(90deg, #314d6b 60%, #ebeca5 100%)",
          borderRadius: 10,
          padding: "14px 18px 11px 18px",
          marginBottom: 16,
          color: "#333",
          border: "1px solid #e7e9b6",
          fontSize: 15.4,
        }}
      >
        <MdInfo size={18} color="#e4db62" style={{ marginRight: 6, verticalAlign: "middle" }} />
        <b style={{ color: "#fcb900" }}>Note:</b>{" "}
        <span style={{ color: "#3cff01ff", fontWeight: 500 }}>
          Links to external trackers or unverifiable sources will
        </span>{" "}
        <span style={{ color: "#e4605f", fontWeight: 700 }}>not</span>{" "}
        <span style={{ color: "#51ff00ff", fontWeight: 500 }}>be accepted.</span>
      </div>
    </div>
  );
}
