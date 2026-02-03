import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import CountdownTimer from "./countdown/CountdownTimer";

export default function FooterSection() {
  return (
    <>
      <section
        id="countdown"
        className="px-4 md:px-16 xl:px-64 py-24 xl:py-36 bg-shadow-400 text-white "
      >
        <h1 className="mb-24 font-heading text-5xl text-center text-shadow-50 leading-6">
          Sampai jumpa di hari bahagia kami
        </h1>
        <CountdownTimer />
      </section>
      <section id="footer" className="py-16 pb-8 bg-black text-white">
        <div id="contacts" className="flex justify-center items-center gap-4">
          <a
            href="emailto:kadekarie43@gmail.com"
            className="hover:scale-[110%] hover:rotate-3 transition-transform"
          >
            <FontAwesomeIcon icon={faEnvelope} className="text-3xl" />
          </a>
        </div>
        <p className="text-sm md:text-md text-center mt-8">
          © 2026 crafted by Theerlan & Arie, all rights reserved.
          <br />
          Email us for inquiry.
        </p>
      </section>
    </>
  );
}
