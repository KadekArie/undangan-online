import { useMemo } from "react";
import { eventDate } from "../../data/event_data";
import { splitTime } from "../../utils/timeToCountdown";
import useCountdown from "./hooks/useCountdown";

export default function CountdownTimer() {
  const secondLeft = useCountdown(eventDate);

  const { days, hours, minutes, seconds } = useMemo(
    () => splitTime(secondLeft),
    [secondLeft],
  );

  return (
    <div className="grid grid-cols-4 *:*:font-semibold *:*:text-2xl md:*:*:text-4xl *:*:last:text-base *:*:last:opacity-70 ">
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
  );
}
