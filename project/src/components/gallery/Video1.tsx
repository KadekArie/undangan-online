import { useEffect, useRef, useState } from "react";

export default function SimpleVideoPlayer() {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [_, setIsPlaying] = useState(false);

  // autoplay when visible
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play();
          setIsPlaying(true);
        } else {
          video.pause();
          setIsPlaying(false);
        }
      },
      { threshold: 0.7 }, // 50% visible
    );

    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="relative w-full max-w-md mx-auto">
      <video
        ref={videoRef}
        src="https://mp6lxaoirvtsew3h.public.blob.vercel-storage.com/video.mp4"
        controls
        playsInline
        muted
        className="w-full rounded-lg"
      />
    </div>
  );
}
