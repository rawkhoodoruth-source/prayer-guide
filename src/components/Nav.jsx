export default function Nav({ page, navigate }) {
  const links = [
    { id: "wudu", label: "Wudu" },
    { id: "times", label: "Times" },
    { id: "qibla", label: "Qibla" },
  ];

  return (
    <nav className="nav">
      <button className="nav-brand" onClick={() => navigate("home")}>
        🕌 Prayer Guide
      </button>
      <div className="nav-links">
        {links.map((l) => (
          <button
            key={l.id}
            className={`nav-btn${page === l.id ? " active" : ""}`}
            onClick={() => navigate(l.id)}
          >
            {l.label}
          </button>
        ))}
      </div>
    </nav>
  );
}
