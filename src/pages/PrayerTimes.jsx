import { useState, useEffect } from "react";

const PRAYER_NAMES = [
  { key: "Fajr", arabic: "الفجر", icon: "🌄" },
  { key: "Sunrise", arabic: "الشروق", icon: "🌅" },
  { key: "Dhuhr", arabic: "الظهر", icon: "☀️" },
  { key: "Asr", arabic: "العصر", icon: "🌤️" },
  { key: "Maghrib", arabic: "المغرب", icon: "🌆" },
  { key: "Isha", arabic: "العشاء", icon: "🌙" },
];

function formatTime(timeStr) {
  if (!timeStr) return "--:--";
  const [h, m] = timeStr.split(":");
  const date = new Date();
  date.setHours(Number(h), Number(m), 0);
  return date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
}

function getCurrentPrayer(times) {
  if (!times) return null;
  const now = new Date();
  const mins = now.getHours() * 60 + now.getMinutes();
  const order = ["Fajr", "Sunrise", "Dhuhr", "Asr", "Maghrib", "Isha"];
  let current = null;
  for (const key of order) {
    if (!times[key]) continue;
    const [h, m] = times[key].split(":");
    const t = Number(h) * 60 + Number(m);
    if (mins >= t) current = key;
  }
  return current;
}

export default function PrayerTimes() {
  const [times, setTimes] = useState(null);
  const [location, setLocation] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  function fetchTimes(lat, lon) {
    setLoading(true);
    const today = new Date();
    const d = today.getDate();
    const m = today.getMonth() + 1;
    const y = today.getFullYear();
    fetch(`https://api.aladhan.com/v1/timings/${d}-${m}-${y}?latitude=${lat}&longitude=${lon}&method=2`)
      .then((r) => r.json())
      .then((data) => {
        if (data.code === 200) {
          setTimes(data.data.timings);
        } else {
          setError("Could not load prayer times.");
        }
        setLoading(false);
      })
      .catch(() => {
        setError("Network error. Please check your connection.");
        setLoading(false);
      });
  }

  function getLocation() {
    setError(null);
    setLoading(true);
    if (!navigator.geolocation) {
      setError("Geolocation is not supported by your browser.");
      setLoading(false);
      return;
    }
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const { latitude, longitude } = pos.coords;
        setLocation({ lat: latitude, lon: longitude });
        fetchTimes(latitude, longitude);
      },
      () => {
        setError("Location access denied. Please allow location access and try again.");
        setLoading(false);
      }
    );
  }

  const currentPrayer = getCurrentPrayer(times);

  return (
    <div>
      <div className="page-header">
        <h1>🕰️ Prayer Times</h1>
        <p>Today's prayer times based on your location</p>
      </div>

      <div className="container">
        {!times && !loading && (
          <div style={{ textAlign: "center", padding: "2rem" }}>
            <div style={{ fontSize: "3rem", marginBottom: "1rem" }}>📍</div>
            <p style={{ color: "var(--text-muted)", marginBottom: "1.5rem" }}>
              We need your location to calculate accurate prayer times.
            </p>
            <button className="btn btn-primary" onClick={getLocation}>
              Get My Prayer Times
            </button>
          </div>
        )}

        {loading && <div className="loading">⏳ Fetching prayer times…</div>}

        {error && (
          <div className="error-box" style={{ marginBottom: "1rem" }}>
            {error}
            <br />
            <button className="btn btn-ghost" style={{ marginTop: "0.5rem" }} onClick={getLocation}>Try again</button>
          </div>
        )}

        {times && (
          <>
            <div style={{ marginBottom: "1rem", fontSize: "0.85rem", color: "var(--text-muted)" }}>
              📍 {location ? `${location.lat.toFixed(2)}°, ${location.lon.toFixed(2)}°` : ""} · {new Date().toLocaleDateString([], { weekday: "long", year: "numeric", month: "long", day: "numeric" })}
            </div>

            {PRAYER_NAMES.map(({ key, arabic, icon }) => (
              <div key={key} className={`prayer-time-card${currentPrayer === key ? " current" : ""}`}>
                <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                  <span style={{ fontSize: "1.5rem" }}>{icon}</span>
                  <div>
                    <div style={{ fontWeight: 600 }}>{key}</div>
                    <div style={{ fontFamily: "var(--arabic-font)", fontSize: "1rem", color: "var(--green)" }}>{arabic}</div>
                  </div>
                </div>
                <div style={{ textAlign: "right" }}>
                  <div style={{ fontWeight: 700, fontSize: "1.1rem" }}>{formatTime(times[key])}</div>
                  {currentPrayer === key && <div style={{ fontSize: "0.75rem", color: "var(--green)", fontWeight: 600 }}>● Now</div>}
                </div>
              </div>
            ))}

            <button className="btn btn-ghost" style={{ marginTop: "1rem" }} onClick={getLocation}>
              ↺ Refresh
            </button>
          </>
        )}

        <div style={{ marginTop: "1.5rem", padding: "1rem", background: "#f0fdf4", borderRadius: "12px", border: "1px solid #bbf7d0", fontSize: "0.85rem", color: "var(--green-dark)" }}>
          <strong>Calculation method:</strong> ISNA (Islamic Society of North America). Times may vary slightly depending on your madhab or local mosque. Always verify with your local Islamic center.
        </div>
      </div>
    </div>
  );
}
