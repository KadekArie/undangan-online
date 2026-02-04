import { useMemo } from "react";
import { eventDate } from "../../data/event_data";
import { splitTime } from "../../utils/timeToCountdown";
import useCountdown from "./hooks/useCountdown";
import { AnimatePresence, motion } from "motion/react";

export default function CountdownTimer() {
  const secondLeft = useCountdown(eventDate);

  const { days, hours, minutes, seconds } = useMemo(
    () => splitTime(secondLeft),
    [secondLeft],
  );

  return (
    <div className="grid grid-cols-4 *:*:font-semibold *:*:text-2xl md:*:*:text-4xl *:*:last:text-base *:*:last:opacity-70 ">
      <div className="flex flex-col items-center ">
        <div className="relative h-[1em] w-[2ch] overflow-hidden">
          <AnimatePresence mode="popLayout">
            <motion.span
              key={days}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="absolute inset-0 flex items-center justify-center"
            >
              {days}
            </motion.span>
          </AnimatePresence>
        </div>
        <span className="mt-4">Hari</span>
      </div>
      <div className="flex flex-col items-center">
        <div className="flex tabular-nums">
          <AnimatedDigit value={Math.floor(hours / 10)} />
          <AnimatedDigit value={hours % 10} />
        </div>
        <span className="mt-4">Jam</span>
      </div>
      <div className="flex flex-col items-center">
        <div className="flex tabular-nums">
          <AnimatedDigit value={Math.floor(minutes / 10)} />
          <AnimatedDigit value={minutes % 10} />
        </div>
        <span className="mt-4">Menit</span>
      </div>
      <div className="flex flex-col items-center">
        <div className="flex tabular-nums">
          <AnimatedDigit value={Math.floor(seconds / 10)} />
          <AnimatedDigit value={seconds % 10} />
        </div>
        <span className="mt-4">Detik</span>
      </div>
    </div>
  );
}

function AnimatedDigit({ value }: { value: number }) {
  return (
    <div className="relative h-[1em] w-[1ch] overflow-hidden">
      <AnimatePresence mode="popLayout">
        <motion.span
          key={value}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -20, opacity: 0 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          className="absolute inset-0 flex items-center justify-center"
        >
          {value}
        </motion.span>
      </AnimatePresence>
    </div>
  );
}
