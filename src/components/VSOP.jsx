import React from "react";
import {
  MdInfo,
  MdListAlt,
  MdGavel,
  MdEmail,
  MdGroup,
  MdTimer,
  MdPauseCircleFilled,
  MdBlock,
  MdExitToApp,
  MdHelp,
  MdLightbulb,
  MdAccountCircle,
  MdAssignmentInd
} from "react-icons/md";

export default function VSOP() {
  return (
    <div>
      {/* Title Card */}
      <div
        style={{
          background: "linear-gradient(90deg, #f5cba7 60%, #ffe3aa 100%)",
          borderRadius: "15px",
          padding: "26px 22px 19px 22px",
          margin: "20px 0 34px 0",
          color: "#544127",
          border: "1px solid #ffe2ac",
          boxShadow: "0 2px 18px #0002",
          display: "flex",
          alignItems: "center",
          gap: 16,
        }}
      >
        <MdListAlt size={40} color="#d98f2e" />
        <span style={{ fontWeight: 800, fontSize: 28, letterSpacing: 0.3 }}>
          📕 Virtual Standard Operating Procedures (VSOP)
        </span>
      </div>

      {/* Membership Standards */}
      <div
        style={{
          background: "linear-gradient(90deg, #e0e9f8 60%, #cbeefc 100%)",
          borderRadius: "12px",
          padding: "19px 22px 14px 22px",
          marginBottom: 28,
          color: "#2b3d55",
          border: "1px solid #c0e3fa",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 5 }}>
          <MdAccountCircle size={25} color="#64b5f6" />
          <span style={{ fontWeight: 700, fontSize: 18, color: "#4088c6" }}>Membership Standards</span>
        </div>
        <ol style={{ paddingLeft: 22, fontSize: 15.6, margin: "13px 0 0 0" }}>
          <li><b>Age Requirement:</b> Members must be at least <span style={{ color: "#3877be" }}>16 years old</span> at the time of registration.</li>
          <li><b>Account Credentials:</b> Your login credentials are <span style={{ color: "#1976d2" }}>personal and confidential</span>. <span style={{ color: "#d7263d", fontWeight: 600 }}>Never share</span> your account or use another person's credentials.</li>
          <li><b>Full Name Policy:</b> Register with your <span style={{ color: "#3877be" }}>full legal name</span>. Incomplete, incorrect, or misleading information = <b style={{ color: "#f56262" }}>account termination</b>.</li>
          <li><b>Single Account:</b> Each member is allowed <span style={{ color: "#418197" }}>one account only</span>.</li>
          <li><b>Email Address:</b> Provide a <span style={{ color: "#f89a31" }}>valid email address</span> at registration. Update your email if it changes. Accounts with invalid emails may be <span style={{ color: "#d7263d", fontWeight: 600 }}>removed</span>.</li>
          <li><b>Password Assistance:</b> If you forget your password, contact the Human Resources Manager for a temporary reset. Change your password promptly after login through the Pilot Dispatch system.</li>
        </ol>
      </div>

      {/* Governing Documents Banner */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 15,
          background: "linear-gradient(90deg, #74d3ff 60%, #adbbfd 100%)",
          borderRadius: "12px",
          padding: "16px 18px 13px 18px",
          marginBottom: 25,
          color: "#334e60",
          border: "1px solid #b9d6fa",
        }}
      >
        <MdInfo size={25} color="#3ca1c8" />
        <div>
          <b>Governing Documents</b><br />
          JAL Virtual is governed by our Code of Conduct and official <b>Bylaws</b>. These are reviewed regularly, with all major updates announced via Discord.
        </div>
      </div>

      {/* Key Excerpts */}
      <div
        style={{
          background: "linear-gradient(90deg, #e4ebfa 60%, #cbeefc 100%)",
          borderRadius: 11,
          padding: "17px 21px 15px 21px",
          marginBottom: 23,
          color: "#325168",
          border: "1px solid #a6dbed",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 7 }}>
          <MdGavel size={23} color="#af8efc" />
          <span style={{ fontWeight: 700, fontSize: 16.5, color: "#6146a6" }}>Key Excerpts</span>
        </div>
        <ul style={{ margin: "8px 0 0 0", fontSize: 15.5 }}>
          <li><b>Code of Conduct:</b><br />
            <span style={{ display: "block", fontStyle: "italic", color: "#7e80b5", marginTop: 1 }}>
              “In the interest of fostering an open and welcoming environment, the administration team pledges to make participation in our project and our community a harassment-free experience for everyone…”
            </span>
          </li>
          <li style={{ marginTop: 10 }}><b>Reporting Violations:</b><br />
            <span style={{ display: "block", fontStyle: "italic", color: "#7e80b5", marginTop: 1 }}>
              “Instances of abusive, harassing, or otherwise unacceptable behavior may be reported by contacting the administration team at <span style={{ color: "#f98c6e" }}>[Insert Email]</span> or via Discord DM.”
            </span>
          </li>
          <li style={{ marginTop: 10 }}><b>Bylaws:</b><br />
            <span style={{ display: "block", fontStyle: "italic", color: "#7e80b5", marginTop: 1 }}>
              “Membership is open to any adult or minor above the age of 18 by either invitation or by application. Membership is fully voluntary and at the sole discretion of the JAL Virtual administration team. All members must follow rules and guidelines posted on the JALV website and aviation networks such as VATSIM, IVAO, and PilotEdge.”
            </span>
          </li>
        </ul>
      </div>

      {/* Discord Community */}
      <div
        style={{
          background: "linear-gradient(90deg, #f7eac9 60%, #e3c3f2 100%)",
          borderRadius: 10,
          padding: "16px 21px 12px 21px",
          marginBottom: 23,
          color: "#775a5c",
          border: "1px solid #efc5ff",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 9, marginBottom: 5 }}>
          <MdGroup size={21} color="#ae61f1" />
          <span style={{ fontWeight: 700, color: "#ae61f1" }}>Discord Community</span>
        </div>
        <ul style={{ margin: "7px 0 0 0", fontSize: 15.2 }}>
          <li>The <b>Discord server</b> is the primary hub for events, news, and community engagement.</li>
          <li>Membership is <span style={{ color: "#965f2d", fontWeight: 700 }}>strongly encouraged</span> (but not required).</li>
          <li>Find the invite link in the smartCars 3 App.</li>
        </ul>
      </div>

      {/* Transfer Hours */}
      <div
        style={{
          background: "linear-gradient(90deg, #fffde1 60%, #b3e4f9 100%)",
          borderRadius: 10,
          padding: "16px 21px 12px 21px",
          marginBottom: 23,
          color: "#444",
          border: "1px solid #d1e9fc",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 9, marginBottom: 5 }}>
          <MdTimer size={21} color="#51d3a4" />
          <span style={{ fontWeight: 700, color: "#32c48d" }}>Transfer Hours</span>
        </div>
        <ul style={{ margin: "7px 0 0 0", fontSize: 15.2 }}>
          <li>JAL Virtual <b>accepts transfer hours</b> from previous virtual airline experience—<span style={{ color: "#2b99b8" }}>up to 15 hours</span> maximum.</li>
          <li>You must provide a <b>valid verification link</b> when applying.</li>
        </ul>
      </div>

      {/* Leave of Absence */}
      <div
        style={{
          background: "linear-gradient(90deg, #d8e6f8 60%, #ffe6e6 100%)",
          borderRadius: 10,
          padding: "16px 21px 12px 21px",
          marginBottom: 23,
          color: "#575759",
          border: "1px solid #edd7d7",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 9, marginBottom: 5 }}>
          <MdPauseCircleFilled size={21} color="#ffbd71" />
          <span style={{ fontWeight: 700, color: "#ed7d2b" }}>Leave of Absence (LOA)</span>
        </div>
        <ul style={{ margin: "7px 0 0 0", fontSize: 15.2 }}>
          <li>If you need to be inactive for an extended period, file a <b>Leave of Absence (LOA)</b> by contacting Human Resources.</li>
          <li>An LOA “freezes” your account and prevents removal for inactivity.</li>
          <li>To return, notify Human Resources to reactivate your account.</li>
        </ul>
      </div>

      {/* Suspension */}
      <div
        style={{
          background: "linear-gradient(90deg, #ffe3e3 60%, #ffdbb7 100%)",
          borderRadius: 10,
          padding: "16px 21px 12px 21px",
          marginBottom: 23,
          color: "#b2312c",
          border: "1px solid #ffd1ae",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 9, marginBottom: 5 }}>
          <MdBlock size={21} color="#ff5252" />
          <span style={{ fontWeight: 700, color: "#e4393c" }}>Suspension</span>
        </div>
        <ul style={{ margin: "7px 0 0 0", fontSize: 15.2 }}>
          <li>Pilots who violate policies may be <b>suspended</b> for a set period.</li>
          <li>While suspended, you <b>cannot access JAL Virtual systems or services</b>.</li>
          <li><b>Bypassing restrictions</b> during suspension may result in permanent removal.</li>
        </ul>
      </div>

      {/* Resignation */}
      <div
        style={{
          background: "linear-gradient(90deg, #f5f7fa 60%, #f0c4c4 100%)",
          borderRadius: 10,
          padding: "16px 21px 12px 21px",
          marginBottom: 23,
          color: "#63313a",
          border: "1px solid #e9bdbd",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 9, marginBottom: 5 }}>
          <MdExitToApp size={21} color="#b84b55" />
          <span style={{ fontWeight: 700, color: "#b84b55" }}>Resignation</span>
        </div>
        <ul style={{ margin: "7px 0 0 0", fontSize: 15.2 }}>
          <li>To resign, <b>notify the Human Resources Manager</b>.</li>
          <li>If you leave in good standing, your account stays in our database for possible future return.</li>
          <li>To return, simply request reactivation from Human Resources.</li>
        </ul>
      </div>

      {/* Questions/Clarifications */}
      <div
        style={{
          background: "linear-gradient(90deg, #e5e7fb 60%, #d1e7fa 100%)",
          borderRadius: 10,
          padding: "16px 21px 12px 21px",
          marginBottom: 21,
          color: "#32496e",
          border: "1px solid #b7d3ef",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 5 }}>
          <MdHelp size={22} color="#6f7ec6" />
          <span style={{ fontWeight: 700, color: "#6f7ec6" }}>Questions or Clarifications?</span>
        </div>
        <span style={{ fontSize: 15.2 }}>
          If you have any questions about these procedures, or need clarification, please contact the JAL Virtual administration team via Discord or email.
        </span>
      </div>

      {/* Tip Banner */}
      <div
        style={{
          background: "linear-gradient(90deg, #fff6b8 60%, #f8f1a5 100%)",
          borderRadius: 10,
          padding: "13px 18px 10px 18px",
          marginBottom: 7,
          color: "#70660b",
          border: "1px solid #f5e8ae",
        }}
      >
        <MdLightbulb size={18} color="#ffe33d" style={{ marginRight: 6, verticalAlign: "middle" }} />
        <b>Stay informed!</b> Always review the latest VSOP, Code of Conduct, and event announcements on Discord to keep your membership in good standing.
      </div>
    </div>
  );
}
