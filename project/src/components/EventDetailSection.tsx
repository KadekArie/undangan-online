import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar, faClock } from "@fortawesome/free-regular-svg-icons";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import bg from "../assets/bg-floe.png";

const MapEmbed = () => {
  return (
    <iframe
      width="100%"
      height="100%"
      frameBorder={0}
      style={{ border: 0 }}
      src="https://www.google.com/maps/embed/v1/place?key=AIzaSyB2NIWI3Tv9iDPrlnowr_0ZqZWoAQydKJU&q=8%C2%B030'43.1%22S%20115%C2%B017'27.8%22E&maptype=roadmap"
      allowFullScreen
    ></iframe>
  );
};

export default function EventDetailSection() {
  return (
    <section
      id="event_detail"
      className=""
      style={{
        backgroundImage: `url(${bg})`,
        backgroundRepeat: "repeat-y",
        backgroundSize: "contain",
      }}
    >
      <div className="px-4 md:px-16 lg:px-24 xl:px-64 py-18 xl:py-24 bg-linear-to-b from-shadow-50 from-5% via-shadow-100/80 to-shadow-50 to-95% flex flex-col gap-4">
        <h1 className="font-heading text-4xl md:text-5xl text-shadow-400 text-center">
          Acara kami
        </h1>
        <p className=" text-center italic opacity-70 text-sm">
          Merupakan suatu kehormatan dan kebahagiaan bagi kami, apabila
          Bapak/Ibu/Saudara/i berkenan hadir untuk memberikan doa restu kepada
          kami pada:
        </p>
        <div className="grid grid-cols-2 gap-4 w-full">
          <div className="flex flex-col items-center p-4 md:p-8 border border-shadow-200 bg-white rounded-md text-shadow-300">
            <FontAwesomeIcon icon={faCalendar} className="text-3xl mb-4" />
            <h2 className="font-semibold text-md lg:text-xl">MINGGU</h2>
            <p className="text-black/60 text-sm text-center">
              15 Februari 2026
            </p>
          </div>
          <div className="flex flex-col items-center p-4 md:p-8 border border-shadow-200 bg-white rounded-md text-shadow-300">
            <FontAwesomeIcon icon={faClock} className="text-3xl mb-4" />
            <h2 className="font-semibold text-center text-md lg:text-xl">
              10.00 WITA
            </h2>
            <p className="text-black/60 text-sm">s/d Selesai</p>
          </div>
          <div className="overflow-hidden flex flex-col items-center col-span-2 border border-shadow-200 bg-white rounded-md text-shadow-300">
            <FontAwesomeIcon
              icon={faLocationDot}
              className="text-3xl mt-8 mx-8 mb-4"
            />
            <h2 className="font-semibold text-md lg:text-xl mt-0 m-8">
              <a
                className="underline underline-offset-2"
                href="https://www.google.com/maps/place/8%C2%B030'43.1%22S+115%C2%B017'27.8%22E/@-8.5119905,115.2909556,19.04z/data=!4m4!3m3!8m2!3d-8.5119722!4d115.2910556?hl=en-US&entry=ttu&g_ep=EgoyMDI2MDEyOC4wIKXMDSoKLDEwMDc5MjA3M0gBUAM%3D"
              >
                Puri Pejeng Gianyar
              </a>
            </h2>
            <div className="w-full h-128 border-t border-shadow-200 overflow-hidden">
              <MapEmbed />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
