import { useState } from "react";
import Home from "./pages/Home";
import PrayerGuide from "./pages/PrayerGuide";
import WuduGuide from "./pages/WuduGuide";
import PrayerTimes from "./pages/PrayerTimes";
import QiblaFinder from "./pages/QiblaFinder";
import Nav from "./components/Nav";
import "./App.css";

export default function App() {
  const [page, setPage] = useState("home");
  const [selectedPrayer, setSelectedPrayer] = useState(null);

  function navigate(p, extra) {
    setPage(p);
    if (extra?.prayer) setSelectedPrayer(extra.prayer);
    window.scrollTo(0, 0);
  }

  return (
    <div className="app">
      <Nav page={page} navigate={navigate} />
      <main className="main-content">
        {page === "home" && <Home navigate={navigate} />}
        {page === "prayer" && <PrayerGuide prayer={selectedPrayer} navigate={navigate} />}
        {page === "wudu" && <WuduGuide />}
        {page === "times" && <PrayerTimes />}
        {page === "qibla" && <QiblaFinder />}
      </main>
    </div>
  );
}
