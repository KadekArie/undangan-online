import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar, faClock } from "@fortawesome/free-regular-svg-icons";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import bg from "../assets/bg-floe.png";
import AnimateOnScreen from "./utils/AnimateOnScreen";
import Video1 from "./gallery/Video1";

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
      className="bg-linear-to-b from-shadow-50 from-5% via-white to-shadow-50 to-95%"
    >
      <div
        className=""
        style={{
          backgroundImage: `url(${bg})`,
          backgroundRepeat: "repeat-y",
          backgroundSize: "contain",
        }}
      >
        <div className="px-4 md:px-16 lg:px-24 xl:px-64 py-18 pt-32 xl:py-24 flex flex-col gap-8 bg-linear-to-b from-shadow-50 from-1% via-white/80 to-shadow-50 to-99%">
          <div className="flex justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 640 640"
              fill="#9a8958"
              className="w-13 h-13"
            >
              <path d="M535.3 70.7C541.7 64.6 551 62.4 559.6 65.2C569.4 68.5 576 77.7 576 88L576 274.9C576 406.1 467.9 512 337.2 512C260.2 512 193.8 462.5 169.7 393.3C134.3 424.1 112 469.4 112 520C112 533.3 101.3 544 88 544C74.7 544 64 533.3 64 520C64 445.1 102.2 379.1 160.1 340.3C195.4 316.7 237.5 304 280 304L360 304C373.3 304 384 293.3 384 280C384 266.7 373.3 256 360 256L280 256C240.3 256 202.7 264.8 169 280.5C192.3 210.5 258.2 160 336 160C402.4 160 451.8 137.9 484.7 116C503.9 103.2 520.2 87.9 535.4 70.7z" />
            </svg>
          </div>
          <AnimateOnScreen className="flex flex-col items-center gap-8">
            <h1 className="font-heading text-4xl md:text-5xl text-shadow-400 text-center">
              Acara kami
            </h1>
            <p className=" text-center text-shadow-700 font-serif italic opacity-70 text-sm">
              Merupakan suatu kehormatan dan kebahagiaan bagi kami, apabila
              Bapak/Ibu/Saudara/i berkenan hadir untuk memberikan doa restu
              kepada kami pada:
            </p>
          </AnimateOnScreen>
          <div className="grid grid-cols-2 gap-4 w-full">
            <AnimateOnScreen>
              <div className="flex flex-col items-center p-4 md:p-8 border border-shadow-200 bg-white rounded-md text-shadow-300">
                <FontAwesomeIcon icon={faCalendar} className="text-3xl mb-4" />
                <h2 className="font-semibold text-md lg:text-xl">MINGGU</h2>
                <p className="text-black/60 text-sm text-center">
                  15 Februari 2026
                </p>
              </div>
            </AnimateOnScreen>
            <AnimateOnScreen>
              <div className="flex flex-col items-center p-4 md:p-8 border border-shadow-200 bg-white rounded-md text-shadow-300">
                <FontAwesomeIcon icon={faClock} className="text-3xl mb-4" />
                <h2 className="font-semibold text-center text-md lg:text-xl">
                  09.00 WITA
                </h2>
                <p className="text-black/60 text-sm">s/d Selesai</p>
              </div>
            </AnimateOnScreen>
            <AnimateOnScreen className="col-span-2">
              <div className="overflow-hidden flex flex-col items-center border border-shadow-200 bg-white rounded-md text-shadow-300">
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
            </AnimateOnScreen>
          </div>
          <div className="mt-8">
            <AnimateOnScreen>
              <Video1 />
            </AnimateOnScreen>
          </div>
        </div>
      </div>
    </section>
  );
}
