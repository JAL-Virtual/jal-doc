import React from "react";
import {
  MdWarning,
  MdBlock,
  MdSyncAlt,
  MdListAlt,
  MdCheckCircle,
  MdInfo,
} from "react-icons/md";
import { FaPlane } from "react-icons/fa";

export default function Substitutions() {
  return (
    <div>
      {/* Caution Banner */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 15,
          background: "linear-gradient(90deg, #6e4bd3 60%, #b261ba 100%)",
          borderRadius: "10px",
          padding: "18px 18px 14px 18px",
          margin: "18px 0 30px 0",
          color: "#fff",
          border: "1px solid #8b71e0",
          boxShadow: "0 2px 18px #0003",
        }}
      >
        <MdWarning size={32} color="#ffe45e" />
        <div>
          <div style={{ fontWeight: 700, fontSize: 18, marginBottom: 3 }}>
            Aircraft substitutions are strictly regulated!
          </div>
          <div>
            Do <b style={{ color: "#ffe45e" }}>not</b> substitute aircraft without management approval.
          </div>
        </div>
      </div>

      {/* General Policy */}
      <div
        style={{
          background: "linear-gradient(90deg, #2b2247 50%, #3e246b 100%)",
          borderRadius: 10,
          padding: "20px 20px 12px 20px",
          marginBottom: 25,
          color: "#ffd0e2",
          border: "1px solid #564fa0",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 6 }}>
          <MdBlock size={23} color="#ff4e63" />
          <span style={{ fontWeight: 700, color: "#ff4e63", fontSize: 17 }}>
            General Policy
          </span>
        </div>
        <ul style={{ margin: "12px 0 0 0", padding: 0, listStyle: "none", fontSize: "1.07em" }}>
          <li style={{ margin: "0 0 10px 0" }}>
            <b style={{ color: "#ffb2c5" }}>No substitutions permitted</b> without prior management approval.
          </li>
          <li style={{ margin: "0 0 10px 0" }}>
            All fleet types are available—<span style={{ color: "#fff" }}>substitutions should rarely be needed</span>.
          </li>
          <li>
            Exceptions may be granted for simulator limitations, but <b style={{ color: "#ffce82" }}>advance approval is required</b>.
          </li>
        </ul>
      </div>

      {/* Substitution Categories */}
      <div
        style={{
          background: "linear-gradient(90deg, #252e53 60%, #374a83 100%)",
          borderRadius: 10,
          padding: "18px 18px 15px 18px",
          marginBottom: 25,
          color: "#e3e6ff",
          border: "1px solid #3b4fa2",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 7 }}>
          <FaPlane size={21} color="#8de7fc" />
          <span style={{ fontWeight: 700, fontSize: 17, color: "#aee5fa" }}>
            Substitution Categories
          </span>
        </div>
        <div style={{ margin: "6px 0 11px 0", color: "#cbfff7" }}>
          Aircraft substitutions are <b>only allowed within the JAL GROUP itinerary and within the same aircraft category</b>:
        </div>
        <div style={{ overflowX: "auto" }}>
          <table style={{
            width: "100%",
            minWidth: 470,
            borderCollapse: "collapse",
            fontSize: 15,
            background: "rgba(40,45,70,0.8)",
            color: "#fff",
            borderRadius: 8,
            overflow: "hidden"
          }}>
            <thead>
              <tr style={{ background: "#193259" }}>
                <th style={{
                  padding: "8px 16px",
                  textAlign: "center",
                  fontWeight: 700,
                  fontSize: 15,
                  color: "#75e3ff",
                  letterSpacing: 0.2,
                  borderRight: "1.5px solid #234",
                  whiteSpace: "nowrap"
                }}>Category</th>
                <th style={{
                  padding: "8px 16px",
                  textAlign: "left",
                  fontWeight: 700,
                  fontSize: 15,
                  color: "#e6e2fc",
                  letterSpacing: 0.2
                }}>Permitted Aircraft</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={{
                  padding: "7px 8px",
                  textAlign: "center",
                  fontWeight: 700,
                  color: "#aef6c7",
                  borderRight: "1.5px solid #234"
                }}>Light</td>
                <td style={{ padding: "7px 8px" }}>DH8D, AT76, EMB190</td>
              </tr>
              <tr>
                <td style={{
                  padding: "7px 8px",
                  textAlign: "center",
                  fontWeight: 700,
                  color: "#d1ebfa",
                  borderRight: "1.5px solid #234"
                }}>Medium</td>
                <td style={{ padding: "7px 8px" }}>B738, A320, A20N</td>
              </tr>
              <tr>
                <td style={{
                  padding: "7px 8px",
                  textAlign: "center",
                  fontWeight: 700,
                  color: "#faeabd",
                  borderRight: "1.5px solid #234"
                }}>Heavy</td>
                <td style={{ padding: "7px 8px" }}>B763, B77W, B788, B789, A359, A35K</td>
              </tr>
              <tr>
                <td style={{
                  padding: "7px 8px",
                  textAlign: "center",
                  fontWeight: 700,
                  color: "#ffb6e6",
                  borderRight: "1.5px solid #234"
                }}>Classic</td>
                <td style={{ padding: "7px 8px" }}>MD-11, B722, DC-3, B772, B742-4, DC-6, BN2P</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Approval Process */}
      <div
        style={{
          background: "linear-gradient(90deg, #2d2552 60%, #393476 100%)",
          borderRadius: 10,
          padding: "18px 18px 16px 18px",
          marginBottom: 25,
          color: "#fff9f0",
          border: "1px solid #564fa0",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 7 }}>
          <MdListAlt size={21} color="#f9edbb" />
          <span style={{ fontWeight: 700, fontSize: 17, color: "#fff7ba" }}>
            Substitution Approval Process
          </span>
        </div>
        <ol style={{ paddingLeft: 24, margin: 0, fontSize: 15.5 }}>
          <li><b>Contact management</b> in advance with your substitution request.</li>
          <li>Clearly state your <b>reason</b> (e.g., simulator limitation, technical problem).</li>
          <li>Wait for <b>written approval</b> before flying.</li>
          <li>If a substitution is approved, you <b>must</b> include a comment in your PIREP, explaining the reason.</li>
        </ol>
      </div>

      {/* Example Scenarios */}
      <div
        style={{
          background: "linear-gradient(90deg, #214c3e 60%, #33844e 100%)",
          borderRadius: 10,
          padding: "18px 18px 14px 18px",
          marginBottom: 25,
          color: "#e8fff2",
          border: "1px solid #42b26b",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 7 }}>
          <MdCheckCircle size={21} color="#8affb8" />
          <span style={{ fontWeight: 700, fontSize: 17, color: "#99ffd1" }}>
            Example Scenarios
          </span>
        </div>
        <div>
          <span style={{ fontWeight: 600, color: "#bbffd5" }}>Allowed:</span>
          <ul style={{ margin: "6px 0 10px 18px", padding: 0 }}>
            <li>Swapping B738 for A320 due to a temporary simulator issue <b>(with management approval)</b>.</li>
            <li>Using EMB190 instead of DH8D on the same booked route, <b>with approval</b>.</li>
          </ul>
        </div>
        <div>
          <span style={{ fontWeight: 600, color: "#ffbaba" }}>Not Allowed:</span>
          <ul style={{ margin: "6px 0 0 18px", padding: 0 }}>
            <li>Flying a Heavy (B789) when booked for a Medium (A320) <b>without approval</b>.</li>
            <li>Switching categories (e.g., Classic to Medium) <b>without permission</b>.</li>
          </ul>
        </div>
      </div>

      {/* Reminder */}
      <div
        style={{
          background: "linear-gradient(90deg, #265183 60%, #41a1c2 100%)",
          borderRadius: 10,
          padding: "15px 18px 13px 18px",
          marginBottom: 12,
          color: "#e3f8ff",
          border: "1px solid #48b5e0",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <MdInfo size={21} color="#c6edfc" />
          <span>
            If you are <b style={{ color: "#f9e085" }}>unsure</b> about the substitution rules or need an exception,
            <b style={{ color: "#fff" }}> always check with management first </b>before making any changes.
          </span>
        </div>
      </div>
    </div>
  );
}
