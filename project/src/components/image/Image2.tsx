import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import img2 from "../../assets/puri-pejeng-alt.jpeg";
import { faClose, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

import { AnimateSharedLayout, motion } from "motion/react";

export default function Image2() {
  const [fullscreen, setFullscreen] = useState(false);

  const fullScreenClass =
    "fixed top-[50%] -translate-y-[50%] left-0 right-0 px-8 z-1000 bg-black/60";
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
      {fullscreen ? (
        <motion.div
          className={`${fullScreenClass} h-full flex flex-col justify-center gap-4`}
        >
          <motion.img
            layoutId="image-2"
            src={img2}
            alt="Puri Pejeng"
            className={`w-full object-cover rounded-3xl aspect-square md:aspect-video bg-contain`}
          />
          <button
            className="cursor-pointer"
            onClick={() => setFullscreen(false)}
          >
            <FontAwesomeIcon icon={faClose} className="text-3xl text-white" />
          </button>
        </motion.div>
      ) : null}
    </AnimateSharedLayout>
  );
}
