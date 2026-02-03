import bg from "../assets/comment-section-bg.jpeg";
import CommentContainer from "./comments/CommentContainer";
import leaves from "../assets/leaves.png";

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
        <img src={leaves} />
        <h1 className="text-5xl text-shadow-400 font-heading ">Buku Tamu</h1>
        <p className="italic text-black/60">
          Ucapkan sesuatu untuk hari bahagia kami...
        </p>
        <CommentContainer />
      </div>
    </section>
  );
}
