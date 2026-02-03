import bg from "../assets/comment-section-bg.jpeg";
import CommentContainer from "./comments/CommentContainer";

export default function BukuTamuSection() {
  return (
    <section
      id="buku-tamu"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
      }}
      className="px-64 py-32 flex flex-col items-center gap-8"
    >
      <h1 className="text-4xl text-shadow-400">Buku Tamu</h1>
      <p className="italic text-black/60">
        Ucapkan sesuatu untuk hari bahagia kami...
      </p>
      <CommentContainer />
    </section>
  );
}
