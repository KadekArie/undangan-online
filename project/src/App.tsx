import BukuTamuSection from "./components/BukuTamuSection";
import EventDetailSection from "./components/EventDetailSection";

function App() {
  return (
    <>
      <EventDetailSection />
      {/* Berisi countdown timer dan buku tamu (komentar / ucapan) */}
      <BukuTamuSection />
    </>
  );
}

export default App;
