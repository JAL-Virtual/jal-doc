import React from "react";
import {
  MdInfo,
  MdCheckCircle,
  MdFlight,
  MdKeyboardArrowDown,
  MdLocationOn,
  MdPerson,
  MdBackup,
  MdLightbulb,
  MdQuestionAnswer,
} from "react-icons/md";

export default function Pirep() {
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
        <MdInfo size={32} color="#fff" />
        <div>
          <div style={{ fontWeight: 700, fontSize: 18, marginBottom: 4 }}>
            PIREP (Pilot Report) Submission Requirements
          </div>
          <div>
            Submitting a PIREP is how you log your flights and receive credit for your hours. Please read these requirements carefully to ensure your PIREP is accepted.
          </div>
        </div>
      </div>

      {/* Requirements */}
      <div
        style={{
          background: "linear-gradient(90deg, #23294a 60%, #275177 100%)",
          borderRadius: 12,
          padding: "24px 24px 15px 24px",
          marginBottom: 28,
          color: "#e6f7fa",
          border: "1px solid #356fa7",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 8 }}>
          <MdCheckCircle size={23} color="#7dfc97" />
          <span style={{ fontWeight: 700, fontSize: 18, color: "#bbffcc" }}>
            Requirements for Approval
          </span>
        </div>
        <div style={{ fontSize: 15, marginBottom: 14 }}>
          To be approved, a PIREP <b style={{ color: "#84faff" }}>must meet all of the following criteria</b>:
        </div>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 22 }}>
          {/* Aircraft & Livery */}
          <div style={{
            minWidth: 220,
            flex: "1 1 230px",
            marginBottom: 12
          }}>
            <div style={{ display: "flex", alignItems: "center", gap: 7, marginBottom: 2 }}>
              <MdFlight size={18} color="#addbff" />
              <span style={{ fontWeight: 700, color: "#b2e5ff" }}>Aircraft & Livery</span>
            </div>
            <ul style={{ margin: "5px 0 2px 0", paddingLeft: 17, fontSize: 14.5 }}>
              <li>
                <b>Aircraft Booking:</b> Book the <b style={{ color: "#7fd6ff" }}>exact type of aircraft</b> you plan to fly.
              </li>
              <li>
                <b>Livery:</b> Use an <b style={{ color: "#fef5aa" }}>appropriate livery</b> for the aircraft type.
              </li>
            </ul>
          </div>
          {/* Landing & Flight */}
          <div style={{
            minWidth: 220,
            flex: "1 1 230px",
            marginBottom: 12
          }}>
            <div style={{ display: "flex", alignItems: "center", gap: 7, marginBottom: 2 }}>
              <MdLocationOn size={18} color="#e6c8ff" />
              <span style={{ fontWeight: 700, color: "#debcff" }}>Landing & Flight</span>
            </div>
            <ul style={{ margin: "5px 0 2px 0", paddingLeft: 17, fontSize: 14.5 }}>
              <li>
                <b>Landing Rate:</b> Must be <b style={{ color: "#ff8b9c" }}>under -600 fpm</b> for approval.
              </li>
              <li>
                <b>Fuel Policy:</b>
                <ul style={{ margin: "2px 0 2px 0", paddingLeft: 16 }}>
                  <li>Start with a fuel load suitable for your planned route.</li>
                  <li><b>No fuel may be added after pushback or during flight.</b></li>
                </ul>
              </li>
              <li>
                <b>Flight Integrity:</b>
                <ul style={{ margin: "2px 0 2px 0", paddingLeft: 16 }}>
                  <li><b>No slew mode</b> use after pushback.</li>
                  <li><b>No time acceleration</b> at any time during the flight.</li>
                </ul>
              </li>
            </ul>
          </div>
          {/* Route & Navigation */}
          <div style={{
            minWidth: 220,
            flex: "1 1 230px",
            marginBottom: 12
          }}>
            <div style={{ display: "flex", alignItems: "center", gap: 7, marginBottom: 2 }}>
              <MdKeyboardArrowDown size={18} color="#8dfff1" />
              <span style={{ fontWeight: 700, color: "#97ffe0" }}>Route & Navigation</span>
            </div>
            <ul style={{ margin: "5px 0 2px 0", paddingLeft: 17, fontSize: 14.5 }}>
              <li>
                <b>Route Compliance:</b>
                <ul style={{ margin: "2px 0 2px 0", paddingLeft: 16 }}>
                  <li>Use an <b>appropriate, realistic route</b> for the flight.</li>
                  <li>Complete the flight in a reasonable time—avoid unnecessary detours or significant deviations.</li>
                </ul>
              </li>
              <li>
                <b>Departure & Arrival:</b>
                <ul style={{ margin: "2px 0 2px 0", paddingLeft: 16 }}>
                  <li><b>Depart from and arrive at your booked airports.</b></li>
                  <li style={{ color: "#b2e5ff" }}>
                    *In-flight diversions are allowed only for valid operational reasons (ex: weather, technical issue).*
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          {/* Airmanship & Validity */}
          <div style={{
            minWidth: 220,
            flex: "1 1 230px",
            marginBottom: 12
          }}>
            <div style={{ display: "flex", alignItems: "center", gap: 7, marginBottom: 2 }}>
              <MdPerson size={18} color="#ffd892" />
              <span style={{ fontWeight: 700, color: "#ffe7ae" }}>Airmanship & Validity</span>
            </div>
            <ul style={{ margin: "5px 0 2px 0", paddingLeft: 17, fontSize: 14.5 }}>
              <li>
                <b>Good Airmanship:</b>
                Staff may reject or invalidate PIREPs for <b style={{ color: "#ffd0a1" }}>unsafe flying or poor airmanship</b> at their discretion.
              </li>
            </ul>
          </div>
          {/* Backups & Manual */}
          <div style={{
            minWidth: 220,
            flex: "1 1 230px",
            marginBottom: 12
          }}>
            <div style={{ display: "flex", alignItems: "center", gap: 7, marginBottom: 2 }}>
              <MdBackup size={18} color="#ffc6ea" />
              <span style={{ fontWeight: 700, color: "#ffd3e8" }}>Backups & Manual PIREPs</span>
            </div>
            <ul style={{ margin: "5px 0 2px 0", paddingLeft: 17, fontSize: 14.5 }}>
              <li>
                <b>Simulator Crash:</b>
                If your simulator crashes after <b>75% or more</b> of the flight is completed, you may file a PIREP.
                <br />
                <b style={{ color: "#ffb4e7" }}>Attach a backup</b> (Volanta, etc.) as evidence.
              </li>
              <li>
                <b>Manual PIREPs:</b>
                <br />
                <b>You must include a link</b> to a backup tracked flight if filing manually.
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Pro Tips */}
      <div
        style={{
          background: "linear-gradient(90deg, #aabbef 0%, #fff8ba 100%)",
          borderRadius: "11px",
          padding: "19px 20px 13px 20px",
          marginBottom: 28,
          color: "#37343a",
          border: "1px solid #e7e3ae",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 9, marginBottom: 6 }}>
          <MdLightbulb size={22} color="#ffe95a" />
          <span style={{ fontWeight: 700, fontSize: 16, color: "#8e7900" }}>
            Pro Tips for PIREP Approval
          </span>
        </div>
        <ul style={{ margin: "8px 0 0 22px", fontSize: 15.2, fontWeight: 500 }}>
          <li>Always fly the booked route with the correct aircraft and livery.</li>
          <li>Avoid shortcuts, ensure good airmanship, and maintain proper navigation at all times.</li>
          <li>
            Use a backup tracker (like <b>Volanta</b> or <b>FsHub</b>) on every flight—you’ll need it for any crash, manual filing, or disputes.
          </li>
        </ul>
      </div>

      {/* FAQ */}
      <div
        style={{
          background: "linear-gradient(90deg, #294068 60%, #42a3e3 100%)",
          borderRadius: 11,
          padding: "22px 20px 10px 20px",
          marginBottom: 18,
          color: "#e2f7ff",
          border: "1px solid #6dc7f7",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 9 }}>
          <MdQuestionAnswer size={23} color="#b9e4ff" />
          <span style={{ fontWeight: 700, fontSize: 17, color: "#c2eaff" }}>
            Frequently Asked Questions
          </span>
        </div>

        {/* FAQ details */}
        <details style={{ marginBottom: 10 }}>
          <summary style={{ cursor: "pointer", fontWeight: 700, fontSize: 15, color: "#fff" }}>
            What happens if my sim crashes before 75%?
          </summary>
          <div style={{ marginTop: 5, marginLeft: 9, color: "#d9f5ff", fontSize: 14.4 }}>
            If less than 75% of the flight was completed, unfortunately your PIREP cannot be accepted for that leg.
          </div>
        </details>
        <details style={{ marginBottom: 10 }}>
          <summary style={{ cursor: "pointer", fontWeight: 700, fontSize: 15, color: "#fff" }}>
            Can I change my aircraft after booking?
          </summary>
          <div style={{ marginTop: 5, marginLeft: 9, color: "#d9f5ff", fontSize: 14.4 }}>
            No. You must fly the same aircraft type that you booked. See the "Substitutions" page for possible exceptions.
          </div>
        </details>
        <details>
          <summary style={{ cursor: "pointer", fontWeight: 700, fontSize: 15, color: "#fff" }}>
            Are manual PIREPs always accepted?
          </summary>
          <div style={{ marginTop: 5, marginLeft: 9, color: "#d9f5ff", fontSize: 14.4 }}>
            Manual PIREPs are subject to extra review and <b>must</b> include a valid backup track log. Without one, your manual PIREP will be rejected.
          </div>
        </details>
      </div>
      <div style={{ color: "#88ccfc", fontSize: 15.5, margin: "8px 0 8px 2px" }}>
        <i>
          Have more questions? Reach out to staff before your flight or PIREP submission!
        </i>
      </div>
    </div>
  );
}
