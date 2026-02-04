import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import img2 from "../../assets/puri-pejeng-alt.jpeg";
import { faClose, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

import { AnimateSharedLayout, motion } from "motion/react";

export default function Image2() {
  const [fullscreen, setFullscreen] = useState(false);

  const defaultClass = "relative z-100";

  return (
    <AnimateSharedLayout>
      <motion.div
        className={`${defaultClass} w-full aspect-square md:aspect-video overflow-hidden rounded-3xl "shadow-inner`}
      >
        <motion.img
          layoutId="image-2"
          src={img2}
          alt="Puri Pejeng"
          className={`w-full h-full object-cover rounded-3xl bg-contain`}
        />
        <button
          onClick={() => setFullscreen(true)}
          className="opacity-0 hover:opacity-80 transition-all absolute top-0 left-0 bg-black/60 text-white w-full h-full flex flex-col items-center justify-center gap-4 text-2xl"
        >
          <FontAwesomeIcon icon={faMagnifyingGlass} />
          <span className="text-lg">Klik untuk melihat gambar lebih besar</span>
        </button>
      </motion.div>
      {fullscreen && (
        <motion.div className="fixed inset-0 z-10000 bg-black/60 flex items-center justify-center">
          <motion.img
            layoutId="image-2"
            src={img2}
            alt="Puri Pejeng"
            className="
        max-w-[90vw]
        max-h-[85vh]
        object-contain
        rounded-3xl
      "
          />

          <button
            onClick={() => setFullscreen(false)}
            className="absolute top-6 right-6 text-white"
          >
            <FontAwesomeIcon icon={faClose} className="text-3xl" />
          </button>
        </motion.div>
      )}
    </AnimateSharedLayout>
  );
}
