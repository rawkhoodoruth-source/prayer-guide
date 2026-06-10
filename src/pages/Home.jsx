import { PRAYERS } from "../data/prayers";

const PRAYER_ICONS = { fajr: "🌄", dhuhr: "☀️", asr: "🌤️", maghrib: "🌅", isha: "🌙" };

export default function Home({ navigate }) {
  return (
    <div>
      <div className="page-header">
        <div className="arabic-title">بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ</div>
        <h1>Islamic Prayer Guide</h1>
        <p>A step-by-step guide to the 5 daily prayers</p>
      </div>

      <div className="container">
        <div className="section-label">The 5 Daily Prayers</div>
        <div className="home-grid">
          {PRAYERS.map((p) => (
            <button
              key={p.id}
              className="home-card"
              onClick={() => navigate("prayer", { prayer: p })}
            >
              <div className="card-icon">{PRAYER_ICONS[p.id]}</div>
              <div className="card-name">{p.name}</div>
              <div className="card-arabic">{p.arabic}</div>
              <div className="card-meta">{p.rakaat} rakaat · {p.time}</div>
            </button>
          ))}
        </div>

        <div className="section-label" style={{ marginTop: "2rem" }}>Learn & Tools</div>
        <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
          <button className="feature-card" onClick={() => navigate("wudu")}>
            <span className="feature-icon">💧</span>
            <div>
              <h3>Wudu (Ablution)</h3>
              <p>How to purify yourself before prayer — step by step</p>
            </div>
          </button>
          <button className="feature-card" onClick={() => navigate("times")}>
            <span className="feature-icon">🕰️</span>
            <div>
              <h3>Prayer Times</h3>
              <p>Today's prayer times based on your location</p>
            </div>
          </button>
          <button className="feature-card" onClick={() => navigate("qibla")}>
            <span className="feature-icon">🧭</span>
            <div>
              <h3>Qibla Direction</h3>
              <p>Find the direction of Mecca from where you are</p>
            </div>
          </button>
        </div>

        <div style={{ marginTop: "2rem", padding: "1rem", background: "#f0fdf4", borderRadius: "12px", border: "1px solid #bbf7d0", fontSize: "0.9rem", color: "#166534" }}>
          <strong>Tip for beginners:</strong> Start with learning Wudu, then try Fajr (the shortest prayer with 2 rakaat). Take your time — it's normal to need many weeks of practice.
        </div>
      </div>
    </div>
  );
}
