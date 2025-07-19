import React, { useState } from "react";
import "../../src/css/asr.css";

const WEBHOOK_URL =
  "https://discord.com/api/webhooks/1390281008758390905/v7rNLeQgMOPXgysRTfsustJVXJGB7JylSBE55ezHTgWv7ajxGeXuc7WvzuBq8jbWHxxX";

const initialForm = {
  jalId: "",
  name: "",
  callsign: "",
  pirep: "",
  eventType: "",
  date: "",
  time: "",
  icao: "",
  location: "",
  fleetType: "",
  registration: "",
  pob: "",
  flightPhase: "",
  altitudeUnit: "FL",
  altitude: "",
  airspeedUnit: "(IAS) kts",
  airspeed: "",
  network: "",
  metar: "",
  eventDesc: "",
  atc: "",
};

const eventTypes = [
  "ASR",
  "ATC",
  "TCAS RA",
  "Simulator",
  "Etc.",
];

const flightPhases = [
  "Parked",
  "Towing",
  "Taxi Out",
  "Take Off",
  "Initial Climb",
  "Climb",
  "Cruise",
  "Descent",
  "Holding",
  "Approach",
  "Landing",
  "Taxi In"
];

const networks = [
  "Offline",
  "VATSIM",
  "SayIntentions",
  "BeyondATC",
  "IVAO",
  "Others"
];

const atcOptions = [
  "Delivery",
  "Ground",
  "Tower",
  "Approach / Departure",
  "Center / Control",
  "CTAF",
  "Advisory Frequency"
];

const fleetTypes = [
  "A350-900", "A350-1000", "A320-200", "B737-800", "B767-300ER", "B777-200ER", "B777-300ER", "B787-8", "B787-9", "E170", "E190", "DHC-8-400", "ATR42-600", "ATR72-600", "MD-11", "B747-400",
];

export default function AirSafetyReport() {
  const [form, setForm] = useState(initialForm);
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setDone(false);

    const embed = {
      title: "New Air Safety Report (ASR) Submitted",
      color: 0xd72638,
      fields: [
        { name: "JAL ID", value: form.jalId || "N/A", inline: true },
        { name: "Name", value: form.name || "N/A", inline: true },
        { name: "Callsign", value: form.callsign || "N/A", inline: true },
        { name: "PIREP No.", value: form.pirep || "N/A", inline: true },
        { name: "Type of Event", value: form.eventType || "N/A", inline: true },
        { name: "Date", value: form.date || "N/A", inline: true },
        { name: "Time (UTC)", value: form.time || "N/A", inline: true },
        { name: "Airport ICAO", value: form.icao || "N/A", inline: true },
        { name: "Specific Location", value: form.location || "N/A", inline: true },
        { name: "Fleet Type", value: form.fleetType || "N/A", inline: true },
        { name: "Registration", value: form.registration || "N/A", inline: true },
        { name: "POB", value: form.pob || "N/A", inline: true },
        { name: "Flight Phase", value: form.flightPhase || "N/A", inline: true },
        { name: "Altitude", value: form.altitude ? `${form.altitudeUnit} ${form.altitude}` : "N/A", inline: true },
        { name: "Airspeed", value: form.airspeed ? `${form.airspeedUnit} ${form.airspeed}` : "N/A", inline: true },
        { name: "Network", value: form.network || "N/A", inline: true },
        { name: "ATC", value: form.atc || "N/A", inline: true },
        { name: "METAR", value: form.metar || "N/A", inline: false },
        { name: "Event Narrative", value: form.eventDesc || "N/A", inline: false },
      ],
      timestamp: new Date().toISOString(),
      footer: {
        text: "Japan Airlines Virtual | ASR System"
      },
    };

    await fetch(WEBHOOK_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ embeds: [embed] }),
    });

    setLoading(false);
    setDone(true);
    setForm(initialForm);
  };

  return (
    <div className="asr-bg-jal">
      <h1 className="asr-title-jal">Air Safety Report (ASR)</h1>
      <form onSubmit={handleSubmit} className="asr-form-jal">
        <div className="asr-flex-row-jal">
          <label className="asr-label-jal flex2">
            JAL ID - NAME*
            <div style={{ display: "flex", gap: 8 }}>
              <input
                name="jalId"
                value={form.jalId}
                onChange={handleChange}
                placeholder="JAL"
                className="asr-input-jal"
                maxLength={5}
                required
              />
              <input
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="NAME"
                className="asr-input-jal"
                required
              />
            </div>
          </label>
          <label className="asr-label-jal flex1">
            CALLSIGN*
            <input
              name="callsign"
              value={form.callsign}
              onChange={handleChange}
              placeholder="e.g. JAL2"
              className="asr-input-jal"
              required
              style={{ width: "100%" }}
            />
          </label>
          <label className="asr-label-jal flex1">
            PIREP No.*
            <input
              name="pirep"
              value={form.pirep}
              onChange={handleChange}
              placeholder=""
              className="asr-input-jal"
              required
            />
          </label>
        </div>

        <div className="asr-flex-row-jal">
          <label className="asr-label-jal flex1">
            TYPE OF EVENT*
            <select
              name="eventType"
              value={form.eventType}
              onChange={handleChange}
              className="asr-select-jal"
              required
            >
              <option value="">Select...</option>
              {eventTypes.map(type => (
                <option value={type} key={type}>{type}</option>
              ))}
            </select>
          </label>
          <label className="asr-label-jal flex1">
            DATE OF OCCURRENCE*
            <input
              type="date"
              name="date"
              value={form.date}
              onChange={handleChange}
              className="asr-input-jal"
              required
            />
          </label>
          <label className="asr-label-jal flex1">
            TIME IN UTC*
            <input
              type="time"
              name="time"
              value={form.time}
              onChange={handleChange}
              className="asr-input-jal"
              required
            />
          </label>
        </div>

        <div className="asr-flex-row-jal">
          <label className="asr-label-jal flex1">
            AIRPORT ICAO
            <input name="icao" value={form.icao} onChange={handleChange} className="asr-input-jal" />
          </label>
          <label className="asr-label-jal flex1">
            SPECIFIC LOCATION
            <input name="location" value={form.location} onChange={handleChange} className="asr-input-jal" />
          </label>
        </div>

        <div className="asr-flex-row-jal">
          <label className="asr-label-jal flex1">
            FLEET TYPE*
            <select
              name="fleetType"
              value={form.fleetType}
              onChange={handleChange}
              className="asr-select-jal"
              required
            >
              <option value="">Select...</option>
              {fleetTypes.map(ft => (
                <option value={ft} key={ft}>{ft}</option>
              ))}
            </select>
          </label>
          <label className="asr-label-jal flex1">
            REGISTRATION*
            <input name="registration" value={form.registration} onChange={handleChange} placeholder="e.g. JA731J" className="asr-input-jal" required />
          </label>
          <label className="asr-label-jal flex1">
            POB
            <input name="pob" value={form.pob} onChange={handleChange} className="asr-input-jal" />
          </label>
        </div>

        <div className="asr-flex-row-jal">
          <label className="asr-label-jal flex1">
            FLIGHT PHASE*
            <select
              name="flightPhase"
              value={form.flightPhase}
              onChange={handleChange}
              className="asr-select-jal"
              required
            >
              <option value="">Select...</option>
              {flightPhases.map(p => (
                <option value={p} key={p}>{p}</option>
              ))}
            </select>
          </label>
          <label className="asr-label-jal flex0-60">
            ALTITUDE
            <select
              name="altitudeUnit"
              value={form.altitudeUnit}
              onChange={handleChange}
              className="asr-select-jal"
              style={{ minWidth: 65 }}
            >
              <option value="FL">FL</option>
              <option value="Ft">Ft</option>
              <option value="M">M</option>
            </select>
          </label>
          <input
            name="altitude"
            value={form.altitude}
            onChange={handleChange}
            className="asr-input-jal"
            style={{ flex: 1 }}
          />
          <label className="asr-label-jal flex0-100">
            AIRSPEED
            <select
              name="airspeedUnit"
              value={form.airspeedUnit}
              onChange={handleChange}
              className="asr-select-jal"
              style={{ minWidth: 110 }}
            >
              <option value="(IAS) kts">(IAS) kts</option>
              <option value="Mach">Mach</option>
            </select>
          </label>
          <input
            name="airspeed"
            value={form.airspeed}
            onChange={handleChange}
            className="asr-input-jal"
            style={{ flex: 1 }}
          />
        </div>

        <div className="asr-flex-row-jal">
          <label className="asr-label-jal flex1">
            NETWORK*
            <select
              name="network"
              value={form.network}
              onChange={handleChange}
              className="asr-select-jal"
              required
            >
              <option value="">Select...</option>
              {networks.map(net => (
                <option value={net} key={net}>{net}</option>
              ))}
            </select>
          </label>
          <label className="asr-label-jal flex1">
            ATC
            <select
              name="atc"
              value={form.atc}
              onChange={handleChange}
              className="asr-select-jal"
            >
              <option value="">Select...</option>
              {atcOptions.map(opt => (
                <option value={opt} key={opt}>{opt}</option>
              ))}
            </select>
          </label>
        </div>

        <label className="asr-label-jal" style={{ display: "block", marginBottom: 12 }}>
          METAR
          <input
            name="metar"
            value={form.metar}
            onChange={handleChange}
            placeholder="Paste METAR (if available)"
            className="asr-input-jal"
          />
        </label>

        <label className="asr-label-jal" style={{ display: "block", marginBottom: 12 }}>
          EVENT NARRATIVE (Detailed description)*
          <textarea
            name="eventDesc"
            value={form.eventDesc}
            onChange={handleChange}
            rows={3}
            className="asr-textarea-jal"
            required
          />
        </label>

        <button
          type="submit"
          disabled={loading}
          className="asr-button-jal"
        >
          {loading ? "Sending..." : "File ASR"}
        </button>
        {done && (
          <span className="asr-success-jal">Submitted! Thank you.</span>
        )}
      </form>
    </div>
  );
}
