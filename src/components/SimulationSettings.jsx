import React from "react";
import { MdLanguage, MdRecordVoiceOver, MdPeople, MdThumbUpAlt } from "react-icons/md";

export default function CommunicationStandards() {
  return (
    <div>
      <div
        style={{
          background: "linear-gradient(90deg, #27245a 60%, #245a80 100%)",
          borderRadius: "14px",
          padding: "28px 20px 20px 20px",
          margin: "24px 0 32px 0",
          boxShadow: "0 4px 32px #0003",
          color: "#fff",
          border: "1px solid #36498a",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: 13 }}>
          <MdLanguage size={28} color="#b3e2ff" />
          <span style={{ fontSize: 26, fontWeight: 700, letterSpacing: 1.1, color: "#d1eaff" }}>
            Communication Standards
          </span>
        </div>
        <ul style={{ margin: 0, padding: 0, listStyle: "none", fontSize: "1.07em" }}>
          <li style={{ margin: "15px 0", display: "flex", alignItems: "center" }}>
            <MdLanguage size={21} color="#aad6fd" style={{ marginRight: 10 }} />
            <span>
              <b style={{ color: "#7de2ff" }}>English</b> is the official language of Japan Airlines Virtual.
              <span style={{
                background: "linear-gradient(90deg, #fee3cf 30%, #b3e5fc 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                fontWeight: 500,
                marginLeft: 5,
              }}>
                Japanese
              </span> is accepted as a secondary language.
            </span>
          </li>
          <li style={{ margin: "15px 0", display: "flex", alignItems: "center" }}>
            <MdRecordVoiceOver size={21} color="#fbdc74" style={{ marginRight: 10 }} />
            <span style={{ whiteSpace: "nowrap", width: "100%" }}>
              During group flights or voice chats involving members of different nationalities,
              <span style={{
                fontWeight: 700,
                color: "#ffd500",
                margin: "0 4px"
              }}>
                English must be used
              </span>
              to ensure clear communication.
            </span>
          </li>
          <li style={{ margin: "15px 0", display: "flex", alignItems: "center" }}>
            <MdThumbUpAlt size={21} color="#abffb1" style={{ marginRight: 10 }} />
            Constructive criticism is welcome when delivered
            <span style={{
              color: "#5affc0",
              fontWeight: 600,
              marginLeft: 4
            }}>respectfully and professionally</span>.
          </li>
          <li style={{ margin: "15px 0", display: "flex", alignItems: "center" }}>
            <MdPeople size={21} color="#c7a0fa" style={{ marginRight: 10 }} />
            All members must maintain
            <span style={{
              background: "linear-gradient(90deg,#ffe3fa 0%, #aefff6 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              fontWeight: 700,
              marginLeft: 4
            }}>
              courteous, inclusive, and professional behavior
            </span> at all times.
          </li>
        </ul>
      </div>
    </div>
  );
}
