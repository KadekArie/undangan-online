import BukuTamuSection from "./components/BukuTamuSection";
import FooterSection from "./components/FooterSection";
import EventDetailSection from "./components/EventDetailSection";
import HeroSection from "./components/HeroSection";
import MainSection from "./components/MainSection";
import EnvelopeOverlay from "./components/EnvelopeOverlay";
import { useEffect, useState } from "react";
import SimpleMusicPlayer from "./components/MusicPlayer";
import LinkGenerator from "./components/LinkGenerator"

function App() {
  useEffect(() => {
    setTimeout(() => window.scrollTo(0, 0), 0);
  }, []);

  const [musicPlaying, setMusicPlaying] = useState(false);

  const isGeneratorPage = window.location.pathname === "/generate";

  if (isGeneratorPage) {
    return <LinkGenerator />;
  }

  return (
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
  );
}

export default App;