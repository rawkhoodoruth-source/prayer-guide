import { useState } from "react";
import { PRAYER_STEPS } from "../data/prayers";

const POSITION_ICONS = {
  standing: { icon: "🧍", label: "Standing (Qiyam)" },
  ruku: { icon: "🫄", label: "Bowing (Ruku)" },
  sujud: { icon: "🙇", label: "Prostrating (Sujud)" },
  sitting: { icon: "🧎", label: "Sitting (Jalsa/Tashahhud)" },
};

const PRAYER_ICONS = { fajr: "🌄", dhuhr: "☀️", asr: "🌤️", maghrib: "🌅", isha: "🌙" };

const RAKAAT_STRUCTURE = {
  fajr: [
    { label: "Rakah 1", steps: ["niyyah","takbir","qiyam-thana","al-fatiha","additional-surah","ruku","qawmah","sujud-1","jalsa","sujud-2"] },
    { label: "Rakah 2 (Final)", steps: ["al-fatiha","additional-surah","ruku","qawmah","sujud-1","jalsa","sujud-2","tashahhud","salawat","tasleem"] },
  ],
  dhuhr: [
    { label: "Rakah 1", steps: ["niyyah","takbir","qiyam-thana","al-fatiha","additional-surah","ruku","qawmah","sujud-1","jalsa","sujud-2"] },
    { label: "Rakah 2", steps: ["al-fatiha","additional-surah","ruku","qawmah","sujud-1","jalsa","sujud-2","tashahhud"] },
    { label: "Rakah 3", steps: ["al-fatiha","ruku","qawmah","sujud-1","jalsa","sujud-2"] },
    { label: "Rakah 4 (Final)", steps: ["al-fatiha","ruku","qawmah","sujud-1","jalsa","sujud-2","tashahhud","salawat","tasleem"] },
  ],
  asr: [
    { label: "Rakah 1", steps: ["niyyah","takbir","qiyam-thana","al-fatiha","additional-surah","ruku","qawmah","sujud-1","jalsa","sujud-2"] },
    { label: "Rakah 2", steps: ["al-fatiha","additional-surah","ruku","qawmah","sujud-1","jalsa","sujud-2","tashahhud"] },
    { label: "Rakah 3", steps: ["al-fatiha","ruku","qawmah","sujud-1","jalsa","sujud-2"] },
    { label: "Rakah 4 (Final)", steps: ["al-fatiha","ruku","qawmah","sujud-1","jalsa","sujud-2","tashahhud","salawat","tasleem"] },
  ],
  maghrib: [
    { label: "Rakah 1", steps: ["niyyah","takbir","qiyam-thana","al-fatiha","additional-surah","ruku","qawmah","sujud-1","jalsa","sujud-2"] },
    { label: "Rakah 2", steps: ["al-fatiha","additional-surah","ruku","qawmah","sujud-1","jalsa","sujud-2","tashahhud"] },
    { label: "Rakah 3 (Final)", steps: ["al-fatiha","ruku","qawmah","sujud-1","jalsa","sujud-2","tashahhud","salawat","tasleem"] },
  ],
  isha: [
    { label: "Rakah 1", steps: ["niyyah","takbir","qiyam-thana","al-fatiha","additional-surah","ruku","qawmah","sujud-1","jalsa","sujud-2"] },
    { label: "Rakah 2", steps: ["al-fatiha","additional-surah","ruku","qawmah","sujud-1","jalsa","sujud-2","tashahhud"] },
    { label: "Rakah 3", steps: ["al-fatiha","ruku","qawmah","sujud-1","jalsa","sujud-2"] },
    { label: "Rakah 4 (Final)", steps: ["al-fatiha","ruku","qawmah","sujud-1","jalsa","sujud-2","tashahhud","salawat","tasleem"] },
  ],
};

const stepMap = Object.fromEntries(PRAYER_STEPS.map((s) => [s.id, s]));

function StepCard({ step, index }) {
  const [tab, setTab] = useState("arabic");
  const pos = POSITION_ICONS[step.position];

  return (
    <div className="step-card">
      <div className="step-header">
        <span className="badge">{index + 1}</span>
        <span className="step-title">{step.title}</span>
      </div>

      {pos && (
        <div className="position-icon" title={pos.label}>
          {pos.icon} <span style={{ fontSize: "0.9rem", verticalAlign: "middle", color: "var(--green-dark)", fontWeight: 600 }}>{pos.label}</span>
        </div>
      )}

      <div className="instruction-box">{step.description}</div>

      {step.arabic && (
        <div className="step-body" style={{ marginTop: "0.75rem" }}>
          <div style={{ display: "flex", gap: "0.5rem", borderBottom: "2px solid var(--border)", paddingBottom: "0" }}>
            {["arabic", "transliteration", "translation"].map((t) => (
              <button
                key={t}
                className={`tab${tab === t ? " active" : ""}`}
                onClick={() => setTab(t)}
                style={{ textTransform: "capitalize" }}
              >
                {t}
              </button>
            ))}
          </div>
          <div className="recitation-block">
            {tab === "arabic" && <div className="arabic">{step.arabic}</div>}
            {tab === "transliteration" && step.transliteration && <div className="transliteration">{step.transliteration}</div>}
            {tab === "transliteration" && !step.transliteration && <div className="transliteration" style={{ color: "var(--text-muted)" }}>No transliteration needed for this step.</div>}
            {tab === "translation" && step.translation && <div className="translation">{step.translation}</div>}
            {tab === "translation" && !step.translation && <div className="translation" style={{ color: "var(--text-muted)" }}>No spoken recitation for this step.</div>}
          </div>
        </div>
      )}
    </div>
  );
}

export default function PrayerGuide({ prayer, navigate }) {
  const [activeRakah, setActiveRakah] = useState(0);

  if (!prayer) {
    navigate("home");
    return null;
  }

  const structure = RAKAAT_STRUCTURE[prayer.id];

  return (
    <div>
      <div className="page-header">
        <div className="arabic-title">{prayer.arabic}</div>
        <h1>{PRAYER_ICONS[prayer.id]} {prayer.name} Prayer</h1>
        <p>{prayer.rakaat} rakaat · {prayer.time}</p>
      </div>

      <div className="container">
        <button className="back-btn" onClick={() => navigate("home")}>
          ← Back to all prayers
        </button>

        <div style={{ background: "var(--card)", borderRadius: "12px", padding: "1rem", border: "1px solid var(--border)", marginBottom: "1.5rem" }}>
          <div style={{ fontWeight: 600, marginBottom: "0.5rem" }}>About {prayer.name}</div>
          <div style={{ fontSize: "0.9rem", color: "var(--text-muted)" }}>
            {prayer.name} has <strong>{prayer.rakaat} rakaat</strong>. Select a rakah below to see each step in detail. Each rakah follows the same sequence — you'll memorize it quickly with practice!
          </div>
        </div>

        {/* Rakah tabs */}
        <div className="tabs">
          {structure.map((r, i) => (
            <button
              key={i}
              className={`tab${activeRakah === i ? " active" : ""}`}
              onClick={() => setActiveRakah(i)}
            >
              {r.label}
            </button>
          ))}
        </div>

        {/* Steps for active rakah */}
        {structure[activeRakah].steps.map((stepId, idx) => {
          const step = stepMap[stepId];
          if (!step) return null;
          return <StepCard key={stepId + idx} step={step} index={idx} />;
        })}

        {activeRakah < structure.length - 1 && (
          <button className="btn btn-primary" style={{ width: "100%", justifyContent: "center", marginTop: "0.5rem" }} onClick={() => setActiveRakah(activeRakah + 1)}>
            Next: {structure[activeRakah + 1].label} →
          </button>
        )}

        {activeRakah === structure.length - 1 && (
          <div style={{ textAlign: "center", padding: "1.5rem", background: "#f0fdf4", borderRadius: "12px", border: "1px solid #bbf7d0", marginTop: "0.5rem" }}>
            <div style={{ fontSize: "2rem" }}>🎉</div>
            <div style={{ fontWeight: 700, color: "var(--green-dark)", marginTop: "0.5rem" }}>Prayer complete!</div>
            <div style={{ color: "var(--text-muted)", fontSize: "0.9rem", marginTop: "0.25rem" }}>May Allah accept your prayer.</div>
          </div>
        )}
      </div>
    </div>
  );
}
