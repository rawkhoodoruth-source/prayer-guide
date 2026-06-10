import { WUDU_STEPS } from "../data/prayers";

export default function WuduGuide() {
  return (
    <div>
      <div className="page-header">
        <div className="arabic-title">الوُضُوء</div>
        <h1>💧 Wudu (Ablution)</h1>
        <p>Purification required before prayer</p>
      </div>

      <div className="container">
        <div style={{ background: "#eff6ff", border: "1px solid #bfdbfe", borderRadius: "12px", padding: "1rem", marginBottom: "1.5rem", fontSize: "0.9rem", color: "#1e40af" }}>
          <strong>Why wudu?</strong> Wudu is a ritual purification that prepares you spiritually and physically for prayer. It must be performed before each prayer unless your wudu was not broken.
        </div>

        {WUDU_STEPS.map((step, i) => (
          <div key={step.id} className="wudu-step">
            <div className="wudu-num">{i + 1}</div>
            <div style={{ flex: 1 }}>
              <div style={{ fontWeight: 600, marginBottom: "0.25rem" }}>{step.title}</div>
              {step.arabic && (
                <div style={{ marginBottom: "0.25rem" }}>
                  <span className="arabic" style={{ fontSize: "1.2rem" }}>{step.arabic}</span>
                  {step.transliteration && <span style={{ fontSize: "0.85rem", color: "var(--text-muted)", marginLeft: "0.5rem", fontStyle: "italic" }}>({step.transliteration})</span>}
                  {step.translation && <div style={{ fontSize: "0.85rem", color: "var(--text-muted)" }}>{step.translation}</div>}
                </div>
              )}
              <div style={{ fontSize: "0.9rem", color: "var(--text-muted)" }}>{step.description}</div>
              {step.times && (
                <span className="wudu-times">×{step.times}</span>
              )}
            </div>
          </div>
        ))}

        <div style={{ marginTop: "1.5rem", padding: "1rem", background: "#fff7ed", borderRadius: "12px", border: "1px solid #fed7aa", fontSize: "0.9rem", color: "#7c2d12" }}>
          <strong>What breaks wudu?</strong> Using the toilet, passing gas, sleeping, losing consciousness, or bleeding. If any of these happen, you must perform wudu again before the next prayer.
        </div>
      </div>
    </div>
  );
}
