import bg from "../assets/comment-section-bg.jpeg";
import CommentContainer from "./comments/CommentContainer";
import AnimateOnScreen from "./utils/AnimateOnScreen";

export default function BukuTamuSection() {
  return (
    <section
      id="buku-tamu"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
      }}
      className=""
    >
      <div className="px-4 md:px-16 xl:px-64 py-18 xl:py-24 flex flex-col items-center gap-8 bg-linear-to-b from-shadow-50 to-white/70 to-20%">
        <AnimateOnScreen className="flex flex-col items-center gap-8">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 640 640"
            fill="#9a8958"
            className="w-13 h-13"
          >
            <path d="M535.3 70.7C541.7 64.6 551 62.4 559.6 65.2C569.4 68.5 576 77.7 576 88L576 274.9C576 406.1 467.9 512 337.2 512C260.2 512 193.8 462.5 169.7 393.3C134.3 424.1 112 469.4 112 520C112 533.3 101.3 544 88 544C74.7 544 64 533.3 64 520C64 445.1 102.2 379.1 160.1 340.3C195.4 316.7 237.5 304 280 304L360 304C373.3 304 384 293.3 384 280C384 266.7 373.3 256 360 256L280 256C240.3 256 202.7 264.8 169 280.5C192.3 210.5 258.2 160 336 160C402.4 160 451.8 137.9 484.7 116C503.9 103.2 520.2 87.9 535.4 70.7z" />
          </svg>
          <h1 className="text-5xl text-shadow-400 font-heading ">Buku Tamu</h1>
          <p className="italic text-shadow-500  font-serif text-sm">
            Ucapkan sesuatu untuk hari bahagia kami...
          </p>
        </AnimateOnScreen>
        <CommentContainer />
      </div>
    </section>
  );
}
