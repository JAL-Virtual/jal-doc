import React from "react";
import { MdInfo, MdTimer, MdRepeat, MdTimeline, MdDeleteSweep } from "react-icons/md";

export default function ActivityRequirements() {
  return (
    <div>
      {/* Info/Mission Banner */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 16,
          background: "linear-gradient(90deg, #bfe4ff 60%, #e5e7fa 100%)",
          borderRadius: "14px",
          padding: "17px 18px 13px 18px",
          margin: "18px 0 30px 0",
          color: "#28406c",
          border: "1px solid #c5e1f7",
          boxShadow: "0 2px 18px #0001",
        }}
      >
        <MdInfo size={28} color="#5693c4" />
        <div>
          <span style={{ fontWeight: 700, fontSize: 17.5 }}>
            <span style={{ color: "#5f44cc" }}>Activity Requirements</span>
          </span>
          <br />
          <span style={{ fontSize: 15.3 }}>
            To maintain an <b>active, realistic roster</b>, all pilots must meet these minimum activity standards.
          </span>
        </div>
      </div>

      {/* New Pilot Onboarding */}
      <div
        style={{
          background: "linear-gradient(90deg, #d6e8fc 60%, #fbeed7 100%)",
          borderRadius: "13px",
          padding: "18px 19px 15px 19px",
          marginBottom: 25,
          color: "#3a464f",
          border: "1px solid #f8e2ae",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 7 }}>
          <MdTimer size={22} color="#1ebdcf" />
          <span style={{ fontWeight: 700, color: "#2c9197", fontSize: 17 }}>🆕 New Pilot Onboarding</span>
        </div>
        <ul style={{ margin: "0 0 0 18px", fontSize: 15.2 }}>
          <li>
            All new pilots must file <b>at least one PIREP (flight report) within 14 days</b> (2 weeks) of signup.
          </li>
          <li>
            If <b>no PIREP is filed within 14 days</b>, your account will be <b style={{ color: "#d14646" }}>removed from the website</b>.
          </li>
        </ul>
      </div>

      {/* Ongoing Activity */}
      <div
        style={{
          background: "linear-gradient(90deg, #e7edff 60%, #f1ebfa 100%)",
          borderRadius: "13px",
          padding: "18px 19px 15px 19px",
          marginBottom: 25,
          color: "#363456",
          border: "1px solid #b6bffa",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 6 }}>
          <MdRepeat size={22} color="#7b55f7" />
          <span style={{ fontWeight: 700, color: "#6e48b4", fontSize: 17 }}>🔄 Ongoing Activity (After First Flight)</span>
        </div>
        <div style={{ overflowX: "auto", margin: "12px 0" }}>
          <table style={{
            minWidth: 380,
            width: "100%",
            borderRadius: 9,
            background: "#fffdfaee",
            border: "1px solid #d6d0f6",
            fontSize: 15.1,
            marginBottom: 7,
            boxShadow: "0 1px 12px #d8ccfb22"
          }}>
            <thead>
              <tr style={{ background: "linear-gradient(90deg, #ede8fc 40%, #e1dbfa 100%)", color: "#563493" }}>
                <th style={{ padding: 8, fontWeight: 700 }}>Period</th>
                <th style={{ padding: 8, fontWeight: 700 }}>Requirement</th>
                <th style={{ padding: 8, fontWeight: 700 }}>Status if Inactive</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={{ padding: 8 }}>First 14 days</td>
                <td style={{ padding: 8 }}>File at least 1 PIREP</td>
                <td style={{ padding: 8, color: "#d14646", fontWeight: 600 }}>Account deleted if not met</td>
              </tr>
              <tr style={{ background: "#f4f1fc" }}>
                <td style={{ padding: 8 }}>Every 30 days</td>
                <td style={{ padding: 8 }}>File at least 1 PIREP every rolling 30 days</td>
                <td style={{ padding: 8, color: "#b89e33", fontWeight: 600 }}>
                  Placed in <span style={{ fontStyle: "italic" }}>Retired</span> status
                </td>
              </tr>
              <tr>
                <td style={{ padding: 8 }}>60+ days</td>
                <td style={{ padding: 8 }}>No flight for 60 days</td>
                <td style={{ padding: 8, color: "#910f0f", fontWeight: 800 }}>Account permanently removed</td>
              </tr>
            </tbody>
          </table>
        </div>
        <ul style={{ margin: "0 0 0 18px", fontSize: 15.2 }}>
          <li>
            If your account is placed in <b>Retired</b> status, you can <u>reactivate</u> it simply by filing a new PIREP.
          </li>
          <li>
            If you are <b>inactive for 60 days or more</b> with no flights, your account will be <b style={{ color: "#d14646" }}>permanently deleted</b>.
          </li>
        </ul>
      </div>

      {/* Timeline */}
      <div
        style={{
          background: "linear-gradient(90deg, #eaf5ff 60%, #f2e2fc 100%)",
          borderRadius: "13px",
          padding: "18px 19px 15px 19px",
          marginBottom: 23,
          color: "#544a5f",
          border: "1px solid #e6bdfa",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 9, marginBottom: 5 }}>
          <MdTimeline size={22} color="#835ae6" />
          <span style={{ fontWeight: 700, color: "#835ae6", fontSize: 17 }}>📅 Activity Timeline</span>
        </div>
        <div
          style={{
            borderRadius: 8,
            background: "#f8f3fe",
            border: "1.5px solid #e5e1fa",
            padding: "15px 16px 11px 14px",
            fontFamily: "monospace",
            fontSize: 15.1,
            color: "#6a38b5",
            marginBottom: 5,
            whiteSpace: "pre-line",
          }}
        >
{`timeline
  title Account Activity and Status Changes
  Signup : Account Created
  14 Days : PIREP required, or account removed
  30 Days : Ongoing activity check; if no flight, status set to Retired
  60 Days : No activity, account permanently removed`}
        </div>
        <div style={{ fontSize: 13.5, color: "#836ad6", fontWeight: 600, marginTop: 2 }}>
          💡 <span style={{ fontWeight: 700 }}>Tip:</span> Copy this Mermaid code into your documentation site for a live timeline!
        </div>
      </div>

      {/* Footer / Removal Note */}
      <div
        style={{
          background: "linear-gradient(90deg, #ffd4d2 60%, #ffeeb5 100%)",
          borderRadius: "11px",
          padding: "13px 19px 11px 17px",
          marginBottom: 10,
          color: "#a13126",
          border: "1px solid #ffe3c6",
          fontWeight: 600,
          fontSize: 15,
          display: "flex",
          alignItems: "center",
          gap: 8
        }}
      >
        <MdDeleteSweep size={20} color="#e86d61" />
        Accounts inactive for 60+ days are removed to ensure roster quality.
      </div>
    </div>
  );
}
