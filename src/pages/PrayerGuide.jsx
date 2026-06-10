import { useState } from "react";
import { PRAYER_STEPS } from "../data/prayers";

const PRAYER_ICONS = { fajr: "🌄", dhuhr: "☀️", asr: "🌤️", maghrib: "🌅", isha: "🌙" };

const RAKAAT_STRUCTURE = {
  fajr: [
    { label: "Rakah 1", steps: ["niyyah","takbir","qiyam-thana","al-fatiha","additional-surah","ruku","qawmah","sujud-1","jalsa","sujud-2"] },
    { label: "Rakah 2 · Final", steps: ["al-fatiha","additional-surah","ruku","qawmah","sujud-1","jalsa","sujud-2","tashahhud","salawat","tasleem"] },
  ],
  dhuhr: [
    { label: "Rakah 1", steps: ["niyyah","takbir","qiyam-thana","al-fatiha","additional-surah","ruku","qawmah","sujud-1","jalsa","sujud-2"] },
    { label: "Rakah 2", steps: ["al-fatiha","additional-surah","ruku","qawmah","sujud-1","jalsa","sujud-2","tashahhud"] },
    { label: "Rakah 3", steps: ["al-fatiha","ruku","qawmah","sujud-1","jalsa","sujud-2"] },
    { label: "Rakah 4 · Final", steps: ["al-fatiha","ruku","qawmah","sujud-1","jalsa","sujud-2","tashahhud","salawat","tasleem"] },
  ],
  asr: [
    { label: "Rakah 1", steps: ["niyyah","takbir","qiyam-thana","al-fatiha","additional-surah","ruku","qawmah","sujud-1","jalsa","sujud-2"] },
    { label: "Rakah 2", steps: ["al-fatiha","additional-surah","ruku","qawmah","sujud-1","jalsa","sujud-2","tashahhud"] },
    { label: "Rakah 3", steps: ["al-fatiha","ruku","qawmah","sujud-1","jalsa","sujud-2"] },
    { label: "Rakah 4 · Final", steps: ["al-fatiha","ruku","qawmah","sujud-1","jalsa","sujud-2","tashahhud","salawat","tasleem"] },
  ],
  maghrib: [
    { label: "Rakah 1", steps: ["niyyah","takbir","qiyam-thana","al-fatiha","additional-surah","ruku","qawmah","sujud-1","jalsa","sujud-2"] },
    { label: "Rakah 2", steps: ["al-fatiha","additional-surah","ruku","qawmah","sujud-1","jalsa","sujud-2","tashahhud"] },
    { label: "Rakah 3 · Final", steps: ["al-fatiha","ruku","qawmah","sujud-1","jalsa","sujud-2","tashahhud","salawat","tasleem"] },
  ],
  isha: [
    { label: "Rakah 1", steps: ["niyyah","takbir","qiyam-thana","al-fatiha","additional-surah","ruku","qawmah","sujud-1","jalsa","sujud-2"] },
    { label: "Rakah 2", steps: ["al-fatiha","additional-surah","ruku","qawmah","sujud-1","jalsa","sujud-2","tashahhud"] },
    { label: "Rakah 3", steps: ["al-fatiha","ruku","qawmah","sujud-1","jalsa","sujud-2"] },
    { label: "Rakah 4 · Final", steps: ["al-fatiha","ruku","qawmah","sujud-1","jalsa","sujud-2","tashahhud","salawat","tasleem"] },
  ],
};

const stepMap = Object.fromEntries(PRAYER_STEPS.map((s) => [s.id, s]));

const RECITATION_TABS = [
  { key: "arabic", label: "Arabic" },
  { key: "transliteration", label: "Pronunciation" },
  { key: "translation", label: "Meaning" },
];

function StepCard({ step, index }) {
  const [tab, setTab] = useState("arabic");

  return (
    <div className="step-card">
      <div className="step-header">
        <span className="badge">{index + 1}</span>
        <span className="step-title">{step.title}</span>
      </div>

      <div className="instruction-box">{step.description}</div>

      {step.arabic && (
        <div style={{ marginTop: "1rem" }}>
          {/* Pretty pill tab switcher */}
          <div style={{
            display: "inline-flex",
            background: "#f1f5f0",
            borderRadius: "30px",
            padding: "4px",
            gap: "2px",
            marginBottom: "1rem",
          }}>
            {RECITATION_TABS.map(({ key, label }) => (
              <button
                key={key}
                onClick={() => setTab(key)}
                style={{
                  border: "none",
                  borderRadius: "24px",
                  padding: "0.4rem 1rem",
                  fontSize: "0.82rem",
                  fontWeight: 600,
                  cursor: "pointer",
                  transition: "all 0.18s",
                  background: tab === key ? "var(--green)" : "transparent",
                  color: tab === key ? "white" : "var(--text-muted)",
                  boxShadow: tab === key ? "0 2px 8px rgba(45,106,79,0.25)" : "none",
                }}
              >
                {label}
              </button>
            ))}
          </div>

          <div className="recitation-block">
            {tab === "arabic" && (
              <div className="arabic">{step.arabic}</div>
            )}
            {tab === "transliteration" && (
              step.transliteration
                ? <div className="transliteration">{step.transliteration}</div>
                : <div style={{ color: "var(--text-muted)", fontStyle: "italic", fontSize: "0.9rem" }}>No pronunciation needed for this step.</div>
            )}
            {tab === "translation" && (
              step.translation
                ? <div className="translation">{step.translation}</div>
                : <div style={{ color: "var(--text-muted)", fontStyle: "italic", fontSize: "0.9rem" }}>No spoken recitation for this step.</div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

function PrayerInfo({ prayer }) {
  return (
    <div style={{ marginBottom: "1.5rem" }}>
      <div style={{ background: "white", border: "1px solid var(--border)", borderRadius: "16px", padding: "1.25rem", marginBottom: "1rem" }}>
        <div style={{ fontWeight: 700, fontSize: "1rem", color: "var(--green-dark)", marginBottom: "0.75rem" }}>About {prayer.name}</div>
        <p style={{ fontSize: "0.95rem", lineHeight: 1.7, color: "var(--text)", marginBottom: "1rem" }}>{prayer.description}</p>
        <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
          <span style={{ background: "#f0fdf4", border: "1px solid #bbf7d0", color: "var(--green-dark)", borderRadius: "20px", padding: "0.25rem 0.85rem", fontSize: "0.82rem", fontWeight: 600 }}>
            🕐 {prayer.timeDetail}
          </span>
          <span style={{ background: "#f0fdf4", border: "1px solid #bbf7d0", color: "var(--green-dark)", borderRadius: "20px", padding: "0.25rem 0.85rem", fontSize: "0.82rem", fontWeight: 600 }}>
            🔁 {prayer.rakaat} rakaat
          </span>
        </div>
      </div>

      <div style={{ background: "#fffbf0", border: "1px solid #f0d97a", borderRadius: "16px", padding: "1.25rem", marginBottom: "1rem" }}>
        <div style={{ fontWeight: 700, fontSize: "0.95rem", color: "#78350f", marginBottom: "0.75rem" }}>What to expect</div>
        <ul style={{ paddingLeft: "1.2rem", display: "flex", flexDirection: "column", gap: "0.5rem" }}>
          {prayer.whatToExpect.map((item, i) => (
            <li key={i} style={{ fontSize: "0.9rem", color: "#4a3700", lineHeight: 1.6 }}>{item}</li>
          ))}
        </ul>
      </div>

      <div style={{ background: "#f0fdf4", border: "1px solid #bbf7d0", borderRadius: "16px", padding: "1.25rem" }}>
        <div style={{ fontWeight: 700, fontSize: "0.95rem", color: "var(--green-dark)", marginBottom: "0.5rem" }}>Why it matters</div>
        <p style={{ fontSize: "0.9rem", color: "#166534", lineHeight: 1.6 }}>{prayer.importance}</p>
      </div>
    </div>
  );
}

export default function PrayerGuide({ prayer, navigate }) {
  const [activeRakah, setActiveRakah] = useState(0);
  const [showSteps, setShowSteps] = useState(false);

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
        <button className="back-btn" onClick={() => navigate("home")}>← Back</button>

        <PrayerInfo prayer={prayer} />

        {!showSteps ? (
          <button
            onClick={() => setShowSteps(true)}
            style={{
              width: "100%",
              padding: "1rem",
              background: "linear-gradient(135deg, var(--green-dark), var(--green))",
              color: "white",
              border: "none",
              borderRadius: "14px",
              fontSize: "1rem",
              fontWeight: 700,
              cursor: "pointer",
              boxShadow: "0 4px 14px rgba(45,106,79,0.35)",
              transition: "transform 0.15s, box-shadow 0.15s",
            }}
            onMouseOver={e => e.currentTarget.style.transform = "translateY(-2px)"}
            onMouseOut={e => e.currentTarget.style.transform = "translateY(0)"}
          >
            Start Step-by-Step Guide →
          </button>
        ) : (
          <>
            <div style={{ fontWeight: 700, fontSize: "1.1rem", color: "var(--green-dark)", marginBottom: "1rem", borderTop: "2px solid var(--border)", paddingTop: "1.25rem" }}>
              Step-by-Step Guide
            </div>

            {/* Rakah pill switcher */}
            <div style={{
              display: "flex",
              gap: "0.5rem",
              marginBottom: "1.5rem",
              flexWrap: "wrap",
            }}>
              {structure.map((r, i) => (
                <button
                  key={i}
                  onClick={() => { setActiveRakah(i); window.scrollTo(0, 0); }}
                  style={{
                    border: "none",
                    borderRadius: "30px",
                    padding: "0.5rem 1.1rem",
                    fontSize: "0.88rem",
                    fontWeight: 600,
                    cursor: "pointer",
                    transition: "all 0.18s",
                    background: activeRakah === i
                      ? "linear-gradient(135deg, var(--green-dark), var(--green))"
                      : "white",
                    color: activeRakah === i ? "white" : "var(--text-muted)",
                    border: activeRakah === i ? "none" : "1.5px solid var(--border)",
                    boxShadow: activeRakah === i ? "0 3px 10px rgba(45,106,79,0.3)" : "none",
                  }}
                >
                  {r.label}
                </button>
              ))}
            </div>

            {structure[activeRakah].steps.map((stepId, idx) => {
              const step = stepMap[stepId];
              if (!step) return null;
              return <StepCard key={stepId + idx} step={step} index={idx} />;
            })}

            {activeRakah < structure.length - 1 ? (
              <button
                onClick={() => { setActiveRakah(activeRakah + 1); window.scrollTo(0, 0); }}
                style={{
                  width: "100%",
                  padding: "1rem",
                  background: "linear-gradient(135deg, var(--green-dark), var(--green))",
                  color: "white",
                  border: "none",
                  borderRadius: "14px",
                  fontSize: "1rem",
                  fontWeight: 700,
                  cursor: "pointer",
                  boxShadow: "0 4px 14px rgba(45,106,79,0.35)",
                  marginTop: "0.5rem",
                }}
              >
                Next: {structure[activeRakah + 1].label} →
              </button>
            ) : (
              <div style={{
                textAlign: "center",
                padding: "2rem",
                background: "linear-gradient(135deg, #f0fdf4, #dcfce7)",
                borderRadius: "16px",
                border: "1px solid #bbf7d0",
                marginTop: "0.5rem",
              }}>
                <div style={{ fontSize: "2.5rem" }}>🎉</div>
                <div style={{ fontWeight: 700, color: "var(--green-dark)", marginTop: "0.75rem", fontSize: "1.1rem" }}>Prayer complete!</div>
                <div style={{ color: "var(--text-muted)", fontSize: "0.9rem", marginTop: "0.25rem" }}>May Allah accept your prayer.</div>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}
