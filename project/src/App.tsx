import BukuTamuSection from "./components/BukuTamuSection";
import FooterSection from "./components/FooterSection";
import EventDetailSection from "./components/EventDetailSection";
import HeroSection from "./components/HeroSection";
import MainSection from "./components/MainSection";
import EnvelopeOverlay from "./components/EnvelopeOverlay";
import { useEffect, useState } from "react";
import SimpleMusicPlayer from "./components/MusicPlayer";
import LinkGenerator from "./components/LinkGenerator";
import { BrowserRouter, Route, Routes } from "react-router";

function App() {
  useEffect(() => {
    setTimeout(() => window.scrollTo(0, 0), 0);
  }, []);

  const [musicPlaying, setMusicPlaying] = useState(false);
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <SimpleMusicPlayer
                playing={musicPlaying}
                togglePlaying={() => setMusicPlaying((p) => !p)}
              />
              <EnvelopeOverlay onOpened={() => setMusicPlaying(true)} />
              <HeroSection />
              <MainSection />
              <EventDetailSection />
              <BukuTamuSection />
              <FooterSection />
            </>
          }
        />
        <Route path="/generate" element={<LinkGenerator />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
