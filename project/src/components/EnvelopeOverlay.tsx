import { useEffect, useState } from "react";
import omImg from "../assets/om.png";
import { motion } from "motion/react";

export default function EnvelopeOverlay({
  onOpened = () => {},
}: {
  onOpened?: () => void;
}) {
  const [opened, setOpened] = useState(false);

  const params = new URLSearchParams(window.location.search);

  useEffect(() => {
    if (opened) {
      document.documentElement.style.overflow = "scroll";
      onOpened();
    }
  }, [opened]);

  return (
    <>
      <motion.section
        animate={{
          translateY: opened ? "-100%" : 0,
        }}
        transition={{
          ease: "easeInOut",
          duration: 1,
        }}
        id="envelope"
        className="fixed w-screen z-1000 top-0 grid grid-cols-1 grid-rows-[1fr_1fr_2fr_1fr] gap-8 py-12 h-screen place-items-center bg-shadow-50 text-shadow-500 font-serif"
      >
        <h1 className="text-4xl md:text-6xl lg:text-7xl items-center justify-center text-center">
          Undangan
        </h1>
        <div className="flex justify-center items-center">
          <img src={omImg} className="max-w-[60%]" />
        </div>
        <div className="h-full flex flex-col gap-8 items-center justify-start">
          <span className="text-2xl text-center">
            Kepada Bapak/Ibu/Saudara/i
          </span>
          <span className="text-4xl text-center">{params.get("to")}</span>
          <span className="italic text-center">
            Mohon maaf apabila ada kesalahan penulisan nama/gelar
          </span>
        </div>
        <button
          className="bg-shadow-500 text-shadow-50 text-lg p-2 px-3 rounded-xl cursor-pointer"
          onClick={() => setOpened(true)}
        >
          Buka Undangan
        </button>
      </motion.section>
    </>
  );
}
