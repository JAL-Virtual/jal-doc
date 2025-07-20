import React from "react";
import {
  MdInfo,
  MdCheckCircle,
  MdCancel,
  MdAirplanemodeActive,
  MdTraffic,
  MdThumbUp,
  MdQuestionAnswer,
  MdLightbulb
} from "react-icons/md";

export default function LandingRates() {
  return (
    <div>
      {/* Policy Banner */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 15,
          background: "linear-gradient(90deg, #37b2f2 60%, #79dfec 100%)",
          borderRadius: "11px",
          padding: "18px 18px 14px 18px",
          margin: "18px 0 32px 0",
          color: "#fff",
          border: "1px solid #7ed7f2",
          boxShadow: "0 2px 18px #0001",
        }}
      >
        <MdInfo size={30} color="#fff" />
        <div>
          <div style={{ fontWeight: 700, fontSize: 18, marginBottom: 3 }}>
            Landing rates are not a competition!
          </div>
          <div>
            Smooth landings feel great, but chasing unrealistically low vertical speeds can be unsafe and is <b style={{ color: "#fff9aa" }}>not required</b> for approval.
          </div>
        </div>
      </div>

      {/* Approval Thresholds */}
      <div
        style={{
          background: "linear-gradient(90deg, #2b354f 60%, #497dc1 100%)",
          borderRadius: 11,
          padding: "18px 20px 15px 20px",
          marginBottom: 26,
          color: "#e0eaff",
          border: "1px solid #355694",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 8 }}>
          <MdTraffic size={23} color="#fff385" />
          <span style={{ fontWeight: 700, fontSize: 17, color: "#ffe386" }}>
            Approval Thresholds
          </span>
        </div>
        <ul style={{ margin: "8px 0 0 0", padding: 0, listStyle: "none", fontSize: 15.5 }}>
          <li style={{ marginBottom: 5 }}>
            <span style={{ fontWeight: 700, color: "#b0ffb0" }}>Landings under -600 fpm:</span>
            <span style={{ marginLeft: 7 }}>
              <MdCheckCircle size={18} color="#82ff8e" style={{ verticalAlign: "middle", marginRight: 2 }} />
              <b style={{ color: "#72ffad" }}>Accepted</b> (counts for your PIREP and hours)
            </span>
          </li>
          <li style={{ marginBottom: 6 }}>
            <span style={{ fontWeight: 700, color: "#ffbbbb" }}>Landings over -600 fpm:</span>
            <span style={{ marginLeft: 7 }}>
              <MdCancel size={18} color="#ff5c7b" style={{ verticalAlign: "middle", marginRight: 2 }} />
              <b style={{ color: "#ff5c7b" }}>REJECTED</b> (PIREP will not be approved)
            </span>
          </li>
        </ul>
        <div
          style={{
            background: "rgba(45,64,140,0.28)",
            margin: "15px 0 0 0",
            padding: "10px 14px",
            borderRadius: 8,
            border: "1px solid #334",
            color: "#ffe",
            fontSize: 15.4
          }}
        >
          <b style={{ color: "#fffde7" }}>Target Range:</b> Aim for a consistent landing rate between <span style={{ color: "#72ffad" }}>-150</span> and <span style={{ color: "#72ffad" }}>-300 fpm</span> for realism, safety, and passenger comfort.
        </div>
      </div>

      {/* Best Practices */}
      <div
        style={{
          background: "linear-gradient(90deg, #394260 60%, #3ae6be 100%)",
          borderRadius: 11,
          padding: "20px 20px 14px 20px",
          marginBottom: 24,
          color: "#f3fff7",
          border: "1px solid #27b6a0",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 9, marginBottom: 6 }}>
          <MdThumbUp size={22} color="#fff968" />
          <span style={{ fontWeight: 700, fontSize: 16, color: "#fffec9" }}>
            Best Practices for Landing Rates
          </span>
        </div>
        <ul style={{ margin: "10px 0 0 20px", fontSize: 15.3 }}>
          <li>
            <b>Fly a stabilized approach:</b> Maintain the correct speed, descent rate, and configuration all the way to touchdown.
          </li>
          <li>
            <b>Do not “float” or force a greaser:</b> Floating or dragging the approach for a soft touchdown increases runway overrun risk.
          </li>
          <li>
            <b>Land within the touchdown zone:</b> This is safer than aiming for a softer touchdown further down the runway.
          </li>
          <li>
            <b>Trust your training and SOPs:</b> Fly the aircraft by the book; a “good” landing is a safe, on-speed, on-zone landing.
          </li>
        </ul>
      </div>

      {/* FAQ */}
      <div
        style={{
          background: "linear-gradient(90deg, #27395b 60%, #27a0de 100%)",
          borderRadius: 11,
          padding: "20px 20px 10px 20px",
          marginBottom: 18,
          color: "#e7f8ff",
          border: "1px solid #377fb6",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 7 }}>
          <MdQuestionAnswer size={22} color="#b0eaff" />
          <span style={{ fontWeight: 700, fontSize: 17, color: "#c6f1fa" }}>
            Frequently Asked Questions
          </span>
        </div>
        <details style={{ marginBottom: 10 }}>
          <summary style={{ cursor: "pointer", fontWeight: 700, fontSize: 15, color: "#fff" }}>
            Why not reward the lowest landing rates?
          </summary>
          <div style={{ marginTop: 5, marginLeft: 9, color: "#d8f7ff", fontSize: 14.4 }}>
            Real-world airlines prioritize safety and reliability over “greasers.” Consistently low vertical speeds often come at the expense of safe technique.
          </div>
        </details>
        <details style={{ marginBottom: 10 }}>
          <summary style={{ cursor: "pointer", fontWeight: 700, fontSize: 15, color: "#fff" }}>
            What if I have a bounce or hard landing?
          </summary>
          <div style={{ marginTop: 5, marginLeft: 9, color: "#d8f7ff", fontSize: 14.4 }}>
            Landings over -600 fpm will result in PIREP rejection. Focus on stabilized approaches to avoid bounces or firm touchdowns.
          </div>
        </details>
        <details>
          <summary style={{ cursor: "pointer", fontWeight: 700, fontSize: 15, color: "#fff" }}>
            Do weather or crosswinds affect my score?
          </summary>
          <div style={{ marginTop: 5, marginLeft: 9, color: "#d8f7ff", fontSize: 14.4 }}>
            Difficult conditions are considered by staff, but the same vertical speed limits apply. Always brief and fly the safest approach possible.
          </div>
        </details>
      </div>

      {/* Quick Summary */}
      <div
        style={{
          background: "linear-gradient(90deg, #a8ffe5 0%, #fffad0 100%)",
          borderRadius: "10px",
          padding: "14px 20px 11px 20px",
          marginBottom: 10,
          color: "#32323d",
          border: "1px solid #e9e7b6",
          fontSize: 15.3,
          fontWeight: 500,
        }}
      >
        <MdLightbulb size={19} color="#ffe33d" style={{ marginRight: 6, verticalAlign: "middle" }} />
        <b style={{ color: "#9a9400" }}>Quick Summary:</b>
        <ul style={{ margin: "7px 0 0 22px" }}>
          <li>Don’t chase the lowest possible number.</li>
          <li>Fly safely and consistently.</li>
          <li>
            Keep it between <b style={{ color: "#5df1a7" }}>-150</b> and <b style={{ color: "#5df1a7" }}>-300 fpm</b> if possible.
          </li>
        </ul>
      </div>
    </div>
  );
}
