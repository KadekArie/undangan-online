const MapEmbed = () => {
  return (
    <iframe
      width="100%"
      height="650px"
      frameBorder={0}
      style={{ border: 0 }}
      src="https://www.google.com/maps/embed/v1/place?key=AIzaSyB2NIWI3Tv9iDPrlnowr_0ZqZWoAQydKJU&q=8%C2%B030'43.1%22S%20115%C2%B017'27.8%22E&maptype=roadmap"
      allowFullScreen
    ></iframe>
  );
};

export default function EventDetailSection() {
  return (
    <section className="py-20 px-4 bg-[#f9f9f9]">
      <div className="max-w-3xl mx-auto text-center mb-12 px-4">
        <p className="text-shadow-500 italic text-xs md:text-sm leading-relaxed mb-4">
          "Dengan ini (Yadnya), kami berbakti kepada Hyang Widhi dan dengan ini pula Hyang Widhi memelihara dan mengasihi kamu. Dengan saling memelihara satu sama lain, kamu akan mencapai kebaikan yang maha tinggi."
        </p>
        <p className="text-shadow-600 font-bold text-[10px] md:text-xs tracking-widest uppercase">
          (BHAGAVAD GITA 3:11)
        </p>
      </div>

      {/* Kartu Utama Acara */}
      <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-lg border border-gray-100 p-6 md:p-12 relative overflow-hidden">
        
        {/* Ikon Daun Emas */}
        <div className="flex justify-center mb-4">
          <div className="w-12 h-12 flex items-center justify-center">
            <svg 
                xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 640 640"
                fill="#9a8958"
                className="w-full h-full"
            >
                <path d="M535.3 70.7C541.7 64.6 551 62.4 559.6 65.2C569.4 68.5 576 77.7 576 88L576 274.9C576 406.1 467.9 512 337.2 512C260.2 512 193.8 462.5 169.7 393.3C134.3 424.1 112 469.4 112 520C112 533.3 101.3 544 88 544C74.7 544 64 533.3 64 520C64 445.1 102.2 379.1 160.1 340.3C195.4 316.7 237.5 304 280 304L360 304C373.3 304 384 293.3 384 280C384 266.7 373.3 256 360 256L280 256C240.3 256 202.7 264.8 169 280.5C192.3 210.5 258.2 160 336 160C402.4 160 451.8 137.9 484.7 116C503.9 103.2 520.2 87.9 535.4 70.7z"/>
            </svg>
          </div>
        </div>

        <h2 className="text-shadow-600 font-serif text-3xl md:text-4xl text-center mb-4">
          Acara Kami
        </h2>
        <p className="text-shadow-500 text-xs md:text-sm text-center mb-10 max-w-xl mx-auto italic">
          Merupakan suatu kehormatan dan kebahagiaan bagi kami, apabila Bapak/Ibu/Saudara/i berkenan hadir untuk memberikan doa restu kepada kami pada :
        </p>

        {/* Grid Waktu & Tanggal */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          {/* Tanggal */}
          <div className="border border-shadow-200 rounded-2xl p-6 text-center bg-white">
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  viewBox="0 0 448 512" 
                  className="w-8 h-8 mx-auto" 
                  fill="#9a8958"
                  >
                  <path d="M128 0C110.3 0 96 14.3 96 32l0 32-32 0C28.7 64 0 92.7 0 128l0 48 448 0 0-48c0-35.3-28.7-64-64-64l-32 0 0-32c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 32-128 0 0-32c0-17.7-14.3-32-32-32zM0 224L0 416c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-192-448 0z"/>
                </svg>
             <p className="text-shadow-500 font-bold text-sm tracking-widest">MINGGU</p>
             <p className="text-shadow-600 font-serif text-lg">15 Februari 2026</p>
          </div>

          {/* Jam */}
          <div className="border border-shadow-200 rounded-2xl p-6 text-center bg-white">
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 512 512" 
                className="w-8 h-8 mx-auto" 
                fill="#9a8958"
                >
                <path d="M256 0a256 256 0 1 1 0 512 256 256 0 1 1 0-512zM232 120l0 136c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2 280 120c0-13.3-10.7-24-24-24s-24 10.7-24 24z"/>
              </svg>
             <p className="text-shadow-500 font-bold text-sm tracking-widest">10.00 WITA</p>
             <p className="text-shadow-600 font-serif text-lg">s/d Selesai</p>
          </div>
        </div>
        <MapEmbed/>
        <div className="mt-6 text-center">
          <a href="https://maps.app.goo.gl/tkjTBZiaKrdZq6MR8" target="_blank" rel="noopener noreferrer" className="relative inline-block text-shadow-500 font-serif text-sm tracking-wide group">
            Puri Pejeng Gianyar
            <span className="absolute left-0 bottom-[-4px] w-0 h-[1px] bg-shadow-500 transition-all duration-500 ease-in-out group-hover:w-full"></span>
          </a>
        </div>
      </div>
    </section>
  );
}
