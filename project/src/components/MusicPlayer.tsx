import { faPause, faPlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useRef } from "react";

export default function SimpleMusicPlayer({
  playing,
  togglePlaying,
}: {
  playing: boolean;
  togglePlaying: () => void;
}) {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    if (!audioRef.current) return;

    audioRef.current.volume = 0.4;

    if (playing) {
      audioRef.current.play().catch(() => {});
    } else {
      audioRef.current.pause();
    }
  }, [playing]);

  return (
    <>
      {/* Audio element */}
      <audio ref={audioRef} src="/music.mp3" preload="auto" loop />

      {/* Fixed control button */}
      <button
        onClick={() => togglePlaying()}
        className="
          fixed z-100
          bottom-6 right-6
          flex items-center justify-center
          w-14 h-14
          rounded-full
          bg-shadow-50/90 text-shadow-500
          border-2 border-shadow-500
          shadow-lg
          hover:bg-shadow-100
          transition
        "
        aria-label={playing ? "Pause music" : "Play music"}
      >
        <FontAwesomeIcon
          icon={playing ? faPause : faPlay}
          className="text-xl"
        />
      </button>
    </>
  );
}
