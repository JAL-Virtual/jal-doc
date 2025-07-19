import React, { useState } from "react";

const changelogData = [
  {
    date: "29-07-2025",
    version: "v0.0.1",
    sections: [
      {
        title: "GENERAL",
        items: [
          { label: "Sidebar Menu", type: "added" },
          { label: "Introduction text for vSOP", type: "added" },
          { label: "Rankings", type: "added" },
          { label: "Code of Conduct", type: "added" },
          { label: "Staff Team", type: "added" },
          { label: "FAQ", type: "added" },
          { label: "Air Safety Report (ASR)", type: "added" },
          { label: "Activity Requirements", type: "added" },
        ],
      },
      {
        title: "AIRCRAFT OPERATIONS",
        items: [
          { label: "Configuration", type: "added" },
          { label: "Landing Rates", type: "added" },
          { label: "Pireps", type: "added" },
          { label: "Subsitutions", type: "added" },
          { label: "Contingency Routes", type: "added" },
          { label: "No Fly Areas", type: "added" },
        ],
      },
      {
        title: "FLIGHT INFORMATION",
        items: [
            { label: "Fuel Plannings", type: "added" },
            { label: "Mannual Pireps Claims", type: "added" },
        ],
      },
      {
        title: "PROFESSIONAL CONDUCT",
        items: [
            { label: "Communication Standard", type: "added" },
        ],
      },
      {
        title: "OPERATION RESTRICTIONS",
        items: [
            { label: "Operational Restrictions", type: "added" },
            { label: "Simulation Settings", type: "added" },
        ],
      },
    ],
  },
  // Add more changelog entries if needed
];

const typeColors = {
  added: "#1cc47a",
};

export default function Changelog() {
  const [openIdx, setOpenIdx] = useState(0); // Show latest by default
  const [activeIdx, setActiveIdx] = useState(-1); // For pop animation

  const handlePillClick = (idx) => {
    setOpenIdx(openIdx === idx ? -1 : idx);

    setActiveIdx(idx);
    setTimeout(() => setActiveIdx(-1), 180); // Duration must match CSS transition
  };

  return (
    <>
      <style>
        {`
        .changelog-item {
          background: #19191a;
          border-radius: 6px;
          margin-bottom: 4px;
          display: flex;
          align-items: center;
          padding: 7px 13px;
          box-shadow: 0 1px 4px #0001;
          border: 1px solid #26263c;
          font-size: 12.5px;
          font-weight: 500;
          transition: background 0.16s, border 0.16s, box-shadow 0.2s;
          cursor: pointer;
        }
        .changelog-item:hover {
          background: #232329;
          border: 1.5px solid #5e53a0;
          box-shadow: 0 2px 8px #2d1e4633;
        }
        .changelog-tag {
          transition: background 0.16s, transform 0.16s;
        }
        .changelog-item:hover .changelog-tag {
          transform: scale(1.07);
          background: linear-gradient(90deg, #37efab 60%, #28d89e 100%);
        }
        .changelog-date-pill {
          cursor: pointer;
          transition:
            filter 0.15s,
            box-shadow 0.2s,
            transform 0.18s cubic-bezier(0.44, 1.1, 0.71, 1.02);
          box-shadow: 0 1px 6px #c8aff966;
          will-change: transform, filter;
        }
        .changelog-date-pill:hover {
          filter: brightness(1.12) saturate(1.2);
          box-shadow: 0 2px 10px #c8aff999;
        }
        .changelog-date-pill.active {
          transform: scale(1.13);
          filter: brightness(1.19) saturate(1.5);
          box-shadow: 0 3px 16px #beabf7bb;
        }
        `}
      </style>
      <div
        style={{
          background: "#161616",
          borderRadius: 10,
          padding: "16px 10px 28px 10px",
          color: "#fff",
          boxShadow: "0 2px 16px #0003",
          marginTop: 8,
          minHeight: 300,
          maxWidth: "100vw",
        }}
      >
        <div style={{ fontSize: 20, fontWeight: 600, marginBottom: 8 }}>
          Changelog
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 24,
            position: "relative",
            marginTop: 0,
            marginLeft: 4,
          }}
        >
          {changelogData.map((entry, idx) => (
            <div
              key={entry.version}
              style={{
                display: "flex",
                alignItems: "flex-start",
                gap: 18,
                position: "relative",
              }}
            >
              {/* Date pill & vertical line (date pill is clickable) */}
              <div
                style={{
                  minWidth: 110,
                  position: "relative",
                  marginTop: 6,
                }}
              >
                <span
                  className={
                    "changelog-date-pill" + (activeIdx === idx ? " active" : "")
                  }
                  onClick={() => handlePillClick(idx)}
                  style={{
                    background: "linear-gradient(90deg,#d0baff 60%,#b388f1 100%)",
                    color: "#38304a",
                    borderRadius: 9,
                    padding: "4px 10px",
                    fontWeight: 600,
                    fontSize: 11,
                    letterSpacing: 0.6,
                    display: "inline-block",
                    textAlign: "center",
                    userSelect: "none",
                  }}
                  title="Show/Hide this version"
                >
                  {entry.date}
                </span>
                {/* Vertical connector */}
                {idx < changelogData.length - 1 && (
                  <div
                    style={{
                      position: "absolute",
                      left: "50%",
                      top: 34,
                      width: 1.5,
                      height: 32,
                      background: "#352c47",
                      transform: "translateX(-50%)",
                    }}
                  />
                )}
              </div>
              {/* Changelog content */}
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: 15, fontWeight: 700, color: "#fff", marginBottom: 2 }}>
                  {entry.version}
                </div>
                <div
                  style={{
                    display: openIdx === idx ? "block" : "none",
                    transition: "max-height 0.2s",
                  }}
                >
                  {entry.sections.map((section) => (
                    <div key={section.title} style={{ marginTop: 8 }}>
                      <div
                        style={{
                          fontSize: 12,
                          fontWeight: 700,
                          color: "#c7bfff",
                          letterSpacing: 0.8,
                          marginBottom: 3,
                        }}
                      >
                        {section.title}
                      </div>
                      {section.items.map((item) => (
                        <div key={item.label} className="changelog-item">
                          <span
                            className="changelog-tag"
                            style={{
                              background: typeColors[item.type] || "#888",
                              color: "#fff",
                              borderRadius: 5,
                              fontSize: 10,
                              fontWeight: 700,
                              padding: "2px 8px",
                              marginRight: 11,
                              letterSpacing: 0.7,
                              boxShadow: "0 1px 4px #1111",
                              display: "inline-block",
                            }}
                          >
                            {item.type.toUpperCase()}
                          </span>
                          {item.label}
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
