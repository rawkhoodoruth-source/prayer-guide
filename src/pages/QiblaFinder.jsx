import { useState } from "react";

const MECCA = { lat: 21.4225, lon: 39.8262 };

function toRad(deg) { return (deg * Math.PI) / 180; }
function toDeg(rad) { return (rad * 180) / Math.PI; }

function calcQibla(lat, lon) {
  const dLon = toRad(MECCA.lon - lon);
  const latRad = toRad(lat);
  const meccaLatRad = toRad(MECCA.lat);
  const x = Math.sin(dLon) * Math.cos(meccaLatRad);
  const y = Math.cos(latRad) * Math.sin(meccaLatRad) - Math.sin(latRad) * Math.cos(meccaLatRad) * Math.cos(dLon);
  return (toDeg(Math.atan2(x, y)) + 360) % 360;
}

function calcDistance(lat, lon) {
  const R = 6371;
  const dLat = toRad(MECCA.lat - lat);
  const dLon = toRad(MECCA.lon - lon);
  const a = Math.sin(dLat / 2) ** 2 + Math.cos(toRad(lat)) * Math.cos(toRad(MECCA.lat)) * Math.sin(dLon / 2) ** 2;
  return Math.round(R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a)));
}

export default function QiblaFinder() {
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  function find() {
    setError(null);
    setLoading(true);
    if (!navigator.geolocation) {
      setError("Geolocation not supported.");
      setLoading(false);
      return;
    }
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const { latitude, longitude } = pos.coords;
        const angle = calcQibla(latitude, longitude);
        const dist = calcDistance(latitude, longitude);
        setResult({ angle, dist, lat: latitude, lon: longitude });
        setLoading(false);
      },
      () => {
        setError("Location access denied. Please allow location access.");
        setLoading(false);
      }
    );
  }

  const cardinalLabel = (angle) => {
    const dirs = ["N","NE","E","SE","S","SW","W","NW"];
    return dirs[Math.round(angle / 45) % 8];
  };

  return (
    <div>
      <div className="page-header">
        <div style={{ fontFamily: "var(--arabic-font)", fontSize: "2rem", color: "var(--gold-light)", marginBottom: "0.5rem" }}>القِبْلَة</div>
        <h1>🧭 Qibla Direction</h1>
        <p>Find the direction of the Kaaba in Mecca</p>
      </div>

      <div className="container">
        {!result && !loading && (
          <div style={{ textAlign: "center", padding: "2rem" }}>
            <div style={{ fontSize: "4rem", marginBottom: "1rem" }}>🕋</div>
            <p style={{ color: "var(--text-muted)", marginBottom: "1.5rem" }}>
              Allow location access to calculate the direction of Mecca from where you are.
            </p>
            <button className="btn btn-primary" onClick={find}>Find Qibla Direction</button>
          </div>
        )}

        {loading && <div className="loading">📍 Finding your location…</div>}

        {error && (
          <div className="error-box" style={{ marginBottom: "1rem" }}>
            {error}
            <br />
            <button className="btn btn-ghost" style={{ marginTop: "0.5rem" }} onClick={find}>Try again</button>
          </div>
        )}

        {result && (
          <div className="compass-wrap">
            <div style={{ textAlign: "center" }}>
              <div style={{ fontSize: "2.5rem", fontWeight: 700, color: "var(--green-dark)" }}>
                {Math.round(result.angle)}°
              </div>
              <div style={{ color: "var(--text-muted)" }}>
                {cardinalLabel(result.angle)} from North
              </div>
            </div>

            <div className="compass-ring">
              {/* Cardinal directions */}
              {[["N","top"], ["E","right"], ["S","bottom"], ["W","left"]].map(([d, pos]) => (
                <div key={d} style={{
                  position: "absolute",
                  [pos]: "8px",
                  left: pos === "left" || pos === "right" ? undefined : "50%",
                  top: pos === "top" || pos === "bottom" ? undefined : "50%",
                  transform: pos === "left" || pos === "right" ? "translateY(-50%)" : "translateX(-50%)",
                  fontWeight: 700,
                  fontSize: "0.85rem",
                  color: d === "N" ? "#e74c3c" : "var(--green-dark)",
                }}>
                  {d}
                </div>
              ))}

              {/* Kaaba */}
              <div style={{ position: "absolute", fontSize: "1.6rem", opacity: 0.15 }}>🕋</div>

              {/* Needle pointing to qibla */}
              <div
                className="compass-needle"
                style={{ transform: `rotate(${result.angle}deg)` }}
              />
            </div>

            <div style={{ textAlign: "center" }}>
              <div style={{ fontWeight: 600, color: "var(--green)" }}>🕋 Kaaba · Mecca</div>
              <div style={{ color: "var(--text-muted)", fontSize: "0.9rem" }}>{result.dist.toLocaleString()} km away</div>
            </div>

            <div style={{ background: "#f5f9f6", border: "1px solid var(--border)", borderRadius: "12px", padding: "1rem", fontSize: "0.85rem", color: "var(--text-muted)", textAlign: "center", maxWidth: "320px" }}>
              Face <strong>{Math.round(result.angle)}° ({cardinalLabel(result.angle)})</strong> from North to face the Qibla. Use your phone's compass app and turn until you reach that angle.
            </div>

            <button className="btn btn-ghost" onClick={find}>↺ Recalculate</button>
          </div>
        )}

        <div style={{ marginTop: "1.5rem", padding: "1rem", background: "#f0fdf4", borderRadius: "12px", border: "1px solid #bbf7d0", fontSize: "0.85rem", color: "var(--green-dark)" }}>
          <strong>Tip:</strong> For a more precise direction, use a dedicated Qibla app or ask at your local mosque. This tool gives an approximate direction based on the great-circle calculation.
        </div>
      </div>
    </div>
  );
}
