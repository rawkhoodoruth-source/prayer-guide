import { PRAYERS } from "../data/prayers";

const PRAYER_ICONS = { fajr: "🌄", dhuhr: "☀️", asr: "🌤️", maghrib: "🌅", isha: "🌙" };

function Section({ title, children }) {
  return (
    <div style={{ marginBottom: "2rem" }}>
      <div style={{
        fontWeight: 700,
        fontSize: "1.2rem",
        color: "var(--green-dark)",
        marginBottom: "0.75rem",
        display: "flex",
        alignItems: "center",
        gap: "0.5rem",
      }}>
        {title}
      </div>
      {children}
    </div>
  );
}

export default function Home({ navigate }) {
  return (
    <div>
      {/* Hero */}
      <div style={{
        background: "linear-gradient(160deg, var(--green-dark) 0%, var(--green) 60%, #40916c 100%)",
        color: "white",
        padding: "3rem 1.5rem 2.5rem",
        textAlign: "center",
      }}>
        <div style={{ fontFamily: "var(--arabic-font)", fontSize: "2.2rem", color: "var(--gold-light)", marginBottom: "0.75rem" }}>
          الصَّلَاة
        </div>
        <h1 style={{ fontSize: "2rem", fontWeight: 800, marginBottom: "0.75rem" }}>
          Islamic Prayer Guide
        </h1>
        <p style={{ opacity: 0.9, fontSize: "1rem", maxWidth: "480px", margin: "0 auto 1.5rem", lineHeight: 1.6 }}>
          A beginner-friendly guide to the 5 daily prayers — with step-by-step instructions, Arabic recitations, and illustrations.
        </p>
        <button
          className="btn"
          style={{ background: "var(--gold)", color: "#1a1a1a", fontWeight: 700, fontSize: "1rem", padding: "0.75rem 1.75rem" }}
          onClick={() => navigate("prayer", { prayer: PRAYERS[0] })}
        >
          Start with Fajr →
        </button>
      </div>

      <div className="container">

        {/* What is Salah */}
        <Section title="🕌 What is Salah?">
          <div style={{ background: "white", border: "1px solid var(--border)", borderRadius: "14px", padding: "1.25rem" }}>
            <p style={{ fontSize: "0.95rem", lineHeight: 1.8, color: "var(--text)", marginBottom: "1rem" }}>
              <strong>Salah</strong> (also spelled Salat) is the Arabic word for prayer. It is the second pillar of Islam — one of the five core acts that every Muslim is called to practice. Salah is not just a ritual; it is a direct, personal conversation between you and Allah (God).
            </p>
            <p style={{ fontSize: "0.95rem", lineHeight: 1.8, color: "var(--text)", marginBottom: "1rem" }}>
              Unlike casual supplication (du'a), which you can say at any time in any language, Salah follows a specific structure: standing, bowing, prostrating, and sitting — each paired with Arabic words of praise, gratitude, and surrender to Allah.
            </p>
            <p style={{ fontSize: "0.95rem", lineHeight: 1.8, color: "var(--text)" }}>
              The word <em>Salah</em> comes from a root meaning <em>connection</em>. That is exactly what it is — five moments each day where you pause everything and reconnect with your Creator.
            </p>
          </div>
        </Section>

        {/* Why 5 times */}
        <Section title="⏰ Why 5 Times a Day?">
          <div style={{ background: "white", border: "1px solid var(--border)", borderRadius: "14px", padding: "1.25rem" }}>
            <p style={{ fontSize: "0.95rem", lineHeight: 1.8, color: "var(--text)", marginBottom: "1rem" }}>
              The five daily prayers were made obligatory during the Prophet Muhammad's (peace be upon him) miraculous night journey to the heavens, known as <strong>Al-Isra wal-Mi'raj</strong>. Allah originally commanded 50 prayers a day, which were reduced to 5 — yet they carry the reward of 50.
            </p>
            <p style={{ fontSize: "0.95rem", lineHeight: 1.8, color: "var(--text)", marginBottom: "1rem" }}>
              The five prayers are spaced throughout the day so that no more than a few hours pass without remembering Allah. This rhythm keeps your heart grounded, your intentions checked, and your day full of meaning.
            </p>
            <div style={{
              background: "#f0fdf4",
              border: "1px solid #bbf7d0",
              borderRadius: "10px",
              padding: "1rem",
              fontStyle: "italic",
              color: "var(--green-dark)",
              fontSize: "0.9rem",
              lineHeight: 1.7,
            }}>
              "Indeed, prayer has been decreed upon the believers a decree of specified times."
              <div style={{ marginTop: "0.4rem", fontWeight: 600, fontStyle: "normal" }}>— Quran 4:103</div>
            </div>
          </div>
        </Section>

        {/* Before you pray */}
        <Section title="💧 Before You Pray: Wudu">
          <div style={{
            background: "#eff6ff",
            border: "1px solid #bfdbfe",
            borderRadius: "14px",
            padding: "1.25rem",
            display: "flex",
            gap: "1rem",
            alignItems: "flex-start",
          }}>
            <span style={{ fontSize: "2.5rem", flexShrink: 0 }}>💧</span>
            <div>
              <p style={{ fontSize: "0.95rem", lineHeight: 1.7, color: "#1e3a5f", marginBottom: "0.75rem" }}>
                Before praying, you must perform <strong>Wudu</strong> — a ritual washing that purifies you for prayer. It involves washing your hands, mouth, nose, face, arms, wiping your head and ears, and washing your feet.
              </p>
              <p style={{ fontSize: "0.95rem", lineHeight: 1.7, color: "#1e3a5f", marginBottom: "0.75rem" }}>
                Wudu is broken by using the toilet, passing gas, sleeping, or losing consciousness. If none of those happened since your last Wudu, you do not need to repeat it.
              </p>
              <button
                className="btn btn-outline"
                style={{ borderColor: "#2563eb", color: "#2563eb", fontSize: "0.9rem" }}
                onClick={() => navigate("wudu")}
              >
                Learn Wudu step by step →
              </button>
            </div>
          </div>
        </Section>

        {/* Video */}
        <Section title="🎬 Recommended Video">
          <div style={{
            background: "white",
            border: "1px solid var(--border)",
            borderRadius: "14px",
            padding: "1.25rem",
            display: "flex",
            gap: "1rem",
            alignItems: "center",
          }}>
            <div style={{
              width: 72,
              height: 72,
              borderRadius: "12px",
              background: "#ff0000",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0,
            }}>
              <svg width="32" height="32" viewBox="0 0 24 24" fill="white">
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
            <div>
              <div style={{ fontWeight: 700, color: "var(--green-dark)", marginBottom: "0.25rem" }}>
                How to Pray Salah — for Beginners
              </div>
              <p style={{ fontSize: "0.85rem", color: "var(--text-muted)", marginBottom: "0.75rem", lineHeight: 1.5 }}>
                Search YouTube for beginner-friendly video tutorials showing the full prayer with movements and recitations.
              </p>
              <a
                href="https://www.youtube.com/results?search_query=how+to+pray+salah+for+beginners"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
                style={{ fontSize: "0.9rem", textDecoration: "none" }}
              >
                Search on YouTube →
              </a>
            </div>
          </div>
        </Section>

        {/* The 5 prayers */}
        <Section title="🕌 The 5 Daily Prayers">
          <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
            {PRAYERS.map((p) => (
              <button
                key={p.id}
                className="feature-card"
                onClick={() => navigate("prayer", { prayer: p })}
                style={{ alignItems: "flex-start" }}
              >
                <span className="feature-icon" style={{ fontSize: "2.2rem", minWidth: 40 }}>{PRAYER_ICONS[p.id]}</span>
                <div style={{ flex: 1, textAlign: "left" }}>
                  <div style={{ display: "flex", alignItems: "baseline", gap: "0.5rem", flexWrap: "wrap" }}>
                    <span style={{ fontWeight: 700, fontSize: "1.05rem", color: "var(--green-dark)" }}>{p.name}</span>
                    <span style={{ fontFamily: "var(--arabic-font)", fontSize: "1.1rem", color: "var(--green)" }}>{p.arabic}</span>
                    <span style={{ fontSize: "0.8rem", color: "var(--text-muted)" }}>{p.rakaat} rakaat</span>
                  </div>
                  <div style={{ fontSize: "0.82rem", color: "var(--text-muted)", marginBottom: "0.25rem" }}>
                    {p.timeDetail}
                  </div>
                  <div style={{ fontSize: "0.875rem", color: "var(--text)", lineHeight: 1.5 }}>
                    {p.description.slice(0, 110)}…
                  </div>
                </div>
              </button>
            ))}
          </div>
        </Section>

        {/* Tools */}
        <Section title="🛠️ Tools">
          <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
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
        </Section>

        {/* Beginner tip */}
        <div style={{ padding: "1.25rem", background: "#fffbf0", borderRadius: "14px", border: "1px solid #f0d97a", fontSize: "0.9rem", color: "#78350f", lineHeight: 1.7 }}>
          <strong>New to prayer?</strong> Start by learning Wudu, then watch a video to see how the movements flow. Next, try <strong>Fajr</strong> — it's only 2 rakaat and is the perfect first prayer to memorize. Don't worry about being perfect right away. Allah sees the effort.
        </div>
      </div>
    </div>
  );
}
