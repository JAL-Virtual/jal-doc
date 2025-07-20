import React from "react";
import { MdHelp, MdGroup, MdExpandMore } from "react-icons/md";

const faqs = [
  {
    section: (
      <span style={{ fontSize: "1.15em", fontWeight: 700 }}>
        <span style={{ color: "#a8a8ff" }}>❓</span> General Questions
      </span>
    ),
    questions: [
      {
        q: "What flight simulator do you support?",
        a: "We support Microsoft Flight Simulator, X-Plane, and Prepar3D for virtual airline operations."
      }
    ]
  },
  {
    section: (
      <span style={{ fontSize: "1.15em", fontWeight: 700 }}>
        <span style={{ color: "#d58ceb" }}>👥</span> Membership & Requirements
      </span>
    ),
    questions: [
      {
        q: "How do I join Japan Airlines Virtual?",
        a: "Simply visit our website, fill out the registration form, and follow the email instructions to complete your application."
      },
      {
        q: "Do I need to be an experienced pilot to join?",
        a: "No prior experience is necessary! We welcome new and experienced pilots alike."
      },
      {
        q: "Can I fly for multiple virtual airlines?",
        a: "Yes, you may fly for other VAs unless otherwise restricted by their rules."
      }
    ]
  }
];

export default function FAQ() {
  return (
    <div>
      {/* Page Title */}
      <div
        style={{
          background: "linear-gradient(90deg, #ebf0fe 60%, #f6d7fa 100%)",
          borderRadius: "15px",
          padding: "22px 20px 16px 22px",
          margin: "18px 0 34px 0",
          color: "#5a497c",
          border: "1px solid #e1dafc",
          boxShadow: "0 2px 16px #0001",
          display: "flex",
          alignItems: "center",
          gap: 16,
        }}
      >
        <MdHelp size={36} color="#7e8eff" />
        <span style={{ fontWeight: 800, fontSize: 27 }}>
          Frequently Asked Questions
        </span>
      </div>

      {faqs.map((sec, i) => (
        <div
          key={i}
          style={{
            background: i === 0
              ? "linear-gradient(90deg, #f8f8ff 60%, #e5e3fc 100%)"
              : "linear-gradient(90deg, #f8eafd 60%, #f8f6ff 100%)",
            borderRadius: "13px",
            padding: "16px 22px 14px 22px",
            marginBottom: 22,
            color: "#3a3662",
            border: "1px solid #e3e2fa",
          }}
        >
          <div
            style={{
              fontWeight: 700,
              fontSize: 18,
              marginBottom: 6,
              display: "flex",
              alignItems: "center",
              gap: 9,
            }}
          >
            {i === 0 ? (
              <MdHelp size={22} color="#8d8dff" />
            ) : (
              <MdGroup size={22} color="#b66fff" />
            )}
            {sec.section}
          </div>
          {sec.questions.map((qa, j) => (
            <details
              key={j}
              style={{
                marginBottom: 8,
                border: "none",
                background: "none",
                padding: 0,
              }}
            >
              <summary
                style={{
                  cursor: "pointer",
                  fontWeight: 700,
                  fontSize: 15.2,
                  color: "#573fa7",
                  padding: "5px 0",
                  display: "flex",
                  alignItems: "center",
                  gap: 6,
                  borderBottom: "1px solid #e6e2fd"
                }}
              >
                <MdExpandMore size={18} style={{ marginRight: 4, verticalAlign: "middle" }} />
                {qa.q}
              </summary>
              <div style={{ marginTop: "0.8em", fontSize: 14.5, color: "#473b63" }}>
                {qa.a}
              </div>
            </details>
          ))}
        </div>
      ))}
    </div>
  );
}
