import BukuTamuSection from "./components/BukuTamuSection";
import EventDetailSection from "./components/EventDetailSection";
import HeroSection from "./components/HeroSection";
import MainSection from "./components/MainSection";

function App() {
  return (
    <>
      <HeroSection/>
      <MainSection/>
      <EventDetailSection/>
      {/* Berisi countdown timer dan buku tamu (komentar / ucapan) */}
      <BukuTamuSection/>
    </>
  );
}

export default App;
