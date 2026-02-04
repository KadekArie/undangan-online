import mainImg from "../assets/om-swastiastu.png";

import Image1 from "./gallery/Image1";
import Image2 from "./gallery/Image2";
import AnimateOnScreen from "./utils/AnimateOnScreen";

export default function MainSection() {
  return (
    <section className="py-16 px-4 bg-linear-to-b from-white to-shadow-50">
      <div className="max-w-4xl mx-auto text-center relative z-10 mb-5">
        <AnimateOnScreen className="flex justify-center mb-6 items-center">
          <img
            src={mainImg}
            alt="Om Swastyastu"
            className="px-56 max-w-full max-h-full object-contain"
          />
        </AnimateOnScreen>
        <AnimateOnScreen>
          <h2 className="text-sm text-shadow-600 md:text-xs max-w-2xl mx-auto leading-relaxed px-4 mb-10 font-serif italic">
            Atas Asung Kertha Wara Nugraha Ida Sang Hyang Widhi Wasa/ Tuhan Yang
            Maha Esa, kami bermaksud mengundang Bapak/ Ibu/ Saudara/ i pada
            Upacara Dewa Yadnya Melaspas
          </h2>
        </AnimateOnScreen>

        <div className="flex justify-center mb-6">
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
        </div>
        <AnimateOnScreen>
          <h3 className="text-shadow-500 font-serif tracking-[0.3em] uppercase text-sm md:text-base mb-2">
            Br. Puseh
          </h3>
          <h4 className="text-shadow-600 font-serif text-2xl md:text-3xl mb-8">
            Desa Pejeng, Tampaksiring Gianyar
          </h4>
        </AnimateOnScreen>
        <AnimateOnScreen>
          <div className="flex flex-col lg:flex-row gap-8">
            <Image1 />
            <Image2 />
          </div>
        </AnimateOnScreen>
        <p className="text-shadow-600 font-serif text-2xl md:text-3xl mt-8">
          Puri Pejeng
        </p>
      </div>
    </section>
  );
}
