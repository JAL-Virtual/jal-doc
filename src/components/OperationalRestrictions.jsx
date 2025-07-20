import React from "react";
import { MdWarning, MdOutlinePauseCircle, MdFlight, MdOutlineFactCheck, MdLocationOn } from "react-icons/md";

export default function OperationalRestrictions() {
  return (
    <div>
      <div style={{
        background: "linear-gradient(90deg, #232142 60%, #312051 100%)",
        borderRadius: "14px",
        padding: "28px 20px 18px 20px",
        margin: "24px 0 32px 0",
        boxShadow: "0 4px 32px #0003",
        color: "#fff",
        border: "1px solid #413b60",
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: 10 }}>
          <MdWarning size={28} color="#FFCE49" />
          <span style={{ fontSize: 28, fontWeight: 700, letterSpacing: 1.1, color: "#ffebc2" }}>Operational Restrictions</span>
        </div>
        <ul style={{ marginLeft: 0, paddingLeft: 0, listStyle: "none", fontSize: "1.07em" }}>
          <li style={{ margin: "16px 0", display: "flex", alignItems: "center" }}>
            <MdOutlinePauseCircle size={21} color="#e37bdf" style={{ marginRight: 10 }} />
            <b style={{ color: "#fff" }}>Excessive pausing</b> is <b style={{ color: "#ff798e" }}>prohibited</b> during any phase of flight.
          </li>
          <li style={{ margin: "16px 0", display: "flex", alignItems: "center" }}>
            <MdOutlinePauseCircle size={21} color="#bdb4fa" style={{ marginRight: 10 }} />
            For overnight long-hauls, pilots may use the <i>“Pause at Top of Descent (TOD)”</i> function.
          </li>
          <li style={{ margin: "16px 0", display: "flex", alignItems: "center" }}>
            <MdFlight size={21} color="#3fd29c" style={{ marginRight: 10 }} />
            Aircraft must <b style={{ color: "#f5be40" }}>never exceed certified Maximum Takeoff Weight (MTOW)</b>.
          </li>
          <li style={{ margin: "16px 0", display: "flex", alignItems: "center" }}>
            <MdOutlineFactCheck size={21} color="#3ec4ef" style={{ marginRight: 10 }} />
            <b>Real-world weather usage is required.</b>
          </li>
          <li style={{ margin: "16px 0", display: "flex", alignItems: "center" }}>
            <MdLocationOn size={21} color="#ffa37b" style={{ marginRight: 10 }} />
            Pilots must maintain terrain and
            <span style={{ fontWeight: 700, color: "rgba(102,255,230,1)", marginLeft: 4 }}>
              minimum safe altitude awareness
            </span>
            , especially in
            <span style={{
              background: "linear-gradient(90deg, #76e7fa, #ff8b96)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              fontWeight: 500,
              marginLeft: 4
            }}>
              mountainous or remote regions
            </span>
            .
          </li>
        </ul>
      </div>

      <div style={{
        background: "linear-gradient(90deg, #231a30 60%, #222439 100%)",
        borderRadius: "11px",
        padding: "19px 16px 13px 16px",
        margin: "16px 0 24px 0",
        boxShadow: "0 2px 12px #0002",
        color: "#e0e5f7",
        border: "1px solid #35265d"
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: 9, marginBottom: 5 }}>
          <span style={{
            background: "linear-gradient(90deg, #5c4fff 50%, #a087fa 100%)",
            color: "#fff",
            padding: "2.5px 14px",
            fontWeight: 700,
            borderRadius: 6,
            fontSize: 13,
            marginRight: 9
          }}>
            TAXI SPEED LIMITS
          </span>
          <MdFlight size={19} color="#beedfc" />
        </div>
        <ul style={{ margin: "7px 0 0 0", padding: 0, listStyle: "none", fontSize: "1em" }}>
          <li>
            <b style={{ color: "#c6ffb2" }}>Maximum straight-line taxi speed:</b> <span style={{ color: "#fff" }}>30 knots</span>
          </li>
          <li>
            <b style={{ color: "#ffa37b" }}>Maximum 90° turn speed:</b> <span style={{ color: "#fff" }}>10 knots</span>
          </li>
          <li style={{ marginTop: 8, color: "#ffbacf" }}>
            <i>Non-compliance will result in a <b style={{ color: "#ff798e" }}>50-point deduction</b>.</i>
          </li>
        </ul>
      </div>
    </div>
  );
}
