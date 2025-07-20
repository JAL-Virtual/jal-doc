import React from "react";
import {
  MdInfo,
  MdHandshake,
  MdStar,
  MdChat,
  MdShield,
  MdAssignment,
  MdPin,
  MdLightbulb
} from "react-icons/md";

export default function CodeOfConduct() {
  return (
    <div>
      {/* Mission Banner */}
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
            <span style={{ color: "#5f44cc" }}>Our mission:</span>
          </span>
          <br />
          <span style={{ fontSize: 15.3 }}>
            Foster a welcoming, respectful, and harassment-free environment for all JAL Virtual members, regardless of background, experience, or identity.
          </span>
        </div>
      </div>

      {/* Our Pledge */}
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
        <div style={{ display: "flex", alignItems: "center", gap: 9, marginBottom: 5 }}>
          <MdHandshake size={22} color="#1ebdcf" />
          <span style={{ fontWeight: 700, color: "#2c9197", fontSize: 17 }}>🤝 Our Pledge</span>
        </div>
        <div style={{ fontSize: 15.2, marginBottom: 6 }}>
          JAL Virtual is committed to ensuring participation in all community activities is <b>free from harassment and discrimination</b> of any kind, regardless of:
        </div>
        <ul style={{ margin: "0 0 0 18px", fontSize: 14.6 }}>
          <li>Age, body size, disability, or health status</li>
          <li>Ethnicity, race, nationality, or religion</li>
          <li>Gender identity and expression, sex characteristics, or sexual orientation</li>
          <li>Education, experience, or socio-economic status</li>
          <li>Personal appearance</li>
        </ul>
        <div style={{ marginTop: 7, fontSize: 15.2 }}>
          We welcome all who share our values of <b style={{ color: "#7958dd" }}>inclusivity and respect</b>.
        </div>
      </div>

      {/* Our Standards */}
      <div
        style={{
          background: "linear-gradient(90deg, #e7edff 60%, #f1ebfa 100%)",
          borderRadius: "13px",
          padding: "17px 18px 15px 18px",
          marginBottom: 25,
          color: "#363456",
          border: "1px solid #b6bffa",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 5 }}>
          <MdStar size={22} color="#7b55f7" />
          <span style={{ fontWeight: 700, color: "#6e48b4", fontSize: 17 }}>🌟 Our Standards</span>
        </div>
        <div style={{ fontWeight: 700, fontSize: 15.2, margin: "3px 0 4px 0" }}>Positive Behaviors</div>
        <ul style={{ margin: "0 0 7px 18px", fontSize: 14.4 }}>
          <li>Use welcoming and inclusive language</li>
          <li>Be respectful of differing viewpoints and experiences</li>
          <li>Accept constructive feedback gracefully</li>
          <li>Focus on what benefits the community as a whole</li>
          <li>Show empathy, patience, and support to fellow members</li>
        </ul>
        <div style={{ fontWeight: 700, fontSize: 15.2, margin: "7px 0 4px 0", color: "#d76078" }}>Unacceptable Behaviors</div>
        <ul style={{ margin: "0 0 0 18px", fontSize: 14.4, color: "#b13845" }}>
          <li>Sexualized language or imagery; unwelcome sexual advances</li>
          <li>Trolling, insults, personal/political attacks</li>
          <li>Harassment, bullying, or intimidation of any kind (public or private)</li>
          <li>Publishing private information without explicit consent</li>
          <li>Conduct inappropriate for a professional/aviation environment</li>
          <li>Political debates or discussions of ongoing political issues</li>
          <li>Any activity that disrupts harmony or community focus</li>
        </ul>
      </div>

      {/* Discord & Community Spaces */}
      <div
        style={{
          background: "linear-gradient(90deg, #e7effc 60%, #e4eaf7 100%)",
          borderRadius: "13px",
          padding: "17px 18px 15px 18px",
          marginBottom: 25,
          color: "#223554",
          border: "1px solid #b6cffa",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 5 }}>
          <MdChat size={22} color="#7b88f7" />
          <span style={{ fontWeight: 700, color: "#5464bd", fontSize: 17 }}>💬 Discord & Community Spaces</span>
        </div>
        <div style={{ fontSize: 15, marginBottom: 6 }}>
          JAL Virtual uses Discord as our primary hub for communication, support, and events.  
          Access is under the <b>Members Login Resources</b> tab on the website.
        </div>
        <div style={{ fontWeight: 700, fontSize: 15.2, margin: "7px 0 4px 0", color: "#d76078" }}>🚫 Discord Rules — Strictly Prohibited</div>
        <ul style={{ margin: "0 0 7px 18px", fontSize: 14.2, color: "#b13845" }}>
          <li>Use of alternate (alt) Discord accounts—<b>use your main with Pilot ID</b></li>
          <li>Soundboards, mic changers, or audio spam</li>
          <li>Political topics or debate of any kind</li>
          <li>Drama or personal disputes brought into public channels</li>
          <li>Harassment, bullying, or targeting other pilots</li>
          <li>Advertising or promoting external products/services</li>
          <li>NSFW (Not Safe For Work) content of any form</li>
          <li>Sharing or posting pirated items or unauthorized content</li>
        </ul>
        <div style={{ fontSize: 14.7, color: "#a31221", fontWeight: 600, marginTop: 2 }}>
          Violating any of these rules may result in immediate removal from JAL Virtual.
        </div>
        <div style={{ fontWeight: 700, fontSize: 15.2, margin: "13px 0 4px 0", color: "#2f6c4e" }}>✅ What’s Encouraged</div>
        <ul style={{ margin: "0 0 0 18px", fontSize: 14.2, color: "#398f64" }}>
          <li>Sharing your aviation passion</li>
          <li>Supporting and encouraging fellow pilots</li>
          <li>Friendly communication and teamwork</li>
          <li>Sharing flight plans, tips, and screenshots</li>
          <li>Having fun and building community spirit!</li>
        </ul>
      </div>

      {/* Staff Responsibilities */}
      <div
        style={{
          background: "linear-gradient(90deg, #e9f8ff 60%, #e5eaf7 100%)",
          borderRadius: "13px",
          padding: "17px 18px 15px 18px",
          marginBottom: 25,
          color: "#294d56",
          border: "1px solid #b6ecfa",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 5 }}>
          <MdShield size={22} color="#18b6c6" />
          <span style={{ fontWeight: 700, color: "#34aac8", fontSize: 17 }}>🛡️ Staff Responsibilities & Enforcement</span>
        </div>
        <ul style={{ margin: "0 0 7px 18px", fontSize: 14.2 }}>
          <li>Staff are responsible for <b>clarifying standards</b> and ensuring fair enforcement.</li>
          <li>Reports of abuse, harassment, or rule violations are handled <b>promptly, confidentially, and fairly</b>.</li>
          <li>
            Consequences for violations may include:
            <ul>
              <li>Warning</li>
              <li>Temporary suspension</li>
              <li>Permanant removal (ban) <span style={{ fontStyle: "italic" }}>— at the sole discretion of the JAL Virtual staff team</span></li>
            </ul>
          </li>
        </ul>
      </div>

      {/* Reporting Guide */}
      <div
        style={{
          background: "linear-gradient(90deg, #fcf8e8 60%, #e3eafc 100%)",
          borderRadius: "13px",
          padding: "17px 18px 15px 18px",
          marginBottom: 25,
          color: "#716027",
          border: "1px solid #ecdfa4",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 5 }}>
          <MdAssignment size={22} color="#bda238" />
          <span style={{ fontWeight: 700, color: "#c69d0d", fontSize: 17 }}>📝 Reporting Guide</span>
        </div>
        <ol style={{ margin: "0 0 0 18px", fontSize: 14.2 }}>
          <li><b>Contact a JALV staff member</b> directly, or use the designated reporting channel on Discord.</li>
          <li>Provide as much detail as possible (user, time, description, screenshots if available).</li>
          <li>All reports are <b>confidential</b> and will be investigated quickly.</li>
          <li>Retaliation against reporters is strictly prohibited.</li>
        </ol>
      </div>

      {/* Scope */}
      <div
        style={{
          background: "linear-gradient(90deg, #f0f5fb 60%, #fbe3e3 100%)",
          borderRadius: "13px",
          padding: "15px 18px 12px 18px",
          marginBottom: 25,
          color: "#476585",
          border: "1px solid #f3b7b7",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 5 }}>
          <MdPin size={18} color="#c77979" />
          <span style={{ fontWeight: 700, color: "#c77979", fontSize: 16 }}>📌 Scope</span>
        </div>
        <ul style={{ margin: "0 0 0 18px", fontSize: 14.3 }}>
          <li>This Code of Conduct applies to <b>all JAL Virtual platforms and activities</b>:</li>
          <li>Discord channels, forums, and group chats</li>
          <li>Social media and online meetings</li>
          <li>All official in-game or real-life JALV events</li>
        </ul>
      </div>

      {/* FAQ */}
      <div
        style={{
          background: "linear-gradient(90deg, #eaf5ff 60%, #f2e2fc 100%)",
          borderRadius: "13px",
          padding: "15px 18px 10px 18px",
          marginBottom: 15,
          color: "#544a5f",
          border: "1px solid #e6bdfa",
        }}
      >
        <div style={{ fontWeight: 700, fontSize: 16, color: "#835ae6", marginBottom: 6 }}>❓ Frequently Asked Questions</div>
        <details style={{ marginBottom: 7 }}>
          <summary style={{ fontWeight: 700, color: "#835ae6", fontSize: 15.1, cursor: "pointer", marginBottom: 2 }}>
            Is debate or constructive criticism allowed?
          </summary>
          <div style={{ marginTop: 6, color: "#423f52", fontSize: 14.3 }}>
            Yes—<b>respectful discussion</b> and constructive criticism are encouraged. Personal attacks, harassment, or intentionally inflammatory comments are not.
          </div>
        </details>
        <details style={{ marginBottom: 7 }}>
          <summary style={{ fontWeight: 700, color: "#835ae6", fontSize: 15.1, cursor: "pointer", marginBottom: 2 }}>
            What happens after I report a violation?
          </summary>
          <div style={{ marginTop: 6, color: "#423f52", fontSize: 14.3 }}>
            Staff will review your report, investigate the incident confidentially, and take any needed action. You may be contacted for follow-up if necessary.
          </div>
        </details>
        <details>
          <summary style={{ fontWeight: 700, color: "#835ae6", fontSize: 15.1, cursor: "pointer", marginBottom: 2 }}>
            What if I need to appeal a staff decision?
          </summary>
          <div style={{ marginTop: 6, color: "#423f52", fontSize: 14.3 }}>
            You may respectfully request a review by another staff member or submit a formal appeal through the designated channel.
          </div>
        </details>
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
        <b>Let’s keep JAL Virtual a positive, safe, and fun place for all pilots.</b> Thank you for helping us build an inclusive, respectful community!
      </div>
    </div>
  );
}
