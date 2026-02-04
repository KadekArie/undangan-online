import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
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
        <ul
          id="contacts"
          className="flex flex-wrap px-32 justify-center items-center gap-4"
        >
          <ContactItem href="mailto:kadekarie43@gmail.com">
            <FontAwesomeIcon icon={faEnvelope} />
          </ContactItem>
          <ContactItem href="https://wa.me/6282237917395">
            <FontAwesomeIcon icon={faWhatsapp} />
          </ContactItem>
        </ul>
        <p className="text-sm md:text-md text-center mt-8">
          © 2026 crafted by Theerlan & Arie, all rights reserved.
          <br />
          Contact us for inquiry.
        </p>
      </section>
    </>
  );
}

function ContactItem({
  children,
  href,
}: React.PropsWithChildren<{ href: string }>) {
  return (
    <li className="hover:scale-[110%] hover:rotate-3 transition-transform text-3xl">
      <a href={href}>{children}</a>
    </li>
  );
}
