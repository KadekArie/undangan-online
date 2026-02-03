const MapEmbed = () => {
  return (
    <iframe
      width="100%"
      height="650px"
      frameBorder={0}
      style={{ border: 0 }}
      src="https://www.google.com/maps/embed/v1/place?key=AIzaSyB2NIWI3Tv9iDPrlnowr_0ZqZWoAQydKJU&q=8%C2%B030'43.1%22S%20115%C2%B017'27.8%22E&maptype=roadmap"
      allowFullScreen
    ></iframe>
  );
};

export default function EventDetailSection() {
  return (
    <section id="event_detail">
      <MapEmbed />
    </section>
  );
}
