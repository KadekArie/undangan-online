import { useMemo } from "react";
import { eventDate } from "../data/event_data";
import useCountdown from "./countdown/hooks/useCountdown";
import { splitTime } from "../utils/timeToCountdown";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";

export default function FooterSection() {
  const secondLeft = useCountdown(eventDate);

  const { days, hours, minutes, seconds } = useMemo(
    () => splitTime(secondLeft),
    [secondLeft],
  );

  return (
    <section
      id="countdown"
      className="px-4 md:px-16 xl:px-64 py-16 xl:py-24 bg-shadow-400 text-white "
    >
      <h1 className="font-heading text-5xl text-center text-shadow-50 leading-6">
        Sampai jumpa di hari bahagia kami
      </h1>
      <div className="grid grid-cols-4 my-12 mb-24 *:*:font-semibold *:*:text-xl *:*:last:text-sm *:*:last:opacity-70 ">
        <div className="flex flex-col items-center ">
          <span>{days}</span>
          <span>Hari</span>
        </div>
        <div className="flex flex-col items-center">
          <span>{hours}</span>
          <span>Jam</span>
        </div>
        <div className="flex flex-col items-center">
          <span>{minutes}</span>
          <span>Menit</span>
        </div>
        <div className="flex flex-col items-center">
          <span>{seconds}</span>
          <span>Detik</span>
        </div>
      </div>

      <div id="contacts" className="flex justify-center items-center gap-4">
        <a href="emailto:kadekarie43@gmail.com">
          <FontAwesomeIcon icon={faEnvelope} className="text-3xl" />
        </a>
      </div>
      <p className="text-sm md:text-md text-center mt-8">
        © 2026 crafted by Theerlan & Arie, all rights reserved.
        <br />
        Email us for inquiry.
      </p>
    </section>
  );
}
